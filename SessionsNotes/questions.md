# Questions - Réponses triées par jour de formation

## Infos

> Peut-on lancer / débugger un serveur nodejs depuis intellij / webstorm ?

Oui, via le plugin nodejs. Dans webstorm, cliquer sur le bouton "nodejs" dans la barre en haut, à coté des settings. Renseigner le chemin vers l'exécutable de Node et ensuite lancer son serveur en faisant clic droit sur le fichier js à lancer. Run as Debug. Ensuite, tous les points d'arrêts dans le fichier seront pris en compte lors de requêtes vers le serveur.

## Formation "En pratique"

### Jour 1 :

> Pourquoi avoir ajouté mark en plus de em / strong ?

Car chacun de ces éléments représente des notions différentes même si ils sont tous liés à la mise en avant d'un fragment de texte.
mark permet de surligner em et strong mettent en valeur via du gras ou de l'italique

> Quel est l'opposé de l'état "open" de la balise details ?

`<details open></details>`    => l'élément s'affichera ouvert
`<details></details> `        => l'élément s'affichera fermé
La balise details a un attribut open pour l'état ouvert et pas d'attribut pour l'état fermé: open="open" ou open

> Qu'est-ce que l'iframe sandboxing et comment l'utiliser ?

Le sandboxing est une fonctionnalité récente qui permet de réduire les droits autorisés à une popup pour limiter les risques de sécurité lors de l'ajout de widgets et composants externes.
Son utilisation est simple : il suffit d'ajouter l'attribut sandbox et la liste des privilèges autorisés.
sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
En ne mettant que l'attribut sandbox, on obtient la limitation maximale des droits. (pas de js, pas de popup, pas de nouvelle fenêtre, pas de plugins, pas de soumission de form...)

> Les data-* sont-il interprétés par le navigateur ?

Non. Etant donné qu'il n'y a aucune contrainte sur ce que l'on peut placer après "data-" (hormis avoir minimum un caractère et pas de majuscule),
le navigateur ne peut pas les interpréter. On pourrait imaginer cependant que des attributs dédiés soient plus tard créé pour l'utilisation des navigateurs.
Ces attributs sont également ignorés par les moteurs de recherche.
Les attributs data-* sont accessibles en javascript via element.dataset.[name]

> HTML5 input validation : popup message customisable ?

Comme presque tous les éléments d'une page web, les messages et leurs styles sont customizables mais, ceux-ci étant liés à l'implémentation native du browser utilisé,
il faut utiliser des sélecteurs CSS particulier qui permettent d'y accéder comme : ::-webkit-validation-bubble-message
A utiliser avec précaution...

> L'attribut pubdate a été supprimé de la specification ?

Oui, pubdate a récemment été supprimé de la spécification sur le tag time.

> Pourquoi form.submit() n'appelle pas la validation html5 ?

Cela semble être un défaut d'implémentation ou une volonté des navigateurs. Appeler form.submit() depuis le javascript ne fait pas passer par la validation.
Il faut effectuer un click sur le bouton submit pour que celle-ci soit appelée.

> Est-il possible d'avoir un fragment de page HTML dynamique, où des variables se mettent à jour en fonction de données sur le serveur ?

En principe, non, pas directement. Cependant, il est possible de reproduire ce mécanisme.
Cela nécessite d'avoir des notifications du serveur pour mettre à jour des variables et de notifier régulièrement la page client, avec des Server Sent Event par exemple, que l'on peut écouter et réagir en mettant à jour la page par exemple. (voir TP serveur sent event)

> Comment forcer le transfert sur le GPU pour les transitions CSS ?

L'accélération GPU est activée par défaut lorsque considérée nécessaire mais variable d'un navigateur a l'autre.
Possibilité de hack via translateZ(0) pour forcer son utilisation.

> Y-a-t-il une media query basée sur la détection du réseau ?

Non, pour l'instant les media-queries sont basées uniquement sur les dimensions du device, sa résolution et le type d'affichage (print, braille, ...)
Pour lier cela au réseau, on pourrait envisager d'utiliser les objets online / offline disponible dans le contexte javascript.

> Peut-on importer / inclure une CSS dans une autre ?

```css
@import "mystyle.css";
@import url("mystyle.css");
```

> Lorsqu'on utilise une nouvelle font avec la notation @font-face, à quel moment le navigateur fait-il l'appel réseau pour récupérer la font ?

L'appel réseau n'est effectué que lorsque la font est utilisé au moins une fois sinon, il n'est pas fait. C'est le cas au moins pour Chrome et Firefox.

> Comment tester un NaN ?

Utiliser la fonctioner isNaN();


### Jour 2 :

> Geoloc : Comment fonctionne la triangulation via wifi ?

Cela se base sur l'analyse des SSID de tous les wifi à portée de votre device. Ceux-ci sont soit collectés par les google cars soit répertoriés par shyhook.

> Element d'origine disponible sur l'event de drop ?

A priori, l'élément d'origine du drag n'est pas disponible sur l'event de drop

> Que faut il sur la dropzone pour que ca marche ?

`ondrop`, `ondragenter`, `ondragover` avec `preventDefault` chacun

> Quelle est la durée de vie de chacun des storages ?

`sessionStorage` : Conservé lorsqu'on actualise la page mais pas lorsqu'on change d'onglet.
`localStorage` : Conservé pour un domaine donné, donc dispo sur tous les onglets ouverts sur un domaine.
`indexedDB` : Conservé pour un domaine donné, donc dispo sur tous les onglets ouverts sur un domaine.

> y'a t il des évènements sur les modifications du localstorage ?

L'event storage est envoyé à chaque modification, avec les propriétés : key, oldValue, newValue, url

> Est-il possible de désactiver le localStorage dans Chrome / Firefox / ... ?

Oui via des paramètres de configuration / démarrage :
 - option de démarrage pour Chrome : `--disable-local-storage`
 - paramètre de configuration pour Firefox : `dom.storage.enabled=false` dans `about:config`

> Est-il possible d'accéder au localstorage et de le modifier de l'extérieur ?

Les données de localstorage étant stockées dans des fichiers (encodées en base 64 ou dans une base sqlite), ils peuvent être accédés dans les répertoires temporaires des navigateurs.
Par exemple dans `[user]\AppData\Google\Chrome\User Data\Default\Local Storage\` pour Chrome.
A priori, ces fichiers ne sont pas verouillés en écriture, donc rien empèche de les modifier si l'on a un logiciel adapté. ex: SQLite Database Browser

> indexedDB fonctionne-t-il en autocommit ?

Oui

> Qu'est-ce que nodeJs, a quoi cela sert-il, en quoi est-il écrit ?

Version packagée du moteur javascript V8 de Google.
Permet d'écrire des servers (web principalement) très facilement. Via l'ajout de modules, on peut créer en quelques lignes un serveur HTTP ou TCP.

> Comment démarrer un serveur nodejs pour vos tests ?

- Créer un fichier javascript servant de base pour le serveur (voir TPs), server.js par exemple
- Se placer en ligne de commande dans le répertoire ou vous avez créé ce fichier
- Lancer l'exécutable (ou le .sh) de node dans le terminal en lui passant en paramètre le fichier server.js
- La position de l'exécutable de node n'a pas d'importance.
- Penser à avoir le répertoire "node_modules" avec les modules nodejs à coté de server.js (ou éventuellement un des répertoires parents de ce fichier)

> Ou faut-il placer le répertoire node_modules pour que ca fonctionne ?

A la racine du dossier TP par exemple, ou à coté de chaque TP. NodeJs cherche ce répertoire de modules additionnel en partant du fichier server.js que vous lancez, et remonte l'arborescence jusqu'à trouver le répertoire. Explication détaillée : http://www.bennadel.com/blog/2169-Where-Does-Node-js-And-Require-Look-For-Modules-.htm

> Comment voir les infos présentes dans le cache autrement que dans chrome tools ?

chrome://appcache-internals/

> Est-ce nécessaire de mettre la déclaration de cache sur chaque fichier ?

Non, par contre chaque fichier que l'on souhaite rendre accessible offline doit être soit déclaré dans le cache.manifest
ou référencer ce fichier dans l'attribut manifest de la balise HTML.
Il est cependant recommandé de déclarer le cache sur chaque page pour s'assurer de son bon rechargement lorsqu'il est modifié.
Un fichier HTML déclarer dans la rubrique `CACHE` sera déclaré 'Explicit' par le navigateur et si via l'attribut manifest, le fichier sera déclaré 'Master' ( = capable de rafraichir le cache si le fichier cache.manifest change)

> Comment ne pas cacher une ressource type image ?

Il faut la mettre dans `NETWORK`. Attention à ne pas mettre d'espace entre `NETWORK` et `:`

> Certaines de mes ressources de fallback ou network ne semblent pas fonctionner correctement ?

Pourquoi `FALLBACK` ne marche pas ? vérifier qu'il n'y a pas d'erreur de syntaxe au dessus. Essayer avec un chemin de fichier commençant par `/`
Vérifier qu'il n'y pas d'erreurs en amont dans le manifest car si une ressource ne peut être chargée, cela plante tout le manifest.
Pour qu'une page master du cache s'affiche correctement, elle doit avoir toutes ses ressources déclarées dans le cache.
Un fichier html déclaré comme fallback est automatiquement ajouté au cache. Un fichier déclaré a 2 endroits risque de faire bugger.

### Jour 3 :

> Quelle taille max pour localStorage, indexedDB... ?

`localStorage` : Variable d'un navigateur à l'autre. Parfois 2.5MB, 5MB ou illimité.
`indexedDB` : 50MB limite théorique mais possibilité de prompter l'utilisateur pour demander plus.
[05/2013] Firefox a récemment ajouté la compression sur les bases indexedDB récemment pour gagner de l'espace.

> Existe-t-il déja des libs pour manipuler indexedDB ?

[05/2013] Oui, plusieurs petites lib dont un plugin jquery. Rien de très abouti pour l'instant.

> Sécurité tag audio / video : peut-on récupérer les fichiers streamé dans le cache ?

Impossible de sécuriser complètement mais possible de limiter les possibilités.
voir http://stackoverflow.com/questions/9756837/prevent-html5-video-from-being-downloaded-right-click-saved

> API complète audio / video : comment détecter la fin de la video ?

Assigner un handler sur l'évènement : video.onended = function(e) {// code};

> La source d'un tag vidéo HTML5 peut-elle contenir autre chose qu'une ressource HTTP ?(HLS, RTP, ...)

Le HLS est possible, à condition qu'il soit supporté par le navigateur en source (iOS 4 à 7 + certaines versions d'Android)
RTP n'est a priori pas supporté pour le moment.

> Comment détecter la position du clic sur le canvas ?

Particulièrement compliqué pour déterminer précisément.
Un exemple de code assez précis : http://stackoverflow.com/questions/10449890/detect-mouse-click-location-within-canvas

> Comment fait-on pour faire une rotation en canvas ?

http://stackoverflow.com/questions/17411991/html5-canvas-rotate-image

> Y'a t il une limite du nombre de contexte que l'on peut sauver ?

Pas de limite connue / testée.

> Quelles sont les unités de la position dans geoloc ?

http://diveintohtml5.info/geolocation.html
Property		    	    Type			    Notes
coords.latitude			    double			    decimal degrees
coords.longitude		    double			    decimal degrees
coords.altitude			    double or null		meters above the reference ellipsoid
coords.accuracy			    double			    meters
coords.altitudeAccuracy		double or null		meters
coords.heading			    double or null		degrees clockwise from true north
coords.speed			    double or null		meters/second
timestamp			        DOMTimeStamp		like a Date() object

> Pourquoi la vidéo ne fonctionne pas quand on lance le site avec NodeJS ?

NodeJs ne sait pas servir du contenu video par défaut. Il faut écrire le code nécessaire au streaming ou utiliser un module dédié.

> Peut-on faire plusieurs sauvegarde du contexte du canvas ?

Oui. La sauvegarde fonctionne sur un système de pile Last In First Out. Cf code :
```javascript
// ctx etat 1
ctx.save()
// modif du context : etat 2
ctx2.save()
// modif du context : etat 3
ctx.save()
// modif du context : etat 4
// dessin de qqch dans l'etat 4
ctx.restore()
// dessin de qqch dans l'état 3
ctx.restore()
// dessin de qqch dans l'état 2
ctx.restore()
// dessin de qqch dans l'état 1
```

> Pourquoi un élément SVG ne supporte pas le dragndrop ?

Car la spec SVG est antérieure à celle de HTML5 et ce n'était pas prévu.
http://www.vectomatic.org/svg/support-for-native-drag-and-drop

## Formation "Avancée"

### Jour 4

> Clarifier les notions de CORS client / serveur

http://www.html5rocks.com/en/tutorials/cors/#toc-adding-cors-support-to-the-server
https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet#Cross_Origin_Resource_Sharing
Une requete de "preflight" est éventuellement (dépend du type d'appel HTTP réalisé) envoyée au serveur par le navigateur en amont de la vraie requête pour vérifier si l'origine est autorisée ou pas par le serveur. Si oui, notre requête est transmise. Le serveur inscrit un header spécifique dans la response pour indiquer si l'origine est autorisée ou pas.
Si le header "Access-Control-Allow-Origin" est absente de la réponse du serveur, la requête CORS échouera. Il peut prendre comme valeur, la même que le header Origin ou * pour autoriser toutes les origines.

> A quoi voit-on que le chargement de la progress barre a terminé ?

Aucune info particulière accessible. Attendre que la barre soit à 100%.

> Peut-on détecter les changement d'orientation en HTML5 ?

Oui, une API est en cours d'étude dans la spéc : http://dev.w3.org/geo/api/spec-source-orientation
http://www.html5rocks.com/en/tutorials/device/orientation/

> Peut-on s'auto envoyer des messages via postMessage ?

Pour s'envoyer un message sur sa propre origine, on peut utiliser le raccourci "/" en targetOrigin.

> Comment le navigateur fait-il le lien entre le port passé dans le tableau [transfer] et event.ports ?

Le port passé dans postMessage en 3eme parametre via [channel.port2] est automatiquement injecté dans le tableau "ports" du MessageEvent transmis au destinataire. C'est un prérequis de la spec lorsque le navigateur détecte qu'un paramètre de l'objet transfer est de type MessagePort.
Le message est cloné par le navigateur avec que les objets "transférés" sont supprimés du contexte d'envoi et envoyer dans le contexte destinataire.

> Web messaging est-il sécurisé ? Est-il possible de hacker le port de messageChannel et de déporter la communication vers un site tiers ?

Un article très détaillé par l'OWASP : https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet#Web_Messaging

> Est-il possible d'envoyer un fragment de DOM via postMessage ? une balise img ?

A priori pas possible car le navigateur n'arrive pas à cloner l'objet contenu dans message.

> Comment fonctionne les server sent event coté navigateur ?

Le navigateur se charge en fait de faire du polling/long-polling.
Selon l'implémentation serveur:
-polling: plusieurs requêtes successives
-long polling: la requête attend une réponse avant de se terminer, puis une nouvelle requête est faite
-connexion: une requête est ouverte, plusieurs réponses arrivent, et si elle se ferme une nouvelle requête est faite (header keep-alive de http 1.1)

> Frequence polling SSE réglable ?

A priori pas réglable car gérée par le nagivateur

> Comment envoyer un message multiligne via SSE (server sent event) ?

'\n\n' est nécessaire à la fin du stream pour indiquer que le message est terminé.
Possibilité d'envoyer un message sur plusieurs lignes en le splittant sur plusieurs éléments data d'un même message. C'est le symbole de fermeture qui indique la fin du message.
ex :
id: 4\n
data: {\n
data: "msg": "hello world",\n
data: "id": 12345\n
data: }\n\n

> Pourquoi eval("{'text':'blabla'}") ne marche pas ?

Il faut des parenthèses en plus autour du JSON ou utiliser JSON.parse sur la string au lieu de JSON.
Pour des raisons de sécurité, il vaut mieux utiliser JSON.parse si il est disponible. Attention à ce que le json soit bien formé.

> Quelle est la taille de l'overhead ajouté sur un appel websocket ?

WebSocket (compared to raw TCP) is between 2 octets (unmasked payload of length < 126 octets) and 14 octets (masked payload of length > 64k) per message (the former numbers assume the message is not fragmented into multiple WebSocket frames)

> Peut-on écouter autre chose que du TCP avec websocket ? UDP ? UDP multicast ?

Non, ce n'est pas prévu par le standard et ça ne sera probablement pas ajouté.

> Que se passe t-il si le fichier n'est pas trouvé par le worker ?

interruption silencieuse

### Jour 5 :

> Comment debugger un worker dans la console chrome car les points d'arrêts définis dans l'onglet source ne sont jamais rencontrés ?

Ouvrir l'onglet source, cliquer sur workers sur la droite et cliquer sur le lien pour accéder à l'inspecteur dédié.


## Sites utiles :

http://html5doctor.com/html-5-reset-stylesheet/
http://diveintohtml5.info/index.html
http://diveintoaccessibility.info/
https://developers.google.com/speed/docs/best-practices/rules_intro?hl=fr
http://www.html5rocks.com/fr/
http://appcachefacts.info/
http://blogs.msdn.com/b/davrous/archive/2011/07/15/introduction-to-the-html5-web-workers-the-javascript-multithreading-approach.aspx
https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet
http://jsfiddle.net/
https://www.browserstack.com
