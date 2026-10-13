LUZ SOMODIO — WEBSITE
=====================
One website, two pages:
  index.html           the home page (open this first — it is the root)
  featured-works.html  the Featured Works page (linked from the menu)

Folders
  css/   base.css (shared), home.css, works.css
  js/    config.js, works-data.js, common.js, home.js, works.js
  assets/ images; assets/works/ holds the featured-work images

1. SET YOUR EMAIL
   Open js/config.js and change email. Every email button and the footer
   use it (one place for both pages).

2. ADD A NEW FEATURED WORK
   a. Put web-size images (WebP/JPG, ~1600px wide) in assets/works/.
   b. Open js/works-data.js, copy a block inside PROJECTS, edit it.
   c. Save. The card, filter count and case study appear automatically.
   To show a work on the home page add  teaser: 1  (or 2, 3).
   Meta screenshots belong in cat: 'social'.

2b. ADD A TOOL (home page Tools section)
   Save the logo in assets/tools/ and add one line in js/tools-data.js.

3. VIEW-ONLY NOTES
   No download links; PDFs are shipped as page images, not files.
   Right-click, drag, and printing are blocked and enlarged images carry a
   light "© LUZ SOMODIO" mark (turn off with WATERMARK:false in config.js).
   These are deterrents only — nothing on the web can fully stop screenshots.
   Blurs (Meta names/content, proposal fees) are baked into the image files.

4. PUBLISH
   Upload the whole folder to any static host (Netlify, GitHub Pages, etc.).
   Keep index.html at the top level.
