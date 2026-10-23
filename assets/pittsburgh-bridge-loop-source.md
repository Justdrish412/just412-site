# Just412 bridge animation

The source is `pittsburgh-bridge.png`, the AI-generated Pittsburgh-inspired artwork previously created for this website. The animation was made for Just412 by applying a slow, repeating camera move to that still image with FFmpeg. It is stylized artwork rather than documentary footage of Pittsburgh.

No stock video, third-party video clip, or music is included. Reuse is subject to the terms covering the original AI artwork; exclusivity, copyright eligibility, and legal clearance are not guaranteed. This asset is not represented as copyright-free or public-domain footage.

## Rendering

- Output: `pittsburgh-bridge-loop.mp4`.
- Duration: 12 seconds, 288 frames at 24 fps.
- Resolution: 1280 × 640 pixels, matching the original artwork’s 2:1 proportions.
- Codec: H.264 Main, level 3.1, YUV 4:2:0, CRF 25, keyframe interval 48, MP4 fast-start metadata.
- Audio: none.
- Source is scaled to 2560 × 1280 before the camera move to reduce stepping.
- Camera phase is `2π × frame / 288`. Zoom is `1.04 + 0.035 × (1 − cos(phase))`; horizontal and vertical offsets use small sine curves around the center. The move returns to its starting position at the loop boundary.

The original bridge image remains the site’s fallback and has not been modified.
