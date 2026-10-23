# Omni ProTECHt website

This is a buildless two-page static website. No package installation is required.

## Folder structure

```text
omni-protecht-site/
├── .openai/
│   └── hosting.json
├── README.md
└── dist/
    ├── index.html
    ├── about.html
    ├── styles.css
    ├── script.js
    └── assets/
        ├── logo.png
        └── hero-surveillance.png
```

## What belongs in each file

- `dist/index.html`: home page structure and content.
- `dist/about.html`: dedicated About Us page and leadership content.
- `dist/styles.css`: visual design, responsive layout, service illustrations and the animated guard/day-to-night scene.
- `dist/script.js`: mobile menu, reveal effects and scroll-driven day-to-night transition.
- `dist/assets/logo.png`: company logo.
- `dist/assets/hero-surveillance.png`: generated surveillance-control-room hero artwork.
- `.openai/hosting.json`: Sites deployment configuration.

## Run locally

From this folder, run:

```bash
python3 -m http.server 8000 --directory dist
```

Then open `http://localhost:8000`.
