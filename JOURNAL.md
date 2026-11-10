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
