# On Self-Improving Feed-Forward Structure-from-Motion — Project Page

Static project page for the paper *"On Self-Improving Feed-Forward Structure-from-Motion:
A Generalizable Multi-View Pose Estimator"* (anonymous submission).

The page shows the title, abstract, benchmark tables (ETH3D, IMC2021, Tanks & Temples,
FastMap), and reconstruction montage videos.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Structure

- `index.html` — page markup (hero, abstract, videos, results).
- `styles.css` — styling.
- `tables.js` — benchmark table data + renderer.
- `assets/videos/` — reconstruction montage `.mp4` files.

## Deploy to GitHub Pages

1. Create a new public repo on GitHub (e.g. `self-improving-sfm-page`).
2. Push this folder's contents to the repo root.
3. In the repo **Settings → Pages**, set the source to the `main` branch, root (`/`).
4. The site will be served at `https://<user>.github.io/self-improving-sfm-page/`.

`.nojekyll` is included so GitHub Pages serves all files as-is (no Jekyll processing).
