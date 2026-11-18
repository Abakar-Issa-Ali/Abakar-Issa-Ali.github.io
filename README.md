# Portfolio — Abakar Issa

Site vitrine personnel : React 19, TypeScript, Tailwind CSS 4, Vite.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # sortie dans dist/
```

- Projets : `src/data/projects.ts`
- Liens de contact (email, LinkedIn, CV) : `src/data/site.ts`. Une valeur vide masque le bouton.
- Visuels des projets : `src/components/Visual.tsx`, des illustrations en CSS, à remplacer par de vraies captures.

Chaque push sur `main` déploie le site sur GitHub Pages (`.github/workflows/deploy.yml`).
