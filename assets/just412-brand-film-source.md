# Just412 uploaded-footage brand film

The user supplied the source video and photographs and requested a loop with segmented footage, clothing details, flash transitions, and the transparent PNG logo at the end. This replaces both the earlier generated-image montage and the temporary still background.

## Source assets

- `film-sources/uploaded-drone.mp4`: unchanged uploaded `13916684_1920_1080_30fps.mp4`, 1920 × 1080, approximately 5.005 seconds at 30000/1001 fps, without audio. The uploaded scene's geographic location and original licensing were not independently verified; it is not attributed to the previously discussed YouTube creator or represented as public-domain footage.
- `film-sources/hoodie.jpg`: the supplied Grind By Grace product photo.
- `film-sources/group.jpg`: the supplied photograph of three people wearing the hoodie.
- `film-sources/badge.jpg`: supplied Same Hustle, Different Weight artwork.
- `film-sources/justin.jpg`: the newly supplied monochrome photo beside the bridge.
- `just412-logo.png`: existing transparent RGBA signature logo. Its alpha channel includes fully transparent pixels. The white-background logo JPEG in the new attachments is not used.

## Edit

- Output: `just412-brand-film.mp4`, 16 seconds, 1280 × 720, 30 fps, silent H.264 Main level 3.1, YUV 4:2:0, fast-start metadata.
- City shots are cut from the uploaded footage; no AI video, artificial camera shake, pan, or zoom is added. Clothing photos keep fixed framing with intentional detail crops.
- Sequence before loop trim: city 0–2.4s → hoodie detail for 1.6s → city 2.4–4.4s → group photo for 2s → badge artwork for 1.4s → city 3.2–5s → Justin photo for 2s → city 1.8–5s with the closing signature mark.
- Footage and clothing images are monochrome. The signature PNG retains its original black and gold artwork.
- Each internal cut has one short exposure flash: a three-frame fade toward white before the cut and a three-frame fade back from white after it. Cuts are separated by at least 1.4 seconds. No rapid repeated strobing is added.
- The supplied PNG is alpha-composited directly over the final city shot. Only transparent padding is cropped. No white/cream backing, rectangle, JPEG conversion, or generated replacement logo is used.
- A 0.4-second crossfade returns to the opening footage; the duplicate lead-in is trimmed to create a continuous 16-second loop.
- `just412-film-poster.jpg` is a still extracted from the finished video for visitors who disable motion or cannot play the video.

The website player provides Play/Pause controls, pauses when off screen or in background tabs, and requires manual playback for reduced-motion or data-saver preferences. Original uploads remain unchanged in `film-sources`.
