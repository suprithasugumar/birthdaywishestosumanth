import { useState } from "react";
import { Heart, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content as c } from "@/content";

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
    <div className="text-center"><p className="font-hand text-2xl text-sage">a tiny piece of someday</p><h2 className="mt-2 font-display text-3xl">Meet me in our future</h2><Button variant="outline" className="mt-6" aria-expanded={dream} onClick={() => setDream(!dream)}><Mail />{dream ? "Fold our little dream" : "A promise for someday"}</Button>{dream && <p role="status" className="mt-6 border-y border-sage/30 py-7 font-hand text-2xl leading-snug animate-in fade-in">{c.surprises.dream}</p>}</div>
    <div className="text-center"><h2 className="font-display text-3xl">A hug for your pocket</h2><Button variant="ghost" aria-label="Send me a pocket hug" className="mx-auto mt-6 flex size-24 rounded-full bg-note-pink text-earth" onClick={() => setHug(!hug)}><Heart className="size-10! f-heart" /></Button>{hug && <p role="status" className="mt-6 font-hand text-2xl leading-snug animate-in fade-in">{c.surprises.hug}</p>}</div>
  </section>;
}
