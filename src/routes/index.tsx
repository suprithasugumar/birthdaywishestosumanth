import { ClientOnly, createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { content as c } from "@/content";
import { SweetSurprises } from "@/components/sweet-surprises";
import { scrapbookPhotosQuery } from "@/lib/scrapbook-query";

export const Route = createFileRoute("/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(scrapbookPhotosQuery),
  head: () => ({
    meta: [
      { title: `Happy 21st, ${c.his} ♥` },
      { name: "description", content: `A little scrapbook for ${c.his}'s 21st birthday, made with love by ${c.her}.` },
      { property: "og:title", content: `Happy 21st, ${c.his} ♥` },
      { property: "og:description", content: `A birthday gift from ${c.her}. Open it slowly.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const PhotoScrapbook = lazy(() => import("@/components/photo-scrapbook"));

/* ---------- helpers ---------- */

function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [ok, setOk] = useState(true);
  return ok ? (
    <img src={src} alt={alt} loading="lazy" onError={() => setOk(false)} className={`object-cover ${className}`} />
  ) : (
    <div className={`grid place-items-center bg-clay text-center ${className}`}>
      <div>
        <div className="text-2xl text-earth/50">✿</div>
        <p className="font-hand text-lg text-ink/40">photo coming soon</p>
      </div>
    </div>
  );
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setIn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && (setIn(true), io.disconnect()), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Toast({ text, onClose }: { text: string | null; onClose: () => void }) {
  useEffect(() => {
    if (!text) return;
    const t = setTimeout(onClose, 3800);
    return () => clearTimeout(t);
  }, [text, onClose]);
  if (!text) return null;
  return (
    <div className="fixed inset-x-0 bottom-24 z-50 flex justify-center px-6 animate-in fade-in slide-in-from-bottom-4">
      <div className="page max-w-xs -rotate-1 bg-note-yellow px-5 py-4 text-center font-hand text-2xl text-ink/85">{text}</div>
    </div>
  );
}

const noteColors = ["bg-note-yellow", "bg-note-pink", "bg-note-blue", "bg-note-green"];
const tilts = ["-rotate-2", "rotate-1", "rotate-2", "-rotate-1"];

/* ---------- page ---------- */

function Index() {
  const [opened, setOpened] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [secretIdx, setSecretIdx] = useState(0);

  const showSecret = () => {
    setToast(c.secrets[secretIdx % c.secrets.length] ?? null);
    setSecretIdx((i) => i + 1);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-paper text-ink">
      {!opened && <Opening onOpen={() => setOpened(true)} />}
      <Petals />
      <MusicButton />

      {/* floating secret flowers */}
      <button aria-label="a hidden note" onClick={showSecret} className="absolute left-4 top-[110vh] z-20 text-2xl opacity-40 f-float">✿</button>
      <button aria-label="a hidden note" onClick={showSecret} className="absolute right-5 top-[230vh] z-20 text-2xl opacity-40 f-float">🌸</button>
      <button aria-label="a hidden note" onClick={showSecret} className="absolute left-6 top-[380vh] z-20 text-xl opacity-40 f-float">✨</button>

      <Hero />
      <Scrapbook />
      <Journey />
      <Reasons onDone={() => setToast("all 21 unfolded… and there are a million more 🤍")} />
      <HoldHeart onReveal={() => setToast(c.holdSecret)} />
      <Letter />
      <SweetSurprises />
      <Ending />

      <Toast text={toast} onClose={() => setToast(null)} />
    </main>
  );
}

function Opening({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const go = () => {
    setOpening(true);
    setTimeout(onOpen, 900);
  };
  return (
    <div className={`fixed inset-0 z-[60] flex flex-col items-center justify-center bg-paper px-8 transition-opacity duration-700 ${opening ? "opacity-0" : "opacity-100"}`}>
      <p className="mb-8 max-w-xs text-center font-hand text-2xl text-sage">{c.opening.line}</p>
      <button onClick={go} aria-label="Open your gift" className="group relative h-44 w-64 f-float">
        <div className="page absolute inset-0 rounded-md bg-clay" />
        <div
          className={`absolute inset-x-0 top-0 h-24 origin-top bg-sun/40 transition-transform duration-700 ${opening ? "[transform:rotateX(180deg)]" : ""}`}
          style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
        />
        <div className="absolute left-1/2 top-[5.2rem] grid size-12 -translate-x-1/2 place-items-center rounded-full bg-earth text-xl text-primary-foreground f-heart">♥</div>
        <p className="absolute inset-x-0 bottom-4 text-center font-display text-lg italic text-ink/70">for {c.his}</p>
      </button>
      <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.25em] text-ink/40">{c.opening.hint}</p>
    </div>
  );
}

function Petals() {
  const items = ["🌸", "✿", "♡", "✦", "🌸", "♡"];
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-30" aria-hidden>
      {items.map((p, i) => (
        <span key={i} className="f-petal absolute text-lg text-earth" style={{ left: `${8 + i * 16}%`, animationDuration: `${16 + i * 3}s`, animationDelay: `${-i * 4}s` }}>
          {p}
        </span>
      ))}
    </div>
  );
}

function MusicButton() {
  const ref = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(false);
  const toggle = () => {
    const a = ref.current;
    if (!a) return;
    if (on) { a.pause(); setOn(false); }
    else a.play().then(() => setOn(true)).catch(() => setOn(false));
  };
  return (
    <>
      <audio ref={ref} src={c.music} loop preload="none" />
      <button onClick={toggle} aria-label={on ? "Pause music" : "Play music"}
        className="page fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium text-ink">
        <span className={`grid size-6 place-items-center rounded-full bg-sun/30 text-earth ${on ? "f-heart" : ""}`}>♪</span>
        {on ? "playing" : "music"}
      </button>
    </>
  );
}

function SectionTitle({ hand, title }: { hand: string; title: string }) {
  return (
    <div className="relative mb-10 pt-6">
      <span className="absolute -top-1 left-0 -rotate-6 font-hand text-3xl text-sun">{hand}</span>
      <h2 className="font-display text-3xl font-bold">{title}</h2>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center p-6">
      <div className="relative w-full max-w-sm">
        <div className="page absolute inset-0 translate-x-3 translate-y-3 rotate-3 rounded-xl bg-clay" />
        <div className="page absolute inset-0 -translate-x-2 translate-y-2 -rotate-2 rounded-xl bg-sage/20" />
        <div className="page relative rounded-xl border bg-card p-8">
          <div className="mb-6 flex items-start justify-between">
            <span className="rounded-full bg-sun/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-earth">{c.opening.tag}</span>
            <span className="f-heart text-2xl text-earth">♥</span>
          </div>
          <h1 className="font-display text-5xl font-semibold leading-tight">
            Happy <br />
            <span className="italic text-earth underline decoration-sun/40 underline-offset-4">Birthday</span>, <br />
            {c.his}
          </h1>
          <p className="mt-6 font-hand text-2xl leading-snug text-sage">{c.hero.subtitle}</p>
          <div className="mt-10 flex items-center gap-4">
            <div className="relative size-14 shrink-0">
              <div className="washi absolute -left-2 -top-2 z-10 h-4 w-8 -rotate-45 bg-sage" />
              <Photo src={c.hero.photo} alt="us" className="size-full rounded-sm border-2 border-card [&_p]:text-xs" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Made by</p>
              <p className="font-hand text-2xl text-earth">{c.her}, who loves you</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center animate-bounce text-ink/25">↓ ↓ ↓</div>
        </div>
      </div>
    </section>
  );
}

function Scrapbook() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-4xl px-5 py-14" aria-labelledby="scrapbook-title">
      <div className="mb-8 text-center">
        <p className="mb-2 font-hand text-2xl text-sage">little pieces of you…</p>
        <h2 id="scrapbook-title" className="font-display text-3xl font-bold">Our scrapbook</h2>
      </div>
      <ClientOnly fallback={<div className="grid h-96 place-items-center font-hand text-xl text-sage">Opening our scrapbook…</div>}>
        <Suspense fallback={<div className="grid h-96 place-items-center font-hand text-xl text-sage">Opening our scrapbook…</div>}>
          <PhotoScrapbook />
        </Suspense>
      </ClientOnly>
      <p className="mx-auto mt-10 max-w-md text-center font-hand text-2xl leading-snug text-ink/75">{c.childhood.note}</p>
    </section>
  );
}

function Journey() {
  return (
    <section className="relative z-10 mx-auto max-w-md px-6 py-20">
      <SectionTitle hand="from hello to home" title="Friends to lovers" />
      <div className="relative ml-3 space-y-10 border-l-2 border-dashed border-sage/50 pl-8">
        {c.journey.map((j, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="relative">
              <span className={`absolute -left-[2.85rem] top-1 grid size-6 place-items-center rounded-full text-xs text-primary-foreground ${i === c.journey.length - 1 ? "bg-earth f-heart" : "bg-sage"}`}>
                {i === c.journey.length - 1 ? "♥" : i + 1}
              </span>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-earth">{j.when}</p>
              <h3 className="mt-1 font-display text-xl font-semibold">{j.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/75">{j.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mt-14 flex items-end justify-center gap-10 font-hand text-xl text-ink/60">
          <div className="text-center"><div className="mx-auto mb-1 h-16 w-3 rounded-full bg-sage/60" />him · calm</div>
          <div className="text-earth f-heart text-2xl pb-6">♥</div>
          <div className="text-center"><div className="mx-auto mb-1 h-10 w-3 rounded-full bg-earth/60" />me · chaos</div>
        </div>
      </Reveal>
    </section>
  );
}

function Reasons({ onDone }: { onDone: () => void }) {
  const [open, setOpen] = useState<Set<number>>(new Set());
  const toggle = (i: number) => {
    setOpen((s) => {
      const n = new Set(s);
      n.has(i) ? n.delete(i) : n.add(i);
      if (n.size === c.reasons.length && s.size !== c.reasons.length) onDone();
      return n;
    });
  };
  return (
    <section className="relative z-10 mx-auto max-w-md px-6 py-20">
      <SectionTitle hand="one for every year" title="21 reasons I love you" />
      <p className="-mt-6 mb-8 font-hand text-xl text-sage">tap each note to unfold it · {open.size}/21</p>
      <div className="grid grid-cols-3 gap-3">
        {c.reasons.map((r, i) => (
          <button key={i} onClick={() => toggle(i)} className={`flip aspect-square ${tilts[i % 4]} ${open.has(i) ? "on col-span-3 aspect-auto" : ""}`}>
            <div className="flip-inner relative size-full min-h-24">
              <div className={`flip-face page absolute inset-0 grid place-items-center ${noteColors[i % 4]}`}>
                <span className="font-display text-3xl font-semibold text-earth/80">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className={`flip-face flip-back page relative grid min-h-24 place-items-center p-5 ${noteColors[i % 4]}`}>
                <p className="font-hand text-2xl leading-snug text-ink/85">
                  <span className="text-earth">{i + 1}.</span> {r}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function HoldHeart({ onReveal }: { onReveal: () => void }) {
  const [p, setP] = useState(0);
  const timer = useRef<number | null>(null);
  const start = () => {
    stop();
    const t0 = Date.now();
    timer.current = window.setInterval(() => {
      const v = Math.min(1, (Date.now() - t0) / 1500);
      setP(v);
      if (v >= 1) { stop(); onReveal(); setTimeout(() => setP(0), 600); }
    }, 30);
  };
  const stop = () => { if (timer.current) clearInterval(timer.current); timer.current = null; };
  return (
    <section className="relative z-10 mx-auto max-w-md px-6 py-10 text-center">
      <button
        onPointerDown={start}
        onPointerUp={() => { stop(); setP(0); }}
        onPointerLeave={() => { stop(); setP(0); }}
        onContextMenu={(e) => e.preventDefault()}
        aria-label="Press and hold the heart"
        className="mx-auto block select-none text-earth transition-transform"
        style={{ transform: `scale(${1 + p * 0.8})` }}
      >
        <span className={`block text-6xl ${p ? "" : "f-heart"}`}>♥</span>
      </button>
      <p className="mt-4 font-hand text-xl text-ink/50">press & hold the heart…</p>
    </section>
  );
}

function Letter() {
  const [open, setOpen] = useState(false);
  const L = c.letter;
  return (
    <section className="relative z-10 mx-auto max-w-md px-6 py-20">
      <SectionTitle hand="read this slowly" title="A letter for you" />
      {!open ? (
        <Reveal>
          <button onClick={() => setOpen(true)} className="page relative mx-auto block h-52 w-full rounded-md bg-clay f-float">
            <div className="absolute inset-x-0 top-0 h-28 bg-sun/30" style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }} />
            <div className="absolute left-1/2 top-[6rem] grid size-14 -translate-x-1/2 place-items-center rounded-full bg-earth text-2xl text-primary-foreground">♥</div>
            <p className="absolute inset-x-0 bottom-5 font-hand text-2xl text-ink/70">tap to open</p>
          </button>
        </Reveal>
      ) : (
        <div className="page relative overflow-hidden border bg-card p-8 animate-in fade-in zoom-in-95 duration-700">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-earth via-sun to-sage opacity-40" />
          <h3 className="mb-5 font-display text-2xl font-bold italic text-earth">{L.greeting}</h3>
          <div className="space-y-4 font-hand text-[1.45rem] leading-snug text-ink/90">
            {L.paragraphs.map((t, i) => <p key={i}>{t}</p>)}
          </div>
          <p className="mt-8 text-right font-hand text-3xl text-earth">{L.signoff}<br />{L.name}</p>
          <div className="absolute bottom-6 left-6 flex size-14 rotate-12 items-center justify-center rounded-lg border-2 border-dashed border-sage/50 text-center">
            <span className="text-[8px] font-bold uppercase leading-tight text-sage/70">first<br />love</span>
          </div>
        </div>
      )}
    </section>
  );
}

function Ending() {
  return (
    <section className="relative z-10 mx-auto max-w-md px-6 pb-32 pt-16 text-center">
      <Reveal>
        <div className="page relative mx-auto w-56 rotate-2 bg-card p-2 pb-10">
          <div className="washi absolute -top-3 left-1/2 h-5 w-14 -translate-x-1/2 bg-earth" />
          <Photo src={c.ending.photo} alt="us" className="aspect-square w-full" />
          <p className="mt-3 font-hand text-xl">{c.his} & {c.her}</p>
        </div>
      </Reveal>
      <Reveal delay={200}>
        <h2 className="mt-14 font-display text-4xl font-semibold leading-tight">{c.ending.title}</h2>
        <p className="mt-4 font-hand text-2xl leading-snug text-ink/75">{c.ending.text}</p>
        <div className="mt-8 text-2xl text-sun">✨ 🌸 ✨</div>
        <p className="mt-6 font-hand text-xl text-ink/40">made with all my heart · {c.her}</p>
      </Reveal>
    </section>
  );
}
