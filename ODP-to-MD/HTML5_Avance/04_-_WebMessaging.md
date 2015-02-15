#HTML5 avancé

<!-- .slide: class="page-title" -->



## Communication - Web Messaging

Notes :




## Nouvelles méthodes de communication

- Possibilités de partager des données entre documents web de différents contextes de navigation
	- Environnement du document : onglets, fenêtres, iframes, ...

- Modèle de communication commun
	- Web messaging
		- Cross-document messaging
		- Channel messaging
	- Server sent events
	- Web Sockets

- Spécification :http://www.w3.org/TR/html5/comms.html
Notes :




## Nouvelles méthodes de communication → Pourquoi ?

- HTTP : protocole déconnecté
	- Pour faire du temps réel, on utilise jusque là des solutions de polling ou long polling
	- Pas de solution de réel « push » entre serveur et client
		- HTML5 : websocket + Server sent events

- Cross-site scripting : sécurité des navigateurs
	- Les documents de différents domaines ou contextes ne peuvent pas communiquer ou s'affecter
		- HTML5 : Web messaging
Notes :




## L'API de communication

- Les messages sont transmis à travers un MessageEvent

- L'attribut data contient le corps du message
- Des méthodes sont à disposition pour gérer les messages
	- postMessage ou send pour envoi
	- onmessage pour écouter les réceptions

```
interface MessageEvent : Event {
readonly attribute anydata;
readonly attribute DOMStringorigin;
readonly attribute DOMString lastEventId;
readonly attribute WindowProxysource; //windowProxy
readonly attribute MessagePortArrayports;

void initMessageEvent(in DOMString typeArg, in boolean canBubbleArg, in boolean cancelableArg, in any dataArg, in DOMString originArg, in DOMString lastEventIdArg, in WindowProxy sourceArg, in MessagePortArray portsArg);
};
```

Notes :




## Web messaging

- Anciennement PostMessage APIhttp://dev.w3.org/html5/postmsg/

- But : communication inter contexte et origines

- Deux méthodes :
	- Cross-document messaging
	- Channel messaging
Notes :




## Cross document messaging

- Principe :
	- Permettre aux documents de contextes différents de communiquer quelque soit leurs origines
	- Exemple : communication entre une iframe et sa page parente

- Origine : domaine + protocole + port
	- https://www.site.com,http://www.site.com,http://site.com,http://www.site.com:81, ont tous une origine différente
Notes :




## Cross-document messaging

- Envoi de message à window avec postMessage

- 
	- Les messages peuvent être des objets ou tableaux de strings, entiers, Date, File, Blob, Filelist (File API), …
	- Les objets listé danstransfersont transférés (sans copie)
	- TargetOrigin: « origin » qui reçoit le message
		- ''*'' pour des origines différentes, ''\'' pour restreindre à la même origine quewindow, ou une url (même origine)

- Réception de messages

- 
	- Ou écouter l'événement ''message'' avec addEventListener

```
otherWindow.postMessage(message, targetOrigin [, transfer ]) ;
```

```
window.onmessage= function(event) {
if(event.origin == 'http://www.zenika.com'){
//récupérer le message : event.data
}
}

```

Notes :




## Cross-document messaging

- Exemple : envoi de message entre une page et une iframe

```
//document A athttp://domainA.com
<iframeid="iframeB"src="http://domainB.com/B.html"onload="sendCommand();"></iframe>

<script>
function sendCommand() {
variframeB= document.getElementById("iframeB");
iframeB.contentWindow.postMessage("Hello iframeB","http://domainB.com");
}
</script>
```

```
//document B at http://domainB.com
<script>
window.onmessage= function(event) {
if(event.origin =='http://domainA.com'){
alert(event.data);//="Hello iframeB"
}
}
</script>
```

Notes :




## Cross-document messaging
Support

- Navigateurs :
	- Chrome 4.0+
	- Firefox 3.0+
	- Safari 4.0+
	- Opera 9.5+

- Tester l'implémentation

```
if(!!window.postMessage) {

}else{
console.log("Votre navigateur ne supporte pas PostMessage");
}
```

Notes :




## Cross-document messaging
Sécurité

- Toujours vérifier l'origine du message
	- Ne pas accepter des messages d'origines inconnues
- Vérifier le contenu et format des données transmises
	- Ne pas utiliser le message directement (dans un formulaire par exemple).
- Attention au ''*''
	- La destination du message n'est pas assurée
	- Ne pas transmettre de données confidentielles
- Possibilités d'attaques de type DoS
	- Limiter le taux de réception de messages
	- Attention au volume des messages reçus

![](ressources/images/04_-_WebMessaging-1000020100000080000000802E71420D.png)

Notes :




## Channel messaging

- Communication bi-directionnelle, asynchrone, entre documents de contextes de navigation différents
	- Ouvre un canal de communication
	- Messages envoyés d'un port à l'autre sous forme d'événements (MessageEvent)

- Intérêt par rapport à cross-document messaging
	- Communication inter-origines précise
	- Contrôle qui envoi et reçoit les messages

- Cas d'utilisation
	- Sites sociaux, applications « mashup »
Notes :




## Channel messaging
Principe d'utilisation

- Créer le canal de communication

- Envoyer le port avec lequel communiquer

- L'autre page récupère ce port et peut envoyer des messages

- Les deux ports sont à présent « impliqués »

```
var channel = new MessageChannel();
```

```
window.postMessage('port','http://othersite.com', [channel.port2]);
```

```
window.onmessage = function(event) {
//check origin
var port = evt.ports[0];
port.postMessage('port received');
}
```

Notes :




## Channel messaging
API

- Deux interfaces :
	- MessageChannel

- 
	- MessagePort

```
interface MessageChannel {
readonly attribute MessagePortport1;
readonly attribute MessagePortport2;
};
```

```
interface MessagePort : EventTarget {
voidpostMessage(any message, optional sequence<Transferable> transfer);
voidstart();
voidclose();

// event handlers
attribute EventHandleronmessage;
};
MessagePort implements Transferable;
```

Notes :




## Channel messaging

- Lorsqu'on crée le « MessageChannel », il en résulte deux ports non reliés.
	- Un reste local, l'autre est envoyé au contexte destinataire
	- On appel start() pour ouvrir le port et activer la réception de messages
	- La méthode close() ferme le port et coupe le canal de communication
	- Les deux ports communiquent avec postMessage

- 
	- On utilise la méthode onMessage() pour écouter

```
channel.port1.postMessage('msg from port1');

```

```
channel.port1.onmessage= function(event) {
// le message est dans event.data
// ...
}

```

Notes :




## Channel messaging
Support et état de spécification

- Spécification en cours de rédaction
- Non présente sur caniuse et html5 test
	- Seul Chrome semble la supporter correctement, Opera et Safari ont un support partiel.
- Tester le support :
	- Définition dewindow.MessageChannel
	- L’existence des ports suite à la création du channel ; l'envoi d'un des ports et sa bonne réception

```
if(window.MessageChannel === undefined){
//alert
}else{
//create channel and send port
}
```

```
window.onmessage= function(event) {
var port = evt.ports[0];
if(port === undefined){//alert}
}
```

Notes :




## TP


![](ressources/images/04_-_WebMessaging-100002010000015500000155AF705EE5.png)

Notes :




<!-- .slide: class="page-questions" -->



<!-- .slide: class="page-tp1" -->