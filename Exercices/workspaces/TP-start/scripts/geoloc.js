var map = null;

//initialise la carte googleMaps
function initialize() {

    var myLatlng = new google.maps.LatLng(0, 0);
    var myOptions = {
        zoom: 1,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('mapCanvas'), //div a ajouter dans la page contenant la carte
        myOptions);
    addEventPosition();
}

//Ajoute le marker sur zenika
function addEventPosition() {
    var address = '51, rue le peletier';
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'address': address
    }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            map.setZoom(15);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                title: 'Zenika'
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

/************Partie geolocalisation***************/

//click sur go to zenika
function requestDirection() {
    startGeolocation();
}


//trouve la position courante de l'utilisateur
function startGeolocation() {
    //TODO TP3: appel de la fonction de géolocalisation de l'utilisateur
}

//fonction successCallBack appelé par la requete getCurrentPosition
function findPosition(position) {
    //TODO TP3: récupérer la position courante + appel à find direction avec la position trouvée (de type LatLng)   
}

//trace le chemin pour aller à Zénika à partir de la position courante
function findDirection(maPosition) {
    var directionsService = new google.maps.DirectionsService();
    var start = maPosition;
    var end = '51, rue Le Peletier, Paris';
    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
}


//fonction errorCallBack appelée en cas d'erreurs rendues par la requete getCurrentPosition
function handleError(error) {
    //TODO TP3
}