# My resume webapp

CV / portafolio personal construido con [Astro](https://astro.build), publicado en GitHub Pages mediante GitHub Actions.

## Desarrollo

```bash
npm install
npm run dev
```

El sitio corre en `http://localhost:4321/resume/`. El contenido (educación, empleos, habilidades, portafolio) se edita en [src/data/resumeData.json](src/data/resumeData.json) sin tocar código.

## Calidad de código

- **Prettier** formatea y **ESLint** valida (`npm run format` / `npm run lint`).
- **husky + lint-staged** corren ambos automáticamente sobre los archivos staged en cada commit.

## Build y deploy

```bash
npm run build    # genera dist/
```

El deploy es automático: cada push a `main` dispara el workflow [deploy.yml](.github/workflows/deploy.yml), que hace lint, build y publica a GitHub Pages (source: GitHub Actions, sin rama `gh-pages`).
