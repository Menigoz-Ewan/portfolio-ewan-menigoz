# Portfolio — Ewan Menigoz

Stack : Astro · Tailwind CSS v4 · daisyUI v5 · JavaScript

## Commandes

| Commande          | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm install`     | Installe les dépendances                 |
| `npm run dev`     | Lance le serveur local (localhost:4321)  |
| `npm run build`   | Génère le site dans `./dist/`            |
| `npm run preview` | Prévisualise le build                    |

## Structure

```
public/            fichiers statiques (favicon, images…)
src/
  assets/          images optimisées par Astro
  components/      composants .astro réutilisables
  layouts/         gabarits de page
  pages/           routes du site (index.astro = /)
  scripts/         JavaScript côté client
  styles/          global.css (Tailwind + daisyUI)
```
