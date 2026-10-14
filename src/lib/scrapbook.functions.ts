import { createServerFn } from "@tanstack/react-start";

// Only explicitly published photo rows may receive public viewing links.
export const readScrapbookPhotos = createServerFn({ method: "GET" }).handler(async () => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin.from("scrapbook_photos").select("id,path,caption,category,created_at").order("created_at");
  if (error) throw new Error("The extra photos couldn't be opened. Please try again.");
  const photos = await Promise.all((data ?? []).map(async (p) => {
    const { data: link, error: linkError } = await supabaseAdmin.storage.from("scrapbook-photos").createSignedUrl(p.path, 3600);
    if (linkError || !link) return null;
    return { id: p.id, src: link.signedUrl, caption: p.caption, category: p.category };
  }));
  return photos.filter((p): p is NonNullable<typeof p> => p !== null);
});