# Ben & Alice : l'Attaque des Maths — version française et mobile

Adaptation du jeu **Math Attack** créé par Julien Dubois et ses enfants
(jeu original : <https://julien-dubois.com/math-attack/>).

Un jeu de plateforme pour apprendre le calcul (7-10 ans) : on attrape des bulles
`+10`, `-2`, `×2`… pour transformer son nombre et atteindre le numéro de la porte.

## Jouer

👉 **En ligne : <https://acherm.github.io/math-attack/>** (ordinateur, tablette ou téléphone)

En local :

```bash
npm install
npm run dev        # http://localhost:5173 — et sur le réseau local pour tester sur téléphone/tablette
npm run build      # site statique dans dist/ (chemins relatifs : GitHub Pages, n'importe quel hébergeur…)
```

## Ce qui change par rapport à l'original

### Français
- Le jeu démarre **en français par défaut**, quelle que soit la langue du navigateur
  (l'anglais reste disponible dans le menu, et le choix est mémorisé).
- Les messages qui étaient restés en anglais en dur sont maintenant traduits
  (« Too High! », « ×10 Shift! », « Slime bump! », « Mode: », « LOCKED »…).

### Mobile et tablette
- **Manettes tactiles** pendant la partie (uniquement sur écran tactile) :
  - 1 joueur : pavé ◀ ▶ à gauche, bouton **SAUT** à droite (toucher 2× = double saut).
    On peut glisser le doigt de ◀ à ▶ sans le lever.
  - 2 joueurs sur une tablette : chaque enfant a sa manette, **J2 à gauche, J1 à droite**
    (comme au clavier : Z/Q/D à gauche, flèches à droite).
- Sur tablette, le terrain remonte pour que les manettes soient **sous** le jeu et pas par-dessus.
- Boutons du bandeau (annuler, son, langue, recommencer, menu) plus gros, avec une zone tactile élargie.
- Les raccourcis clavier (`[K]`, `[ESC]`, « ESPACE / ENTRÉE »…) sont masqués sur écran tactile,
  et les textes d'aide parlent des boutons à l'écran.
- Invitation à **tourner le téléphone** en paysage (avec un bouton « Jouer quand même »).
- Bouton **Plein écran** dans le menu (Android, iPad ; sur Android l'écran se verrouille en paysage).
- Installable sur l'écran d'accueil (manifeste + icônes) : en plein écran et en paysage,
  y compris sur iPhone où le plein écran n'existe pas dans Safari.
- Pas de zoom au double-tap ou au pincement, pas de menu au appui long, prise en compte
  des encoches (`safe-area`) et de la barre d'adresse mobile (`100dvh`).
- Le son se débloque aussi au `touchend` (nécessaire sur iOS).

### Autres
- **Plus de Google Analytics** : l'original envoie des statistiques (avec consentement)
  vers le compte de l'auteur ; cette copie ne suit rien et n'affiche plus la fenêtre cookies.
- Le bouton « GitHub » du menu (dépôt introuvable) devient « 🎮 Jeu original ↗ », qui renvoie vers le jeu de Julien.

## Comment ce projet a été reconstruit

Le lien GitHub du jeu (`github.com/jdubois/math-attack`) renvoyait une erreur 404
au moment de l'adaptation (dépôt privé ou pas encore publié), et le site ne publie pas
de *source map*. Le code a donc été **récupéré depuis la version en ligne** :
le bundle Vite a été découpé (Phaser 3.90.0 d'un côté, le code du jeu de l'autre),
puis remis en forme avec Prettier.

Conséquence : `src/main.js` garde les noms de variables courts du minifieur
(`ht()` = traduction, `Pt()` = langue courante, `ut` = gestionnaire de son,
`Ye` = menu, `We` = partie, `He` = écran de victoire…). Les ajouts de l'adaptation sont
commentés, et toute la partie mobile est dans un fichier lisible à part :
`src/touch-controls.js`.

Si le dépôt original devient public, il vaudra mieux repartir de ses sources
et y reporter ces changements (`src/touch-controls.js`, `src/style.css`, et les quelques
points d'accroche dans le jeu).

## Structure

```
index.html               page, méta mobiles, manifeste
src/main.js              le jeu (Phaser) — récupéré de la version en ligne + adaptations
src/touch-controls.js    manettes tactiles, plein écran, invitation à tourner l'écran
src/style.css            mise en page plein écran et style des manettes
public/assets/characters sprites de Ben et Alice
public/manifest.webmanifest, icônes
.github/workflows/       déploiement automatique sur GitHub Pages à chaque push sur main
```

Crédits : jeu, graphismes, niveaux et musique © Julien Dubois et ses enfants.
