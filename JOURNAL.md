# Journal de bord — Portfolio Ewan Menigoz

> Une dizaine de lignes par semaine, comme demandé par le sujet : ce que j'ai fait, ce qui a coincé, ce que j'ai décidé.
> Le détail étape par étape est dans [`docs/journal-detaille.md`](docs/journal-detaille.md). L'usage de l'IA est déclaré dans [`IA.md`](IA.md), les contrôles qualité dans [`QUALITE.md`](QUALITE.md).

## La frise du projet

| Période | Étape |
|---|---|
| 1er septembre → 1er octobre | Première maquette (logo en fleur d'hibiscus) |
| 2 octobre | Soutenance maquette |
| 12 → 18 octobre | Refonte complète de la maquette (V2 → V3.1), logo EWME, note de positionnement, charte |
| 19 → 25 octobre | Recherches pour un nouvel univers graphique |
| 26 octobre → 8 novembre | Intégration de toute la maquette en Astro |
| 9 → 15 novembre | Logo et header définitifs, écran de chargement, études de cas, thème sombre, menu |
| 16 → 22 novembre | Formulaire, animations, qualité, mise en ligne, réseaux sociaux, documents finaux, version anglaise |

---

## Du 1er septembre au 2 octobre · Première maquette et soutenance

- **Fait.** Première maquette Figma, générée en grande partie avec Figma Make, avec un logo en fleur d'hibiscus et une note de positionnement « Premium Tech ». Soutenance maquette le 2 octobre.
- **Ce qui a coincé.** J'ai utilisé l'IA « au feeling », sans lui donner de précisions : le résultat était générique. Les retours du jury étaient nombreux :
  - un rendu trop gros, au point de confondre desktop et mobile ;
  - une photo qui ne me mettait pas en valeur ;
  - un positionnement « Premium Tech » qui ne voulait rien dire ;
  - des typographies et un logo sans justification ;
  - des projets peu visibles et un formulaire trop imposant.
- **Décidé.** Repartir de zéro à partir de ces retours plutôt que de corriger l'existant, et apprendre à me servir correctement de l'IA.

## Du 3 au 18 octobre · Refonte complète de la maquette

- **Fait.**
  - Je me suis formé à l'usage de l'IA (prompts, outils) et j'ai choisi Claude.
  - Puis j'ai refait la maquette en trois passes (V2, V3, V3.1) : fond crème, vert sapin pour organiser l'information, rouge réservé à l'action, header en onglet de classeur.
  - Nouveau logo typographique EWME sur mes initiales, dont le dernier E se retourne comme une parenthèse.
  - J'ai rédigé la note de positionnement et la charte graphique, ajouté la page « Usage de l'IA » et créé le projet Astro le 17/10.
- **Ce qui a coincé.**
  - Trouver un style qui soit vraiment le mien : l'IA proposait des choses correctes mais impersonnelles, jusqu'à ce que je lui apporte mes propres références (photos de mes dessins et de mes projets).
  - Cinq variantes de header avant de retenir l'onglet.
  - PocketBase ne pouvait pas tourner sur Netlify.
- **Décidé.** Vert sapin plutôt que bleu marine, rouge uniquement pour l'action principale, et un hébergement sur un VPS avec mon propre nom de domaine.

## Du 19 au 25 octobre · Recherches graphiques

- **Fait.** Pas de développement cette semaine : uniquement des recherches pour un nouvel univers graphique.

## Du 26 octobre au 8 novembre · Intégration en Astro

- **Fait.** Toute la maquette codée en Astro le 02/11 : accueil, projets avec filtres, études de cas, galerie, à propos, contact, mentions légales, usage de l'IA et page 404. Les composants sont réutilisables (header, footer, boutons, cartes) et le contenu est séparé du code (`projets.ts`, `site.ts`).
- **Ce qui a coincé.** Garder la mise en page à une taille raisonnable : dans la première maquette, on confondait la version desktop et la version mobile.
- **Décidé.**
  - Astro, l'outil que j'apprends depuis la 1re année et que je maîtrise : pas besoin d'en chercher un autre.
  - Un rendu globalement plus petit et plus aéré.

## Du 9 au 15 novembre · Identité et contenus

- **Fait.**
  - **10/11** : logo à espacement régulier, header avec un panneau vert et un onglet sous la page active, statut « stage » dans un onglet, CV en PDF.
  - **10/11 → 12/11** : trois pistes d'écran de chargement (Panneau, Parenthèses, Repères).
  - **12/11** : études de cas TiK•TaK, Climat Outre-Mer et La Cimade.
  - **13/11** : thème clair / sombre et menu à onglets fantômes, chacun sur sa branche.
- **Ce qui a coincé.**
  - La maquette ne dessinait pas le mobile : il a fallu décider du comportement du menu sous 1024 px.
  - Pour les études de cas, trouver des textes qui font comprendre le projet sans trop en lire : une page trop chargée décourage le visiteur.
- **Décidé.**
  - L'écran « Les parenthèses » : le concept est original, il reprend les E de mon prénom et de mon nom, et le W et le M y sont enfermés.
  - Une structure fixe pour chaque étude de cas : contexte, défi, solution, bilan, avec des textes courts.

## Du 16 au 22 novembre · Finitions, qualité et mise en ligne

- **Fait.**
  - **Fonctions** : formulaire de contact relié à PocketBase ; étiquettes de projets par domaine ; mentions légales et RGPD complètes.
  - **Animations** : titre tapé lettre par lettre, image du hero qui s'ouvre en cercle, accordéon des projets, carrousel, anneau des passions, galerie en champ infini, grille de fond en parallaxe.
  - **Qualité** : audit (textes alternatifs, clavier, contrastes, orthographe, Lighthouse) et responsive vérifié sur 13 pages.
  - **Mise en ligne (17/11)** : dépôt GitHub public, puis le site sur mon VPS en HTTPS, à l'adresse portfolio.ewan-menigoz.fr.
  - **Contenus** : nouveau projet Iris VOD ; ma photo réservée à la page À propos.
  - **Communication** : bannière LinkedIn et carrousels Instagram.
  - **Documents** : note de positionnement mise à jour, README, maquette Figma rangée.
  - **Version anglaise (18/11)** : tout le site traduit, sous `/en/`, avec un sélecteur « FR / EN » à côté du logo.
  - **Vignettes (18/11)** : les trois cartes de l'accueil refaites en 1600 × 1000 px (celle de TiK•TaK était floue), et une image TiK•TaK nette pour le carrousel du hero.
- **Ce qui a coincé.**
  - **La galerie** : plusieurs versions avant de trouver la bonne (bloc vert, boîte 3D, puis champ infini).
  - **La grille de fond** : elle tremblait au défilement, corrigée en la mettant sur un calque fixe.
  - **La mise en ligne** : port SSH particulier, erreur 403 due aux droits des fichiers, cache DNS.
  - **Les notifications par e-mail du formulaire** : abandonnées, car le serveur d'envoi refusait la connexion.
  - **Le sélecteur de langue** : entre 1024 et 1400 px, il touchait le premier onglet du menu. Le nom « Ewan Menigoz » est masqué à ces largeurs, le logo reste.
- **Décidé.**
  - Des animations discrètes, déclenchées par le visiteur et coupées si son système demande de réduire les animations.
  - Un bouton par rôle et par fond, au lieu d'une multitude de couleurs.
  - Consulter les messages directement dans PocketBase.
  - Le sélecteur de langue à côté du logo, comme sur ma capture, la langue active soulignée.

---

## Présence professionnelle : pourquoi LinkedIn et Instagram

LinkedIn, je l'utilise depuis la 1re année. C'est indispensable dans le milieu professionnel : c'est là que les recruteurs et les tuteurs de stage vérifient un profil. Instagram, c'est le réseau sur lequel je passe le plus de temps, et c'est le plus simple pour partager des études de cas, des projets et des collaborations. Le format carrousel me permet de raconter chaque projet en quatre visuels. Sur les deux réseaux, je reprends l'identité du portfolio (fond crème, vert sapin, logo EWME), et chaque publication renvoie vers le site.
