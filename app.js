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
    L.easyButton('<img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Eye_-_The_Noun_Project.svg" style="width:15px">', function(btn, map){
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


L.easyButton('fa-globe', function(btn, map){
    $( "#image" ).click();
}).addTo(map);