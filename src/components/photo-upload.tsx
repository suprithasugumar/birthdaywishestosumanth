import { useState, type FormEvent } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Camera, LogOut, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";

export function PhotoUpload() {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [owner, setOwner] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState("childhood");

  async function checkOwner() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;
    const { data } = await supabase.from("scrapbook_owners").select("user_id").eq("user_id", user.id).maybeSingle();
    setOwner(data?.user_id ?? null);
    if (!data) setMessage("Only Supritha can add photos to this gift.");
    return Boolean(data);
  }
  async function signIn() {
    setBusy(true); setMessage("");
    try {
      const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
      if (result.error) throw result.error;
      await checkOwner();
    } catch { setMessage("Sign-in didn't finish. Please try again."); }
    finally { setBusy(false); }
  }
  async function upload(event: FormEvent) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    if (!owner || !file || !caption.trim()) return;
    if (!/image\/(jpeg|png|webp)/.test(file.type)) { setMessage("Please choose a JPG, PNG, or WebP photo. For HEIC, export it as JPG first."); return; }
    if (file.size > 10 * 1024 * 1024) { setMessage("Please choose a photo smaller than 10 MB."); return; }
    setBusy(true); setMessage("");
    const ext = file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "jpg";
    const path = `${owner}/${crypto.randomUUID()}.${ext}`;
    try {
      const { error } = await supabase.storage.from("scrapbook-photos").upload(path, file, { contentType: file.type });
      if (error) throw error;
      const { error: saveError } = await supabase.from("scrapbook_photos").insert({ user_id: owner, path, caption: caption.trim(), category });
      if (saveError) { await supabase.storage.from("scrapbook-photos").remove([path]); throw saveError; }
      await queryClient.invalidateQueries({ queryKey: ["scrapbook-photos"] });
      setCaption(""); setFile(null); setMessage("Your memory is now in the scrapbook. ♡");
      form.reset();
    } catch { setMessage("The photo couldn't be saved. Please try again."); }
    finally { setBusy(false); }
  }
  return <div className="mx-auto mt-8 max-w-sm text-center">
    <Button variant="ghost" onClick={() => { setOpen(!open); if (!open) void checkOwner(); }}><Camera />{open ? "Close photo pocket" : "Supritha’s photo pocket"}</Button>
    {open && <div className="mt-4 border-t border-sage/30 py-5 text-left">
      {!owner ? <Button variant="outline" disabled={busy} onClick={signIn}>Sign in with Google to add photos</Button> : <form onSubmit={upload} className="space-y-4">
        <label className="block text-sm">Photo<input required type="file" accept="image/jpeg,image/png,image/webp" onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="mt-2 block w-full text-sm" /></label>
        <label className="block text-sm">A little caption<input required maxLength={160} value={caption} onChange={(e) => setCaption(e.target.value)} className="mt-2 w-full rounded-md border bg-card p-3" /></label>
        <label className="block text-sm">Chapter<select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-2 w-full rounded-md border bg-card p-3"><option value="childhood">Before I knew you</option><option value="couple">You & me</option></select></label>
        <p className="text-xs text-ink/60">Added photos will be visible to everyone who opens this birthday gift.</p>
        <div className="flex flex-wrap gap-3"><Button type="submit" disabled={busy || !file}><Upload />{busy ? "Saving…" : "Add to scrapbook"}</Button><Button type="button" variant="ghost" onClick={async () => { await supabase.auth.signOut(); setOwner(null); }}><LogOut />Sign out</Button></div>
      </form>}
      {message && <p role="status" className="mt-4 text-sm text-earth">{message}</p>}
    </div>}
  </div>;
}