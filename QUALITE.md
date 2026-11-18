# Checklist qualité web

> Ma grille part des éléments réels de mon site, pas d'une liste générique : le header en onglet, l'image du hero qui change au clic, l'accordéon et le carrousel des projets, l'anneau des passions, la galerie en 3D, la grille de fond en parallaxe, le formulaire relié à PocketBase et l'hébergement sur mon propre serveur.
> Pour chaque critère : pourquoi il compte dans mon cas, comment je l'ai vérifié, ce que j'ai trouvé et ce que j'ai corrigé.

**État** : ✅ vérifié · 🟨 vérifié en partie (le reste est indiqué) · ❌ problème non résolu

**Outils réellement utilisés** :
- **Lighthouse 12**, sur le site en ligne et en local, en mobile et en ordinateur ;
- des **scripts dans le navigateur (Playwright)** : structure des titres, textes alternatifs, champs du formulaire, animations avec « réduire les animations » émulé, poids du JavaScript ;
- **curl**, pour lire les en-têtes du serveur ;
- un **parcours au clavier seul** ;
- les **DevTools de Chrome** ;
- des **captures vidéo du défilement**.

Je n'ai pas utilisé de lecteur d'écran (NVDA), ni EcoIndex, ni la Search Console.

## En résumé

| Domaine | La question | Ma réponse en une phrase | État |
|---|---|---|---|
| Accessibilité | Mon site est-il utilisable par tout le monde ? | Oui au clavier, avec des contrastes vérifiés dans les deux thèmes et des animations qui s'arrêtent sur demande ; Lighthouse 100 après correction des trois défauts relevés le 18/11. Reste à écouter le site avec un lecteur d'écran et à tester le zoom à 200 %. | 🟨 |
| Sobriété et performance | Que coûte mon site à charger, et pourquoi ? | De 134 Ko (Contact) à 338 Ko (Galerie), en 8 à 17 requêtes, sans aucun service tiers ni fichier JavaScript : les polices sont le plus gros poste. Reste à activer le cache sur le serveur. | 🟨 |
| Référencement | Mon site est-il compréhensible par une machine ? | Oui : un titre et une description par page, des adresses lisibles, un plan du site, des données structurées et un aperçu de partage. SEO 100 sur toutes les pages mesurées. | ✅ |
| Conformité juridique | Que dois-je à mes visiteurs et aux auteurs ? | Des mentions légales complètes, une information RGPD claire, aucun cookie à consentir, et le crédit des co-auteurs, des photos et des bibliothèques. | ✅ |

---

## 1. Accessibilité — mon site est-il utilisable par tout le monde ?

**Mes risques :** les éléments interactifs inhabituels (onglets, accordéon, anneau 3D, galerie 3D), les animations, le texte sur fond vert et un thème sombre en option.

**Ma démarche :**
- chaque composant reste un vrai lien ou un vrai bouton, atteignable au clavier ;
- les animations se déclenchent au survol, au clic ou au focus, jamais en boucle sans contrôle, et sont coupées si le système demande de réduire les animations ;
- les contrastes sont mesurés dans les deux thèmes.

| # | Critère | Pourquoi dans mon cas | Comment je l'ai vérifié | Résultat et corrections | État |
|---|---|---|---|---|---|
| A1 | Tout le site se parcourt au clavier, dans un ordre logique | Menu, accordéon, carrousel, anneau, galerie et formulaire sont interactifs | Parcours avec Tab, Maj+Tab, Entrée, Espace et Échap | 16/11 : ordre logique sur l'accueil à 1440 px ; menu mobile à 375 px ouvert avec Entrée, fermé avec Échap, le focus revient sur « Menu » | ✅ |
| A2 | Un lien « Aller au contenu » en premier | Le header est répété sur toutes les pages | Premier Tab ; présence du lien dans le code | 16/11 : premier élément atteint ; 18/11 : présent sur les 6 pages contrôlées | ✅ |
| A3 | Le focus est toujours visible | Fonds crème, blanc et vert | Parcours clavier et vérification à l'œil | Contour plein de 2,4 px, de la couleur adaptée au fond ; les boutons se remplissent aussi au focus | ✅ |
| A4 | L'anneau des passions est utilisable sans souris | Cartes en 3D, dont certaines passent derrière les autres | Tab, flèches, Lighthouse | Les cartes sont des boutons : le focus fait tourner l'anneau, et le titre est annoncé (`aria-live`). 18/11 : Lighthouse signalait des cartes à moitié cachées, trop petites pour être touchées ; les cartes qui tournent le dos sont retirées de la tabulation, et les flèches « Passion précédente / suivante » donnent accès à toutes | ✅ |
| A5 | Pas d'animation automatique sans moyen de l'arrêter | Ancienne pile de photos qui tournait seule | Inventaire des animations | La pile a été supprimée : l'image du hero ne change plus qu'au clic, et rien ne bouge tout seul sur le site | ✅ |
| A6 | `prefers-reduced-motion` est respecté | Écran de chargement, titre tapé, iris, accordéon, carrousel, anneau, galerie 3D, parallaxe | 18/11 : « réduire les animations » émulé, nombre d'animations en cours dans la page | 0 animation en cours sur l'accueil, À propos, Projets et Galerie ; écran de chargement absent ; galerie affichée en grille immobile ; grille de fond qui défile normalement (sans parallaxe) | ✅ |
| A7 | Images porteuses de sens décrites, images décoratives ignorées | Affiches, visuels de projets, photos | Relecture de chaque `alt` ; script sur 6 pages | 16/11 : 24 textes alternatifs réécrits d'après le contenu réel des images. Les vignettes placées dans un lien ont un `alt` vide, car le lien porte déjà le nom du projet | ✅ |
| A8 | Le logo a un nom accessible | Il sert de lien vers l'accueil | Lecture du code | « EWME, accueil » (aria-label) ; pas encore écouté avec un lecteur d'écran | 🟨 |
| A9 | Contrastes de texte ≥ 4,5:1 | Gris secondaire, rouge, vert sur crème, crème sur vert | Calcul dans la charte, puis mesure par script sur les 13 pages | Texte le moins contrasté : 5,33:1 (clair) et 5,54:1 (sombre). 18/11 : dans le carrousel, le texte des cartes éloignées était estompé (1,85:1 relevé par Lighthouse) ; désormais seule leur image est estompée | ✅ |
| A10 | Contraste des bordures de champs ≥ 3:1 | La couleur « bordure » de la charte (1,4:1) ne doit pas délimiter les champs | 18/11 : couleur calculée de la bordure dans le navigateur | Bordure grise à environ 3,3:1 sur le blanc du formulaire | ✅ |
| A11 | Formulaire : étiquettes visibles et liées, champs utiles signalés | Formulaire de contact | 18/11 : script sur la page Contact | 6 champs, chacun avec son étiquette liée (`for`/`id`) ; 5 champs obligatoires ; messages d'aide liés (`aria-describedby`) ; saisie automatique du nom et de l'e-mail | ✅ |
| A12 | Structure : un seul `h1`, titres dans l'ordre, repères, langue | Pages longues (études de cas, à propos) | 18/11 : script sur 6 pages | Un `h1` par page, aucun saut de niveau ; `header`, `nav`, `main`, `footer` présents ; `lang="fr"` | ✅ |
| A13 | Zoom à 200 % et écran de 320 px sans perte de contenu | Maquette conçue en 1440 px | Script de débordement à 8 largeurs, contrôle visuel | 16/11 : aucun défilement horizontal de 320 à 1440 px sur les 13 pages. Corrigé : grille « En bref », bande « Hors écran », bouton long à 320 px. Zoom à 200 % pas encore testé | 🟨 |
| A14 | Score Lighthouse Accessibilité | Indicateur global, en plus des tests manuels | Lighthouse en ligne (18/11), puis en local après correction | En ligne : 100 sur TiK•TaK, Galerie, Contact ; **96** sur l'accueil (liens de l'accordéon sans nom quand la bande est repliée), la page Projets en ordinateur (contraste du carrousel) et À propos en mobile (cartes de l'anneau). Corrigé : nom ajouté aux liens, image seule estompée, cartes cachées retirées. Remesuré en local : **100** sur les quatre pages | ✅ |
| A15 | Contrastes du thème sombre | Thème proposé en option, mémorisé | 13/11 : mesure des couleurs calculées | Texte 15,8:1, gris secondaire ≥ 6,1:1, vert éclairci ≥ 7,9:1 ; crème sur le panneau vert 9:1 dans les deux thèmes | ✅ |
| A16 | Menu à onglets fantômes lisible et utilisable au clavier | Liens dans des onglets en pointillé | 13/11 : mesure et parcours clavier | Liens à 16,9:1 (clair) et 15,8:1 (sombre) ; le fantôme se remplit au focus ; chaque lien occupe toute sa case (152 × 64 px) | ✅ |
| A17 | Formulaire : erreurs annoncées, consentement, anti-spam | Envoi vers PocketBase | 16/11 : envoi simulé ; 17/11 : vrai message depuis le site en ligne | Formulaire vide : 5 erreurs liées aux champs, focus sur la première. Sans consentement : envoi bloqué. Pendant l'envoi : bouton désactivé (`aria-busy`). Réussite annoncée (`role="status"`). Champ piège anti-robot. Le vrai message est bien arrivé dans PocketBase | ✅ |
| A18 | Domaine des projets lisible sans la couleur seule | Pastilles de domaine sur les cartes et les filtres | 16/11 : mesure | Le nom du domaine est écrit en toutes lettres, avec un pictogramme ; pastille à 9:1 | ✅ |
| A19 | Animations du hero accessibles | Titre tapé, note manuscrite, image « iris », boutons à pastille | 16/11 : contrôle pas à pas ; 18/11 : « réduire les animations » | Titre lu d'un bloc par les lecteurs d'écran ; image changée par un vrai bouton, annoncée (« Image 2 sur 6 ») ; tout s'affiche sans animation si demandé. **Écart assumé** : le curseur du titre clignote en continu | ✅ |
| A20 | Accordéon et bouton du thème utilisables au clavier | Bandes qui s'ouvrent, page qui se tourne | 16/11 et 18/11 | Le focus ouvre une bande comme le survol. Le bouton du thème est une case nommée « Thème sombre », basculée avec Espace, sans animation si demandé | ✅ |
| A21 | Animations décoratives courtes et non bloquantes | Icônes animées, logo au survol, morphing du thème | 16/11 : inventaire ; 18/11 : « réduire les animations » | Entre 0,35 et 1,3 s, déclenchées par le survol ou le focus ; icônes ignorées par les lecteurs d'écran (le texte porte le sens) ; coupées si demandé | ✅ |
| A22 | Carrousel des projets utilisable au clavier | Page Projets | 16/11 : script | Cartes = liens ; le focus les amène au centre ; flèches nommées ; filtres en `aria-pressed`, avec annonce du nombre de projets | ✅ |
| A23 | Galerie 3D utilisable par tous | Visuels qui flottent dans un espace en 3D | 16/11 : script à 1600 et 375 px ; 18/11 : « réduire les animations » | Visuels = boutons, tous cliquables, même au fond ; au focus, la caméra s'approche et la légende est annoncée ; Échap pour reculer ; rien ne bouge tout seul ; grille immobile si demandé | ✅ |
| A24 | Fond en parallaxe sans gêne | Grille qui défile plus lentement que la page | 16/11 : deux vidéos du défilement, analysées image par image | Premier essai : la grille tremblait. Corrigé : calque fixe déplacé sans redessin. La 2e vidéo montre un mouvement régulier, à 20 % de la vitesse de la page ; aucune parallaxe si demandé | ✅ |

## 2. Sobriété et performance — que coûte mon site à charger, et pourquoi ?

**Le coût :**
- une page pèse **de 134 Ko (Contact) à 338 Ko (Galerie)**, en **8 à 17 requêtes** ;
- aucun service tiers : pas de Google Fonts, pas de statistiques, pas de vidéo, pas d'appel vers un autre domaine ;
- le plus gros poste, ce sont les **polices** : 108 à 158 Ko, quatre familles auto-hébergées ;
- viennent ensuite les images (34 Ko sur l'accueil en mobile, 300 Ko environ sur la galerie) ;
- le JavaScript tient en **5 à 8 Ko écrits dans la page**, sans aucun fichier à télécharger.

**Pourquoi :** Astro génère des pages statiques, n'envoie que le JavaScript des composants interactifs, et convertit les images en WebP à la bonne taille.

| # | Critère | Pourquoi dans mon cas | Comment je l'ai vérifié | Résultat et corrections | État |
|---|---|---|---|---|---|
| P1 | Lighthouse Performance ≥ 90 sur mobile | Objectif que je me suis fixé | Lighthouse 12 sur le site en ligne, le 18/11, mobile et ordinateur | **Mobile** : Accueil 100, TiK•TaK 100, Contact 100, Projets 98, À propos 95, Galerie **87** (affichage du plus grand élément en 4,1 s). Cause : les 8 images de la galerie en 800 px, même sur téléphone ; l'image d'À propos en 2400 px. Corrigé avec des tailles adaptées à l'écran (`srcset`) ; remesuré en local, Galerie : 93. **Ordinateur** : 99 à 100 partout | ✅ |
| P2 | JavaScript limité aux composants utiles | Animations et formulaire codés sans bibliothèque | 18/11 : requêtes de scripts et taille des scripts dans la page, sur 5 pages | Aucun fichier JavaScript téléchargé ; 5,5 Ko (étude de cas) à 8,2 Ko (Galerie) de script écrit dans la page | ✅ |
| P3 | Images en WebP, à la bonne taille, chargées au bon moment | Galerie, études de cas, À propos | Composant `<Image>` d'Astro, audit Lighthouse des images | WebP et dimensions sur toutes les images ; chargement différé sous la ligne de flottaison. 18/11 : tailles adaptées ajoutées pour la galerie et la photo d'À propos. Lighthouse estime encore 20 à 25 Ko d'économie possible sur les vignettes de l'accueil | ✅ |
| P4 | Pas de décalage de mise en page (CLS < 0,1) | Images et polices chargées après le texte | Lighthouse en ligne | CLS de 0 à 0,009 sur les 11 mesures | ✅ |
| P5 | Polices légères : WOFF2, sous-ensemble latin, `font-display: swap` | Quatre familles, dont une police manuscrite | Requêtes réseau de Lighthouse | 4 fichiers WOFF2 latins (158 Ko) sur l'accueil, 3 (108 Ko) sur les autres pages, en `swap`. **Écart** : Caveat (la note manuscrite, 50 Ko) se télécharge aussi sur mobile, alors que la note n'y est pas affichée | 🟨 |
| P6 | La grille de fond ne coûte rien | Fond présent sur toutes les pages | Lecture du CSS, requêtes réseau | Dégradés CSS et un SVG minuscule écrit dans le CSS : aucune image téléchargée. La parallaxe déplace un calque sans le redessiner | ✅ |
| P7 | Compression et cache côté serveur | C'est moi qui configure Apache sur mon VPS | 18/11 : en-têtes HTTP avec curl | Compression **gzip active** (HTML, CSS). **Pas d'en-tête de cache** sur les fichiers `/_astro/` (leur nom change à chaque version : ils pourraient être gardés un an par le navigateur). À configurer dans Apache | 🟨 |
| P8 | Poids et nombre de requêtes par page | Mesure de sobriété | Lighthouse en ligne, en mobile | Contact 134 Ko / 8 requêtes ; Projets 145 Ko / 8 ; TiK•TaK 216 Ko / 10 ; Accueil 225 Ko / 11 ; À propos 336 Ko / 17, puis 302 Ko après correction ; Galerie 620 Ko / 15, puis 338 Ko après correction | ✅ |

## 3. Référencement — mon site est-il compréhensible par une machine ?

**Ce que je veux :** être trouvé sur mon nom, et sur « designer UI/UX Montbéliard », « stage UI/UX Montbéliard » et « portfolio BUT MMI ».

**Ce que comprend un moteur de recherche** :
- le titre et la description de chaque page, différents d'une page à l'autre ;
- des titres hiérarchisés ;
- des adresses lisibles ;
- un plan du site ;
- une fiche « Personne » en données structurées ;
- une image d'aperçu pour les partages.

| # | Critère | Pourquoi dans mon cas | Comment je l'ai vérifié | Résultat et corrections | État |
|---|---|---|---|---|---|
| R0 | Recherches visées | Savoir sur quoi je veux être trouvé | Choix des requêtes, comparaison avec mes titres et descriptions | « Ewan Menigoz », « designer UI/UX Montbéliard », « stage UI/UX Montbéliard », « portfolio BUT MMI » : mon nom, « Designer UI/UX », « Montbéliard », « BUT MMI » et « stage » apparaissent dans le titre ou la description de l'accueil et dans les données structurées | ✅ |
| R1 | `title` et `meta description` uniques | Une page par projet, en plus des pages principales | 18/11 : lecture du `<head>` de 9 pages en ligne | Titres de la forme « Galerie · Ewan Menigoz - Portfolio » ; descriptions toutes différentes | ✅ |
| R2 | Adresses lisibles | Routes `/projets/[slug]` | Visite des pages | Par exemple `/projets/tiktak` ou `/projets/climat-outre-mer` | ✅ |
| R3 | Plan du site et `robots.txt` | Indexation | 17/11 et 18/11 : visite des fichiers | `robots.txt` autorise tout et indique le plan du site ; `sitemap-index.xml` liste les pages (toutes en 200). 18/11 : un commentaire dépassé retiré de `robots.txt`. J'ai choisi de ne pas utiliser la Search Console | ✅ |
| R4 | Une seule adresse par page, en HTTPS | Éviter les doublons | 17/11 : balise canonique et redirections | Balise canonique sur chaque page ; HTTP redirigé vers HTTPS (301) ; certificat Let's Encrypt renouvelé automatiquement | ✅ |
| R5 | Données structurées `Person` | Relier mon nom, mon métier, ma ville et mon école | 18/11 : lecture du JSON-LD en ligne | Nom, métier, e-mail, ville, établissement ; 18/11 : adresse du site ajoutée, et profils publics (`sameAs`) prévus dès que les liens LinkedIn et Instagram sont renseignés | ✅ |
| R6 | Aperçu de partage (Open Graph) | Les recruteurs partagent des liens par message ou sur LinkedIn | 18/11 : lecture des balises | Titre, description et adresse étaient déjà présents ; il manquait l'image. 18/11 : image de 1200 × 630 px aux couleurs du site, avec son texte alternatif, et carte « grande image » pour X/Twitter | ✅ |
| R7 | Page 404 personnalisée | Un lien cassé ne doit pas perdre le visiteur | 18/11 : adresse inexistante | Statut 404 renvoyé par Apache, avec ma page 404 et ses liens vers l'accueil et les projets | ✅ |
| R8 | Score Lighthouse SEO | Indicateur global | Lighthouse en ligne, le 18/11 | 100 sur les 11 mesures (6 pages, mobile et ordinateur) | ✅ |

## 4. Conformité juridique — que dois-je à mes visiteurs et aux auteurs des contenus ?

**À mes visiteurs :**
- savoir qui édite et héberge le site ;
- savoir ce que deviennent les données du formulaire (finalité, durée, droits) ;
- ne pas être suivis sans leur accord.

**Aux auteurs :**
- citer mes coéquipiers ;
- respecter la licence des photos, des polices et des bibliothèques ;
- reconnaître les droits des marques et des visuels montrés dans mes projets.

| # | Critère | Pourquoi dans mon cas | Comment je l'ai vérifié | Résultat et corrections | État |
|---|---|---|---|---|---|
| J1 | Mentions légales complètes | Obligation de la loi pour la confiance dans l'économie numérique (LCEN) | 16/11 : relecture, aucun marqueur restant dans le site construit | Éditeur, directeur de la publication, hébergeur Infomaniak (adresse, téléphone, site), nom de domaine | ✅ |
| J2 | Information RGPD au moment du formulaire | Nom et adresse e-mail enregistrés dans PocketBase | 16/11 : relecture de la case et de la page | Finalité, base légale (consentement), destinataire, hébergement en Suisse (pays reconnu comme protégeant les données), durée de 12 mois, droits et réclamation à la CNIL | ✅ |
| J3 | Données réduites au nécessaire et protégées | PocketBase sur mon serveur | 16/11 et 18/11 : champs, règles d'accès, HTTPS | Seulement nom, e-mail, objet, message et consentement ; site et PocketBase en HTTPS ; lecture publique des messages refusée (403) ; administration protégée par un mot de passe fort ; messages supprimés à la main au bout de 12 mois, avec un rappel | ✅ |
| J4 | Cookies : bandeau seulement si nécessaire | Thème mémorisé, écran de chargement montré une fois | 16/11 : inventaire dans le navigateur | Aucun cookie ; seulement le stockage local du thème et une mémoire de session pour l'écran de chargement, décrits dans les mentions légales : pas de bandeau nécessaire | ✅ |
| J5 | Licences des polices et des bibliothèques | Polices SIL OFL ; Astro, Tailwind CSS, daisyUI, PocketBase sous licence MIT | Mentions légales et README | Citées dans les mentions légales et détaillées dans le README, avec les inspirations des animations et leurs auteurs | ✅ |
| J6 | Droits sur les contenus des projets | Projets collectifs, marques, visuels de films | Relecture des études de cas et des mentions | Coéquipiers cités, et d'accord pour apparaître sur le site : Enzo Hillairet et Lilian Maitre (OpenSigne), Enzo Loddo (Climat Outre-Mer), Enzo Hillairet et Matthis Carnicer (Iris VOD). Marques et logos de tiers mentionnés ; données publiques de Météo-France. 18/11 : visuels de films d'Iris VOD signalés comme appartenant à leurs ayants droit | ✅ |
| J7 | Droit à l'image et licence des photos | Photos des passions et de la galerie, photo de moi | 18/11 : origine des photos | Les photos des passions et de la galerie viennent de Pexels (licence gratuite) ; aucune personne n'y est reconnaissable. 18/11 : crédit Pexels ajouté dans les mentions légales. La seule personne visible sur le site, c'est moi (page À propos) | ✅ |
| J8 | Déclaration d'usage de l'IA | Exigence du projet | Présence et contenu des fichiers | `IA.md` à la racine du dépôt, et page « Ma façon de travailler avec l'IA » sur le site | ✅ |

---

## Ce qu'il reste à faire

- **Accessibilité** : écouter le site avec un lecteur d'écran (NVDA) et tester le zoom à 200 %.
- **Performance** : activer le cache des fichiers `/_astro/` dans Apache ; ne charger la police Caveat que sur ordinateur.
- **Mise en ligne** : envoyer sur le serveur les corrections du 18/11, puis remesurer avec Lighthouse en ligne. Ces corrections concernent l'accordéon, le carrousel, l'anneau, les images, l'aperçu de partage, les données structurées et les mentions légales.
