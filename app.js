


// //to delete the current cookie when you pass the level
// function deleteItem(){
//   completed.push(co[Object.keys(co)[0]]);
//   console.log(completed);
  // Cookies.remove(co[Object.keys(co)[0]]);
// }

$(document).ready(function() {

  // var completed = [];


  
// DICTIONARIES


var coord = {
    "x1": [51.915739376726094, 4.4724347950698755],
    "x2": [51.893074458581886, 4.468314922191115],
    "x3": [51.903031485265195, 4.501617227961103],
    "x4":[ 51.91383342223832, 4.504707132620174],
    "x5": [51.912350957259285, 4.5246198515341876],
    "x6": [51.890319997776686, 4.505050455360071],
    "x7": [51.915739376726094, 4.468658244931011]
}
var title = {
    "x1":"Location1.1",
    "x2":"Location1.2",
    "x3":"Location2.1",
    "x4":"Location2.2",
    "x5":"Location3.1",
    "x6":"Location3.2",
    "x7":"LocationEnd"
}
var text = {
    "x1":"Lorem",
    "x2":"ipsum",
    "x3":"dolor",
    "x4":"sit",
    "x5":"amet",
    "x6":"mmmmm",
    "x7":"genau"
}
var button = {
    "x1":["1","2","3"],
    "x2":["1","2","3"],
    "x3":["1","2","3"],
    "x4":["1","2","3"],
    "x5":["1","2","3"],
    "x6":["1","2","3"],
    "x7":["1","2","3"]
}
var icons = {
    "x1":"https://upload.wikimedia.org/wikipedia/commons/b/b0/Letters_SVG.svg",
    "x2":"https://commons.wikimedia.org/wiki/Help:SVG#/media/File:SMW_Logo.SVG",
    "x3":"https://upload.wikimedia.org/wikipedia/commons/8/83/Eye_-_The_Noun_Project.svg",
    "x4":"https://upload.wikimedia.org/wikipedia/commons/9/9b/MediaWiki.svg",
    "x5":"https://en.wikipedia.org/wiki/Scalable_Vector_Graphics#/media/File:Bitmap_VS_SVG.svg",
    "x6":"https://commons.wikimedia.org/wiki/File:%D0%9F%D1%80%D0%B8%D0%BC%D0%B5%D1%80_%D1%87%D0%B5%D1%80%D1%82%D0%B5%D0%B6%D0%B0_%D0%B2_SVG_%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B5.svg#/media/File:Пример_чертежа_в_SVG_формате.svg",
    "x7":"https://commons.wikimedia.org/wiki/Category:SVG#/media/File:Skip_to_left3.svg"
}

var customIcon= {
  "x1":["image.jpg","2","3"],
  "x2":["1","2","3"],
  "x3":["1","2","3"],
  "x4":["1","2","3"],
  "x5":["1","2","3"],
  "x6":["1","2","3"],
  "x7":["1","2","3"]
}

// SHUFFLE

function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
  }

let arr = ["x1","x2","x3","x4","x5","x6"];
shuffleArray(arr);

// COOKIES

let co = Cookies.get();
function checkCookies(){
  if (Object.entries(co).length === 0){
    for (c=0; c<7; c++){
      let r = arr[c].toString() 
      Cookies.set(r,r)
      }
      
  }

}

// Cookies.remove("x7")

Cookies.set("x7","x7")

checkCookies()

console.log(co)

// current x^n
console.log(co[Object.keys(co)[0]])


// SET CURRENT STATE
let current = co[Object.keys(co)[0]];

$("#firstChoice").append(button[current][0]);
$("#secondChoice").append(button[current][1]);
$("#thirdChoice").append(button[current][2]);
$("#quest").append(text[current]);
$("#title").append(title[current]);

$('#image').attr('href', customIcon[current][0]);


// MAP

//  create map object, tell it to live in 'map' div and give initial latitude, longitude, zoom values 
var map = L.map('map', { scrollWheelZoom: false }).setView([51.90887172801163, 4.486906527767172], 13);

//  add base map tiles from OpenStreetMap and attribution info to 'map' div
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '<a href="http://osm.org/copyright">&copy; OpenStreetMap</a>'
}).addTo(map);


// GPS ON
map.addControl(L.control.locate({
    locateOptions: {
            enableHighAccuracy: true,
}}));

// SHOW PIC AT RELOAD
if (Object.entries(co).length != 7){
  $( "#image" ).click();
}


// CUSTOM ICON
var currentIcon = L.icon({
    iconUrl: icons[current],
    iconSize: [38, 95], // size of the icon
    popupAnchor: [0, -15]
});

// future foreach
var newIcon = L.icon({
  iconUrl: 'http://www.clker.com/cliparts/J/C/Y/S/Q/R/eye-blue-clipart-hi.png',
  iconSize: [100, 45], // size of the icon
  popupAnchor: [0, -15]
  });




//to delete the current cookie when you pass the level
function deleteItem(){
  completed.push(co[Object.keys(co)[0]]);
  console.log(completed);
  console.log('ca')
  Cookies.remove(co[Object.keys(co)[0]]);
}


// Create a TextBox with an attached event
var textbox = $('<input type="text" placeholder="codeword" />').keyup(function () {
  if (event.keyCode === 13 && $(textbox).val() === "test"){
    choiceToggle()
    deleteItem()
    marker.removeFrom(map)
    levelCompleted.addTo(map)
    // deleteItem()
   }
})[0];

// specify popup options 
var customOptions =
    {
        'maxWidth': '500',
        'className': 'custom'
    }

// New Icon's Places

let currentLong = (coord[current][0]);
let currentLat = (coord[current][1])
console.log(currentLong,currentLat)

// console.log(currentCoord)

var marker = L.marker([currentLong,currentLat], { icon: currentIcon }).bindPopup(textbox, customOptions).addTo(map);


//icon[element]
// completed.forEach(element => {
// });
 var levelCompleted= L.marker([coord[current][0],coord[current][1]], { icon: newIcon }).bindPopup(textbox, customOptions);



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

L.easyButton('<img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Eye_-_The_Noun_Project.svg" style="width:15px">', function(btn, map){
    // document.getElementById("mp3").onplay();
    playAudio()
}).addTo(map);


// BUTTON SHOW IMAGE
L.easyButton('fa-globe', function(btn, map){
    $( "#image" ).click();
}).addTo(map);


// CHOICE POPUP
var choice = $( "#choice" );

function choiceToggle() {
  if (choice.css('display', 'none') ) {
    choice.fadeIn();
  } }


});  

