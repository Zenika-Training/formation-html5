# Javascript, le langage du web

<!-- .slide: class="page-title" -->



## Plan

<!-- .slide: class="toc" -->

- [Introduction](#/1)
- [Nouvelles balises](#/2)
- [CSS 3](#/3)
- **[JavaScript, le langage du web](#/4)**
- [Vers des application plus interactives](#/5)
- [Gestion des données](#/6)
- [Multimédia](#/7)
- [Conclusion](#/8)

Notes :




## Les points clés du javascript

- En Javascript, presque tout est objet (`Array`, `String`, `Function`...)
- Les points à comprendre pour ne pas tomber dans les pièges :
	- Comment itérer sur des objets ou tableaux
	- Le scope, ou portée des variables
	- Les opérateurs de comparaison de variables
	- Les paramètres implicites et les types invocations de fonctions
	- Les bons outils pour travailler / débugger

Notes :




## Itérer sur un objet ou un tableau

- En Javascript, un tableau est un objet. Il est possible de les parcourir l'un comme l'autre
	- Parcourir un tableau
	- Parcourir les propriétés d'un objet

```javascript
var chiffres = ['un','deux','trois','quatre'];
var size = chiffres.length;
for(var i = 0; i < size; i++){
    doSomething(chiffres[i]);
}
```

```javascript
for (var i in obj) {
    if (obj.hasOwnProperty(i)){
        console.log(i + " = ", obj[i]);
    }
}
```

Notes :




## Scope des variables

- La portée ("scope") d'une variable détermine sa visibilité au sein du programme
- Il existe deux scopes
	- Scope global  
- Accessible dans tout le programme  
- Pas de mot-clé 
	- Scope local  
- Accessible uniquement dans la fonction dans laquelle la variable est déclarée  
- Mot-clé `var`

Notes :




## Scope des variables

```javscript
// Global
foo = "foo";

function f() {
    bar = "bar"; // Global
    var answer = 42; // Local à f()
}

f();

// Affiche "foo"
console.log(foo);

// Affiche "bar"
console.log(bar);

// undefined car "answer" n'est visible que dans la fonction f()
console.log(answer); 
```

Notes :




## Comparer des objets et variables

- Javascript offre deux façons de comparer des valeurs
	- `==` compare en forçant les types (égalité abstraite)
	- `===` compare les valeurs (égalité stricte). A préférer !

- Les variables peuvent prendre certaines valeurs spéciales
	- `undefined` est l'état par défaut d'une variable non définie
	- `null` est l'état d'un objet défini mais qui n'a pas de valeur
	- `NaN` signifie "Not a Number" et caractérise généralement le résultat d'une opération sans résultat (ex : `Math.sqrt(-4)`)

```javascript
"1" == 1; // true
"1" === 1; // false
```

Notes :




## Fonctions et variables implicites

- Les fonctions définissent dans leur contexte 2 variables implicites
	- arguments représente les paramètres passés à la fonction.

Note : il est légal de passer un nombre de paramètres différent de celui défini dans la signature de la fonction.

```javscript
function myFunc(a, b) {
    for (i in arguments) {
        console.log(i);
    }
}
myFunc(1, 2, 3, 4);
```

![](ressources/images/05_javascript-10000000000000D1000000762AC55E74.png)

Notes :




## Fonctions et variables implicites

- Les fonctions définissent dans leur contexte 2 variables implicites
	- `this` représente le contexte d'appel d'une fonction  
```javascript
foo = "foo";
function f() {
    console.log(this.foo); // Erreur ? Pas toujours.
}
```
  
**Attention !**

Contrairement au `this` des langages objets traditionnels, le `this` de Javascript dépend de la façon dont la fonction est appelée.

Notes :




## Fonctions et variables implicites

- Le type de fonction détermine le contexte vu par `this` 
	- Fonction top-level : `this` est l'objet `window`
	- Méthode appelée sur un objet : `this` est l'objet cible

```javascript
function f() {
    console.log("this="+this); 
}
f(); // this=[object Window]
```

```javascript
var obj = {
    f : function() {
        console.log("this="+this);
    }
}
obj.f(); // this=[object Object]
```

Notes :




## Fonctions et variables implicites

- Le type de fonction détermine le contexte vu par this 
	- Constructeur  : `this` est l'objet en cours de construction
	- Fonction appelée par `apply` ou `call` : this réfère à l'objet passé en premier paramètre

```javascript
Math.min.apply(Math, [1, 2, 3, 4]);
```

```javascript
function MyClass() {
    console.log("this="+this);
}
var instance = new MyClass(); // this=[object Object]
```

Notes :




## Debug et outils de qualité

- Webkit developer tools : disponible sur tous les navigateurs basés sur Webkit (Chrome, Safari)
- Firefox developer tools : disponible sur Firefox par défaut
- Firebug : plugin de Firefox avec de nombreuses fonctionnalités (visionnage du html, des scripts, des requêtes en fonction du temps, une console d'exécution de javascript...)
- JSLint : outil d'analyse statique développé par D. Crockford. Valide le javascript soumis et teste de nombreuses mauvaises pratiques.
- jsfiddle.net : application web pour tester des fragments de code. L'application permet d'incorporer la plupart des librairies connues.(jquery, extjs…) pour tester directement leurs fonctionnalités.

Notes :




## Chrome DevTools – Elements

![](ressources/images/05_javascript-10000201000003FC00000309EE1D3A9E.png)

Notes :




## Chrome DevTools – Elements

- Edition des styles CSS à la volée, sauvegarde possible dans le fichier cible (source map)
- Accès à tous les override CSS, convertisseur hexa, rgb, hsl 
- Métriques sur l'élément sélectionné
- Edition du DOM, déplacement d'éléments en mode Drag'n'Drop
- Simulation de l'état (`hover`, `focus`, ...)
- Breakpoints sur subtree modification, attribute modification, node removal
- Via le sous-onglet "computed" : accès aux propriétés aggrégées pour l'élément courant
- Accès aux `EventListener` enregistrés sur chaque noeud

Notes :




## Chrome DevTools – Resources

![](ressources/images/05_javascript-10000201000003FC00000309592972CB.png)

Notes :




## Chrome DevTools – Elements

- Frames : Ressources statiques de l'application 
    - Fichiers
    - Ressources
    - Javascript
    - Stylesheets
    - Images
    
Notes :




## Chrome DevTools – Elements

- Différents types de stockage : 
    - WebSQL Database 
    - IndexedDB
    - Localstorage
    - Sessionstorage
    - Cookies
    - Application Cache
- La plupart des éléments accessibles ici sont modifiables et supprimables

Notes :




## Chrome DevTools – Network

![](ressources/images/05_javascript-10000201000003FC00000309701715B5.png)

Notes :




## Chrome DevTools – Network

- Toutes les requêtes, filtrables par type 
    - Image
    - xhr / ajax
    - Scripts
    - Websockets
- Détail de chacune des requêtes avec les entêtes, headers, réponse...

Notes :




## Chrome DevTools – Network

- Nombreuses options accessibles via clic droit
    - Copy link
    - Copy as cURL
    - Copy as HAR
- Les notifications de Server Sent Event ne sont pas visibles car elles sont gérées par le navigateur qui vous transmet seulement un évènement.

Notes :




## Chrome DevTools – Sources

![](ressources/images/05_javascript-10000201000003FC00000309DD3DF68B.png)

Notes :




## Chrome DevTools – Sources

- Visualisation et édition (CSS, JS, HTML)
- Debugger 
    - Possibilité de placer des breakpoints
    - Accès au scope courant
    - Watch de variable
    - Callstack
    - Debugger spécifique Workers
- Pretty print (bouton "{}") pour formattage et deminification
- Pause on exceptions (bouton "pause")
- Historique des modifications via clic droit

Notes :




## Chrome DevTools – Console

![](ressources/images/05_javascript-10000201000003FC000003092A54A265.png)

Notes :




## Chrome DevTools – Console

- Interprétation / exécution de code dans le scope courant (si script en pause, utilisation du contexte de l'endroit en pause)
- Visionnage d'un objet du scope et de toutes ses propriétés
- Sélection d'éléments avec `$('#element')` comme du jQuery (selecteur `Bling`). Possibilité d'accéder aux éléments précédemment sélectionnés via `$0`, `$1`, `$2`...
- Monitorer les évènements sur un élément : `monitorEvents($('#element'))`
- `console.table(array)` permet de faire afficher un array de manière plus lisible

Notes :




## Chrome DevTools – General

![](ressources/images/05_javascript-10000201000003FC00000309179EC511.png)

Notes :




## Chrome DevTools – General

- Raccourcis claviers
- Experiments si activées dans about:flags
- Désactivation du cache
- Géoloc fictive
- Source mapping
- Emulation mobile
- …
- http://anti-code.com/devtools-cheatsheet/
- https://developers.google.com/chrome-developer-tools/

Notes :




## Chrome Urls

![](ressources/images/05_javascript-10000201000003FE0000035D3E36474B.png)

Notes :




## Chrome Urls

- [chrome://chrome-urls/](chrome://chrome-urls/)
- Extension : Google Chrome Service Pages
    - [chrome://appcache-internals](chrome://appcache-internals)
    - [chrome://flags/](chrome://flags/)
    - [chrome://indexeddb-internals/](chrome://indexeddb-internals/)
    - [chrome://inspect](chrome://inspect)
    - [chrome://webrtc-internals](chrome://webrtc-internals)

Notes :




<!-- .slide: class="page-questions" -->



<!-- .slide: class="page-tp1" -->