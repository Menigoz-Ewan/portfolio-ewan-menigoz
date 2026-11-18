# Portfolio — Ewan Menigoz

> « Je conçois des interfaces claires, puis je les code. »

Portfolio de **Ewan Menigoz**, étudiant en 2e année de BUT MMI (parcours Création numérique) à l'IUT de Montbéliard, designer UI/UX qui intègre lui-même ses maquettes. Projet individuel du semestre 3.

- **Site en ligne** : https://portfolio.ewan-menigoz.fr
- **Dépôt** : https://github.com/Menigoz-Ewan/portfolio-ewan-menigoz

## Sommaire

1. [Le projet](#1-le-projet)
2. [Technologies et bibliothèques](#2-technologies-et-bibliothèques)
3. [Inspirations et auteurs des animations](#3-inspirations-et-auteurs-des-animations)
4. [Structure du code](#4-structure-du-code)
5. [Installer et lancer le projet](#5-installer-et-lancer-le-projet)
6. [Formulaire de contact](#6-formulaire-de-contact)
7. [Mise en ligne](#7-mise-en-ligne)
8. [Fichiers de suivi](#8-fichiers-de-suivi)
9. [Droits et crédits](#9-droits-et-crédits)

---

## 1. Le projet

Le site présente mes projets en études de cas (contexte, défi, solution, bilan), une galerie de visuels, une page à propos et un formulaire de contact. Il s'adresse aux agences, studios UI/UX et équipes produit qui cherchent un profil entre design et développement, pour un **stage de 8 à 10 semaines, de mars à juin**.

**Direction artistique** : fond crème et grille de papier millimétré, vert sapin pour organiser l'information, rouge réservé à l'action principale, menu en onglets de classeur et logo typographique EWME. Thème clair par défaut, thème sombre en option.

**Pages** : accueil, projets (et une page par étude de cas), galerie, à propos, contact, mentions légales et confidentialité, usage de l'IA, page 404.

**Langues** : tout le site existe en français (adresses sans préfixe, par exemple `/projets`) et en anglais (sous `/en/`, par exemple `/en/projects`). Le sélecteur « FR / EN » placé à côté du logo mène à la même page dans l'autre langue ; la langue affichée est soulignée.

## 2. Technologies et bibliothèques

Aucun thème ni modèle prédéfini : toute l'interface est dessinée dans Figma puis codée à la main. Les bibliothèques ci-dessous fournissent des outils (compilation, classes utilitaires, polices), pas un design tout fait.

| Bibliothèque | Version | Licence | Rôle dans le site | Adaptation à ma direction artistique |
|---|---|---|---|---|
| [Astro](https://astro.build) | 7 | MIT | Framework : pages, composants `.astro`, routes des études de cas (`/projets/[slug]`), optimisation des images (WebP, tailles adaptées), routage bilingue (i18n intégré : français par défaut, anglais sous `/en/`) | Site statique, très peu de JavaScript envoyé au navigateur : seulement les scripts des composants interactifs |
| [Tailwind CSS](https://tailwindcss.com) | 4 | MIT | Classes utilitaires pour la mise en page et le responsive | Palette, typographies, espacements et durées d'animation redéfinis dans `src/styles/global.css` (variables `--color-*`, `--font-*`) |
| [daisyUI](https://daisyui.com) | 5 | MIT | Système de thèmes et contrôleur de thème clair / sombre | Thèmes d'origine désactivés (`themes: false`) ; deux thèmes créés sur mesure, `ewme-clair` et `ewme-sombre` ; aucun composant daisyUI utilisé tel quel |
| [@astrojs/sitemap](https://docs.astro.build/fr/guides/integrations-guide/sitemap/) | 3 | MIT | Génère le plan du site (`sitemap-index.xml`) pour le référencement | — |
| [Fontsource](https://fontsource.org) | 5 | OFL 1.1 (polices) | Polices auto-hébergées, sans appel à Google Fonts | League Spartan (titres et logo), DM Sans (texte), Geist Mono (étiquettes), Caveat (notes manuscrites) |
| [Prettier](https://prettier.io) + prettier-plugin-astro | 3 | MIT | Mise en forme du code (développement uniquement) | — |

**Hors du dépôt** :
- [PocketBase](https://pocketbase.io) (MIT) : base de données du formulaire de contact, installée sur mon serveur.
- Figma pour la maquette.

Aucune bibliothèque d'animation n'est utilisée : toutes les animations sont écrites en CSS et en JavaScript natif (voir partie 3).

## 3. Inspirations et auteurs des animations

Plusieurs interactions s'inspirent de composants ou d'exemples publiés par d'autres créateurs. Leur code n'était pas consultable (modèles payants ou aperçus fermés) : j'en ai repris **le principe**, puis je les ai **recodées entièrement**, en CSS et JavaScript, sans dépendance, et adaptées à ma charte.

| Élément du site | Fichier | Inspiration | Source / auteur |
|---|---|---|---|
| Boutons : pastille qui grandit jusqu'à remplir le bouton au survol | `src/components/Button.astro` | « Continue button » | [Jitter](https://jitter.video) |
| Bouton du thème : soleil qui se transforme en lune | `src/components/BoutonTheme.astro` | Icônes météo animées | [Jitter](https://jitter.video) |
| Image du hero qui s'ouvre en cercle (« iris ») | `src/components/ImageIris.astro` | Exemple « iris » de Motion+ | [Motion](https://motion.dev) |
| Icônes animées au survol (design, code, message, réseaux sociaux) | `src/components/IconeAnimee.astro` | Icônes animées Lottie | [useanimations](https://useanimations.com) |
| Accueil : projets en accordéon | `src/components/AccordeonProjets.astro` | « Accordion Gallery » | [React Bits](https://reactbits.dev) |
| Page Projets : carrousel | `src/vues/Projets.astro` | « Flex Carousel » | [React Bits](https://reactbits.dev) |
| À propos : anneau 3D des passions | `src/components/HorsEcran.astro` | « Circular Carousel » | [React Bits](https://reactbits.dev) |
| Galerie : champ infini en 3D | `src/vues/Galerie.astro` | « Infinite Gallery » | [React Bits Pro](https://pro.reactbits.dev/docs/components/infinite-gallery) |

**Créations personnelles, sans modèle extérieur** :
- l'écran de chargement « Les parenthèses » et l'animation du logo au survol (`EcranChargement.astro`, `Logo.astro`) ;
- le menu en onglets fantômes et l'onglet qui rebondit d'une page à l'autre (`HeaderPanneau.astro`, `NavLink.astro`, View Transitions natives) ;
- le titre du hero tapé lettre par lettre et la note « écrivez-moi ! » (`HeroAccueil.astro`) ;
- la grille de fond en parallaxe (`Layout.astro`, `global.css`).

**Prototypage** : plusieurs variantes de ces interactions ont été dessinées dans Claude Design avant d'être choisies et intégrées (voir `IA.md`).

**Accessibilité des animations** : elles se déclenchent au survol, au clic ou au focus clavier, jamais en boucle sans contrôle, et sont désactivées quand le système demande de réduire les animations (`prefers-reduced-motion`).

## 4. Structure du code

```
public/                 fichiers servis tels quels (favicon, CV, dossier PDF, robots.txt)
src/
  assets/
    images/             images des projets, de la galerie et des pages (optimisées par Astro)
    svg/                logo filaire, icônes, décors
  components/           composants réutilisables (boutons, en-tête, hero, cartes, galerie, accordéon…)
  data/
    projets.ts          contenu des projets : textes, images, études de cas (un bloc par projet)
    projets-en.ts       textes anglais des projets (les images restent celles de projets.ts)
    site.ts             informations générales : nom, contact, réseaux, stage, hébergeur
  i18n/
    index.ts            langues, adresses des pages dans les deux langues, textes communs (menu, pied de page…)
  layouts/
    Layout.astro        gabarit commun : <head>, SEO, liens hreflang, en-tête, fond, pied de page
  pages/                une page = une route (index.astro = /, projets/[slug].astro = études de cas)
    en/                 les mêmes routes en anglais (/en/, /en/projects, /en/about…)
  vues/                 contenu de chaque page, commun aux deux langues (textes FR et EN côte à côte)
  scripts/              JavaScript partagé (écran de chargement)
  styles/
    global.css          charte : thèmes, couleurs, typographies, grille de fond, transitions
```

**Comment marchent les deux langues** : chaque page de `src/pages/` (français) et de `src/pages/en/` (anglais) se contente d'appeler une vue de `src/vues/`. La vue lit la langue de l'adresse (`Astro.currentLocale`) et choisit ses textes dans un objet `T = { fr: {…}, en: {…} }`. Une seule mise en page sert donc les deux langues. Les scripts des composants interactifs reçoivent leurs textes par des attributs `data-…` posés par le serveur.

**Modifier un texte** : il se trouve dans la vue de la page (`src/vues/`), dans `src/i18n/index.ts` s'il est commun à tout le site (menu, pied de page), ou dans `projets.ts` / `projets-en.ts` pour un projet. Il faut le changer dans les deux langues.

**Ajouter un projet** : un bloc dans `src/data/projets.ts` (titre, domaines, résumé, images, étude de cas), puis l'ajouter à la liste `projets` en bas du fichier. La carte et les pages `/projets/<slug>` et `/en/projects/<slug>` sont générées automatiquement. Ses textes anglais vont dans `src/data/projets-en.ts` ; sans eux, la page anglaise reprend le texte français.

**Tailles des images** : vignette d'un projet en 1600 × 1000 px (sujet au centre, car une bande repliée n'en montre que le milieu) ; image du carrousel du hero en 840 × 960 px.

## 5. Installer et lancer le projet

Prérequis : Node.js 22.22 ou plus récent (exigence d’Astro 7).

| Commande | Action |
|---|---|
| `npm install` | Installe les dépendances |
| `npm run dev` | Lance le serveur local (http://localhost:4321) |
| `npm run build` | Génère le site dans `./dist/` |
| `npm run preview` | Prévisualise le site généré |

Le formulaire de contact lit l'adresse de PocketBase dans la variable d'environnement `PUBLIC_POCKETBASE_URL`, à définir dans un fichier `.env` non versionné.

## 6. Formulaire de contact

Le formulaire (`src/vues/Contact.astro`) envoie les messages à une collection `messages` de PocketBase, avec `fetch`, sans bibliothèque.

- **Contrôle** : vérification des champs dans le navigateur, avec des erreurs annoncées aux lecteurs d'écran, dans la langue de la page.
- **Anti-spam** : un champ piège invisible.
- **Consentement** : une case à cocher, liée à la partie « données personnelles » des mentions légales.

Les messages sont consultés dans l'administration de PocketBase.

## 7. Mise en ligne

Le site est hébergé sur mon serveur privé virtuel (VPS), à côté de PocketBase.

- **Hébergeur** : Infomaniak.
- **Domaine** : `portfolio.ewan-menigoz.fr`, enregistrement DNS chez Infomaniak.
- **Serveur web** : Apache, qui sert les fichiers statiques de `dist/`, avec une page 404 personnalisée.
- **HTTPS** : certificat Let's Encrypt (Certbot), renouvelé automatiquement ; le HTTP redirige vers le HTTPS.

Mise à jour du site depuis mon poste :

```bash
npm run build
ssh -p <port> <utilisateur>@<serveur> "rm -rf /var/www/portfolio/dist"
scp -P <port> -r dist <utilisateur>@<serveur>:/var/www/portfolio/
ssh -p <port> <utilisateur>@<serveur> "chmod -R a+rX /var/www/portfolio/dist"
```

## 8. Fichiers de suivi

| Fichier | Contenu |
|---|---|
| [JOURNAL.md](JOURNAL.md) | Journal de bord, semaine par semaine : ce que j'ai fait, ce qui a coincé, ce que j'ai décidé |
| [IA.md](IA.md) | Déclaration d'usage de l'IA : outils, étapes, et ce que j'ai modifié, corrigé ou rejeté |
| [QUALITE.md](QUALITE.md) | Checklist qualité : accessibilité, sobriété et performance, référencement, conformité juridique |

## 9. Droits et crédits

- **Code, textes, logo et visuels** : © Ewan Menigoz, sauf mention contraire.
- **Projets collectifs** : les coéquipiers sont cités dans chaque étude de cas (OpenSigne, Climat Outre-Mer, Iris VOD).
- **Affiches et visuels de films** dans le projet Iris VOD : propriété de leurs ayants droit, utilisés dans un cadre pédagogique non commercial.
- **Polices** : sous licence SIL Open Font License 1.1.
- **Bibliothèques** : sous licence MIT.

Le détail figure dans les [mentions légales](https://portfolio.ewan-menigoz.fr/mentions-legales).
