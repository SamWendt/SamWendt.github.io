# Portfolio — free, built with Astro, hosted on GitHub Pages

## 1. Put it live ($0)

1. Install **Node.js** (LTS) and **Git**.
2. On GitHub, create a **public** repo named exactly `YOUR-USERNAME.github.io`.
3. Unzip this folder, then in a terminal inside it:
   ```bash
   git init
   git add .
   git commit -m "first version"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
   git push -u origin main
   ```
4. On GitHub: **Settings → Pages → Source: GitHub Actions**.
5. Wait ~2 minutes (check the **Actions** tab). Your site is live at `https://YOUR-USERNAME.github.io`.

Every `git push` after that redeploys automatically.

## 2. Make it yours

| What | Where |
|---|---|
| Name, links, email | `src/data/site.ts` |
| Site address | `astro.config.mjs` (`site:`) |
| Projects | `src/data/projects.ts` |
| About text and skills | `src/pages/about.astro` |
| Colours | top of `src/styles/global.css` |

## 3. Add a write-up

Copy `src/content/writeups/example-writeup.md`, rename it (e.g. `htb-sherlock-brutus.md`), edit the top section and content. Put images in `public/images/` and reference them as `![alt](/images/name.png)`. Delete the example once you have a real post.

Set `draft: true` at the top of a write-up to hide it while you work on it.

## 4. Preview on your computer (optional)

```bash
npm install
npm run dev
```
Open http://localhost:4321.
