# Just412 — Grind by Grace

A Pittsburgh-rooted merchandise and creative brand website, built with plain HTML, CSS, and JavaScript. The design uses the supplied black-and-gold logo, themes of faith and redemption, and a Pittsburgh-inspired bridge background.

No packages, build tools, API keys, or paid hosting services are required for this site. Product purchases happen through the Fourthwall store, where normal product and transaction costs apply.

## Run locally

```sh
cd /workspace/just412-site
python3 -m http.server 8012 --bind 127.0.0.1
```

Stop the server with Ctrl+C. All page assets are local; opening `index.html` directly also lets you view the page. JavaScript enhances the mobile menu and concept filters. Navigation, store links, all concepts, and the expandable brand note remain available without JavaScript.

## Fourthwall

The Shop buttons link to **https://just412-shop.fourthwall.com/**. Checkout, available products, prices, shipping, and order management live in that Fourthwall store.

The three homepage product illustrations are explicitly labeled **collection concepts**, not live inventory. No products, prices, reviews, stock counts, or order functionality are fabricated. To feature real listings, replace each concept with the actual product image, name, and Fourthwall product URL after it is created in Fourthwall.

To change the store address, replace `https://just412-shop.fourthwall.com/` in `index.html`. Keeping real href attributes makes the shop links work without JavaScript. The website never asks for a Fourthwall password or payment credentials.

## Files and design assets

- `index.html`: brand copy, concept collection, story, creative note, and store links.
- `styles.css`: responsive layouts, local typography, and black-and-gold styling.
- `script.js`: accessible mobile navigation, concept filters, and copyright year.
- `assets/just412-logo.png`: transparent website asset prepared from the supplied logo.
- `assets/pittsburgh-bridge.png`: generated Pittsburgh-inspired editorial artwork.
- `assets/fonts/`: local Anton and DM Sans fonts, licenses, and source notes.
- `favicon.svg`: a small matching 412 browser icon.

The product illustrations are design mockups built from inline SVG and HTML/CSS. The original logo is used on the cream tee concept. The artwork and wording are proposals for review, rather than claims that these products have been manufactured or listed.

The earlier personal website was preserved at `/workspace/scratch/justin-drish-personal-site` for possible future use on a separate personal domain.

## Hosting and domains

The static site can be hosted for free on GitHub Pages or another static host. The Fourthwall shop remains a separate hosted checkout linked from this page. Embedding or connecting Fourthwall to a custom domain is not configured by this project.

No DNS, custom-domain settings, CNAME file, automatic production deployment, or domain purchase has been added. Domain changes require a separate explicit request.

Any temporary review branch is tracked in `/workspace/scratch/just412-temporary-preview.json`. It is separate from `main` and can be removed when the user finishes reviewing. The temporary review link is not a production website deployment.
