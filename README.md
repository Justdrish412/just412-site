# Just412 — Grind by Grace

A Pittsburgh-rooted merchandise and creative brand website, built with plain HTML, CSS, and JavaScript. The design uses the supplied black-and-gold logo, themes of faith and redemption, and a Pittsburgh-inspired bridge background.

No packages, build tools, API keys, or paid hosting services are required for this site. Product purchases happen through the Fourthwall store, where normal product and transaction costs apply.

## Run locally

```sh
cd /workspace/just412-site
python3 -m http.server 8012 --bind 127.0.0.1
```

Stop the server with Ctrl+C. All page assets are local; opening `index.html` directly also lets you view the page. JavaScript enhances the mobile menu and collection filters. Navigation, store and product links, all collection items, and the expandable brand note remain available without JavaScript.

## Pages

`index.html` is the merchandise and creative home page. `about.html` is a separate About Us page, linked from the main navigation, hero, and footer. It includes Justin’s approved first-person story and his supplied black-and-white Pittsburgh portrait, the connection between 4:12 and Acts 4:12, his family, ministry, and the purpose behind Just412. Links on About Us lead back to the home page’s collection and creative sections.

Justin approved the shorter, four-paragraph version before publication. His account describes heroin addiction, the change in his life through Adult & Teen Challenge fifteen years ago, coming to faith in Jesus Christ, and the significance of Acts 4:12. It names his wife Courtney and children Hannah, Solomon, and Valentino, and describes his church ministry and current work. The story ends with “Grind by Grace,” followed by “Justin” on the next line. Keep this approved testimony intact unless Justin requests an edit. The shared JavaScript skips collection filters on the About Us page while keeping its mobile navigation usable.

Acts 4:12 remains in full within the shorter recovery paragraph. Justin requested removal of the clock anecdote and references to the number repeatedly appearing.

The story ends with Justin’s approved invitation: “If that feels hard to believe, take it from me: I’ve been there, and it was there that God met me.” A “Find help with addiction” button leads to a help section linking to **https://www.paatc.org** for Western PA Adult & Teen Challenge and **https://naamannet.org** for Naaman Network. Justin supplied both website addresses. The page does not collect personal or treatment information.

Future addition: a user-supplied family photo beside the family bio.

Reading paragraphs use a consistent `1.25rem` size (20px at the standard browser setting) and 1.8 line spacing on desktop and mobile. About Us body copy uses strong contrast, and mobile rules do not shrink the approved story’s paragraphs.

## Home-page city background

The home hero currently uses the original static `assets/pittsburgh-bridge.png` Pittsburgh-inspired artwork. Justin rejected the moving model montage, its camera movement, and the white-backed logo overlays. The video, its control, and the separate cream logo card have been removed from the hero. The normal site-header logo remains.

Actual Pittsburgh B-roll is still pending. Stock-footage sites cannot be accessed from this cloud workspace, so no verified real-city clip has been downloaded. Do not describe the current static AI artwork as footage. Once a usable video file and its usage rights are available, the existing guarded player code and styles can support a muted, inline, looping background with a pause control and reduced-motion/data-saver fallbacks.

## Fourthwall

The Shop buttons link to **https://just412-shop.fourthwall.com/**. Checkout, available products, prices, shipping, and order management live in that Fourthwall store.

The **Just412 Grind by Grace Hoodie** uses the supplied product photo and links directly to **https://just412-shop.fourthwall.com/products/just412-grind-by-grace-hoodie** from its photo, name, and “Shop this hoodie” button. Options, current prices, availability, and checkout remain in Fourthwall; the website does not synchronize inventory or display an unverified price.

**Same Hustle, Different Weight** uses Justin’s supplied product photo, copied unchanged, with its photo, name, and shopping button linking to **https://just412-shop.fourthwall.com/products/same-hustle-different-weight**. Both real hoodies appear first, side by side on desktop and stacked on phones; the two design concepts follow. The Apparel filter includes both hoodies and the tee concept. Current options, prices, availability, and checkout remain in Fourthwall.

The tee and art print remain clearly labeled **design concepts**. To feature another real listing, supply its product image, name, and direct Fourthwall URL. No products, prices, reviews, stock counts, or checkout functionality are fabricated.

To change the store address, replace `https://just412-shop.fourthwall.com/` in `index.html` and `about.html`. Keeping real href attributes makes the shop links work without JavaScript. The website never asks for a Fourthwall password or payment credentials.

## Files and design assets

- `index.html`: hoodie listing, collection concepts, creative note, links to About Us, and store links.
- `about.html`: Justin’s bio, recovery story, family introduction, and the meaning behind the brand.
- `styles.css`: responsive layouts, local typography, and black-and-gold styling.
- `script.js`: accessible mobile navigation, collection filters, and copyright year.
- `assets/grind-by-grace-hoodie.jpg`: the user-supplied product photo, copied unchanged.
- `assets/same-hustle-different-weight-hoodie.jpg`: the user-supplied Same Hustle, Different Weight product photo, copied unchanged.
- `assets/justin-drish-pittsburgh.jpg`: the user-supplied black-and-white portrait in a Grind By Grace hoodie, copied unchanged and shown at its full proportions on the About Us page.
- `assets/just412-logo.png`: transparent website asset prepared from the supplied logo.
- `assets/pittsburgh-bridge.png`: generated Pittsburgh-inspired editorial artwork.
- `assets/just412-city-model-montage.mp4`: rejected 24-second montage, retained locally as an unused revision; it is not shown on the website.
- `assets/just412-city-model-montage-source.md`: sources, AI model-image context, and rendering notes.
- `assets/just412-grind-model-ai.png` and `assets/just412-hustle-model-ai.png`: unused generated campaign stills from the rejected montage; actual product listings retain the supplied photos.
- `assets/pittsburgh-bridge-loop.mp4` and `assets/pittsburgh-bridge-loop-source.md`: previous, inactive animation and its source notes. It is not real B-roll.
- `assets/fonts/`: local Anton and DM Sans fonts, licenses, and source notes.
- `favicon.svg`: a small matching 412 browser icon.

The tee and art-print illustrations are design mockups built from inline SVG and HTML/CSS. The original logo is used on the cream tee concept. These two concepts are proposals for review, rather than claims that they have been manufactured or listed. The hoodie photo and product link were supplied by the user.

The earlier personal website was preserved at `/workspace/scratch/justin-drish-personal-site` for possible future use on a separate personal domain.

## Hosting and domains

The static site can be hosted for free on GitHub Pages or another static host. The Fourthwall shop remains a separate hosted checkout linked from this page. Embedding or connecting Fourthwall to a custom domain is not configured by this project.

No DNS, custom-domain settings, CNAME file, automatic production deployment, or domain purchase has been added. Domain changes require a separate explicit request.

Any temporary review branch is tracked in `/workspace/scratch/just412-temporary-preview.json`. It is separate from `main` and can be removed when the user finishes reviewing. The temporary review link is not a production website deployment.
