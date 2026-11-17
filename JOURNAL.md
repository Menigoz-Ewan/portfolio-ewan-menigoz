# Journal de bord — Portfolio Ewan Menigoz

> Ce fichier raconte le projet semaine par semaine : ce que j'ai fait, ce qui a coincé et ce que j'ai décidé.
> Il ne détaille pas l'usage de l'IA outil par outil : c'est le rôle du fichier [`IA.md`](IA.md).
> Les contrôles d'accessibilité, de performance, de référencement et de conformité sont consignés dans [`QUALITE.md`](QUALITE.md).
>
> Chaque étape suit le même format : **Fait** · **Ce qui a coincé** · **Décidé**.
> Les entrées marquées *(À RELIRE)* ont été rédigées après coup à partir de l'historique git : je dois les vérifier et les compléter.

---

## En bref : la frise du projet

| Date | Étape |
|---|---|
| Avant le 16/10 | Première maquette (logo en fleur d'hibiscus), soutenance maquette devant un jury |
| 16 → 18/10 | Refonte complète de la maquette (V2 → V3.1), logo EWME, note de positionnement, charte |
| 17/10 | Création du projet Astro + Tailwind CSS + daisyUI |
| 02/11 | Intégration de toute la maquette en Astro |
| 10/11 | Nouveau logo et header à onglet ; statut « stage » du hero ; tests d'écran de chargement ; CV |
| 12/11 | Études de cas TiK•TaK, Climat Outre-Mer et La Cimade ; écran de chargement « Les parenthèses » |
| 13/11 | Thème clair / sombre ; menu à onglets fantômes |
| 16/11 | Formulaire PocketBase ; onglets « pilule », accueil en accordéon, bouton thème « éclipse » ; fusion dans `main` ; étiquettes des projets ; filtres animés et affiches finales ; mentions légales et RGPD ; animations du hero ; audit qualité ; responsive |

---

## Avant la refonte *(dates à compléter)*

### Première maquette et soutenance

**Fait**
- Première version de la maquette Figma avec un logo en fleur d'hibiscus.
- Soutenance maquette devant un jury de professionnels.

**Ce qui a coincé** — les retours du jury :
- Le rendu est trop gros, prend trop d'espace sur l'écran, carrément du gigantisme.
- La photo de moi en grand angle ne me met pas du tout en valeur : il faut penser à une autre photo.
- Le terme « Premium Tech » de ma note de positionnement n'existe pas vraiment, ou du moins ne qualifie pas du tout mon travail. Il faut trouver autre chose, ou retravailler entièrement le positionnement. Pour mémoire, le texte présenté :
  > « Là où beaucoup de portfolios étudiants se perdent dans des animations excessives ou des concepts trop abstraits qui nuisent à la navigation, le mien assume une clarté absolue inspirée des standards professionnels. L'identité visuelle repose sur un contraste fort qui me définit : une architecture "Premium Tech" qui démontre mon esprit logique, habilement contrebalancée par un emblème naturel et organique. Cette approche prouve ma capacité à concevoir des produits numériques qui sont à la fois techniquement irréprochables et profondément centrés sur l'humain. »
- Justifier les typographies, en trouver une ou plusieurs autres, et surtout trouver une justification à leur utilisation.
- L'idée du logo vectoriel « fleur d'hibiscus » n'est pas vraiment significative. Pour un portfolio, il faudrait un logo vraiment personnel, peut-être typographique (Ewan, EM, etc.).
- À propos des colonnes : ne pas hésiter à rendre des éléments plus petits, car on confond maquette desktop et mobile. Peut-être réduire le nombre de colonnes, ajouter des lignes ?
- Il faut qu'on voie clairement les projets. On retrouve le gigantisme : c'est beaucoup trop gros à l'écran. Peut-être disposer les projets en grille.
- Je dois absolument justifier mes partis pris graphiques : pourquoi cette atmosphère ? Pourquoi ces couleurs ? Ces formes ?
- Le formulaire de contact doit être moins gros à l'écran.

**Décidé**
- Reprendre entièrement la maquette en partant des retours du jury plutôt que de corriger l'existant.

---

## Semaine du 12 au 18 octobre 2026

### 16 → 18/10 · Refonte de la maquette (V2 → V3.1)

**Fait**
- **16/10 · Logo.** Abandon de l'hibiscus pour un logo typographique géométrique sur mes initiales, EWME.
- **16/10 · Refonte V2.** Nouveau style clair : fond crème #FAF7F2, vert sapin #1E4D3B en couleur d'accent, rouge #CE1A1B pour l'action. Nouveaux composants : header, footer, cartes projet animées, carrousel, pages projet (OpenSigne, Affiches touristiques), galerie, à propos, contact, mentions légales.
- **17/10 · Refonte V3.** 13 variables de couleur, boutons à taille fixe avec état Focus, lien de navigation animé, section « Méthode » sur l'accueil, filtres avec compteur, variante en bleu marine pour comparer, spécifications des animations.
- **17/10 · Projet Astro.** Création du dépôt : Astro, Tailwind CSS et daisyUI.
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

*(à compléter : rien dans l'historique git cette semaine)*

---

## Semaine du 26 octobre au 8 novembre 2026

### 02/11 · Intégration de la maquette en Astro *(À RELIRE)*

**Fait**
- Toute la maquette Figma codée en Astro : accueil, page Projets avec ses filtres, études de cas OpenSigne et Affiches touristiques, galerie, à propos, contact, mentions légales, usage de l'IA et page 404.
- Composants réutilisables : header, footer, bouton, carte projet, pile de polaroïds du hero, cartes « Hors écran », menu mobile, pages « document » (sommaire + sections), icônes exportées de Figma.
- Contenus séparés du code : les projets dans `src/data/projets.ts`, les informations générales dans `src/data/site.ts` ; sitemap et `robots.txt`.

**Ce qui a coincé**
- *(à compléter)*

**Décidé**
- *(à compléter)*

---

## Semaine du 9 au 15 novembre 2026

### 10/11 · Nouveau logo et header à onglet

**Fait**
- **Logo.** Logo EWME à espacement régulier entre toutes les lettres, composant unique `Logo.astro` en currentColor ; favicons régénérés (SVG, PNG 32 et 180) sur fond crème.
- **Header.** Toutes les pages commencent par la barre de navigation et un grand panneau vert ; sur les pages du menu, un onglet sort du panneau sous le lien actif. Les titres et intros des pages sont déplacés dans le panneau.
- **Mentions légales.** L'adresse Netlify est retirée ; l'hébergeur du VPS et le nom de domaine restent à compléter.
- **Vérifications.** Toutes les pages contrôlées en 1440 px et 390 px. Lighthouse (mobile) : performance 98–99, accessibilité 100, bonnes pratiques 100, SEO 100.

**Ce qui a coincé**
- La maquette ne dessine pas le mobile : il a fallu décider d'un comportement (menu « Menu » sous 1024 px, panneau sans onglet, coins de 28 px).
- Les quatre liens espacés de 72 px plus le bouton ne tiennent pas sous environ 1050 px : d'où le seuil de 1024 px pour le menu, avec des marges réduites entre 1024 et 1280 px.
- Lighthouse signalait un saut de niveau de titre sur la page Projets (h1 puis h3) : ajout d'un h2 invisible.

**Décidé**
- Onglet dessiné en CSS (un rectangle + deux « oreilles » courbes), plutôt qu'un SVG recalculé pour chaque page.
- Glissement de l'onglet avec les View Transitions natives du navigateur (sans routeur JavaScript), 250 ms, coupé avec « réduire les animations ».
- Coins du panneau : ceux de la maquette Figma (arc de cercle de 40 px), donc un simple border-radius.

### 10/11 · Statut « stage » du hero

**Fait**
- Retour reçu : l'étiquette blanche « Je recherche un stage en design UI/UX » (avec le point pulsé) et la pastille ronde « Stage recherché » faisaient « IA ». Plusieurs variantes testées dans Figma (section « Tests — statut stage (F + H) ») ; choix de la combinaison F + H : un onglet crème découpé dans le bas du panneau (le négatif de l'onglet du menu) qui donne les infos du stage, et une note au crayon « écrivez-moi ! » avec une flèche dessinée vers le bouton « Me proposer un stage ».

**Ce qui a coincé**
- Entre 1024 et 1280 px, les deux boutons passent sur deux lignes et la note recouvrait « Voir les projets » : note affichée à partir de 1280 px, et place réservée sous les boutons pour l'onglet.
- Le bloc header + hero mesurait 708 px au lieu de 676 (marge basse trop grande sous la pile de photos) : corrigé.

**Décidé**
- La phrase de l'onglet est construite à partir des données du stage (pas en dur) ; la trame du fond est prolongée dans l'onglet ; en mobile, la même phrase devient une ligne de texte sous les boutons ; police Caveat ajoutée en Bold seulement.

### 10/11 · Écran de chargement (tests) et CV *(À RELIRE)*

**Fait**
- Trois pistes d'écran de chargement codées sur des pages de test : « Panneau », « Parenthèses » et « Repères ».
- CV ajouté en PDF (`public/cv-ewan-menigoz.pdf`), téléchargeable depuis À propos et Contact.

**Ce qui a coincé**
- *(à compléter)*

**Décidé**
- *(à compléter)*

### 12/11 · Études de cas TiK•TaK, Climat Outre-Mer et La Cimade *(À RELIRE)*

**Fait**
- Pages TiK•TaK et Climat Outre-Mer, puis La Cimade avec son dossier PDF (`public/projets/la-cimade-refonte-identite.pdf`).
- Écran de chargement : la piste « Les parenthèses » est retenue (`EcranChargement.astro`, une fois par visite) ; les pages et composants de test sont supprimés.
- `projets.ts` réorganisé en sections : imports, types, catégories, puis un bloc par projet.

**Ce qui a coincé**
- *(à compléter)*

**Décidé**
- *(à compléter)*

### 13/11 · Thème clair / sombre (phase 1, branche `feat/theme`)

**Fait**
- Bouton rond soleil/lune entre le menu et « Me contacter » (composant daisyUI `swap` + `theme-controller`), deux thèmes `ewme-clair` (par défaut) et `ewme-sombre`, choix mémorisé entre les pages par un petit script dans le `<head>` (pas de flash). Menu décalé de 48 px vers la gauche comme dans la maquette.

**Ce qui a coincé**
- Les couleurs étaient écrites en dur (environ 250 emplois de `text-encre`, `bg-white`, `bg-creme`…). Le crème sert à la fois de fond de page et de texte sur le panneau vert, donc impossible de simplement « inverser » les couleurs.
- La maquette Figma n'a pas de page en thème sombre : couleurs des cartes et des surfaces à définir. Le vert sapin en texte sur fond sombre n'atteint que 1,9:1.

**Décidé**
- Des couleurs par rôle (fond, texte principal, texte secondaire, carte, surface, trait, vert texte) qui changent avec le thème ; le panneau vert, le rouge et les objets « physiques » (polaroïds, pastilles et bouton blanc sur le panneau, onglet crème) restent fixes.
- En sombre : cartes #1E1E1B, surfaces #24231F, vert des textes éclairci en #8FC2A8 (9:1). Thème clair même si l'appareil est en mode sombre. Bouton thème absent en mobile pour l'instant (pas de maquette mobile).

### 13/11 · Menu à onglets fantômes (phase 2, branche `feat/menu-onglets`)

**Fait**
- Chaque lien inactif a un contour d'onglet en pointillé, comme un intercalaire de classeur vide ; au survol et au focus clavier, il se remplit (sable en clair, crème à 8 % en sombre) et son trait devient plein. L'onglet vert reste le seul repère de la page active : il glisse en 0,35 s. Liens inactifs en encre au lieu du gris.

**Ce qui a coincé**
- J'ai refusé la première version, codée par Claude : elle suivait la liste écrite (cellules de 120 px, onglet de 152 px, trait à 35 %) au lieu des mesures de Figma. Refaite d'après Figma : liens espacés de 72 px, fantômes centrés sur chaque texte avec un trait encre plein (pointillé), onglet actif de 154 px au total (dessus de 86 px + deux courbes de 34 px), la même silhouette que les fantômes.
- À 1024 px, le fantôme d'« Accueil » touchait la signature.
- Au survol, le remplissage du fantôme voisin recouvrait le bas de la courbe de l'onglet vert, qui paraissait coupé : corrigé avec le même empilement que Figma (remplissage du fantôme sous l'onglet vert, trait par-dessus).
- J'ai ensuite affiné la maquette : fantômes séparés de 12 px (une case de 152 px par lien, texte centré), panneau et onglet actif devant les fantômes, bouton thème 12 px après le menu ; repris tel quel dans le code, avec des cases de 128 px entre 1024 et 1280 px (non dessiné) pour que tout tienne.

**Décidé**
- La maquette Figma prime sur la liste écrite quand elles divergent.
- Pas de marge intérieure dans le header entre 1024 et 1280 px (28 px restent entre la signature et le premier fantôme) ; le petit soulignement vert au survol est retiré (le fantôme le remplace) ; le contour de focus reste le vert existant ; rien en mobile (pas de maquette).

---

## Semaine du 16 au 22 novembre 2026

### 16/11 · Formulaire de contact branché sur PocketBase (branche `feat/formulaire`)

**Fait**
- Envoi en `fetch` (sans dépendance) vers `pb.ewan-menigoz.fr`, collection « messages » : nom, e-mail, objet, message, consentement et champ piège `site_web`. Case de consentement RGPD obligatoire, bouton désactivé pendant l'envoi, messages de réussite et d'erreur annoncés aux lecteurs d'écran. L'adresse de l'instance est dans `.env` (ignoré par git).

**Ce qui a coincé**
- La collection n'avait pas de champ « Objet », alors que le formulaire en a un : dans un premier temps, l'objet était placé en tête du message.

**Décidé**
- J'ai ajouté un champ texte `objet` (150 caractères maximum) dans la collection : l'objet y est envoyé séparément, et le champ Objet du formulaire est limité à 150 caractères (`maxlength`).
- Champ piège : sorti de l'écran (pas `display: none`, que certains robots repèrent), caché aux lecteurs d'écran et hors du parcours clavier ; s'il est rempli, le site affiche une réussite sans rien envoyer.
- Aucun envoi réel pendant les tests (pour ne pas écrire dans la vraie base) : envoi simulé dans le navigateur.

### 16/11 · Fusion dans `main`

**Fait**
- `feat/formulaire` fusionnée dans `main` en avance rapide (sans conflit) ; build OK.

**Décidé**
- Je travaille désormais uniquement sur `main`.

### 16/11 · Étiquettes des projets (domaines + sous-domaines)

**Fait**
- Les anciennes étiquettes mélangeaient domaine, sous-domaine et support (« UI/UX · Web app », « Direction artistique · Print »), et rien ne reliait les cartes aux filtres. Trois pistes dessinées dans Claude Design (pastilles, rail des 3 domaines, code couleur) ; j'ai retenu la **variante A** : une pastille verte par domaine MMI (Développement, Création numérique, Communication) avec un pictogramme, puis les sous-domaines en mots-clés gris. Les mêmes pictogrammes sont sur les filtres. Nouveau composant `PastillesDomaines.astro`, utilisé sur les cartes (accueil, page Projets) et en haut des études de cas (version crème sur le panneau vert).

**Décidé**
- Sous-domaines : TiK•TaK = UX, UI, Front-end ; OpenSigne = UI, UX, SEO ; Affiches touristiques = Direction artistique ; Climat Outre-Mer = Datavisualisation, Front-end ; La Cimade = Branding, Identité visuelle.
- Les supports (Web, Web app, Print) ne sont plus des étiquettes : ils restent dans la fiche projet (Livrables). « Projet étudiant / collectif » est retiré des étiquettes : il figure déjà dans la ligne Contexte de la fiche.
- Les domaines s'affichent toujours dans le même ordre (Dev, Créa, Com), et les filtres portent leur nom complet.
- Pictogramme de la Communication : bulle de dialogue (`icon-message.svg`, même style que les icônes Figma) — à reporter dans Figma.
- Sur mobile (non dessiné), le trait entre pastilles et sous-domaines est masqué sous 640 px.

### 16/11 · Filtres animés, contexte allégé, affiches finales

**Fait**
- Les filtres de la page Projets animent la grille avec les View Transitions natives (déjà utilisées entre les pages, aucune dépendance) : les cartes glissent vers leur nouvelle place, celles qui arrivent apparaissent en fondu avec un léger zoom, celles qui partent s'effacent. Pas d'animation avec « réduire les animations » ni sur Firefox (changement immédiat).
- Les points verts des étiquettes du bloc Contexte sont retirés.
- Affiches touristiques : les 3 affiches sont remplacées par les versions finales (titre, logos, signature), et les 4e et 5e images sont deux captures de mon travail de vectorisation dans Affinity (clocher du temple, gradins du théâtre), à la place du détail du temple et de la note d'intention.

**Décidé**
- Le triptyque des études de cas garde les proportions de chaque image (il n'y a plus de hauteur fixe) : les affiches s'affichent entières, titre compris. TiK•TaK et Climat ne bougent presque pas (483 px au lieu de 490).
- Les nouvelles affiches remplacent aussi les anciennes dans la galerie, la pile de polaroïds et la vignette (même fichier).

### 16/11 · Mentions légales, RGPD et confidentialité

**Fait**
- Vérification : le texte annonçait « peut utiliser des cookies de mesure d'audience » alors que le site n'en dépose aucun (inventaire fait dans le navigateur) ; directeur de la publication, téléphone de l'hébergeur, base légale, durée de conservation, destinataire, droits complets et recours à la CNIL manquaient ; la case du formulaire oubliait l'objet du message.
- Ajouts : crédits (co-auteurs, marques et logos de tiers, données Météo-France, polices et outils), liens externes, tableau du stockage local, date de mise à jour.
- Page complétée : hébergeur Infomaniak Network SA (Genève, centre de données en Suisse), domaine portfolio.ewan-menigoz.fr, messages conservés 12 mois, journaux du serveur 12 mois au plus, équipe OpenSigne (Enzo Hillairet, Lilian Maitre), adresse de l'IUT corrigée (4 place Tharradin). L'adresse du site est aussi mise à jour dans `astro.config.mjs` et `robots.txt` (sitemap).

**Décidé**
- Une seule page pour les mentions légales, le RGPD et la confidentialité, en 5 sections ; le lien « Confidentialité » du pied de page mène à la section Données personnelles.
- Adresse personnelle non publiée (site non professionnel, article 6-III-2 de la LCEN) : elle est donnée à l'hébergeur.
- Données Météo-France : « données publiques », sans nom de licence.
- PocketBase est hébergé chez Infomaniak, comme le site : la Suisse a une décision d'adéquation de la Commission européenne, ce qui est précisé dans la section RGPD.

### 16/11 · Hero de l'accueil : nouvelles animations (3 passes)

**Fait**
- Douze variantes dessinées dans Claude Design (3 par élément) ; mes choix : titre B, note C, images C, boutons A.
- **Titre.** « Je conçois des interfaces claires, » monte mot par mot, puis « puis je les code. » se tape lettre par lettre ; le curseur suit la frappe (chaque lettre porte un curseur visible 55 ms, le temps que la suivante apparaisse), puis clignote après le point.
- **Note « écrivez-moi ! ».** La flèche se dessine, puis les lettres apparaissent une à une avec un petit rebond.
- **Images.** La pile de polaroïds qui tournait seule est remplacée par une seule image sans cadre ni légende (`ImageIris.astro`) : à l'arrivée, elle s'ouvre en cercle depuis son centre en se redressant ; chaque clic ouvre l'image suivante (réserve de 7) en cercle depuis le point cliqué, pendant que le cadre rebondit et change d'inclinaison. Les affiches sont agrandies de 22 % pour cacher leurs marges blanches.
- **Boutons.** Nouvelle interaction pour tout le site (`Button.astro`) : la flèche est dans une pastille qui grandit jusqu'à remplir le bouton au survol et au focus clavier, l'icône bouge, et le bouton s'enfonce puis rebondit au clic. Le bouton blanc du hero se remplit en rouge, comme « Me contacter ».

**Ce qui a coincé**
- Les exemples Motion (iris, coverflow, bobble) sont réservés à Motion+ (payant) : code non consultable. Tout est fait en CSS et JavaScript, sans dépendance.
- Trois passes ont été nécessaires : la première version de la note utilisait la mauvaise variante (B au lieu de C), le bouton blanc devenait vert comme le panneau au survol, puis encre ; le collage de 4 images ne correspondait pas à ce que je voulais (une seule image, affichée dynamiquement) ; le curseur était placé dès le départ à la fin du texte.
- Le curseur restait affiché sur plusieurs lettres à la fin de l'animation (fin d'animation en `steps()` mal interprétée) : remplacé par des étapes 0-99 % visibles / 100 % caché. Vérifié en avançant l'animation pas à pas dans le navigateur.

**Décidé**
- Curseur en clignotement continu (mon choix) : il s'arrête seulement avec « réduire les animations ». La règle WCAG 2.2.2 demande de pouvoir arrêter un clignotement de plus de 5 s : c'est un écart assumé, noté dans QUALITE.md (A19).
- Image au clic seulement : plus de défilement automatique, donc plus de bouton pause (`PileDePolaroids.astro` supprimé).
- Lecteurs d'écran : le titre complet est lu d'un bloc (texte masqué) ; la version découpée en lettres leur est cachée. L'image affichée est annoncée (zone `aria-live`).
- Boutons arrondis (pilule) au lieu des coins de 8 px : à reporter dans Figma.

### 16/11 · Audit : textes alternatifs, Lighthouse, clavier, contrastes, orthographe

**Fait**
- 24 textes alternatifs réécrits après avoir regardé chaque image (planche contact) : plusieurs étaient faux (« appareil argentique », « instruments » au lieu d'une batterie…).
- Lighthouse 13.6 sur les 13 pages : performance 99-100, accessibilité, bonnes pratiques et SEO à 100 (mobile et ordinateur).
- Navigation au clavier testée (ordre logique, focus visible, menu mobile avec Échap). Contrastes mesurés par script dans les deux thèmes : minimum 5,33:1.
- Relecture de tout le texte : 23 corrections.

**Ce qui a coincé**
- Lighthouse a d'abord donné 96 en accessibilité sur deux études de cas : il avait mesuré le contraste pendant le fondu d'apparition de la page. Remesuré : 100.
- Le script de contraste signalait des erreurs en thème sombre qui changeaient d'une page à l'autre : la transition de couleur n'était pas finie. Remesuré avec les transitions coupées.

**Décidé**
- Corrections de texte : espace manquant (« lesmentions légales »), « e-mail » partout, « mars-juin » en minuscules, « datavisualisation », « SAE 303 », « et » au lieu de « & », « produit numérique », « que je ne sache expliquer », Pays de Montbéliard (le théâtre est à Mandeure), « Logo » en majuscule dans les livrables de La Cimade.
- Climat Outre-Mer : le site est bien « en cinq temps » : fiche et texte alternatif du schéma corrigés.
- Page 404 : vouvoiement, comme le reste du site.

### 16/11 · Responsive et fichiers de suivi

**Fait**
- Dates chez Beck Technologies ajoutées sur la page À propos : juillet 2025 et juillet 2026.
- Contrôle automatique des débordements sur les 13 pages à 8 largeurs (320 à 1440 px), puis contrôle visuel en 375, 768 et 1024 px. Corrigés : la grille « En bref » de À propos (texte qui débordait à 320 et 375 px), la bande « Hors écran » (cartes coupées entre 768 et 1279 px), un bouton trop long à 320 px, les vignettes de projet rognées sur mobile.
- Hero en mobile : l'ancien polaroïd est remplacé par la même image que sur ordinateur, en plus petit (« touchez la photo ! »).
- Tableaux de `IA.md` et `QUALITE.md` réparés (des lignes vides les coupaient sur GitHub) ; journal réorganisé : frise en tête, une entrée par étape au même format, tout à la 1re personne, étapes manquantes ajoutées d'après l'historique git.

**Ce qui a coincé**
- Le navigateur de test affichait parfois les images avec retard : il a fallu vérifier dans le code (image chargée, dimensions) avant de conclure à un bug.

**Décidé**
- La bande « Hors écran » défile sous 1280 px (au lieu de 768 px) : les 9 cartes ne tiennent sur une ligne qu'à partir de cette largeur.
- Grille « En bref » sur une colonne sous 375 px ; boutons qui passent à la ligne seulement sous 400 px.
- Vignettes de projet à leurs proportions réelles (728 × 456) : plus jamais rognées.

### 16/11 · Onglets « pilule », projets en accordéon, bouton thème

**Fait**
- **Variantes dans Claude Design** (onglets, bloc projets, bouton thème) ; mes choix : onglets « pilule rebondissante », galerie en accordéon et, pour le thème, d’abord « coucher de soleil + volet », puis finalement « éclipse + page qui se tourne ».
- **Onglets du menu.** Onglet vert de 128 × 38 px (dessus en demi-cercle, oreilles de 10 px) au lieu de 154 × 64 px ; les onglets fantômes ont la même silhouette ; le glissement entre les pages rebondit (550 ms, courbe qui dépasse 1).
- **Accueil, bloc « Trois projets, trois domaines ».** Nouveau composant `AccordeonProjets.astro` : les 3 projets en bandes côte à côte ; celle survolée ou atteinte au clavier s'élargit, son image glisse en parallaxe et sa fiche (domaines, titre, sous-domaines, résumé) apparaît. Le bouton « Tous les projets » reste.
- **Bouton thème (« éclipse + page qui se tourne »).** Au passage en sombre, les rayons du soleil rentrent en tournant et une ombre le croque jusqu'à n'en laisser qu'un croissant de lune ; le nouveau thème apparaît en triangle depuis le coin en haut à droite, comme une page qu'on tourne, pendant que l'ancienne page s'assombrit un peu dessous (View Transitions). J'avais d'abord choisi « coucher de soleil + volet », codé puis remplacé.
- **Petites corrections.** Bouton « Télécharger mon CV » en blanc et encre (nouvelle variante `encre`, plus de vert sur le panneau vert) ; étiquettes « Figma → Astro » et « BUT MMI · 2e année » retirées du hero ; marge de sécurité autour du logo.

**Ce qui a coincé**
- Les pages React Bits et Jitter ne montrent pas leur code (aperçus en JavaScript, modèle à « remixer ») : comportements repris d'après leur description (ouverture au survol ou au focus, image en parallaxe).
- Bouton thème : pendant le clic, la case est déjà cochée ; lire son inverse annulait le changement. Corrigé et vérifié dans les deux sens, à la souris et au clavier.
- Je n'ai pas trouvé où le dernier E du logo est coupé (header et écran de chargement intacts) : à préciser.

**Décidé**
- Accueil : 3 projets (TiK•TaK, Climat Outre-Mer, La Cimade), titre et bouton « Tous les projets » conservés.
- Mobile (non dessiné) : accordéon vertical ; un premier toucher ouvre le projet, le second ouvre l'étude de cas.
- Bouton thème : l'icône montre le thème actuel (soleil en clair, lune en sombre).
- Croissant de lune épaissi (ombre moins décalée) : la première version, trop fine, se lisait mal à 22 px.

### 16/11 · Animations discrètes : icônes, logo, bouton thème, bloc Communication

**Fait**
- **Icônes animées** (nouveau composant `IconeAnimee.astro`, inspiré de useanimations.com) : plume qui dessine (design), chevrons qui s'écartent autour d'une barre oblique (code), points qui s'écrivent dans la bulle (communication), objectif qui fait la mise au point (Instagram), point et barres qui rebondissent (LinkedIn), rabat qui s'ouvre (mail). Elles se jouent au survol, ou au focus clavier, de l'élément qui les contient : blocs de l'accueil, pastilles des cartes, filtres, accordéon, liens du pied de page.
- **Accueil.** Le bloc « Graphisme » devient « Communication » : « Faire connaître un projet : stratégie de lancement, référencement et supports print. » ; étiquettes SEO, Ulule, Canva, Affinity Designer.
- **Logo.** Au survol (header et pied de page), il rejoue en petit l'animation de l'écran de chargement : les deux E se rejoignent, puis s'écartent pendant que le WM réapparaît en tournant, en vert.
- **Bouton thème.** Morphing : le disque du soleil se déforme en croissant de lune d'un seul mouvement, les rayons rentrent l'un après l'autre et l'icône pivote un peu ; la page continue de « se tourner » au changement de thème.
- **Variantes dans Claude Design** pour la page Projets (flex, galerie courbe, anneau, grille chroma, avec filtres adaptés), la galerie (passage, hélice) et les passions (anneau, roue) : en attente de mon choix.

**Ce qui a coincé**
- Les icônes de useanimations sont des animations Lottie : les reprendre telles quelles demandait la bibliothèque lottie-web (~250 Ko). J'ai préféré les recréer en SVG + CSS, sans dépendance.
- Le morphing demande deux tracés au même nombre de points : soleil et croissant ont été calculés par un petit script (4 courbes de Bézier chacun) et vérifiés en image.
- Les modèles « Passage » et « Helix » sont sur React Bits Pro (payant) : recréés d'après leur principe.

**Décidé**
- Aucune dépendance ajoutée. Safari ne sait pas animer le tracé : la forme y change d'un coup, le reste de l'animation est conservé.
- Les icônes des réseaux sociaux reprennent le dessin au trait des icônes animées (au lieu des icônes exportées de Figma).

### 16/11 · Pages animées : Projets en carrousel, Galerie en couloir, passions en anneau

**Fait**
- **Mes choix parmi les variantes :** carrousel flex (Projets), passage (Galerie), anneau 3D (passions).
- **Page Projets.** Les cartes défilent sur une rangée (défilement natif : souris, doigt, pavé tactile, clavier) et s'aimantent au centre ; la carte du centre est mise en avant, les autres reculent. Sous la rangée : flèches et filtres en barre segmentée ; filtrer garde le domaine, revient au début et annonce le nombre de projets. Le bloc « Et si le prochain était le vôtre ? » passe sous le carrousel. L'ancienne animation des filtres (View Transitions) est supprimée.
- **Page Galerie.** Couloir en perspective : les visuels, accrochés aux murs, avancent vers nous en boucle (16 s). Bouton Pause / Lecture, pause aussi au survol et au focus.
- **À propos, « Ce qui nourrit mon regard ».** Les 9 polaroïds en anneau 3D ; flèches, clic ou Tab sur une carte pour la faire venir devant (toujours par le chemin le plus court) ; le nom de la passion est annoncé.

**Ce qui a coincé**
- Le navigateur de test était masqué : il suspend les animations et le rafraîchissement de l'écran. La logique a été vérifiée par script (carte au centre, filtres, pause, rotation de l'anneau, aucun débordement à 375, 768 et 1440 px) ; le rendu animé reste à regarder dans un vrai navigateur.

**Décidé**
- Avec « réduire les animations » : la galerie devient une grille immobile (et le bouton pause disparaît), le carrousel et l'anneau changent de position sans mouvement.
- Mobile (non dessiné) : rangée plus étroite (cartes à 82 % de la largeur), couloir et anneau plus petits.

### 16/11 · Galerie et passions : visuels flottants et zoom au survol (mes retours)

**Fait**
- Galerie : plus de grand bloc vert, les visuels flottent sur la page ; au survol, un visuel grossit un peu (rebond) sans arrêter le défilement ; seul le bouton Pause / Lecture arrête l'animation.
- Passions : plus de fond derrière l'anneau ; au survol, un polaroïd grossit et s'éclaire.

**Décidé**
- La pause au survol est retirée (elle coupait l'effet dès qu'on approchait la souris) ; le bouton Pause reste, pour la règle WCAG 2.2.2.

### 16/11 · Galerie en boîte 3D (mes retours)

**Fait**
- La galerie devient une boîte en 3D sur toute la largeur de l'écran, comme le modèle de la bibliothèque : ses quatre parois (murs gauche et droit, sol, plafond) portent les visuels (8 par paroi, 32 tuiles), qui avancent vers nous en 24 s puis sortent par les bords de l'écran, au lieu de disparaître avant. Des cadres fins dessinent la boîte en perspective.

**Décidé**
- Lecteurs d'écran : seul le mur gauche est lu (les 8 visuels, une fois chacun, avec leur légende) ; les trois autres parois répètent les images et sont décoratives.
- Avec « réduire les animations » : les 8 visuels en grille immobile.

### 16/11 · Galerie : visuels lisibles et agrandissement au centre (mes retours)

**Fait**
- Tuiles presque carrées (250 × 270 px sur les murs, 290 × 250 px au sol et au plafond) au lieu de formats très allongés, et perspective plus lointaine (1 100 px) : les visuels sont moins étirés et moins recadrés.
- Au survol d'un visuel, une copie se détache de la boîte et vient se placer droite au centre, en entier (sans recadrage) avec sa légende ; la boîte s'arrête le temps de l'agrandissement. Quand la souris quitte le visuel (ou la scène), il retourne à la place de sa tuile et la boîte repart. Au toucher : un appui ouvre, un appui à côté referme.

**Ce qui a coincé**
- Faire partir et revenir le visuel depuis une tuile en 3D : on mesure la tuile à l'écran et on anime la copie de cette position jusqu'au centre (technique « FLIP »), puis l'inverse.
- Fermer dès que la souris n'est plus sur le visuel aurait refermé aussitôt (la souris est encore sur l'ancienne place de la tuile) : la fermeture n'arrive qu'après être passé sur le visuel agrandi, ou en sortant de la scène.

### 16/11 · Galerie : plafond et sol bien séparés des murs (mes retours)

**Fait**
- Les visuels du plafond passaient par-dessus ceux des murs. Chaque paroi a maintenant son propre calque, découpé en triangle depuis le centre (le long des diagonales de la boîte) : le plafond n'apparaît que dans le triangle du haut, le sol dans celui du bas, les murs sur les côtés. Un visuel du plafond qui arrive près d'un angle est coupé en biais au lieu de cacher le mur.

**Vérifié**
- Capture dans le navigateur (animation figée) : plus aucun chevauchement entre plafond et murs ; pas de défilement horizontal ; le survol d'une tuile du plafond ou du sol ouvre toujours l'agrandissement, qui se referme en sortant de la scène (testé par script).

### 16/11 · Galerie : parois alignées en anneaux (mes retours)

**Fait**
- À gauche, les visuels du plafond touchaient ceux du mur, pas à droite : les tuiles étaient décalées en profondeur d'une paroi à l'autre. Elles sont maintenant rangées en 6 « anneaux » : dans un même anneau, les deux murs (haut et bas), le plafond et le sol (gauche et droite) sont à la même profondeur. Le plafond est aligné avec le sol et touche les deux murs de la même façon. 12 tuiles par paroi au lieu de 8, pour garder une boîte bien remplie.
- Lecteurs d'écran : toujours 8 visuels lus, une fois chacun (les répétitions sont décoratives et masquées dans la grille « réduire les animations »).

**Vérifié**
- Capture à 1 440 px (animation figée) : boîte symétrique ; 48 tuiles dont 8 lues ; pas de défilement horizontal.

### 16/11 · Galerie : champ infini à la place de la boîte (mes retours)

**Fait**
- La boîte 3D est remplacée par un « champ infini », d'après le composant Infinite Gallery de React Bits Pro (recréé en JS et CSS 3D, sans bibliothèque) : les 8 visuels flottent dans l'espace, **un seul exemplaire de chacun**. Molette ou glisser vertical : on avance ou on recule ; glisser horizontal : on se décale ; la souris fait légèrement dériver le champ ; un clic agrandit le visuel au centre (clic ou Échap pour refermer). Quand un visuel passe derrière nous, il repart au fond : la traversée ne s'arrête jamais.
- Visuels dans leurs proportions d'origine, qui apparaissent au loin et s'effacent avant de nous traverser (effet de brouillard par l'opacité, sans fond : fonctionne dans les deux thèmes).
- Clavier : chaque visuel est un bouton ; au Tab, le champ l'amène devant nous, Entrée l'agrandit, le focus revient dessus à la fermeture.

**Décidé**
- Rien ne bouge tout seul : plus de bouton Pause. Une consigne au-dessus explique comment avancer.
- Le code de React Bits Pro est payant et repose sur une bibliothèque 3D : comportement refait à partir de la démo, sans dépendance.

**Vérifié**
- Par script et capture (1 600 px et mobile 375 px) : 8 visuels, molette, glisser, clic, fermeture et retour du focus ; pas de défilement horizontal.

### 16/11 · Galerie : visuels lointains et clic pour s'approcher (mes retours)

**Fait**
- Visuels plus petits et plus lointains au repos, de plus en plus pâles et écartés avec la distance, comme dans la démo de React Bits Pro.
- Clic sur n'importe quel visuel, même tout au fond : la caméra s'en approche et le place en grand au centre, avec sa légende en bas de la scène ; les autres restent autour, petits. Nouveau clic, clic dans le vide ou Échap : on recule. Au clavier, le focus fait la même chose.

**Ce qui a coincé**
- La perspective ne s'appliquait pas aux visuels (la liste entre la scène et les visuels la bloquait) : tous avaient la même taille. Corrigé en transmettant la 3D à travers la liste.
- Les visuels lointains n'étaient pas cliquables : la liste, une fois en 3D, passait devant eux et captait les clics, et les visuels pâles étaient rendus inactifs. Maintenant, seul un visuel tout à fait effacé ne réagit pas.

**Vérifié**
- Par script, à 1 600 px et en mobile 375 px : les 8 visuels sont cliquables au repos ; le plus lointain (31 px de large) passe à environ 330 px au centre après un clic ; recul au clic dans le vide ; légende sans chevauchement ; pas de défilement horizontal.

### 16/11 · Boutons harmonisés, fond en parallaxe et finitions (mes retours)

**Fait**
- Galerie : visuels nets quand on s'en approche. Ils étaient dessinés petits (130 px) puis agrandis par la 3D, donc pixellisés ; ils sont maintenant dessinés en grand (400 px, image source de 800 px) puis réduits.
- Boutons : 4 variantes au lieu de 5, choisies selon le fond. Fond clair : rouge pour l'action principale, clair bordé (remplissage vert sapin) pour l'action secondaire. Fond vert : blanc à pastille rouge (remplissage rouge) pour l'action principale, contour blanc (remplissage crème) pour l'action secondaire. Le rouge signale toujours l'action principale. La variante noire « encre » est supprimée : « Télécharger mon CV » passe en contour blanc.
- À propos : bloc « Et l'IA dans tout ça ? » rapproché de l'anneau des passions (42 px d'écart au lieu d'environ 190 px).
- Accueil : « 8-10 semaines » dans le statut du stage.
- Fond quadrillé en parallaxe : la trame défile à 60 % de la vitesse de la page (passée ensuite à 20 %, voir plus bas), le contenu défile normalement. La trame de l'onglet du hero suit le même décalage pour rester alignée. Désactivé avec « réduire les animations ».

**Vérifié**
- Par script et capture à 1 440 px : visuel approché net (image de 800 px chargée), 8 visuels toujours cliquables ; décalage de la trame (40 % du défilement) et onglet aligné ; écart du bloc IA ; nouveau statut du stage. Thème sombre non regardé en capture.

### 16/11 · Fond quadrillé plus lent (mes retours)

**Fait**
- La trame défilait encore trop vite à 60 % : elle passe à 20 % de la vitesse de la page (redescendue de 80 % du défilement).

**Vérifié**
- Par script : pour 1 000 px de défilement, la trame est décalée de 800 px, elle ne remonte donc que de 200 px.

### 16/11 · Fond quadrillé : tremblement au défilement corrigé (mes retours)

**Ce qui a coincé**
- Sur ma vidéo du défilement, la grille tremblait : le navigateur fait défiler la page tout de suite, mais le script ne recalait la trame qu'à l'image suivante. À chaque image, la grille avançait avec la page puis revenait en arrière de 80 % du défilement, et toute la trame était redessinée.

**Fait**
- La trame est sur un calque à part, fixé à l'écran, que le script remonte de 20 % du défilement (seulement le reste sur un motif de 192 px). Le décalage d'une image est donc 4 fois plus petit, et le calque est déplacé sans être redessiné (`transform`).
- L'onglet du hero garde la même trame, calée sur l'écran comme le calque : les deux restent alignées.
- Avec « réduire les animations » : la trame défile normalement avec la page.

**Vérifié**
- Par script et capture à 1 440 px : décalage du calque juste (−68 px pour 1 300 px de défilement), calque derrière tout le contenu et sans capter les clics, trame de l'onglet alignée. Fluidité à confirmer sur une vraie vidéo.

### 16/11 · Formulaire : notification par e-mail (préparée)

**Fait**
- Fichier `serveur/pocketbase/pb_hooks/notification-messages.pb.js` : à chaque message enregistré dans PocketBase, un e-mail de notification m'est envoyé (objet, nom, e-mail, message), avec « Répondre » vers le visiteur. Pas de notification si le champ piège est rempli. Si l'envoi échoue, le message reste dans PocketBase et l'erreur est notée dans les logs.
- `serveur/pocketbase/README.md` : installation (SMTP Infomaniak dans l'admin, copie du fichier, redémarrage, test).

**Décidé**
- Notification par PocketBase, déjà en place sur mon serveur, plutôt qu'un service externe (Formspree…) : pas de société de plus qui reçoit les messages, rien à changer sur le site.

**À faire**
- Compléter l'adresse de réception et vérifier la version de PocketBase (fichier écrit pour la 0.23 ou plus récente), configurer le SMTP, installer le fichier et tester.
- Ajouter à la page Confidentialité la copie des messages dans ma boîte mail et sa durée de conservation.

**Vérifié**
- Syntaxe du fichier contrôlée (`node --check`). Pas encore testé sur le serveur.

### 16/11 · Notification abandonnée et nettoyage avant GitHub

**Ce qui a coincé**
- Notification par e-mail : PocketBase (0.40.6, sur le VPS) et l'adresse d'expédition Infomaniak étaient prêts, mais le serveur d'envoi refusait la connexion (erreur 535, identifiant ou mot de passe refusé).

**Décidé**
- J'abandonne la notification : je consulterai les nouveaux messages directement dans PocketBase. Le dossier `serveur/pocketbase` (fichier jamais installé et sa notice) est supprimé.
- Mon adresse universitaire reste comme auteur des commits, visible sur GitHub.

**Fait**
- `.claude/launch.json` retiré du suivi git (le fichier reste sur mon ordinateur) ; tout le dossier `.claude/` est ignoré.
- Vérifié avant publication : aucun mot de passe, clé ni jeton dans les fichiers suivis ; `.env` ignoré (il ne contient que l'adresse publique de PocketBase).

**À faire**
- Relire les trois entrées *(À RELIRE)* du journal et remplir ma colonne de IA.md avant de rendre le dépôt public.

### 17/11 · Mise en ligne : GitHub et portfolio.ewan-menigoz.fr

**Fait**
- Code publié sur GitHub (dépôt `Menigoz-Ewan/portfolio-ewan-menigoz`, branche `main`).
- Site en ligne sur mon VPS, à côté de PocketBase : enregistrement DNS `A` « portfolio » chez Infomaniak, dossier `/var/www/portfolio`, configuration Apache dédiée (site statique, pas de liste des dossiers, page 404 personnalisée), HTTPS avec Certbot (Let's Encrypt, renouvellement automatique).
- Mise à jour du site : `npm run build` sur mon PC, suppression de l'ancien `dist` sur le serveur, envoi avec `scp`, puis droits de lecture (`chmod -R a+rX`).

**Ce qui a coincé**
- Connexion refusée : mon VPS écoute en SSH sur un port particulier (23015), à préciser avec `-p` pour `ssh` et `-P` pour `scp`.
- Erreur 403 : les dossiers envoyés depuis Windows n'étaient lisibles que par moi ; corrigé avec `chmod -R a+rX`.
- « Site inaccessible » chez moi alors qu'il était en ligne : le DNS de mon opérateur mobile gardait la réponse « domaine inexistant » d'avant la création de l'adresse (jusqu'à une heure). Contourné en passant Chrome par un DNS public.

**Vérifié**
- Les 12 pages du sitemap répondent (200), ainsi que le CV, le PDF de La Cimade, `robots.txt` et les sitemaps ; une adresse inconnue renvoie la page 404 ; HTTP redirige vers HTTPS ; certificat valide jusqu'au 14/02/2027.
- Formulaire : PocketBase répond et accepte les envois venant du portfolio (CORS), vérifié sans écrire de message, puis j'ai envoyé un vrai message depuis le site en ligne : il est bien arrivé dans PocketBase.

### 17/11 · Titre de l'onglet

**Fait**
- Accueil : « Ewan Menigoz - Portfolio » au lieu de « Ewan Menigoz — Designer UI/UX ». Autres pages : nom de la page devant, par exemple « Galerie · Ewan Menigoz - Portfolio », pour que chaque onglet reste reconnaissable.

### 17/11 · Images des projets Iris VOD et Deep in the Grounds

**Fait**
- Iris VOD : vignette, triptyque, images du défi et de la solution, aux tailles @2x (captures du site en ligne avec Playwright, maquettes exportées de Figma), dans src/assets/images/iris/ et vignette-iris.png.
- Deep in the Grounds : planche d'inspirations et proposition de charte avec le HUD (Figma), extrait de code GDScript mis en image, dans src/assets/images/ditg/.
- Dossier captures/ (sources brutes) ajouté au .gitignore.

**À faire**

**Fait ensuite**
- Avec mes captures du jeu : vignette (personnage devant la cabane et le feu de camp), jeu en action (combat contre un loup), jeu avec l'inventaire et la fabrication ouverts. Mes captures faisaient 988 px de haut : j'ai accepté un agrandissement de 1 % pour la vignette. Éditeur Godot : cadré à gauche pour garder l'arborescence de la scène et le système de fichiers.
- Ajouter les entrées des deux projets dans src/data/projets.ts une fois validées.

### 17/11 · Pages Iris VOD et Deep in the Grounds (structure)

**Fait**
- Deux projets ajoutés dans src/data/projets.ts avec leurs 14 images et textes alternatifs : pages /projets/iris et /projets/ditg, cartes dans le carrousel de la page Projets, ordre « projet suivant » : La Cimade → Iris VOD → Deep in the Grounds → TiK•TaK. Pas sur l'accueil (pas de résumé d'accueil).

**À faire**
- Écrire les textes marqués [À COMPLÉTER] (accroche, fiche, contexte, défi, solution, bilan) et vérifier domaines et sous-domaines, avant toute mise en ligne.
