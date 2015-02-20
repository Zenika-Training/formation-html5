# Introduction

<!-- .slide: class="page-title" -->



## Plan

<!-- .slide: class="toc" -->

- **[Introduction](#/1)**
- [Nouvelles balises](#/2)
- [CSS 3](#/3)
- [JavaScript, le langage du web](#/4)
- [Vers des application plus interactives](#/5)
- [Gestion des données](#/6)
- [Multimédia](#/7)
- [Conclusion](#/8)



## Un petit peu d'histoire

- 1989 : Naissance de l'HyperText Markup Language
- 1994 : Création du W3C, World Wide Web Consortium, chargé de standardiser les technologies du web, proposition d'HTML 2.0
- 1996 : Apparition de CSS et JavaScript
- 1997-1998 : Spécifications HTML 3.2 puis HTML 4.0, CSS2
- 2000 - 2006 : W3C abandonne la spécification de HTML au profit de XHTML
- 2004 : Création du WHATWG, Web Hypertext Application Technology Working Group, reprend la spécification HTML



## Un petit peu d'histoire

- 3 mars 2007 : W3C annonce la reprise officielle de la spécification HTML5 basée sur les travaux du WHATWG
- 22 janvier 2008 : Premières propositions sur HTML5
- 28 octobre 2014 : Spécification HTML 5.0 terminée
- HTML 5.1 prévue pour 2016



## "HTML5" : HTML5 + JavaScript + CSS3


![Logos du web](ressources/logos-web.png)



## Navigateurs et support

- Le support des fonctionnalités HTML5 diverge suivant les navigateurs

- Ressources
  - http://html5test.com/
  - http://caniuse.com/

<iframe src="http://html5test.com/" width="100%" height="30%"></iframe>



## HTML : introduction

- Format de données structurant une page web
- Langage de balisage

```html
<html>
<head>
  <!-- En-têtes, liens CSS et JS, titre -->
</head>
<body>
  Corps du texte
  <p>
    paragraphe
  </p>
</body>
</html>
```



## CSS

- CSS (Cascading Style Sheets) : feuilles de styles en cascade
- Mise en forme et présentation de la page HTML
- Syntaxe : définition de règles par sélecteurs

- Les sélecteurs peuvent cibler un type d'élément (balise), des classes d'éléments (attribut `class`), un élément identifié (attribut `id`)

```css
p {
  font-size: 12px;
  font-family: Arial, serif;
  color : black;
}
```



## JavaScript

- Langage intégré aux navigateurs pour programmer du comportement dans les pages web
- Modification de la page (ajout et suppression d'éléments)
- Accès aux API du navigateur : barre d'adresse, historique, stockage local, réseau, géolocalisation, caméra, microphone...

```html
<sscript>
//code
</sscript>
```

```html
<sscript src="script.js"></sscript>
```

```js
var paragraph1 = document.getElementById("paragraph1");
paragraph1.innerHTML("hello world");
```



## Changements et nouveautés

- HTML : nouveaux éléments et attributs
- JavaScript : formulaires, géolocalisation, drag'n'drop, stockage local, mode hors-ligne, contenu multimédia, canvas...
- CSS3 : sélecteurs, ombres et arrondis, transformations, animations...

- Spécification : http://www.w3.org/TR/html5/



<!-- .slide: class="page-questions" -->

