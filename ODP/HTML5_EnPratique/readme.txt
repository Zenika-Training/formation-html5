* Explications sur les dossiers de TP

TP-start : projet de d�part avec les ressources n�cessaires pour faire tous les TP
TP-solution : solution de tous les TP

Les autres dossiers sont pour les TPs individuels, avec un start et une correction et chaque TP d�but avec la correction du pr�c�dent.

-Quand utiliser le serveur?
Dans trois situtations: Pour la g�oloc et le stockage de donn�es, une s�curit� de chrome restreint l'utilisation des APIs en manipulant des fichiers locaux.
Pour le TP sur le cache, allumer/�teindre le serveur permet de tester simplement le bon fonctionnement du cache.  

* FAQ
-html:
  A quoi servent ces nouvelles balises (header/nav/footer/time/...)? elles ne font rien de plus qu'un div...
  >> Pour la semantique de nos pages, elles sont plus lisible, seront plus r�f�rencables.
  Exp: un lecteur rss pourrait isoler le texte complet d'une page avec les balises <article>
  
  Peut on faire la validation d'un formulaire avant le click sur submit?
  >>Oui, form.checkValidity() ou input.checkValidity()

-css/media-queries:
  Quelles valeurs utilis�es pour diff�rencier t�l�phone/tablette/ordinateur ?
  >> Pas de valeurs qui assurent une diff�renciation parfaite. Bcp de d�bat sur le net, on peut toutefois essayer:
  @media (min-width:320px) { /* smartphones, iPhone, portrait 480x320 phones */ }
  @media (min-width:481px) { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
  @media (min-width:641px) { /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
  @media (min-width:961px) { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
  @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
  @media (min-width:1281px) { /* hi-res laptops and desktops */ }
  
  Quel est l'int�r�t de faire une s�l�ction par rapport � une r�solution?
  >>Plus la r�solution est grande, plus on a la possibilit� d'ajouter des informations � notre page.
  C'est donc une information importante. On peut faire le parrall�le avec android qui fournit des images de qualit�s diff�rentes
  en fonction de la r�solution (hdpi/mdpi/ldpi etc)

-IndexedDB:
  -Dans ce bout de code issu des slides: 
    var object = store.get(1);
    object.onsuccess= function(){}; 
  Que se passe-t-il si la requ�te finit avant l'enregistrement du handler, entre les deux lignes?
  >> object correspond � un objet requ�te, qui a une information sur l'�tat de la requ�te: pending/terminate
  Quand on enregistre le handler, si etat=terminate, alors le callback est directement appel�.
  
-LocalStorage:
  -Si on enregistre les donn�es c�t� client, � quel moment pousser les informations vers le serveur?
  >>Les donn�es enregistr�es c�t� client ne visent pas forc�ment � �tres un jour enregistr�es sur serveur.
  Il faut diff�rencier ces donn�es. Pour l'utilisation du localstorage, on pourra ainsi imaginer la sauvegarde de param�tres,
  la sauvegarde de donn�es propres � l'utilisateur, qu'il ne souhaite pas partager etc. 
  (Par exp des notes peuvent ne pas �tre synchronis�es, gard�es en local)
  
  -Ca ne marche pas, quand je relance mon navigateur les informations ne sont plus l�!
  >>Check les options navigateur, sur chrome "autoriser l'enregistrement de donn�es locales
  
-Stockage:
  -O� sont sauv�es les donn�es?
  Dans les fichiers temporaires locaux du navigateur:par exemple des fichiers du type ~/.config/google-chrome/Default/databases pour websql,
  Webappsstore.sqlite pour localstorage, C:\Documents and Settings\<username>\Application 
Data\Mozilla\Firefox\Profiles\<xxxx>.default\indexedDB\<databaseid> pour indexedDB
  
-Cache:
  
  
-Canvas:
  -Quel int�r�t?
  >>graphes, jeux, animations...
    
  -Comment int�ragir avec le canvas? click, ...?
  >>Pas d'api propre au canvas, il faut d�tecter un click de mani�re standard (addEventListener ("mousemove") / ou autre event)
  Puis calculer l'offset entre les coordonn�es dans la page et l'emplacement du canvas dans la page. (plusieurs exemple sur stackoverflow)

  
  
* Pi�ges

-TP G�olocalisation: on utilise une div vide dans laquelle est "inject�e" une carte.
Mais comme elle est vide avant injection, sa taille est de 0.
Il faut donc penser � fixer les valeurs width et height de cette div.

-TP Drag-n-drop: 
	-Attention, les navigateurs se comportent visiblement diff�remment.
	Firefox: obligation de faire un event.dataTransfer.setData pour que l'�l�ment soit draggable.
	-TP Drag-n-drop: la spec indique que ondragenter et ondragover doivent �tre �cout�s pour recevoir 
	l'�v�nement drop.
	-Attention, le th�me des �l�ments boug�s d�pend aussi du th�me de la machine. Sur windows, avec un th�me ancien, un draggable boug� est transparent
	Avec un th�me windows7 (ou >) l'�?�ment garde son opacit�.

-TP Cache:
	-cache manifeste: pour toutes les sections pas d'espace: CACHE : => CACHE:
	-Si une ressource ne peut �tre r�cup�r�e, aucune ne le sera


-Diff�rences entre navigateurs:
  -Firefox ne connait pas element.innerText, il faut utiliser element.textContent � la place
  
  
* Id�es ajout
-ContentEditable
-webRTC!
-ApplicationCache api (monitoring, force update,...)

===TO UPDATE===
