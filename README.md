# 🌐 Jingqi Fan — Academic Homepage

This is the source code of my personal academic website.

> 👉 Live Website: https://jingqi-fan.github.io

The website is built to present my research experience, academic interests, and publications.  

---

## ✨ Features

- 🚀 Fast & modern development with **Vite + React + TypeScript**
- 🎨 UI powered by **TailwindCSS** + **Radix UI**
- 💡 Smooth interactions & animations via **Framer Motion**
- 📱 Responsive for desktop & mobile
- 🌍 Deployed using **GitHub Pages**
- 🌗 Light/Dark Mode support

---

## 🛠️ Built With

| Tech | Usage |
|------|------|
| React + TypeScript | UI & component logic |
| Vite | Lightning-fast build tool |
| TailwindCSS | Styling & layout |
| Radix UI | Accessible UI primitives |
| Framer Motion | Page and component animations |
| pnpm | Package manager |
| GitHub Actions | Automated build & deployment |

See full dependency list in `package.json`.

---

## 📦 Project Setup

```bash
pnpm install
pnpm dev
````


---

## 🚀 Deploy

This project uses **GitHub Actions** for automatic deployment.

Deployment flow:

1. Push to `master`
2. GitHub Actions runs `pnpm build`
3. Build output is deployed to **GitHub Pages**

Configuration located in:

```
.github/workflows/deploy.yml
```

---

## 📁 File Structure

```
repo-root
├─ client/              # Source code
│  ├─ src/              # React pages & components
│  └─ public/           # Static resources
├─ .github/workflows/   # Deployment pipeline
├─ index.html           # Production entry
├─ assets/              # Bundled static assets (after build)
├─ package.json
├─ vite.config.ts
└─ README.md
```

---

### ⭐ Acknowledgements

This website is inspired by and based on the structure of [10-OASIS-01/10-OASIS-01.github.io](https://github.com/10-OASIS-01/10-OASIS-01.github.io).


