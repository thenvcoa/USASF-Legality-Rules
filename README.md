# Cheer Rules Study Hub (2025–26)

Interactive study tools for the USASF 2025–26 All Star Cheer Rules:

- `index.html`: home page linking to the three tools
- `rule-maps.html`: rules by lettered section and level, with a level filter
- `flashcards.html`: glossary deck and rule-limits deck (tap to flip, swipe to move)
- `quiz.html`: practice quiz with explanations
- `call-sheet.html`: record what you saw in a clip and see which rules it breaks
- `watch-guide.html`: what to watch for on video, by skill type (printable)

Everything runs in the browser. There is no build step and no server code.

## Publish with GitHub Pages

1. Create a new repository on GitHub.
2. Upload the **contents** of this folder to the root of the repository: the four `.html` files, the `assets` folder, `.nojekyll` and this README. (On github.com: **Add file → Upload files**, then drag them in.)
3. Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose the `main` branch and the `/ (root)` folder, then click **Save**.
4. After a minute or two the site is live at `https://<your-username>.github.io/<repository-name>/`.

On a phone, open that address and use **Add to Home Screen** (Safari share menu, or the Chrome menu) to get an app-style icon.

## Editing content

All text lives in `assets/data.js`:

| What | Variable |
|---|---|
| Glossary flashcards | `GLOSSARY`: `[term, definition, category]` |
| Rule maps | `RULES`: each item is `[type, text]`, where type is `ok`, `no`, `exc` or `req` |
| Rule-limit flashcards | `RULECARDS` |
| Quiz questions | `QUIZ`: `a` is the index of the correct option in `o` |

Styles are in `assets/style.css` and behavior in `assets/app.js`. The call sheet's rule checks live in `assets/engine.js` (one `CHECK` function per skill type) and its form and the watch guide text in `assets/callsheet.js`.

## Note on the source material

This content is paraphrased from the USASF Cheer Rules, which USASF restricts to members and does not allow to be posted on public websites without written permission. Check with USASF before publishing this in a public repository, or keep the repository private.
