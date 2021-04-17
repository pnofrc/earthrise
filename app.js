$('.text').append("WHAT DO YOU CHOOSE?");
var $input = $('<input type="button" value="new button" onclick="window.alert("sometext");" />');
$input.appendTo($(".text"));


// MAP

var map = L.map('map').fitWorld();

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);

// function onLocationFound(e) {
//     var radius = 16;

//     L.marker(e.latlng).addTo(map)
//         .bindPopup("You are within " + radius + " meters from the world").openPopup();

//     L.circle(e.latlng, radius).addTo(map);
// }

// map.on('locationfound', onLocationFound);

// function onLocationError(e) {
//     alert(e.message);
// }

// map.on('locationerror', onLocationError);



var helloPopup = L.popup().setContent('Hello World!');

L.easyButton('fa-globe', function(btn, map){
    helloPopup.setLatLng(map.getCenter()).openOn(map);
}).addTo(map);