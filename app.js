//  create map object, tell it to live in 'map' div and give initial latitude, longitude, zoom values 
var map = L.map('map', { scrollWheelZoom: false }).setView([51.90887172801163, 4.486906527767172], 13);

//  add base map tiles from OpenStreetMap and attribution info to 'map' div
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// GPS ON

map.addControl(L.control.locate({
    locateOptions: {
            enableHighAccuracy: true,
}}));


// create custom icon
var firefoxIcon = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Eye_-_The_Noun_Project.svg',
    iconSize: [38, 95], // size of the icon
    popupAnchor: [0, -15]
});

// Create a TextBox with an attached event
var textbox = $('<input type="text" placeholder="codeword" />').keyup(function () {
    // if (event.keyCode === 13) {
    if (event.keyCode === 13 && $(textbox).val() === "test"){
     alert('IT WORKS')
     textbox.replaceWith($(textbox).val());
     }
})[0];

// specify popup options 
var customOptions =
    {
        'maxWidth': '500',
        'className': 'custom'
    }

// create marker object, pass custom icon as option, pass content and options to popup, add to map
L.marker([51.91108023330129, 4.505694187776665], { icon: firefoxIcon }).bindPopup(textbox, customOptions).addTo(map);

$(document).ready(function() {
    L.easyButton('fa-globe', function(btn, map){
        // document.getElementById("mp3").onplay();
        playAudio()
    }).addTo(map);
    
    var music = document.getElementById("mp3");
    var play_music_button = document.getElementById("fa-globe");
  
    function playAudio() {
      if (music.paused) {
        music.play();
        play_music_button.className = 'load';
      } else {
        // music.pause();
        music.load()
        play_music_button.className = 'play';

      }
      music.addEventListener('ended',function() {
        play_music_button.className = 'play';
      });
    }
    play_music_button.addEventListener("click", playAudio);
  });







// var svg1 = '<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /></svg>'
// var svg2 ='<svg width="400" height="100"><rect width="400" height="100" style="fill:rgb(0,0,255);stroke-width:10;stroke:rgb(0,0,0)" /></svg>'
// $('.main').append(svg1).append(svg2)



// // MAP

// var map = L.map('map').fitWorld();

// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//     maxZoom: 20,
//     tileSize: 512,
//     zoomOffset: -1
// }).addTo(map);








// // FIRST AREA

// first = L.circle([51.91108023330129, 4.505694187776665], {radius: 20}).addTo(map);
// // var firstmarker = new L.Marker([51.91108023330129, 4.505694187776665]);
// // firstmarker.addTo(map);

// // function getLocation() {
// //     if (navigator.geolocation) {
// //       navigator.geolocation.getCurrentPosition(showPosition);
// //     } else { 
// //       console.log("Geolocation is not supported by this browser.")
// //     }
// //   }
  
// //   function showPosition(position) {
// //     console.log(position.coords.latitude + "," + position.coords.longitude)
// //     // return(position.coords.latitude + "," + position.coords.longitude)
// //   }

//   L.easyButton('fa-globe', function(btn, map){
//     helloPopup.setLatLng(map.getCenter()).openOn(map);
//     getLocation()
// }).addTo(map);





// //   second = showPosition(position)

// // TRIG

// var circleLatLng = first.getLatLng();
// var markerLatLng = second.getLatLng();
// var distance = circleLatLng.distanceTo(markerLatLng);
// console.log(distance)


// // DRAW PATH
// var latlngs = [
//     [51.91108023330129, 4.505694187776665],
//     [51.918915787021625, 4.509814060563369],
// ];
// var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
// map.fitBounds(polyline.getBounds());


// // BUTTON TEST

// // var helloPopup = L.popup().setContent( "<img src=" + "test.jpg" + "/>");

// // L.easyButton('fa-globe', function(btn, map){
// //     helloPopup.setLatLng(map.getCenter()).openOn(map);
// // }).addTo(map);

// // .bindPopup( "<img src=" + icon_url + "/>")

// // var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
// // imageBounds = [[51.91899820834415, 4.508602176439348], [51.91873806375575, 4.507421190158097]];
// // L.imageOverlay(imageUrl, imageBounds).addTo(map);