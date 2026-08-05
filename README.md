# My resume webapp

CV / portafolio personal construido con [Astro](https://astro.build), publicado en GitHub Pages mediante GitHub Actions.

## Desarrollo

El gestor de paquetes es **Yarn 4.10.3**, fijado en `packageManager` dentro de [package.json](package.json). Corepack (incluido en Node 22) lo activa solo:

```bash
corepack enable
yarn install
yarn dev
```

El sitio corre en `http://localhost:4321/resume/`. El contenido (educación, empleos, habilidades, portafolio) se edita en [src/data/resumeData.json](src/data/resumeData.json) sin tocar código.

## Protección de dependencias

[.yarnrc.yml](.yarnrc.yml) define `npmMinimalAgeGate: 10080` (minutos = 7 días): Yarn rechaza cualquier versión publicada hace menos de una semana. Es la ventana en la que suelen detectarse publicaciones comprometidas o secuestros de cuentas, así que esperar 7 días mantiene esa clase de ataque fuera de las instalaciones.

Si una actualización es urgente y confías en ella, agrégala a `npmPreapprovedPackages` en `.yarnrc.yml` para exceptuarla del gate.

## Calidad de código

- **Prettier** formatea y **ESLint** valida (`yarn format` / `yarn lint`).
- **husky + lint-staged** corren ambos automáticamente sobre los archivos staged en cada commit.

## Build y deploy

```bash
yarn build    # genera dist/
```

El deploy es automático: cada push a `main` dispara el workflow [deploy.yml](.github/workflows/deploy.yml), que instala con `yarn install --immutable`, hace lint, build y publica a GitHub Pages (source: GitHub Actions, sin rama `gh-pages`).
