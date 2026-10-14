<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep photo collections in the client-only photo scrapbook using react-pageflip, with content sourced from the shared content module, so page-turning replaces scrolling photo grids without changing the other birthday sections.
- Store curated media as CDN asset pointers and keep editable captions in the shared content module so the photo library stays lightweight.
- Gate phone uploads through verified owner membership and storage RLS; issue public viewing links only for saved scrapbook photo rows so private bucket contents stay inaccessible.
- Keep new emotional interactions in a dedicated section with copy in shared content so other birthday sections stay unchanged.
