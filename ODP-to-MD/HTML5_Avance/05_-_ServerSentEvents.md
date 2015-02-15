#HTML5 avancé

<!-- .slide: class="page-title" -->



## Communication – Server Sent Events

Notes :




## Server Sent Events

- Spécification connue aussi sous le nom de EventSource
	- http://www.w3.org/TR/eventsource/

- Principe :
	- L'application reçoit automatiquement des messages envoyés par le serveur sous forme d'événement DOM
	- Communication dans un seul sens en HTTP

- Exemples de cas d'utilisation :
	- Notifications temps réel, actualités
	- Réseaux sociaux : fil twitter/facebook temps réel
	- Cours des actions en temps réel
	- Monitoring de serveur
Notes :




## L'API de communication
Rappel

- Interface MessageEvent utilisée pour envoyer les messages

```
interface MessageEvent : Event {
readonly attribute anydata;
readonly attribute DOMStringorigin;
readonly attribute DOMStringlastEventId;
readonly attribute WindowProxysource; //windowProxy
readonly attribute MessagePortArrayports;

void initMessageEvent(in DOMStringtypeArg, in boolean canBubbleArg, in boolean cancelableArg, in any dataArg, in DOMString originArg, in DOMString lastEventIdArg, in WindowProxy sourceArg, in MessagePortArray portsArg);
};
```

Notes :




## EventSource

- L'API utilise l'interface EventSource

```
[Constructor(DOMString url, optional EventSourceInit eventSourceInitDict)]
interfaceEventSource: EventTarget {
readonly attribute DOMStringurl;
readonly attribute boolean withCredentials;

// ready state
const unsigned short CONNECTING = 0;
const unsigned short OPEN = 1;
const unsigned short CLOSED = 2;
readonly attribute unsigned short readyState;

// networking
[TreatNonCallableAsNull] attribute Function?onopen;
[TreatNonCallableAsNull] attribute Function?onmessage;
[TreatNonCallableAsNull] attribute Function?onerror;
void close();
};

dictionary EventSourceInit {
boolean withCredentials = false;
};
```

Notes :




## EventSource
Coté client

- Connexion au serveur : création d'un objet EventSource

- On vérifie l'état de la connexion avec l'attributreadyState
- Requête HTTP : contenu demandé event-stream

```
var source = newEventSource('/source');//url à laquelle on se//connecte
source.onmessage=function(event) {
alert(event.data);//récupérer le message
};

source.onopen= function(e) {
console.log("connexion établie");
});

source.onerror= function(e) {
console.log("eventsource error :" + e.data);
});

```

```
Accept:text/event-stream


```

Notes :




## EventSource
Coté serveur

- Format des données envoyées
	- Type MIME : text/event-stream
	- Encodage : UTF-8
	- Une ligne entre chaque message à envoyer

- En-tête HTTP

- Il existe 4 champs interprétés pour un event stream :
	- data, event, id, retry

```
data: message 1

data: message 2 ligne 1
data: message 2 ligne 2

```

```
Content-Type: text/event-stream
Cache-Control: no-cache
```

Notes :




## EventSource
Event stream

- Définir le nom du message à envoyer avecevent

- 
	- Permet de spécifier des types de messages
		- Par défaut « message » : géré par onmessage()

```
event: time
data: 16:21

event: tweet
data: tweet from ...
```

```
source.addEventListener('time', function(e){
//e.data
}, false);

source.addEventListener('tweet', function(e){
//e.data
}, false);
```

Notes :




## EventSource
Event stream

- Utiliser les id
	- On peut associer un identifiant à un message

- 
	- L'attributlastEventIddu MessageEvent contient le dernier id de la source
	- En cas de déconnexion, une requête avec le headerlast-event-idest envoyée
	- Le navigateur pourra ainsi déterminer le dernier message envoyé

```
id: 13
data: hello world

id: 14
event: news
data: {"title": "last new", "article": "..."}

```

Notes :




## EventSource
Event stream

- Le champretrysert à contrôler le timeout de reconnexion (par défaut ~3s)

- Envoyer des données json

- 
	- Le client peut ensuite parser les données reçues

```
retry: 10000


```

```
data: {
data:"msg":"hello world",
data:"time":"19:05"
data: }

data: ...
```

```
source.onmessage= function(event) {
var data = JSON.parse(event.data);
});
```

Notes :




## EventSource
Exemple PHP

```
<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache'); // recommended to prevent caching of event data.

/**
* Constructs the SSE data format and flushes that data to the client.
*
* @param string $id Timestamp/id of this connection.
* @param string $msg Line of text that should be transmitted.
*/
function sendMsg($id, $msg) {
echo "id: $id" . PHP_EOL;
echo "data: $msg" . PHP_EOL;
echo PHP_EOL;
ob_flush();
flush();
}

$serverTime = time();

sendMsg($serverTime, 'server time: ' . date("h:i:s", time()));
```

Notes :




## EventSource
Exemple NodeJS

```
serv.get('/stream', function(req, resp){
resp.writeHead(200, {
'Content-Type': 'text/event-stream',
'Cache-Control': 'no-cache',
'Connection': 'keep-alive'
});

var idCounter = 0;

setInterval(function(){
resp.write("event: tweet\n");
resp.write("id: "+idCounter+"\n");
resp.write("data:{'user':'toto','tweet':'RT @ZenikaIT Awesome HTML5 training !'}\n\n");
idCounter++;
},5000);

req.on("close", function() {
// Connexion fermée!
});
});
```

Notes :




## SSE et CORS

- Le CORS n'est pas supporté pour le SSE d'après les standards
- Cependant Firefox > 11 le supporte
- Cela devrait devenir un standard prochainement
Notes :




## Support coté client

- Navigateurs :
	- Chrome 6.0+
	- Firefox 6.0+
	- Safari 5.0+
	- Opera 11.0+

- Tester l'implémentation

```
if(!!window.EventSource) {
//connexion et écoute des événements
}else{
console.log("Votre navigateur ne supporte pas EventSource");
}
```

Notes :




## TP


![](ressources/images/05_-_ServerSentEvents-1000020100000155000001557B096267.png)

Notes :




<!-- .slide: class="page-questions" -->



<!-- .slide: class="page-tp1" -->