# Just412 — Grind by Grace

A Pittsburgh-rooted merchandise and creative brand website, built with plain HTML, CSS, and JavaScript. The design uses the supplied black-and-gold logo, themes of faith and redemption, and a Pittsburgh-inspired bridge background.

No packages, build tools, API keys, or paid hosting services are required for this site. Product purchases happen through the Fourthwall store, where normal product and transaction costs apply.

## Run locally

```sh
cd /workspace/just412-site
python3 -m http.server 8012 --bind 127.0.0.1
```

Stop the server with Ctrl+C. All page assets are local; opening `index.html` directly also lets you view the page. JavaScript enhances the mobile menu and collection filters. Navigation, store and product links, all collection items, and the expandable brand note remain available without JavaScript.

## Fourthwall

The Shop buttons link to **https://just412-shop.fourthwall.com/**. Checkout, available products, prices, shipping, and order management live in that Fourthwall store.

The **Just412 Grind by Grace Hoodie** uses the supplied product photo and links directly to **https://just412-shop.fourthwall.com/products/just412-grind-by-grace-hoodie** from its photo, name, and “Shop this hoodie” button. Options, current prices, availability, and checkout remain in Fourthwall; the website does not synchronize inventory or display an unverified price.

The tee and art print remain clearly labeled **design concepts**. To feature another real listing, supply its product image, name, and direct Fourthwall URL. No products, prices, reviews, stock counts, or checkout functionality are fabricated.

To change the store address, replace `https://just412-shop.fourthwall.com/` in `index.html`. Keeping real href attributes makes the shop links work without JavaScript. The website never asks for a Fourthwall password or payment credentials.

## Files and design assets

- `index.html`: brand copy, hoodie listing, collection concepts, story, creative note, and store links.
- `styles.css`: responsive layouts, local typography, and black-and-gold styling.
- `script.js`: accessible mobile navigation, collection filters, and copyright year.
- `assets/grind-by-grace-hoodie.jpg`: the user-supplied product photo, copied unchanged.
- `assets/just412-logo.png`: transparent website asset prepared from the supplied logo.
- `assets/pittsburgh-bridge.png`: generated Pittsburgh-inspired editorial artwork.
- `assets/fonts/`: local Anton and DM Sans fonts, licenses, and source notes.
- `favicon.svg`: a small matching 412 browser icon.

The tee and art-print illustrations are design mockups built from inline SVG and HTML/CSS. The original logo is used on the cream tee concept. These two concepts are proposals for review, rather than claims that they have been manufactured or listed. The hoodie photo and product link were supplied by the user.

The earlier personal website was preserved at `/workspace/scratch/justin-drish-personal-site` for possible future use on a separate personal domain.

## Hosting and domains

The static site can be hosted for free on GitHub Pages or another static host. The Fourthwall shop remains a separate hosted checkout linked from this page. Embedding or connecting Fourthwall to a custom domain is not configured by this project.

No DNS, custom-domain settings, CNAME file, automatic production deployment, or domain purchase has been added. Domain changes require a separate explicit request.

Any temporary review branch is tracked in `/workspace/scratch/just412-temporary-preview.json`. It is separate from `main` and can be removed when the user finishes reviewing. The temporary review link is not a production website deployment.
