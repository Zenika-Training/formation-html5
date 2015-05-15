# Explications sur les dossiers de TP

- TP-start : projet de départ avec les ressources nécessaires pour faire tous les TP
- TP-solution : solution de tous les TP
- Les autres dossiers sont pour les TPs individuels, avec un start et une correction et chaque TP début avec la correction du précédent.


## Quand utiliser le serveur?

Dans trois situtations: Pour la géoloc et le stockage de données, une sécurité de chrome restreint l'utilisation des APIs en manipulant des fichiers locaux.

Pour le TP sur le cache, allumer/éteindre le serveur permet de tester simplement le bon fonctionnement du cache.


## FAQ

### html

> A quoi servent ces nouvelles balises (header/nav/footer/time/...)? elles ne font rien de plus qu'un div...

Pour la semantique de nos pages, elles sont plus lisible, seront plus référencables.
Exp: un lecteur rss pourrait isoler le texte complet d'une page avec les balises `<article>`

> Peut on faire la validation d'un formulaire avant le click sur submit?

Oui, `form.checkValidity()` ou `input.checkValidity()`

### css/media-queries

> Quelles valeurs utilisées pour différencier téléphone/tablette/ordinateur ?

Pas de valeurs qui assurent une différenciation parfaite. Bcp de débat sur le net, on peut toutefois essayer:
```css
@media (min-width:320px) { /* smartphones, iPhone, portrait 480x320 phones */ }
@media (min-width:481px) { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
@media (min-width:641px) { /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
@media (min-width:961px) { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { /* hi-res laptops and desktops */ }
```

> Quel est l'intérêt de faire une séléction par rapport à une résolution?

Plus la résolution est grande, plus on a la possibilité d'ajouter des informations à notre page.
C'est donc une information importante. On peut faire le parallèle avec android qui fournit des images de qualités différentes en fonction de la résolution (hdpi/mdpi/ldpi etc)

### IndexedDB

> Dans ce bout de code issu des slides :
> ```javascript
> var object = store.get(1);
> object.onsuccess= function(){};
> ```
> Que se passe-t-il si la requête finit avant l'enregistrement du handler, entre les deux lignes ?

object correspond à un objet requête, qui a une information sur l'état de la requête: pending/terminate
Quand on enregistre le handler, si etat=terminate, alors le callback est directement appelé.

### LocalStorage

> Si on enregistre les données côté client, à quel moment pousser les informations vers le serveur ?

Les données enregistrées côté client ne visent pas forcément à êtres un jour enregistrées sur serveur.
Il faut différencier ces données. Pour l'utilisation du localstorage, on pourra ainsi imaginer la sauvegarde de paramètres, la sauvegarde de données propres à l'utilisateur, qu'il ne souhaite pas partager etc.
(Par exp des notes peuvent ne pas être synchronisées, gardées en local)

> Ca ne marche pas, quand je relance mon navigateur les informations ne sont plus là!

Check les options navigateur, sur chrome "autoriser l'enregistrement de données locales

### Stockage

> Où sont sauvées les données?

Dans les fichiers temporaires locaux du navigateur:par exemple des fichiers du type `~/.config/google-chrome/Default/databases` pour websql, `Webappsstore.sqlite` pour localstorage, `C:\Documents and Settings\<username>\Application Data\Mozilla\Firefox\Profiles\<xxxx>.default\indexedDB\<databaseid>` pour indexedDB

### Cache


### Canvas

> Quel intérêt?

graphes, jeux, animations...

> Comment intéragir avec le canvas ? click, ... ?

Pas d'api propre au canvas, il faut détecter un click de manière standard (addEventListener ("mousemove") / ou autre event)
Puis calculer l'offset entre les coordonnées dans la page et l'emplacement du canvas dans la page. (plusieurs exemples sur stackoverflow)


## Pièges

### TP Géolocalisation

On utilise une `div` vide dans laquelle est "injectée" une carte.
Mais comme elle est vide avant injection, sa taille est de 0.
Il faut donc penser à fixer les valeurs width et height de cette `div`.

### TP Drag-n-drop

- Attention, les navigateurs se comportent visiblement différemment.
  - Firefox: obligation de faire un `event.dataTransfer.setData` pour que l'élément soit draggable.
- TP Drag-n-drop: la spec indique que `ondragenter` et `ondragover` doivent être écoutés pour recevoir
l'événement drop.
- Attention, le thème des éléments bougés dépend aussi du thème de la machine. Sur windows, avec un thème ancien, un draggable bougé est transparent
  - Avec un thème windows7 (ou >) l'élément garde son opacité.

### TP Cache

	- cache manifest: pour toutes les sections pas d'espace: `CACHE :` => `CACHE:`
	- Si une ressource ne peut être récupérée, aucune ne le sera

### Différences entre navigateurs

  - Firefox ne connait pas element.innerText, il faut utiliser element.textContent à la place


## Idées ajout

- ContentEditable
- webRTC!
- ApplicationCache api (monitoring, force update,...)

===TO UPDATE===
