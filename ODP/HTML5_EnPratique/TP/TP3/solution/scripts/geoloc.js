var latitude;
var longitude;
var accuracy;
var myOptions;
var map=null;
var maPosition;
var directionDisplay;
var geocoder;



function updateStatus(message) {
    document.getElementById("statut").innerHTML = message;
}

//fonction errorCallBack appelée en cas d'erreurs rendues par la requete getCurrentPosition
function handleError(error) {
    switch (error.code) {
        case 0:
            updateStatus("There was an error while retrieving your location: "
                + error.message);
            break;
        case 1:
            updateStatus("The user prevented this page from retrieving a location.");
            break;
        case 2:
            updateStatus("The browser was unable to determine your location: "
                + error.message);
            break;
        case 3:
            updateStatus("The browser timed out before retrieving the location.");
            break;
    }
}

//initialise la carte googleMaps
function initialize() {
    geocoder = new google.maps.Geocoder();
    var myLatlng = new google.maps.LatLng(0, 0);
    myOptions = {
        zoom : 1,
        center : myLatlng,
        mapTypeId : google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("mapCanvas"),
        myOptions);
    addEventPosition();
}

//Ajoute le marker sur Zenika
function addEventPosition() {
    var address = "51, Rue le Peletier, Paris";
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            map.setZoom(15);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                title : "Zenika"
            });
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
}

//fonction successCallBack appelé par la requete getCurrentPosition
function findPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    accuracy = position.coords.accuracy;
    maPosition = new google.maps.LatLng(latitude, longitude);
    findDirection();
}

function requestDirection(){
    startGeolocation();
}

//trace le chemin pour aller à Zénika à partir de la position courante
function findDirection() {
    var directionsService = new google.maps.DirectionsService();
    var start = maPosition;
    var end = "51, rue Le Peletier, Paris"
    var request = {
        origin : start,
        destination : end,
        travelMode : google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
}

//trouve la position courante de l'utilisateur
function startGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(findPosition, handleError);
    } else {
        updateStatus("HTML5 Geolocation is not supported in your browser.");
    }
}
