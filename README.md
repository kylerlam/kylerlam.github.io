# My Personal Website

Hey there! Welcome to my knowledge base. This project is a secondary creation based on the main branch of [dillionverma’s portfolio](https://github.com/dillionverma/portfolio). The design of UI and dock animations really caught my eye, which is why I chose this project as my main portfolio.

## Tech Stack

- Framework: Next.js 20
- Language: Typescript
- Styling: Shadcn/UI, TailwindCSS, Magic UI, Framer Motion
- Deployment: GitHub Pages

## Features

- Tech list showcase with marquee animation
- Language selector after Email in the dock: 简体中文, 繁體中文 and English.

### Translations

The site keeps its static GitHub Pages export. On first visit it matches the browser's preferred supported language (English is the fallback), then remembers explicit choices in `localStorage` under `portfolio.locale.v1`. Switching language updates the page without navigation and also updates the document's `lang` attribute.

- Interface labels: `src/i18n/messages.ts`.
- English profile content: `src/data/resume.tsx`; Chinese translations: `src/data/resume-translations.ts`.
- English posts: `content/<slug>.mdx`; translations use the same slug under `content/zh-Hans/` and `content/zh-Hant/`. Missing post translations fall back to the English original, marked with `lang="en"`.
- Static HTML and SEO metadata remain English; language choices currently share the same URLs.

## Make this your own

### Run locally

1. Clone this repository to your local device:

```bash
git clone https://github.com/kylerlam/kylerlam.github.io
```

2. Move to the cloned directory

```bash
cd portfolio
```

3. Install dependencies:

```bash
npm install
```

4. Start the local Server:

```bash
npm run dev
```

5. check the development server at http://localhost:3000/
6. Open the [Config file](./src/data/resume.tsx) and change the information to yours

### Deploy on GitHub Page

1. Create your the repository for GitHub Page

```bash
# repo name format
<your github username>.github.io
```

2. Push everything onto the repository

```bash
git push -u origin main
```

## Deployment Magic

GitHub provides a free, permanent website hosting service for every user. With GitHub Actions, you can automatically deploy your site after each push — all you need to do is **focus on editing your content**.

---

feel free to contact me with any questions~ 😊

## License

Licensed under the [MIT license](https://github.com/dillionverma/portfolio/blob/main/LICENSE.md).
