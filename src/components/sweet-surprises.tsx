import { useState } from "react";
import { Heart, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content as c } from "@/content";

function Candles() {
  const [out, setOut] = useState<Set<number>>(new Set());
  const blow = (i: number) => setOut((s) => { const n = new Set(s); n.add(i); return n; });
  const done = out.size === 21;
  return (
    <div className="text-center">
      <p className="font-hand text-2xl text-sage">make a wish, birthday boy</p>
      <h2 className="mt-2 font-display text-3xl">Blow out your candles</h2>
      <p className="mx-auto mt-4 max-w-xs font-hand text-xl leading-snug text-ink/60">{c.surprises.wish.hint}</p>
      <div className="mx-auto mt-8 grid max-w-xs grid-cols-7 gap-2" role="group" aria-label={`${21 - out.size} candles still lit`}>
        {Array.from({ length: 21 }, (_, i) => (
          <button
            key={i}
            onClick={() => blow(i)}
            disabled={out.has(i)}
            aria-label={out.has(i) ? `Candle ${i + 1}, blown out` : `Blow out candle ${i + 1}`}
            className="flex flex-col items-center gap-0.5 transition-transform hover:scale-110 active:scale-95"
          >
            <span className={`text-lg leading-none transition-all duration-500 ${out.has(i) ? "scale-50 opacity-0" : "f-float"}`}>🔥</span>
            <span className={`h-8 w-2 rounded-full ${["bg-note-pink", "bg-note-blue", "bg-note-yellow", "bg-note-green"][i % 4]} border border-ink/10`} />
          </button>
        ))}
      </div>
      <p className="mt-4 font-hand text-xl text-ink/50" role="status" aria-live="polite">{done ? "" : `${out.size}/21 blown out`}</p>
      {done && <p role="status" className="mx-auto mt-2 max-w-sm border-y border-sage/30 py-6 font-hand text-2xl leading-snug animate-in fade-in zoom-in-95">{c.surprises.wish.done}</p>}
    </div>
  );
}

export function SweetSurprises() {
  const [note, setNote] = useState<number | null>(null);
  const [dream, setDream] = useState(false);
  const [hug, setHug] = useState(false);
  return <section className="relative z-10 mx-auto max-w-lg space-y-20 px-6 py-16">
    <div>
      <p className="font-hand text-2xl text-sage">a little love for every kind of day</p>
      <h2 className="mt-2 font-display text-3xl">Open when…</h2>
      <div className="mt-7 grid grid-cols-2 gap-3">{c.surprises.notes.map((n, i) => <Button key={n.title} variant="outline" aria-pressed={note === i} onClick={() => setNote(note === i ? null : i)} className="h-auto min-h-24 whitespace-normal bg-note-yellow p-4 font-hand text-xl"><Mail className="shrink-0" />{n.title}</Button>)}</div>
      {note !== null && <div className="mt-5 border-l-2 border-earth py-3 pl-5 animate-in fade-in" role="status"><p className="font-hand text-2xl leading-snug">{c.surprises.notes[note]?.text}</p><p className="mt-3 font-hand text-xl text-earth">with love, {c.her}</p></div>}
    </div>
    <Candles />
    <div className="text-center"><p className="font-hand text-2xl text-sage">a tiny piece of someday</p><h2 className="mt-2 font-display text-3xl">Meet me in our future</h2><Button variant="outline" className="mt-6" aria-expanded={dream} onClick={() => setDream(!dream)}><Mail />{dream ? "Fold our little dream" : "A promise for someday"}</Button>{dream && <p role="status" className="mt-6 border-y border-sage/30 py-7 font-hand text-2xl leading-snug animate-in fade-in">{c.surprises.dream}</p>}</div>
    <div className="text-center"><h2 className="font-display text-3xl">A hug for your pocket</h2><Button variant="ghost" aria-label="Send me a pocket hug" className="mx-auto mt-6 flex size-24 rounded-full bg-note-pink text-earth" onClick={() => setHug(!hug)}><Heart className="size-10! f-heart" /></Button>{hug && <p role="status" className="mt-6 font-hand text-2xl leading-snug animate-in fade-in">{c.surprises.hug}</p>}</div>
  </section>;
}
