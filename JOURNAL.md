# Journal de bord — Portfolio Ewan Menigoz

> Ce fichier raconte le projet semaine par semaine : ce que j'ai fait, ce qui a coincé et ce que j'ai décidé.
> Il ne détaille pas l'usage de l'IA outil par outil : c'est le rôle du fichier [`IA.md`].
> Les contrôles d'accessibilité, de performance, de référencement et de conformité sont consignés dans [`QUALITE.md`].

---

## Avant la refonte (dates à compléter)

**Fait**
- Première version de la maquette Figma avec un logo en fleur d'hibiscus.
- Soutenance maquette devant un jury de professionnels.

**Ce qui a coincé**
- Retours du jury : 
- Le rendu est trop gros, prend trop d’espace sur l’écran, carrément du gigantisme.
- La photo de moi en grand angle ne me met pas du tout en valeur, il faut penser à une autre photo de moi.
- Là où beaucoup de portfolios étudiants se perdent dans des animations excessives ou des concepts trop abstraits qui nuisent à la navigation, le mien assume une clarté absolue inspirée des standards professionnels. L'identité visuelle repose sur un contraste fort qui me définit : une architecture "Premium Tech" qui démontre mon esprit logique, habilement contrebalancée par un emblème naturel et organique. Cette approche prouve ma capacité à concevoir des produits numériques qui sont à la fois techniquement irréprochables et profondément centrés sur l'humain.
Le terme “Premium Tech” n’existe pas vraiment, ou du moins, de qualifie pas du tout mon travail. Il faut trouver autre chose, ou retravailler entièrement le positionnement.
-Justifier les typographies, en trouver une ou plusieurs autres, et surtout, trouver une justification pour leur utilisation.
-L’idée du logo vectoriel “fleur d’hibiscus” n’est pas vraiment significatif. Pour un portfolio, il faudrait un logo vraiment personnel, peut-être penser à un logo typographique (Ewan, EM, etc.)
-A propos de l’usage de colonnes , il ne faut pas hésiter à rendre petits des éléments car on confond maquette desktop & mobile. Peut-être réduire le nombre de colonnes, ajouter des lignes ?
-Il faut qu’on puisse voir clairement les projets. On reprend le principe du gigantisme, c’est beaucoup trop gros à l’écran. Peut-être disposer les projets en grille.
-Il faut absolument que je justifie mes partis pris graphiques. Pourquoi j’ai choisi cette atmosphère ? Pourquoi ces couleurs ? Ces formes ? Etc. 
-Il faut rendre le formulaire de contact moins gros à l’écran.

**Décidé**
- Reprendre entièrement la maquette en partant des retours du jury plutôt que de corriger l'existant.

---

## Semaine du 12 au 18 octobre 2026

**Fait**
- **16/10 · Logo.** Abandon de l'hibiscus pour un logo typographique géométrique sur mes initiales, EWME.
- **16/10 · Refonte V2.** Nouveau style clair : fond crème #FAF7F2, vert sapin #1E4D3B en couleur d'accent, rouge #CE1A1B pour l'action. Nouveaux composants : header, footer, cartes projet animées, carrousel, pages projet (OpenSigne, Affiches touristiques), galerie, à propos, contact, mentions légales.
- **17/10 · Refonte V3.** 13 variables de couleur, boutons à taille fixe avec état Focus, lien de navigation animé, section « Méthode » sur l'accueil, filtres avec compteur, variante en bleu marine pour comparer, spécifications des animations.
- **18/10 · V3.1.** Header agrandi, rouge réservé à l'action principale, bandeaux défilants remplacés par un panneau fixe des compétences, fond tramé sur toutes les pages, sur-titres supprimés.
- **18/10 · Documents.** Note de positionnement (livrable 2.1), charte graphique, page « Ma façon de travailler avec l'IA » ajoutée à la maquette avec un renvoi depuis À propos et le pied de page.

**Ce qui a coincé**
- Trouver le niveau graphique que je voulais : il a fallu plusieurs passes (V2, V3, V3.1) avant d'arriver à un rendu qui me convienne.
- Le header : cinq variantes testées avant de retenir l'onglet de classeur.
- L'hébergement : PocketBase (base de données du formulaire de contact) ne peut pas tourner sur Netlify.

**Décidé**
- Header en onglet de classeur, avec animation.
- Logo EWME « E détachés », avec le dernier E retourné pour former une parenthèse.
- Rouge uniquement pour l'action principale, vert pour tout le reste du balisage.
- Hébergement sur un **VPS**, avec mon propre nom de domaine, pour faire tourner Astro et PocketBase ensemble.
- Note sur l'IA : une page dédiée, reliée depuis le pied de page, et un court passage dans À propos.
- Choix final entre vert sapin et bleu marine : *vert sapin*.

---

## Semaine du 19 au 25 octobre 2026

**Fait**
- *(à compléter)*

**Ce qui a coincé**
- *(à compléter)*

**Décidé**
- *(à compléter)*


---

## Semaine du 9 au 15 novembre 2026

**Fait**
- **10/11 · Nouveau logo dans le code.** Logo EWME à espacement régulier entre toutes les lettres, composant unique `Logo.astro` en currentColor ; favicons régénérés (SVG, PNG 32 et 180) sur fond crème.
- **10/11 · Nouveau header.** Toutes les pages commencent par la barre de navigation et un grand panneau vert ; sur les pages du menu, un onglet sort du panneau sous le lien actif. Les titres et intros des pages sont déplacés dans le panneau.
- **10/11 · Mentions légales.** L'adresse Netlify est retirée ; l'hébergeur du VPS et le nom de domaine restent à compléter.
- **10/11 · Vérifications.** Toutes les pages contrôlées en 1440 px et 390 px. Lighthouse (mobile) : performance 98–99, accessibilité 100, bonnes pratiques 100, SEO 100.

**Ce qui a coincé**
- La maquette ne dessine pas le mobile : il a fallu décider d'un comportement (menu « Menu » sous 1024 px, panneau sans onglet, coins de 28 px).
- Les quatre liens espacés de 72 px plus le bouton ne tiennent pas sous environ 1050 px : d'où le seuil de 1024 px pour le menu, avec des marges réduites entre 1024 et 1280 px.
- Lighthouse signalait un saut de niveau de titre sur la page Projets (h1 puis h3) : ajout d'un h2 invisible.

**Décidé**
- Onglet dessiné en CSS (un rectangle + deux « oreilles » courbes), plutôt qu'un SVG recalculé pour chaque page.
- Glissement de l'onglet avec les View Transitions natives du navigateur (sans routeur JavaScript), 250 ms, coupé avec « réduire les animations ».
- Coins du panneau : ceux de la maquette Figma (arc de cercle de 40 px), donc un simple border-radius.

- **10/11 · Statut « stage » du hero.** Retour reçu : l'étiquette blanche « Je recherche un stage en design UI/UX » (avec le point pulsé) et la pastille ronde « Stage recherché » faisaient « IA ». Plusieurs variantes testées dans Figma (section « Tests — statut stage (F + H) ») ; choix de la combinaison F + H : un onglet crème découpé dans le bas du panneau (le négatif de l'onglet du menu) qui donne les infos du stage, et une note au crayon « écrivez-moi ! » avec une flèche dessinée vers le bouton « Me proposer un stage ».
  - Ce qui a coincé : entre 1024 et 1280 px, les deux boutons passent sur deux lignes et la note recouvrait « Voir les projets » → note affichée à partir de 1280 px, et place réservée sous les boutons pour l'onglet. Le bloc header + hero mesurait 708 px au lieu de 676 (marge basse trop grande sous la pile de photos) → corrigé.
  - Décidé : la phrase de l'onglet est construite à partir des données du stage (pas en dur) ; la trame du fond est prolongée dans l'onglet ; en mobile, la même phrase devient une ligne de texte sous les boutons ; police Caveat ajoutée en Bold seulement.

- **13/11 · Thème clair / sombre (phase 1, branche `feat/theme`).** Bouton rond soleil/lune entre le menu et « Me contacter » (composant daisyUI `swap` + `theme-controller`), deux thèmes `ewme-clair` (par défaut) et `ewme-sombre`, choix mémorisé entre les pages par un petit script dans le `<head>` (pas de flash). Menu décalé de 48 px vers la gauche comme dans la maquette.
  - Ce qui a coincé : les couleurs étaient écrites en dur (environ 250 emplois de `text-encre`, `bg-white`, `bg-creme`…). Le crème sert à la fois de fond de page et de texte sur le panneau vert, donc impossible de simplement « inverser » les couleurs. La maquette Figma n’a pas de page en thème sombre : couleurs des cartes et des surfaces à définir. Le vert sapin en texte sur fond sombre n’atteint que 1,9:1.
  - Décidé : des couleurs par rôle (fond, texte principal, texte secondaire, carte, surface, trait, vert texte) qui changent avec le thème ; le panneau vert, le rouge et les objets « physiques » (polaroids, pastilles et bouton blanc sur le panneau, onglet crème) restent fixes. En sombre : cartes #1E1E1B, surfaces #24231F, vert des textes éclairci en #8FC2A8 (9:1). Thème clair même si l’appareil est en mode sombre. Bouton thème absent en mobile pour l’instant (pas de maquette mobile).
- **13/11 · Menu à onglets fantômes (phase 2, branche `feat/menu-onglets`).** Chaque lien inactif a un contour d'onglet en pointillé, comme un intercalaire de classeur vide ; au survol et au focus clavier, il se remplit (sable en clair, crème à 8 % en sombre) et son trait devient plein. L'onglet vert reste le seul repère de la page active : il glisse en 0,35 s. Liens inactifs en encre au lieu du gris.
  - Ce qui a coincé : ma première version ne ressemblait pas à la maquette (Ewan l'a refusée) : j'avais suivi la liste écrite (cellules de 120 px, onglet de 152 px, trait à 35 %) au lieu de mesurer dans Figma. Refait d'après Figma : liens espacés de 72 px, fantômes centrés sur chaque texte avec un trait encre plein (pointillé), onglet actif de 154 px au total (dessus de 86 px + deux courbes de 34 px), la même silhouette que les fantômes. À 1024 px, le fantôme d'« Accueil » touchait la signature. Deuxième retour d'Ewan : au survol, le remplissage du fantôme voisin recouvrait le bas de la courbe de l'onglet vert, qui paraissait coupé. Corrigé avec le même empilement que Figma : remplissage du fantôme sous l'onglet vert, trait par-dessus. Puis Ewan a affiné la maquette : fantômes séparés de 12 px (une case de 152 px par lien, texte centré), panneau et onglet actif devant les fantômes, bouton thème 12 px après le menu ; repris tel quel dans le code, avec des cases de 128 px entre 1024 et 1280 px (non dessiné) pour que tout tienne.
  - Décidé : la maquette Figma prime sur la liste écrite quand elles divergent ; pas de marge intérieure dans le header entre 1024 et 1280 px (28 px restent entre la signature et le premier fantôme) ; le petit soulignement vert au survol est retiré (le fantôme le remplace) ; le contour de focus reste le vert existant ; rien en mobile (pas de maquette).

## Semaine du 16 au 22 novembre 2026

**Fait**
- **16/11 · Formulaire de contact branché sur PocketBase (branche `feat/formulaire`).** Envoi en `fetch` (sans dépendance) vers `pb.ewan-menigoz.fr`, collection « messages » : nom, email, objet, message, consentement et champ piège `site_web`. Case de consentement RGPD obligatoire, bouton désactivé pendant l'envoi, messages de réussite et d'erreur annoncés aux lecteurs d'écran. L'adresse de l'instance est dans `.env` (ignoré par git).

**Ce qui a coincé**
- La collection n'avait pas de champ « Objet », alors que le formulaire en a un : dans un premier temps, l'objet était placé en tête du message.

**Décidé**
- Ewan a ajouté un champ texte `objet` (150 caractères maximum) dans la collection : l'objet y est envoyé séparément, et le champ Objet du formulaire est limité à 150 caractères (`maxlength`).
- Champ piège : sorti de l'écran (pas `display: none`, que certains robots repèrent), caché aux lecteurs d'écran et hors du parcours clavier ; s'il est rempli, le site affiche une réussite sans rien envoyer.
- Aucun envoi réel pendant les tests (pour ne pas écrire dans la vraie base) : envoi simulé dans le navigateur.

**Fait (suite)**
- **16/11 · Fusion dans `main`.** `feat/formulaire` fusionnée dans `main` en avance rapide (sans conflit) ; build OK. Je travaille désormais uniquement sur `main`.
- **16/11 · Étiquettes des projets refaites (domaines + sous-domaines).** Les anciennes étiquettes mélangeaient domaine, sous-domaine et support (« UI/UX · Web app », « Direction artistique · Print »), et rien ne reliait les cartes aux filtres. Trois pistes dessinées dans Claude Design (pastilles, rail des 3 domaines, code couleur) ; j'ai retenu la **variante A** : une pastille verte par domaine MMI (Développement, Création numérique, Communication) avec un pictogramme, puis les sous-domaines en mots-clés gris. Les mêmes pictogrammes sont sur les filtres. Nouveau composant `PastillesDomaines.astro`, utilisé sur les cartes (accueil, page Projets) et en haut des études de cas (version crème sur le panneau vert).

**Décidé**
- Sous-domaines : TiK•TaK = UX, UI, Front-end ; OpenSigne = UI, UX, SEO ; Affiches touristiques = Direction artistique ; Climat Outre-Mer = Datavisualisation, Front-end ; La Cimade = Branding, Identité visuelle.
- Les supports (Web, Web app, Print) ne sont plus des étiquettes : ils restent dans la fiche projet (Livrables). « Projet étudiant / collectif » est retiré des étiquettes : il figure déjà dans la ligne Contexte de la fiche.
- Les domaines s'affichent toujours dans le même ordre (Dev, Créa, Com), et les filtres portent leur nom complet.
- Pictogramme de la Communication : bulle de dialogue (`icon-message.svg`, même style que les icônes Figma) — à reporter dans Figma.
- Sur mobile (non dessiné), le trait entre pastilles et sous-domaines est masqué sous 640 px.

- **16/11 · Animation des filtres, contexte allégé, nouvelles affiches.** Les filtres de la page Projets animent la grille avec les View Transitions natives (déjà utilisées entre les pages, aucune dépendance) : les cartes glissent vers leur nouvelle place, celles qui arrivent apparaissent en fondu avec un léger zoom, celles qui partent s'effacent. Pas d'animation avec « réduire les animations » ni sur Firefox (changement immédiat). Les points verts des étiquettes du bloc Contexte sont retirés. Affiches touristiques : les 3 affiches sont remplacées par les versions finales (titre, logos, signature), et les 4e et 5e images sont deux captures de mon travail de vectorisation dans Affinity (clocher du temple, gradins du théâtre), à la place du détail du temple et de la note d'intention.

**Décidé (suite)**
- Le triptyque des études de cas garde les proportions de chaque image (il n'y a plus de hauteur fixe) : les affiches s'affichent entières, titre compris. TiK•TaK et Climat ne bougent presque pas (483 px au lieu de 490).
- Les nouvelles affiches remplacent aussi les anciennes dans la galerie, la pile de polaroïds et la vignette (même fichier).

