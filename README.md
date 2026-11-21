# Portfolio — Abakar Issa

Site vitrine en **HTML, CSS et JavaScript**, sans framework ni étape de build.
En ligne : https://abakar-issa-ali.github.io

## Lancer en local

```bash
git clone https://github.com/Abakar-Issa-Ali/Abakar-Issa-Ali.github.io.git
cd Abakar-Issa-Ali.github.io
```

Ouvre `index.html` dans le navigateur, ou utilise l'extension **Live Server** de VS Code pour le rechargement automatique.

## Structure

```
index.html            Structure de la page (sections, textes fixes)
css/
  base.css            Variables (couleurs, typo), reset, utilitaires, animations
  components.css      Boutons, navigation + menu mobile, cartes, tags
  sections.css        Styles de chaque section avec leur responsive
js/
  data.js             Contenu modifiable : liens de contact et liste des projets
  main.js             Comportements : menu, lien actif, apparitions, rendu des projets
assets/
  icons/favicon.svg
  images/profile.jpg  Photo ronde du hero (800 × 800)
  images/about.jpg    Photo de la section Expérience (800 × 1000)
  images/projects/    Une capture par projet (1200 × 750)
```

## Mettre à jour le contenu

- **Photos et captures** : remplace les fichiers dans `assets/images/` en gardant les mêmes noms.
  Pour un autre nom ou un autre format (`.png`, `.webp`), mets à jour le chemin dans `index.html` (photos) ou dans `js/data.js` (projets).
- **Liens de contact** : objet `SITE` dans `js/data.js` (`email`, `linkedin`, `cv`, `github`).
  Une valeur vide masque le bouton ou la carte correspondante.
- **CV** : dépose le PDF dans `assets/` puis renseigne `cv: 'assets/cv-abakar-issa.pdf'`.
- **Projets** : tableau `PROJECTS` dans `js/data.js`. Ajouter un objet = ajouter une carte.
  `demo` et `code` sont optionnels.
- **Couleurs** : variables `--color-blue` et `--color-magenta` en haut de `css/base.css`.

## Conventions

- Classes CSS en **BEM** : `bloc__element`, `bloc--variante`. États ajoutés par le JS : `is-open`, `is-active`, `is-visible`.
- Liens dynamiques : attribut `data-link="github|linkedin|email|cv"`, rempli depuis `SITE`.
- Indentation 2 espaces, UTF-8 (voir `.editorconfig`).

## Déploiement

Chaque push sur `main` publie le site via GitHub Actions (`.github/workflows/deploy.yml`).
Le suivi se fait dans l'onglet **Actions** du dépôt.
