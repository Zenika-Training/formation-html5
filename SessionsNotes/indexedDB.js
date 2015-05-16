window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB;

var confStoreId = "Conference";

// Création d'un namespace spécifique
var html5Training = {};
// Nouvelle variable dans le namespace pour recevoir notre base
html5Training.indexedDB = {};
html5Training.indexedDB.db = null; // initialisation de la DB vide

// Création d'un logger générique pour toutes les erreurs
html5Training.indexedDB.onerror = function (e) {
    console.log(e);
};


var version = 3;
html5Training.indexedDB.open = function () {
    var request = window.indexedDB.open("Conferences", version);

    request.onupgradeneeded = function (e) {
        console.log('Old version of the database : ' + e.oldVersion);
        var db = request.result;
        e.target.transaction.onerror = html5Training.indexedDB.onerror;

        if(!db.objectStoreNames.contains(confStoreId)) {
            // Création d'un objectStore uniquement possible dans onupgradeneeded.
            // keyPath représente l'équivalent d'une clé primaire pour le store
            db.createObjectStore(confStoreId, {keyPath: "id"});
        }
        console.log('DB Upgraded !');
    };

    request.onsuccess = function (e) {
        // initialisation de la base de données terminée !
        html5Training.indexedDB.db = e.target.result;
        if(html5Training.indexedDB.db.objectStoreNames.contains(confStoreId)) {
            html5Training.indexedDB.getAllConferences();
        }
        console.log('DB Opened !');
    };

    request.onerror = html5Training.indexedDB.onerror;

};

// Création d'une méthode pour insérer des conf dans la base
html5Training.indexedDB.addConf = function (conf) {
    var db = html5Training.indexedDB.db;
    var tx = db.transaction([confStoreId], "readwrite");
    var store = tx.objectStore(confStoreId);
    var req = store.put(conf);

    req.onsuccess = function (e) {
        console.log('Stored : ' + conf.id + ' : ' + conf.title);
    };

    req.onerror = html5Training.indexedDB.onerror;

};

html5Training.indexedDB.removeConf = function (confID) {
    var db = html5Training.indexedDB.db;
    var tx = db.transaction([confStoreId], "readwrite");
    var store = tx.objectStore(confStoreId);

    var req = store.delete(confID);

    req.onsuccess = function () {
        console.log('Deleted : ' + confID);
    };

    req.onerror = html5Training.indexedDB.onerror;

};

// Création d'une méthode pour récupérer toutes les conf
html5Training.indexedDB.getAllConferences = function () {
    var db = html5Training.indexedDB.db;
    var tx = db.transaction([confStoreId], "readwrite");
    var store = tx.objectStore(confStoreId);

    // récupère tous les éléments du store.
    // openCursor() sans le keyRange devrait marcher aussi pour récupérer tous les éléments.
    var keyRange = IDBKeyRange.lowerBound(0);
    var cursorRequest = store.openCursor(keyRange);

    cursorRequest.onsuccess = function (evt) {
        var result = evt.currentTarget.result;
        if (!!result == false) {
            return;
        }

        console.log(result.value);
        // Appel nécessaire pour itérer sur tous les résultats. Car success est appelé une fois pour chaque résultat.
        result.continue();
    };

    cursorRequest.onerror = html5Training.indexedDB.onerror;
};

// Initialisation de la base et chargement des données au chargement de la page.
function init() {
    html5Training.indexedDB.open();
}
window.addEventListener("DOMContentLoaded", init, false);
