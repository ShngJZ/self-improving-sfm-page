# On Self-Improving Feed-Forward Structure-from-Motion — Project Page

Static project page for the paper *"On Self-Improving Feed-Forward Structure-from-Motion:
A Generalizable Multi-View Pose Estimator"* (anonymous submission).

The page shows the title, abstract, benchmark tables (ETH3D, IMC2021, Tanks & Temples,
FastMap), and reconstruction montage videos. The abstract and the tables mirror the
paper source in `sec/`; see "Keeping the tables in sync" below.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Structure

- `index.html` — page markup (hero, abstract, videos, results).
- `styles.css` — styling.
- `tables.js` — benchmark table data + renderer.
- `assets/videos/` — reconstruction montage `.mp4` / `.gif` files.

## Keeping the tables in sync with the paper

The data block at the top of `tables.js` is **generated** from the paper's
LaTeX source (`sec/4_experiments.tex`) and must not be hand-edited. After
changing any number, rank color, or venue in the manuscript's comparison
tables, regenerate it from the repository root:

```bash
python scripts/build_page_tables.py           # rewrite the data block
python scripts/build_page_tables.py --check   # verify the page matches the paper
```

The `--check` mode exits non-zero when the page has drifted, so it is suitable
for a pre-commit hook or CI step. The renderer below the
`/* Rendering */` marker in `tables.js` is hand-written and is preserved by the
script.

## Deploy to GitHub Pages

1. Create a new public repo on GitHub (e.g. `self-improving-sfm-page`).
2. Push this folder's contents to the repo root.
3. In the repo **Settings → Pages**, set the source to the `main` branch, root (`/`).
4. The site will be served at `https://<user>.github.io/self-improving-sfm-page/`.

`.nojekyll` is included so GitHub Pages serves all files as-is (no Jekyll processing).
