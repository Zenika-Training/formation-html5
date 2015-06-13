# Nouvelles balises

<!-- .slide: class="page-title" -->



## Plan

<!-- .slide: class="toc" -->

- [Introduction](#/1)
- **[Nouvelles balises](#/2)**
- [CSS 3](#/3)
- [JavaScript, le langage du web](#/4)
- [Vers des application plus interactives](#/5)
- [Gestion des données](#/6)
- [Multimédia](#/7)
- [Conclusion](#/8)

Notes :



## Un Doctype simplifié

- HTML5 utilise un tout nouveau DOCTYPE simplifié
- Les navigateurs utilisent alors un mode de rendu respectueux des standards

```html
<!doctype html>
```

Notes :



## Balises obsolètes

- Obsolètes car remplaçables par des styles CSS
  - `<basefont>`
  - `<big>`
  - `<center>`
  - `<font>`
  - `<strike>`
  - `<tt>`

Notes :



## Balises obsolètes

- Obsolètes car elles limitent l'accessibilité
  - `<frame>`
  - `<frameset>`
  - `<noframes>`

- Obsolètes car déroutantes ou remplaçables par d'autres composants
  - `<acronym>` → `<abbr>`
  - `<applet>` → `<object>`
  - `<isindex>` → `<input>`
  - `<dir>` → `<ul>`

Notes :



## Nouvelles balises sémantiques

- HTML 5 tente d'apporter une dimension sémantique aux balises
- Permet une indexation intelligente
- Facilite la compréhension des documents
- Améliore l'accessibilité

- 5 catégories principales
  - Structure de document
  - Bloc masquable
  - Marqueurs de texte
  - Illustrations
  - Autre

Notes :



## Structure de document

- `section` : conteneur générique, visant à grouper les éléments relatifs à un sujet donné
- `article` : section auto-contenue, pouvant être extraite du document de manière indépendante (RSS...)
- `header` : en-tête de page, de section ou d'article
- `footer`: pied de page, conclusion de section ou d'article
- `aside` : barre latérale, contenu additionnel relatif à un élément
- `nav` : éléments de navigation intra- ou inter-documents

Notes :



## Structure de document

<br />
<!-- .element: style="display: block; float: right; width: 50%" -->

<figure style="display: block; float: left; width: 50%; margin: 0 10px;">
    <img src="ressources/structure-html.gif" alt="Grunt" />
</figure>

```html
<header>...</header>

<nav>...</nav>

<section>
  <header>...</header>
  <article>...</article>
  <article>...</article>
  <article>...</article>
  <footer>...</footer>
  <aside>...</aside>
</section>

<footer>...</footer>
```

Notes :



## Bloc masquable

- `details` : Bloc masquable, contenant des informations additionnelles. L'attribut `open` détermine si son contenu est visible.
- `summary` : Titre d'un bloc `details`

```html
<details open>
  <summary>Lorem ipsum</summary>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit...
</details>
```

<details open>
  <summary>Lorem ipsum</summary>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit...
</details>

Notes :



## Marqueurs de texte

- `mark` : attire l'attention sur un extrait de texte, par exemple le résultat d'une recherche, ou un extrait de texte intéressant

```html
Cette formation vous est présentée par <mark>Zenika</mark>
```

- `time` : microformat permettant de spécifier une date interprétable par une machine

```html
<time>2009-11-13</time>
<time datetime="2009-11-13">13 Novembre</time>
```

Notes :



## Illustrations

- Pour compléter le texte par une illustration (image, tableau, code source...)
  - `figure` : encapsule l'illustration et une légende optionnelle
  - `figcaption` : légende d'illustration

```html
<figure>
  <img src="zenika.png"/>
  <figcaption>Le logo de Zenika</figcaption>
</figure>

```

<figure>
  <img src="ressources/logo-zenika.png"  width="30%"/>
  <figcaption>Le logo de Zenika</figcaption>
</figure>

Notes :



## Autres

- Attributs de données personnalisés : `data-*`
- Permettent d'associer des données à un élément du DOM
- Facilement accessibles depuis JavaScript via `element.dataset`

```html
<img id="picture1"
  src="images/thumbs/picture1.png"
  data-fullpath="images/large/picture1.png"/>
```

```js
document.getElementById('picture1').dataset('fullpath'));
```

Notes :



## Formulaires

- HTML5 propose beaucoup de nouveautés pour les formulaires, facilitant à la fois le travail des développeurs et l'usage des utilisateurs
  - De nouveaux champs, qui se définissent avec la balise `input`
  - De nouveaux attributs, qui permettent de spécifier le comportement des champs : `required`, `min`, `step`, `placeholder`...
  - De nouveaux éléments : `output`, `datalist`

<form>
  <input type="number"
    required min="10" step="5"
    placeholder="Saisir un nombre >= 10"/>
  <button type="submit">OK</button>
</form>

```html
<input type="number"
  required min="10 "step="5"
  placeholder="Saisir un nombre >= 10"/>
```

Notes :



## Formulaires - Nouveaux champs

- Certains champs de saisie se différencient graphiquement
  - `<input type="color"/>` <input type="color"/>
  - `<input type="date"/>` <input type="date"/>
  - `<input type="number"/>` <input type="number"/>
  - `<input type="search"/>` <input type="search"/>
  - `<input type="range"/>` <input type="range"/>

Notes :



## Formulaires - Nouveaux champs

- Les autres sont utilisés pour clarifier la sémantique des formulaires
  - `tel`, `email`
  - `time`, `datetime`, `datetime-local`
  - `week`, `month`
  - `url`
- Leur utilisation offre une validation du contenu
- Cela permet également de charger les claviers correspondants sur des systèmes mobiles

Notes :



## Formulaires - Nouveaux champs

```html
<form>
  <label>Nom : </label> <input type="text" name="name"/>

  <label>Age : </label> <input type="number" name="age"/>

  <label>Date de naissance : </label>
  <input type="date" name="birthday"/>

  <label>E-mail : </label>
  <input type="email" name="email"/>

  <label>Téléphone : </label>
  <input type="tel" name="tel"/>

  <label>Site internet : </label>
  <input type="url" name="site"/>

  <label>Mot de passe : </label>
  <input type="password" name="password"/>
</form>
```

Notes :



## Formulaires - Validation

- Minimum, maximum <input type="number" min="3" max="9"/>&nbsp;<input type="date" max="2012-06-21"/>

```html
<input type="number" min="3" max="9"/>
<input type="date" max="2012-06-21"/>
```

- Incrément <input type="number" step="3"/>&nbsp;<input type="range" step="5"/>

```html
<input type="number" step="3"/>
<input type="range" step="5"/>
```

- Fonctionne pour ces types : `number`, `range`, `date`, `datetime`, `datetime-local`, `month`, `time` et `week`

Notes :



## Formulaires - Validation

- Validation par expression régulière

```html
<input type="number" pattern="[1-9]{5}"/>
```

- Indication si le champ est vide, pratique pour guider les utilisateurs sur la nature du contenu

```html
<input type="number" placeholder="Entrez votre âge" />
```
<input type="number" placeholder="Entrez votre âge" />

Notes :



## Formulaires - Validation

- L 'autocomplétion des champs par rapport à l'historique des formulaires précédemment complétés peut faciliter le remplissage
- L'attribut s'utilise :
  - Avec la balise `form` pour indiquer le comportement général
  - Avec la balise `input` pour spécifier le comportement d'un champ particulier

```html
<form autocomplete="on">
    <input type="email" />
    <input type="password" autocomplete="off" />
</form>
```

Notes :



## Formulaires - Validation

- Indication si un champ est requis, bloquant l'envoi des valeurs si aucun contenu n'est présent

```html
<input type="number"required/>
```

- Il est possible d'indiquer que la validation n'est pas nécessaire, sur un champ ou sur l'intégralité du formulaire

```html
<form novalidate>
    <input type="submit" formnovalidate/>
</form>
```

Notes :



## Formulaires - Validation

- Quelques lignes de JavaScript permettent de définir des règles de validation particulières et ses propres messages

```html
<input type="password" id="pass1"/>
<input type="password" id="pass2" oninput="check(this)"/>
```

```js
function check(input) {
  if (input.value != document.getElementById('pass1').value){
    input.setCustomValidity('Erreur !');
  } else {
    input.setCustomValidity(''); //reset
  }
}
```

Notes :



## Formulaires - Validation

```html
<form autocomplete="on">
  <input type="text" name="name" pattern="[a-zA-z]+" required/>
  <input type="number" name="age" min="18" max="120"
      step="1" required/>
  <input type="date" name="birthday" max="2010-01-01"/>
  <input type="email" name="tel" placeholder="email@domain.com"/>
  <input type="tel" name="tel" placeholder="0600112233"/>
  <input type="url" name="site" placeholder="http://site.com"/>
  <input type="password" name="password" id="pass"
      autocomplete="off"/>
  <input type="password" name="password2" id="pass2"
      autocomplete="off"/>
  <input type="submit" value="submit"/>
  <input type="submit" formnovalidate value="save"/>
</form>
```

Notes :



## Formulaires - Nouveaux éléments

<datalist id="pays">
  <option value="France">
  <option value="Chine">
  <option value="Italie">
  <option value="Gabon">
  <option value="Pérou">
</datalist>
<input type="search" list="pays" placeholder="Exemple"/>

- Il est possible de définir des listes d'options avec `datalist`
```html
<datalist id="pays">
  <option value="France">
  <option value="Chine">
  <option value="Italie">
  <option value="Gabon">
  <option value="Pérou">
</datalist>
```
- On peut ensuite l'utiliser avec l'attribut `list`
```html
<input type="search" list="pays"/>
```

- Attention, les listes peuvent servir à guider l'utilisateur,mais ne l'empêchent pas de saisir d'autres valeurs !

Notes :



## Formulaires - Nouveaux éléments

- `output` est une nouvelle balise qui sert à afficher un résultat
- Elle est pratique pour calculer des valeurs conditionnées par le contenu du formulaire

<form oninput="result.value = parseInt(a.value) + parseInt(b.value)">
<input type="number" name="a" value="0"/>
+ <input type="number" name="b" value="0"/>
= <output for="a b" name="result"/>
</form>

```html
<form
  oninput="result.value = parseInt(a.value) + parseInt(b.value)">

<input type="number" name="a" value="0"/>
+ <input type="number" name="b" value="0"/>
= <output for="a b" name="result"/>

</form>
```




<!-- .slide: class="page-questions" -->



<!-- .slide: class="page-tp1" -->
