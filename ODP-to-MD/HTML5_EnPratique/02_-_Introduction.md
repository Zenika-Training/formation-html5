#HTML5 en pratique

<!-- .slide: class="page-title" -->



## Introduction


![](ressources/images/02_-_Introduction-100002010000020000000200EB9C62D4.png)

Notes :




## Plan

- Introduction
- Les balises
- CSS 3
- Javascript, le langage du web
- Vers des application plus interactives
- Gestion des données
- Multimédia
- Conclusion
Notes :




## Un petit peu d'histoire...

- 1989 : Naissance de l'HyperText Markup Language
- 1994 : Création du W3C, World Wide Web Consortium, chargé de standardiser les technologies du web ; proposition d'HTML 2.0
- 1996 : Apparition de CSS1 et Javascript
- 1997-1998 : Spécifications HTML 3.2 puis HTML 4.0 ; CSS2
- 2000 - 2006 : W3C abandonne la spécification de HTML au profit de XHTML
- 2004 : Création duWHATWG, Web Hypertext Application Technology Working Group, reprend la spécification HTML
- 3 mars 2007 :W3C annonce la reprise officielle de la spécification HTML5 basée sur les travaux du WHATWG
- 22 Janvier 2008 :Premières propositions sur HTML5
Notes :




## HTML5 : HTML + JavaScript + CSS3


![](ressources/images/02_-_Introduction-100002010000020000000200EB9C62D4.png)


![](ressources/images/02_-_Introduction-1000020100000080000000809FDD08C8.png)

```
JS
```
JavaScript
Notes :




## HTML5 : navigateurs et support

- Le support des fonctionnalités HTML5 diverge suivant les navigateurs

- Ressources
	- http://html5test.com/
	- http://caniuse.com/
|Navigateurs|Points|
|---|---|
|Chrome 27|448|
|Opera 12.0|423|
|Safari 6.0|376|
|Firefox 21|399|
|Internet Explorer 9|138|

![](ressources/images/02_-_Introduction-TablePreview1.svm)

Notes :




## HTML : introduction

- Format de données structurant une page web
- Langage de balisage

```
<html>
<head>
<!-- En-têtes, liens CSS et js, titre -->
</head>
<body>
Corps du texte
<p>
paragraphe
</p>
</body>
</html>
```

Notes :




## CSS

- CSS (Cascading Style Sheets) : feuilles de styles en cascade
- Mise en forme et présentation de la page HTML
- Syntaxe : définition de règles par sélecteurs

- Les sélecteurs peuvent cibler un élément (balise), des classes d'éléments (attributclass), un élément identifié (attributid)

```
p {
font-size: 12px;
font-family: Arial, serif;
color : black;
}
```

Notes :




## JavaScript

- Langage de script principalement utilisé pour le web côté navigateur
- Inséré dans la page HTML

- Manipulation du DOM
	- Modification et création d'éléments, gestion d'événements

```
<script>//code</script>
Ou
<scriptsrc="scripts/myScript.js"></script>
```

```
var para1 = document.getElementById("p1");
para1.innerHTML("hello world");

```

Notes :




## HTML5 : changements et nouveautés

- Changements de structure
- Nouveaux éléments
- Nouveaux attributs
- APIs Javascript
	- Formulaires, Géolocalisation, Drag'n'Drop, Stockage local, mode hors-ligne, contenu multimédia, canvas…
- Nouveautés CSS3
	- Sélecteurs, ombres et arrondis, transformations, animations, ...

- Spécification :http://www.w3.org/TR/html5/
Notes :






![](ressources/images/02_-_Introduction-1000020100000100000001003A063607.png)

Notes :




<!-- .slide: class="page-questions" -->



<!-- .slide: class="page-tp1" -->