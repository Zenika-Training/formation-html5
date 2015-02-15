#HTML5 en pratique

<!-- .slide: class="page-title" -->



## Gestion des données


![](ressources/images/07_-_Gestion_des_données-100002010000020000000200EB9C62D4.png)

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




## Plan

- Session Store et Local Store
- Bases de données web
- Applications déconnectées avec Application Cache
Notes :




## Local store et Session store

- HTML 5 offre deux façons de stocker du contenu côté client
	- Le "session store", temporaire, qui est propre à chaque session de navigation (fenêtre ou onglet du navigateur)
	- Le "local store", permanent, qui est propre à un domaine

```
var storage = window.sessionStorage;
```

```
var storage = window.localStorage;
```


![](ressources/images/07_-_Gestion_des_données-100002010000008000000080B9A1F0AA.png)

Notes :




## Local store et Session store

- Les deux Stores proposent la même API
	- setItem(key, value)
	- getItem(key)
	- removeItem(key)
	- clear()
	- key(index)// Récupère la clé n°index
	- length
- Les Stores étant des tableaux, on peut également utiliser la notation avec des crochets
- Compatible Chrome 4+, Safari 4+, Opera 10.5+, Firefox 3.5+, IE 8+

```
window.sessionStorage[<key>] = <value>;
```

Notes :




## Local store et Session store
Exemple

```
<h2>My web library</h2>
<form onsubmit="return saveBook();">
<label for="bookName">Book :</label>
<input type="text" id="bookName"/>
<input type="submit" value="Add"/>
</form>

<ul id="books"></ul>
```


![](ressources/images/07_-_Gestion_des_données-1000020100000125000000BC9D734E62.png)

Notes :




## Local store et Session store
Exemple

```
var storage = window.localStorage;// ou window.sessionStorage

window.onload = function() {
for(var i=0; i<storage.length; i++) {
displayBook(storage.getItem(i));
}
}

function displayBook(book){
var contenu = document.createTextNode(book);
var puce = document.createElement("li");
puce.appendChild(contenu);
document.getElementById("books").appendChild(puce);
}

function saveBook() {
var book = document.getElementById("bookName").value;
storage.setItem(storage.length, book);
displayBook(book);
}
```

Notes :




## Local store et Session store
Exemple

![](ressources/images/07_-_Gestion_des_données-10000201000002F30000020540728254.png)

Notes :




## Web SQL databases
Principes

- Véritable base de données embarquée
	- Gestion des transactions
	- Gestion des mises à jour de schémas
- Pour créer ou ouvrir une base de données, il faut préciser ses
	- ID
	- Version
	- Nom
	- Taille estimée (en octets)

```
var db = openDatabase('mydb', '1.0', 'Books', 1024 * 1024);

if (db) {…}
```

Notes :




## Web SQL databases
Transactions

- Gestion des transactions
	- La fonctioncallbackest exécutée dans la transaction
	- Le paramètretxfournit la méthodeexecuteSql, qui permet d'effectuer les opérations SQL de lecture et écriture

```
tx.executeSql( query, [params], [callback] );
```

```
db.transaction(function (tx) {
...
});
```

Notes :




## Web SQL databases
Exemple

```
var db = openDatabase('mydb', '1.0', 'Books', 1024 * 1024);

if (db) {

db.transaction(function (tx) {

// Ecriture
tx.executeSql("CREATE TABLE BOOK(ID unique, NAME text");
tx.executeSql("INSERT INTO BOOK (ID,NAME)VALUES (1,'Dune')");

// Requêtage
tx.executeSql("SELECT * FROM BOOK", [],
function (tx, books) {
window.alert(books);
});

});

}
```

Notes :




## Web SQL databases
Exemple

![](ressources/images/07_-_Gestion_des_données-10000201000001F9000000CFA5E4A384.png)

Notes :




## Web SQL databases
Conclusion

- La spécification n'estplus maintenuepar le W3C
	- Pas assez d'implémentations différentes
	- Toutes basées sur SQLite
- Partiellement implémenté et/ou buggué
- Ne pas utiliser !

![](ressources/images/07_-_Gestion_des_données-1000020100000080000000802D752439.png)

Notes :




## Web databases
IndexedDB

- Spécification en remplacement de Web SQL database, dépréciée en novembre 2010 par le W3C
- Base de données de type « object store »
	- Pas relationnelle, pas de schéma
	- Permet de stocker des objets javascript (json) identifiables
	- Création d'index pour récupérer les objets suivant des propriétés
	- APIs asynchrone et synchrone
		- L'API synchrone est cependant peu implémentée et sujette à abandon par le W3C
- Support : chrome 11+, Firefox 4+, IE 10

```
var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
```

Notes :




## Web databases
IndexedDB - création

- Création/ouverture de la base

- Création d'un objet

```
var request = indexedDB.open('AddressBook' , 1);//version 1
request.onsuccess = function(evt) {
db = request.result;
};
request.onupgradeneeded = function(evt){
//Alter table
var reqVersion = db.setVersion('1');
reqVersion.onsuccess = function (evt) {//operations...}
}
request.onerror = function(evt) {
console.log("Database error code: " + evt.target.errorCode);
};
```

```
var contact = db.createObjectStore(
'contact',
{keyPath:'id', autoIncrement:true}
);
```

Notes :




## Web databases
IndexedDB – transaction et opérations

- Création d'index

- Transactions : opérations
	- Ajout de données

- 
	- Récupération d'objet avec une clé

```
contact.createIndex("name", "name", { unique: false });
contact.createIndex("email", "email", { unique: true });
```

```
var tx = db.transaction(["contact", "readwrite"]);
var store = tx.objectStore('contact');
var contact1 = store.add({name: 'Joe', email: 'joe@mail.com'});
```

```
var object = store.get(1);
object.onsuccess = function(evt) {
var object_name = request.result.name;
};
```

Notes :




## Web databases
IndexedDB

- Résultat : outils de développement chrome

- Conclusion
	- Nouvelle spécification
		- Peu implémentée encore
		- En cours de rédaction → documentation à suivre

![](ressources/images/07_-_Gestion_des_données-10000000000002B1000001002FCC5DFA.png)

Notes :




## Application déconnectées

- HTML 5 propose un mode "hors ligne"
	- Autorise une utilisation nomade et/ou déconnectée
	- Stocke les ressources en cache (HTML, scripts, images...)

- Détection de l'état de la connexion à Internet

- Compatibilité : Chrome 19, Safari 5.1, Firefox 3.6, Opera 12

```
if (navigator.onLine) { … }

window.addEventListener('online', function(e) {
// Re-sync data with server.
}, false);

window.addEventListener('offline', function(e) {
// Queue up events for server.
}, false);
```


![](ressources/images/07_-_Gestion_des_données-1000020100000080000000805AB49031.png)

Notes :




## Application déconnectées
Le Manifeste

- Un Manifeste liste les ressources à mettre en cache
	- Fichier texte brut
	- Extension.appcache
	- Déclaré au niveau de la balise<html>
- Toutes les pages de l'application devant fonctionnerofflineréférencentle mêmemanifeste

```
<html manifest="/offline.appcache">
```

Notes :




## Application déconnectées
Le Manifeste - structure

- En-têteCACHE MANIFEST
- SectionCACHEobligatoireListe des ressources à mettre en cache
- SectionFALLBACKoptionnelleListe des ressources alternatives, à utiliser si les ressources réseau ne sont pas disponibles
- SectionNETWORKoptionnelleListe des ressources devant être systématiquement accédées en ligne
Notes :




## Application déconnectées
Le Manifeste - exemple

```
CACHE MANIFEST

CACHE :
/css/screen.css
/img/logo.png
/js/app.js

FALLBACK :
/img/status-online.png /img/status-offline.png
/js/app.js /js/offline-app.js

NETWORK :
/js/websockets.js

```

Notes :




## Application déconnectées
Le Manifeste - astuces

- Chaque page HTML référençant un manifeste est automatiquement mise en cache
	- Pas besoin de lister toutes les pages HTML !

- Pour empêcher l'utilisateur d'utiliser l'application, ou une partie de l'application, hors-ligne, il suffit de rediriger toutes ses pages vers une même ressource alternative

```
FALLBACK :
/online/ /offline-warning.html
```

Notes :




## Application déconnectées
Le Manifeste – type MIME

- Configuration du type MIME
	- Apache httpd
	- Application web Java (web.xml)

```
AddType text/cache-manifest .appcache
```

```
<mime-mapping>
<extension>appcache</extension>
<mime-type>text/cache-manifest</mime-type>
</mime-mapping>
```

Notes :




## Application déconnectées
Le Manifeste – mise en cache

- Attention à ne pas mettre le manifeste lui-même en cache !
	- Ajouter un commentaire qui change à chaque version

- 
	- Apache httpd

```
<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType text/cache-manifest "access plus 0 seconds"
</IfModule>
```

```
CACHE MANIFEST
# 2012-08-01 14:00

CACHE
...

```

Notes :






![](ressources/images/07_-_Gestion_des_données-1000020100000100000001003A063607.png)

Notes :






![](ressources/images/07_-_Gestion_des_données-100002010000015500000155586F39BA.png)

Notes :




<!-- .slide: class="page-questions" -->



<!-- .slide: class="page-tp1" -->