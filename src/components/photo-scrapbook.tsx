import { forwardRef, useEffect, useRef, useState, type ReactNode } from "react";
import HTMLFlipBook from "react-pageflip";
import type { PageFlip } from "page-flip";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content as c } from "@/content";

const BookPage = forwardRef<HTMLDivElement, { children: ReactNode; cover?: boolean }>(
  function BookPage({ children, cover = false }, ref) {
    return <div ref={ref} data-density={cover ? "hard" : "soft"} className={`scrapbook-page ${cover ? "scrapbook-cover" : ""}`}>{children}</div>;
  },
);

function BookPhoto({ src, caption }: { src: string; caption: string }) {
  const [missing, setMissing] = useState(false);
  return (
    <figure className="book-polaroid">
      <div className="washi absolute -top-2 left-1/2 z-10 h-5 w-16 -translate-x-1/2 -rotate-3 bg-sage" />
      {missing ? <div className="book-photo grid place-items-center bg-clay text-ink/40"><div className="text-center"><span className="text-3xl text-earth/50">✿</span><p className="font-hand text-xl">photo coming soon</p></div></div> : <img src={src} alt={caption} onError={() => setMissing(true)} className="book-photo object-cover" draggable={false} />}
      <figcaption className="mt-3 text-center font-hand text-2xl leading-tight text-ink">{caption}</figcaption>
    </figure>
  );
}

export default function PhotoScrapbook() {
  const ref = useRef<{ pageFlip: () => PageFlip }>(null);
  const [page, setPage] = useState(0);
  const [portrait, setPortrait] = useState(true);
  const [ready, setReady] = useState(false);
  const [turning, setTurning] = useState(false);
  const reduced = useRef(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { reduced.current = media.matches; };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  const photos = [
    ...c.childhood.photos.map((p) => ({ ...p, chapter: c.childhood.title })),
    ...(c.morePhotos?.photos ?? []).map((p) => ({ ...p, chapter: c.morePhotos?.title ?? c.childhood.title })),
    ...c.gallery.map((p) => ({ ...p, chapter: "You & me" })),
  ];
  const total = photos.length + 2;
  const last = page >= total - (portrait ? 1 : 2);
  const turn = (direction: "previous" | "next") => {
    const book = ref.current?.pageFlip();
    if (!book || turning) return;
    if (reduced.current) direction === "next" ? book.turnToNextPage() : book.turnToPrevPage();
    else direction === "next" ? book.flipNext() : book.flipPrev();
  };
  return (
    <div className="scrapbook" role="group" aria-label="Photo scrapbook" tabIndex={0} onKeyDown={(e) => {
      if (e.key === "ArrowRight" && !last) { e.preventDefault(); turn("next"); }
      if (e.key === "ArrowLeft" && page > 0) { e.preventDefault(); turn("previous"); }
    }}>
      <div className="scrapbook-stage">
        <HTMLFlipBook ref={ref} width={340} height={490} size="stretch" minWidth={260} maxWidth={380} minHeight={375} maxHeight={548}
          startPage={0} drawShadow flippingTime={750} usePortrait startZIndex={10} autoSize maxShadowOpacity={0.18}
          showCover mobileScrollSupport clickEventForward useMouseEvents swipeDistance={30} showPageCorners disableFlipByClick={false}
          className="scrapbook-engine" style={{}}
          onInit={() => { setReady(true); setPortrait(ref.current?.pageFlip().getOrientation() === "portrait"); }}
          onFlip={(event) => setPage(Number(event.data))}
          onChangeOrientation={(event) => setPortrait(event.data === "portrait")}
          onChangeState={(event) => setTurning(event.data !== "read")}
        >
          <BookPage cover>
            <div className="flex h-full flex-col items-center justify-center px-8 text-center">
              <span className="mb-8 font-hand text-2xl text-sage">a little book of</span>
              <h3 className="font-display text-4xl leading-tight text-ink">Every version<br />of you</h3>
              <span className="my-8 text-5xl text-earth">♡</span>
              <p className="font-hand text-2xl text-ink/70">{c.his} · chapter {c.age}</p>
              <p className="mt-4 font-hand text-xl text-sage">with love, {c.her}</p>
            </div>
          </BookPage>
          {photos.map((p, i) => (
            <BookPage key={p.src}>
              <div className="flex h-full flex-col px-6 py-5">
                <p className="mb-5 font-hand text-xl text-earth">{p.chapter}</p>
                <BookPhoto src={p.src} caption={p.caption} />
                <span className="mt-auto pt-4 text-center font-hand text-lg text-ink/40">{i + 1} · ♡</span>
              </div>
            </BookPage>
          ))}
          <BookPage cover>
            <div className="flex h-full flex-col items-center justify-center px-8 text-center">
              <span className="mb-8 text-4xl text-earth">✿</span>
              <p className="font-display text-3xl leading-snug">So many pages.<br />My same favourite person.</p>
              <p className="mt-8 font-hand text-2xl text-sage">And so many more memories<br />still waiting for us.</p>
              <p className="mt-10 font-hand text-xl text-earth">{c.his} & {c.her}</p>
            </div>
          </BookPage>
        </HTMLFlipBook>
      </div>
      <div className="mx-auto mt-6 flex max-w-xs items-center justify-between gap-5">
        <Button variant="outline" size="icon" className="size-11 rounded-full" aria-label="Previous scrapbook page" title="Previous page" disabled={!ready || page === 0 || turning} onClick={() => turn("previous")}><ChevronLeft /></Button>
        <p className="font-hand text-xl text-ink/60" role="status" aria-live="polite">{page === 0 ? "the cover" : last ? "with love, always" : `${page} / ${photos.length}`}</p>
        <Button variant="outline" size="icon" className="size-11 rounded-full" aria-label="Next scrapbook page" title="Next page" disabled={!ready || last || turning} onClick={() => turn("next")}><ChevronRight /></Button>
      </div>
    </div>
  );
}