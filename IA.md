# Déclaration d'usage de l'IA

> Conformément au point 3 des consignes, ce fichier déclare, **pour chaque outil d'IA utilisé** : à quelle étape, pour quoi faire, et ce que j'ai modifié, corrigé ou rejeté dans ce qu'il a produit.
> Le déroulé général du projet (ce que j'ai fait, ce qui a coincé, ce que j'ai décidé) est dans [`JOURNAL.md`].

## Mes règles

1. Je ne livre rien que je ne sache expliquer, justifier et modifier moi-même devant le jury.
2. L'inspiration (références, intention de départ, direction artistique) vient de moi.
3. Chaque proposition de l'IA est relue : orthographe, accessibilité, cohérence avec ma charte, compréhension du code.
4. Ce fichier est mis à jour à chaque étape, en même temps que le journal.

---

## Comment j'en suis arrivé là

### Ce qui s'est passé

1. **Début du projet.** J'ai fait une première maquette à partir de mon inspiration et de celle de Gemini. Mes prompts étaient mauvais : j'avais une inspiration personnelle, mais trop vague et avec peu de sens. Résultat : une charte graphique incomplète, incohérente et dénuée de sens.
2. **Soutenance maquette.** Beaucoup de remarques négatives : éléments trop gros, manque de sens, logo, couleurs, typographie… Les professeurs nous ont aussi dit de ne pas hésiter à utiliser l'IA.
3. **Après la soutenance.** Je me suis penché sur l'IA : comment prompter efficacement, quelle IA convient le mieux, quels outils utiliser. J'ai choisi Claude, avec l'abonnement Pro.
4. **Prise en main de Claude.** Je me suis documenté sur son fonctionnement, puis j'ai trouvé et installé des plugins et des skills.
5. **Refonte de la maquette.** J'ai demandé à Claude de prendre en compte les retours de la soutenance : comment trouver une meilleure charte graphique, ce qui fonctionne pour ce type de site, ce qu'attendent les cibles, l'esthétique qui fonctionne bien et les informations à ne pas oublier.
6. **Passage au développement.** Une fois la nouvelle maquette validée, j'ai demandé à l'IA la meilleure façon de passer au code : comment utiliser les plugins dans un projet VS Code et comment optimiser le code. J'ai d'abord indiqué ce que j'avais en tête, surtout pour le back-end (PocketBase, hébergement, animations…).
7. **Première version.** J'ai indiqué ce que j'avais travaillé en cours, puis j'ai demandé une première version.

### Les retouches

- **Le travail de l'IA ne me convainquait pas : ce n'était pas mon style.** Je lui ai donc apporté mes propres références : photos de mes dessins, de mes projets…
- **V2 de la maquette :** c'était mieux, avec quelques ajustements à retravailler.

Ensuite, le travail a continué étape par étape jusqu'à aujourd'hui : chaque étape est détaillée dans les tableaux ci-dessous.

---

## Outils utilisés

| Outil | Version / offre | Période |
|---|---|---|
| Gemini | Avant la refonte | Depuis le 24/09/2026 |
| Claude (application Desktop, mode Cowork) | Offre Pro, connecteur Figma | Depuis le 16/10/2026 |
| Claude Code | Offre Pro | Maquette V3/V4 *(date à compléter)*, puis code depuis le 02/11/2026 |
| Claude Design (canvas de variantes) | Offre Pro | Depuis le 16/11/2026 (étiquettes des projets, animations du hero) |

---

## Claude (Cowork, avec le connecteur Figma)

| Étape | Pour quoi faire | Ce que j'ai modifié, corrigé ou rejeté |
|---|---|---|
| Refonte V2 de la maquette (16/10) | Proposer et construire dans Figma un style clair (crème, vert sapin), les composants et les pages. | J'ai choisi la direction claire et le vert sapin. *Fond de couleur sombre, éléments de couleurs jaune, éléments de couleurs bleu marine : refusés* |
| Header (16/10) | Choix d'intégrer un header animé, essaie avec plusieurs variantes. | Sur cinq variantes, j'ai gardé l'onglet de classeur et fait supprimer les quatre autres. J'ai demandé un onglet plus souple et une recherche de stage plus visible. |
| Logo (16/10) | Proposer un audit complet sur mon logo EWME ainsi que de ses variantes (taille, interlettrage, E détachés). | J'ai choisi la variante « E détachés, plus grand » et demandé d'inverser le sens du dernier E pour qu'il fasse une parenthèse. J'ai écarté l'ancienne version. |
| Relecture de la maquette V3 (18/10) | Lire le fichier Figma et lister les changements faits pendant la V3. | Aucun changement : simple compte rendu. |
| Récapitulatif PDF (18/10) | Mettre en forme mes changements, ma méthode de travail et un brouillon de note sur l'IA. | La méthode en quatre étapes vient de moi ; l'IA l'a rédigée. |
| Note de positionnement (18/10) | Rédiger une première version à partir des consignes, de ma maquette et de mes réponses. | J'ai refusé de restreindre la cible à un seul type de structure. | 
| Charte graphique (18/10) | Expliquer mes choix de couleurs, typographies, grille et hiérarchie ; vérifier les contrastes. | 
| Page « Usage de l'IA » (18/10) | Ajouter la page dans la maquette, avec un lien dans le pied de page et un renvoi dans À propos. | J'ai choisi l'emplacement : une page dédiée et un renvoi dans À propos. |
| Grille qualité (18/10) | Proposer des critères propres à mon site pour `QUALITE.md`. | 

---

## Claude Code

| Étape | Pour quoi faire | Ce que j'ai modifié, corrigé ou rejeté |
|---|---|---|
| Maquette V3/V4 *(à dater)* | *(à compléter)* | *(à compléter)* |
| Intégration de la maquette en Astro (02/11) | *(à compléter : pages, composants, données des projets)* | *(à compléter)* |
| Écran de chargement (tests) et CV (10/11) | *(à compléter : trois pistes d’écran de chargement codées pour comparer)* | *(à compléter)* |
| Études de cas TiK•TaK, Climat Outre-Mer, La Cimade (12/11) | *(à compléter)* | *(à compléter)* |
| Header à onglet et nouveau logo (10/11) | Appliquer la nouvelle maquette dans le code : logo EWME à espacement régulier et favicons, composant HeaderPanneau (panneau vert + onglet sous le lien actif, dessiné en CSS), transition de l’onglet avec les View Transitions, menu mobile sous 1024 px, contenus des pages déplacés dans le panneau, mentions légales (hébergeur à compléter) ; vérifications en 1440/390 px et Lighthouse. | *(à compléter)* |
| Statut « stage » du hero, variante F + H (10/11) | Retirer l’étiquette « Je recherche un stage… » et la pastille « Stage recherché » ; coder l’onglet crème découpé dans le bas du panneau (masque CSS, trame alignée, texte construit depuis les données) et la note au crayon « écrivez-moi ! » (police Caveat, flèche SVG animée) ; corriger la hauteur du hero (676 px) ; vérifications en 1440/1280/1024/390 px et Lighthouse avant/après. | *(à compléter)* |
| Thème clair / sombre, phase 1 (13/11) | À partir de ma liste `A-INTEGRER.md` : créer les deux thèmes daisyUI, remplacer les couleurs écrites en dur par des couleurs par rôle, ajouter le bouton soleil/lune et le script qui mémorise le choix, décaler le menu de 48 px ; mesurer les contrastes des deux thèmes. Claude a proposé les couleurs manquantes du thème sombre (cartes, surfaces, vert des textes) : je les ai validées. | *(à compléter)* |
| Menu à onglets fantômes, phase 2 (13/11) | À partir de ma liste `A-INTEGRER.md` et du composant Figma « Onglet fantôme » : coder le contour en pointillé derrière les liens inactifs (repos, survol, focus, thème sombre), régler le glissement à 0,35 s ; mesurer les contrastes. J'ai refusé la première version, qui ne ressemblait pas à la maquette (onglet actif trop large, fantômes trop pâles) : Claude l'a refaite en mesurant Figma. J'ai aussi signalé l'onglet vert « coupé » au survol du lien voisin : corrigé. J'ai ensuite retravaillé moi-même la forme et l'espacement des onglets dans Figma ; Claude a reporté ces mesures dans le code. | *(à compléter)* |
| Formulaire de contact → PocketBase (16/11) | J'ai créé moi-même l'instance et la collection « messages » (champs, règles) et le fichier `.env`. Claude a branché le formulaire : envoi en fetch, case de consentement, champ piège, bouton désactivé pendant l'envoi, messages annoncés ; puis l'a testé sans écrire dans la base. Il avait d'abord mis l'objet en tête du message, faute de champ « objet » : j'ai préféré ajouter un champ `objet` (150 caractères) dans la collection, et Claude a adapté l'envoi. | *(à compléter)* |
| Étiquettes des projets : domaines + sous-domaines (16/11) | Je trouvais les étiquettes incohérentes et sans lien avec les filtres. Claude a proposé 3 variantes dans Claude Design (pastilles, rail des 3 domaines, code couleur) ; j'ai choisi la variante A (pas celle qu'il recommandait, la B). J'ai validé la liste des sous-domaines et décidé de garder les supports dans la fiche projet. Claude a codé le composant `PastillesDomaines.astro`, les filtres avec pictogrammes, puis mesuré les contrastes en clair et en sombre. | *(à compléter)* |
| Filtres animés, contexte, affiches (16/11) | J'ai demandé une animation fluide pour les filtres, le retrait des points dans les étiquettes du contexte, et j'ai fourni mes 3 affiches finales et 2 captures d'Affinity. Claude a animé les filtres avec les View Transitions natives (coupées avec « réduire les animations »), converti les affiches en PNG et rédigé les textes alternatifs des captures. Il a remarqué que le titre de mes affiches était coupé et a laissé les images du triptyque garder leurs proportions. | *(à compléter)* |
| Mentions légales, RGPD et confidentialité (16/11) | J'ai demandé une vérification des pages et l'ajout de ce qui manquait. Claude a fait l'inventaire réel du site (aucun cookie, aucune requête externe, deux clés de stockage local), corrigé le texte sur les cookies, ajouté les mentions obligatoires (directeur de la publication, téléphone de l'hébergeur, base légale, droits, CNIL) et les crédits. Les informations qu'il ne connaît pas sont laissées en [À COMPLÉTER]. | *(à compléter)* |
| Mentions légales complétées (16/11) | Claude m’a posé des questions sur chaque [À COMPLÉTER] : j’ai donné mon hébergeur (Infomaniak), mon domaine, les membres d’OpenSigne, les durées de conservation, l’adresse de l’IUT et mes choix (adresse personnelle non publiée, pas de nom de licence pour Météo-France). Il a rempli la page et vérifié qu’il ne restait aucun marqueur. | *(à compléter)* |
| Animations du hero (16/11) | J’ai demandé de meilleures animations pour le titre, la note, les images et les boutons, avec mes liens (Jitter, Motion). Claude a dessiné 3 variantes par élément dans Claude Design ; j’ai choisi titre B, note B, images C et boutons A, et répondu à ses questions (curseur fixe après 5 s, iris au clic seulement, rebond au clic, boutons sur tout le site). Il a codé le tout sans dépendance (les exemples Motion sont payants) et vérifié au clavier. | *(à compléter)* |
| Hero, corrections (16/11) | J’ai relevé 4 problèmes : curseur à faire clignoter en continu, bouton blanc qui devenait vert comme le fond au survol, mauvaise variante pour « écrivez-moi ! » (je voulais la C), et images à présenter sans cadre ni légende. J’ai choisi l’encre pour le survol et un collage en éventail. Claude a corrigé, ajouté le recadrage des affiches et vérifié dans le navigateur. | *(à compléter)* |
| Hero, 3e passe (16/11) | J’ai demandé une seule image affichée dynamiquement (les autres au clic), un curseur qui suit le texte pendant la frappe, la suppression du crayon et un survol rouge pour le bouton blanc. Claude a réécrit l’image (iris à l’arrivée et au clic, cadre qui rebondit), déplacé le curseur sur chaque lettre et vérifié la chronologie lettre par lettre. | *(à compléter)* |
| Audit qualité (16/11) | J’ai demandé les textes alternatifs, Lighthouse, le test au clavier, les contrastes et une relecture. Claude a regardé chaque image avant de réécrire les textes alternatifs, lancé Lighthouse (avec mon accord, via npx, sans dépendance ajoutée), testé le clavier et mesuré les contrastes par script, puis relu tout le texte. J’ai tranché les deux incohérences qu’il a relevées (« cinq temps » pour Climat Outre-Mer, vouvoiement sur la page 404). | *(à compléter)* |
| Responsive et fichiers de suivi (16/11) | J’ai demandé de valider le responsive et un bilan de mes fichiers de suivi. Claude a détecté les débordements par script (13 pages × 8 largeurs), corrigé À propos, les vignettes et un bouton, mis la même image du hero en mobile (mon choix), réparé les tableaux de IA.md et QUALITE.md, et réorganisé le journal selon le format que j’ai choisi (frise + une entrée par étape). Il a rédigé les étapes manquantes d’après l’historique git, marquées « À RELIRE ». | *(à compléter)* |
| Onglets, accordéon, bouton thème (16/11) | J'ai listé mes demandes (bouton CV, bouton thème animé, onglets, logo, bloc projets avec des composants React Bits, étiquettes du hero) et choisi parmi les variantes que Claude a dessinées dans Claude Design : onglets « pilule rebondissante », accordéon, « coucher de soleil + volet » (puis j'ai préféré « éclipse + page qui se tourne », que Claude a recodé). J'ai décidé de garder 3 projets et le bouton « Tous les projets », et l'accordéon vertical sur mobile. Claude a tout codé sans dépendance et trouvé un bug du bouton thème en le testant. | *(à compléter)* |
| Animations discrètes (16/11) | J'ai demandé des icônes animées (liens useanimations), le bloc Communication, le logo animé au survol, un morphing plus fluide du bouton thème, et des animations pour les pages Projets, Galerie et À propos (liens React Bits). J'ai choisi de recréer les icônes en SVG + CSS plutôt que d'ajouter lottie-web, validé le texte et les étiquettes du bloc Communication, et demandé des variantes avant de coder les pages. Claude a codé les icônes, le logo et le morphing (tracés calculés par script) et préparé les variantes. | *(à compléter)* |
| Pages animées (16/11) | J'ai choisi parmi les variantes de Claude Design : carrousel flex pour les projets, passage pour la galerie, anneau 3D pour les passions. Claude les a codées sans dépendance (défilement natif pour le carrousel, CSS 3D pour le couloir et l'anneau), avec bouton pause pour la galerie, et vérifié la logique par script ; je dois encore regarder le rendu animé. | *(à compléter)* |
| Galerie et passions flottantes (16/11) | J'ai demandé que la galerie ne s'arrête plus au survol, sans bloc vert, avec des images qui flottent et zooment au survol, et pareil pour les passions sans fond. Claude a appliqué ces changements et vérifié qu'il ne reste que le bouton pour arrêter l'animation. | *(à compléter)* |
| Galerie en boîte 3D (16/11) | Avec une capture du modèle, j'ai demandé que les images ne disparaissent qu'au bord de l'écran et qu'il y en ait aussi en haut et en bas (effet boîte 3D). Claude a recodé la galerie : quatre parois de visuels en CSS 3D, pleine largeur, sans doublons pour les lecteurs d'écran. | *(à compléter)* |
| Galerie : agrandissement au centre (16/11) | Avec une capture, j'ai signalé des images trop étirées et demandé qu'une image survolée vienne droite au centre puis reparte quand on survole à côté. Claude a changé les proportions et la perspective, et codé l'aller-retour de l'image (technique FLIP), testé par script. | *(à compléter)* |
| Galerie : parois séparées (16/11) | J'ai signalé que les images du haut coupaient celles des côtés. Claude a placé chaque paroi dans un calque découpé en triangle depuis le centre, puis a vérifié par capture et par script. | *(à compléter)* |
| Galerie : parois alignées (16/11) | Avec une capture, j'ai signalé que le plafond touchait le mur gauche mais pas le droit, et demandé que le haut soit aligné avec le bas. Claude a rangé les tuiles en anneaux à la même profondeur sur les quatre parois et vérifié par capture. | *(à compléter)* |
| Galerie en champ infini (16/11) | J'ai demandé de tester le composant Infinite Gallery de React Bits Pro, avec un seul exemplaire de chaque image et les mêmes interactions que la démo. Claude a étudié la démo et l'a recréé en JS et CSS 3D sans dépendance, puis l'a testé par script et capture. | *(à compléter)* |
| Galerie : visuels lointains et clic pour s'approcher (16/11) | Avec une capture de la démo et une de mon site, j'ai demandé des visuels plus petits et plus loin, et que tous soient cliquables, même lointains. Claude a trouvé que la perspective ne s'appliquait pas et que la liste captait les clics, a corrigé, puis a codé l'approche de la caméra au clic, vérifiée par script. | *(à compléter)* |
| Boutons, parallaxe et finitions (16/11) | J'ai signalé des images de galerie pixellisées et trop de couleurs de boutons, et demandé un fond qui défile plus lentement, le bloc IA plus haut et « 8-10 semaines ». Claude a trouvé la cause du flou, proposé une règle de couleur des boutons selon le fond, codé la parallaxe et vérifié par script. | *(à compléter)* |
| Fond plus lent (16/11) | J'ai trouvé la grille encore trop rapide et demandé 20 % de la vitesse de la page. Claude a changé le réglage et vérifié le décalage par script. | *(à compléter)* |
