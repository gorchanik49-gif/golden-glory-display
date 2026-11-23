# Production performance optimization

## Audit findings
- The live homepage immediately transfers a 4.06 MB MP4 and a 465 KB logo rendered at 76 px; the first banner can also load near the initial viewport.
- The four banner PNGs are 1.8–2.1 MB each. The JavaScript and CSS are already split and compressed, with about 122 KB and 14 KB transferred respectively.
- Live responses already gzip HTML, cache fingerprinted assets for a year, and use no-cache for HTML. No Supabase calls were seen; only a small analytics event request was observed.
- No real-visitor vitals or page-view readings were available for the last seven days, so user-experience improvements must be validated with browser measurements, not claimed from field data.

## Changes
- Add high-quality WebP versions of the four banners and a 256 px lossless WebP logo, then use them in the existing pages while retaining original images.
- Load the homepage video sources only when the video is substantially in view; prefer the smaller WebM source and keep MP4 fallback, controls, poster, and autoplay.
- Preserve all content, routes, design, and contact behavior. Do not alter hosting, caching, or compression settings that already work.

## Verification
- Check image/video network transfers and rendering on desktop and mobile, and confirm deferred video still plays when viewed.
- Run existing route tests and verify build/runtime signals and all four page titles.
- Keep the published site unchanged until the verified preview is ready to publish.

## Technical details
- Use imported local WebP assets so the existing build emits fingerprinted, cacheable files; original sources remain available.
- Use an IntersectionObserver in the homepage video section rather than changing server behavior or adding a package.