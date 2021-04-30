// MAP

//  create map object, tell it to live in 'map' div and give initial latitude, longitude, zoom values 
var map = L.map('map', { scrollWheelZoom: false }).setView([51.90169378926979, 4.467821474386409], 12);

//  add base map tiles from OpenStreetMap and attribution info to 'map' div
var layer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '<a href="http://osm.org/copyright">&copy; OpenStreetMap</a>'
}).addTo(map);

// layer.getContainer().classList.add('w3-sepia');
layer.getContainer().classList.add('w3-greyscale');

// GPS ON
map.addControl(L.control.locate({
    locateOptions: {
            enableHighAccuracy: true,
}}));



// DICTIONARIES
var coord = {
    "x1": [51.914444, 4.470009], //DF
    "x2": [51.906289, 4.442124], //DF
    "x3": [51.906333, 4.492452], //DW
    "x4": [51.928074, 4.476836], //DW
    "x5": [51.912516, 4.501322], //PG
    "x6": [51.928861, 4.480778], //PG
    "x7": [51.916006, 4.476677] //END
}

var audioWhile = {
  "LatLng(51.914444, 4.470009)":"audio/audioWhile/dragonfly.mp3", //DF
  "LatLng(51.906289, 4.442124)":"audio/audioWhile/dragonfly.mp3", //DF
  "LatLng(51.906333, 4.492452)":"audio/audioWhile/dolphinwaves.mp3", //DW
  "LatLng(51.928074, 4.476836)":"audio/audioWhile/dolphinwaves.mp3", //DW
  "LatLng(51.912516, 4.501322)":"audio/audioWhile/projectgecko.mp3", //PG
  "LatLng(51.928861, 4.480778)":"audio/audioWhile/projectgecko.mp3", //PG
}

var audioWhileX = {
  "x1":"audio/audioWhile/dragonfly.mp3", //DF
  "x2":"audio/audioWhile/dragonfly.mp3", //DF
  "x3":"audio/audioWhile/dolphinwaves.mp3", //DW
  "x4":"audio/audioWhile/dolphinwaves.mp3", //DW
  "x5":"audio/audioWhile/projectgecko.mp3", //PG
  "x6":"audio/audioWhile/projectgecko.mp3", //PG
}

var getSymb = {
  "x1":" Find the encrypted symbol on a concrete pillar at the location shown on the map. Encrypt it using the 🗝️ dictionary to get the codeword.", //DF
  "x2":"Find the encrypted symbol on the backside of the Sign at the location shown on the map. Encrypt it using the 🗝️ dictionary to get the codeword.", //DF
  "x3":"Find the encrypted symbol under the bench at the location shown on the map. Encrypt it using the 🗝️ dictionary to get the codeword.", //DW
  "x4":"Find the encrypted symbol under the bench at the location shown on the map. Encrypt it using the 🗝️ dictionary to get the codeword.", //DW
  "x5":"Find the encrypted symbol on the backside of one of the stones at the location shown on the map. Encrypt it using the 🗝️ dictionary to get the codeword.", //PG
  "x6":"Find the encrypted symbol under the bench at the location shown on the map. Encrypt it using the 🗝️ dictionary to get the codeword.", //PG
  "x7":"Find the encrypted symbol on the ceiling of the escape door at the location shown on the map. Encrypt it using the 🗝️ dictionary to get the codeword."
}

var codeword = {
  "x1": 'SAFETY', //DF
  "x2": 'DESIGN', //DF
  "x3": 'FLOTATION', //DW
  "x4": 'AUTOMATION', //DW
  "x5": 'VISIBLE', //PG
  "x6": 'EMBODIED', //PG
  "x7": 'COEXIST' //END
}

var title = {
    "x1":"Dragonfly 2041", //DF
    "x2":"Dragonfly 2041", //DF
    "x3":"Dolphin Waves 2041", //DW
    "x4":"Dolphin Waves 2041", //DW
    "x5":"Project Gecko 2041", //PG
    "x6":"Project Gecko 2041", //PG
    "x7":"The Roof" //END
}


var titleWhile = {
  "LatLng(51.914444, 4.470009)":"Dragonfly 2041", //DF
  "LatLng(51.906289, 4.442124)":"Dragonfly 2041", //DF
  "LatLng(51.906333, 4.492452)":"Dolphin Waves 2041", //DW
  "LatLng(51.928074, 4.476836)":"Dolphin Waves 2041", //DW
  "LatLng(51.912516, 4.501322)":"Project Gecko 2041", //PG
  "LatLng(51.928861, 4.480778)":"Project Gecko 2041", //PG
  "LatLng(51.916006, 4.476677)":"The Roof" //END
}


var audioQuest = {
  "x1":"audio/audioQuest/DF_hetnieuwe.mp3", //DW
  "x2":"audio/audioQuest/DF_dakpark.mp3", //DW
  "x3":"audio/audioQuest/intro.wav", //DF
  "x4":"audio/audioQuest/intro.wav", //DF
  "x5":"audio/audioQuest/intro.wav", //PG
  "x6":"audio/audioQuest/intro.wav", //PG
  "x7":"audio/outro.mp3"
}

var button = {
    "x1":["Build Over Them","Leave Stretch Marks"], //DW
    "x2":["Welcome the Bee","We Have Rooted Enough"], //DW
    "x3":["Immerse Yourself in Infinite Worlds","Stay Grounded Inside Physical World"],//DF,
    "x4":["Give Limitless Access in Exchange for Freedom of Labour","Work for Your Money in Order to Keep Ownership of Your Thoughts"], //DF
    "x5":["Chicken","Egg"], //PG
    "x6":["100 Horses","1 Horse-Sized Ducks"], //PG
    "x7":""

}

// BLACK POINT
var icons = {
    "x1":"icons/newlocation.png",
    "x2":"icons/newlocation.png",
    "x3":"icons/newlocation.png",
    "x4":"icons/newlocation.png",
    "x5":"icons/newlocation.png",
    "x6":"icons/newlocation.png",
    "x7":"icons/location7.png"
}

// COLORED POINTS
var newIcon = {
  "x1":"icons/DolphinWaves.png", //DW
  "x2":"icons/DolphinWaves.png", //DW
  "x3":"icons/DragonFly.png", //DF
  "x4":"icons/DragonFly.png", //DF
  "x5":"icons/ProjectGecko.png", //PG
  "x6":"icons/ProjectGecko.png" //PG
}

// CUSTOM GRAPH

var customIcon= {
  "p1":["worlds/Dolphin_Waves/1-01.svg","worlds/Dolphin_Waves/1-02.svg","worlds/Dolphin_Waves/DolphinWaves.svg"],
  "p2":["worlds/Dolphin_Waves/2-01.svg","worlds/Dolphin_Waves/2-02.svg","worlds/Dolphin_Waves/DolphinWaves.svg"],
  "p3":['worlds/Dragon_Fly/1-01.svg','worlds/Dragon_Fly/1-02.svg','worlds/Dragon_Fly/DragonFly.svg'],
  "p4":['worlds/Dragon_Fly/2-01.svg','worlds/Dragon_Fly/2-02.svg','worlds/Dragon_Fly/DragonFly.svg'],
  "p5":["worlds/Project_Gecko/1-01.svg","worlds/Project_Gecko/1-02.svg","worlds/Project_Gecko/ProjectGecko.svg"],
  "p6":["worlds/Project_Gecko/2-01.svg","worlds/Project_Gecko/2-02.svg","worlds/Project_Gecko/ProjectGecko.svg"],
}

var customIconBack={
  "x1": "worlds/bck/DW.png",
  "x2": "worlds/bck/DW.png",
  "x3": "worlds/bck/DF.png",
  "x4": "worlds/bck/DF.png",
  "x5": "worlds/bck/PG.png",
  "x6": "worlds/bck/PG.png",
}

var flexBck={
  "x1": "linear-gradient(129deg, #c7c7c7,#4b4b4b);",
  "x2": "linear-gradient(129deg, #c7c7c7,#4b4b4b);",
  "x3": "linear-gradient(129deg, #c7c7c7,#4b4b4b);",
  "x4": "linear-gradient(129deg, #c7c7c7,#4b4b4b);",
  "x5": "linear-gradient(129deg, #c7c7c7,#4b4b4b);",
  "x6": "linear-gradient(129deg, #c7c7c7,#4b4b4b);",
  "x7": "linear-gradient(129deg, #c7c7c7,#4b4b4b);"
}

var worldIcon= {
  "x1": "worlds/Dolphin_Waves/DolphinWaves.svg",
  "x2": "worlds/Dolphin_Waves/DolphinWaves.svg",
  "x3": 'worlds/Dragon_Fly/DragonFly.svg',
  "x4": 'worlds/Dragon_Fly/DragonFly.svg',
  "x5": "worlds/Project_Gecko/ProjectGecko.svg",
  "x6": "worlds/Project_Gecko/ProjectGecko.svg",
}

let array = ["x1","x2","x3","x4","x5","x6"];

// SHUFFLE
function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
  }

shuffleArray(array)


// COOKIES
let co = Cookies.get();
console.log(co)



// SHOW INTRO
if  (Object.entries(co).length === 0){
  var intro = $( "#intro" );
  if (intro.css('display', 'none') ) {
    intro.fadeIn();
  } 
} else {
  checkCookies()
}


function checkCookies(){
  if (Object.entries(co).length === 0){
     //var shuffleArr = shuffleArray(arr)
    array.push('x7')
    for (c=0; c<7; c++){
      let r = array[c] 
      Cookies.set(r,r,  { expires: 60 });}
  }
}



// CURRENT PLACE x^n
var daje = Object.keys(co)
let currents = []

 for (element=0;element<7;element++){
  if (daje[element].startsWith('x')){
    currents.push(daje[element])
  }
 }
let current = currents[0]

//Next Location Info
if (current == 'x7'){
  $( "#infoPlace" ).html(`<div class="flex"><h1>Next Location Info</h1><br><h1>${title[current]}</h1><br><p>${getSymb[current]}</p><br><button onclick="$('#infoPlace').fadeOut()">Go!</button></div>`)
} else {
  $( "#infoPlace" ).html(`<div class="flex"><h1>Next Location Info</h1><br><h1>${title[current]}</h1><br><audio src="${audioWhileX[current]}" controls></audio><br><p>${getSymb[current]}</p><br><button style='min-width: 100px;' onclick="$('#infoPlace').fadeOut()">Go!</button></div>`)
}
$( ".flex" ).css("background",flexBck[current])
$( "#infoPlace" ).fadeIn()


// CHEAT FOR PROGRAMMER
console.log("Don't cheat, nerd")
console.log("current: "+ current)
console.log("codew: "+ codeword[current])

if (current == 'x7'){
  console.log('going to end')
}


// SHOW COMPLETED PLACES
let places = ["x1","x2","x3","x4","x5","x6"];
let oldPlaces = []

function showCompleted(){
  for(l = 0; l < places.length; l++){ 
    if (!Object.keys(co).includes(places[l])) { 
      oldPlaces.push(places[l])
    }}
}

showCompleted();

// SHOW STACK OF SVG | CUSTOM GRAPH
var svgChoices = ["p1","p2","p3","p4","p5","p6"];
var doneSvgChoices = []

function showCustomGraph(pic){
  for(pi = 0; pi < svgChoices.length; pi++){ 
    if (Object.keys(co).includes(svgChoices[pi])) { 
      doneSvgChoices.push(svgChoices[pi])
    }}

  for (const p of doneSvgChoices){
    let value = Cookies.get(p)
    $(pic).append(`<img src="${customIcon[p][value]}"/>`) 
  }
}
showCustomGraph("#showPic")

// SET CURRENT STATE IN HTML
$('#quest').attr('src', audioQuest[current]);
$("#title").append(title[current]);

$("#firstChoice").append(button[current][0]);
$("#secondChoice").append(button[current][1]);

$("#worldIcon").attr("src",worldIcon[current]);





//to delete the current cookie when you pass the level
function deleteItem(){
  Cookies.remove(current);  
}


// Create a TextBox with an attached event
var textbox = $('<input type="text" placeholder="codeword" />').keyup(function () {
  if(current=="x7"){
    if (event.keyCode === 13 && $(textbox).val().toUpperCase() === codeword[current]){
      showEnd()
      deleteItem()
    }
  } else{
  if (event.keyCode === 13 && $(textbox).val().toUpperCase() === codeword[current]){
    choiceToggle()
    marker.removeFrom(map)
  }}
})[0];

// specify popup options 
var customOptions =
    {
        'maxWidth': '1500',
        'className': 'custom'
    }

// New Icon's Places
let currentLong = (coord[current][0]);
let currentLat = (coord[current][1])

// CUSTOM ICON
var currentIcon = L.icon({
  iconUrl: icons[current],
  iconSize: [100, 100], // size of the icon
  popupAnchor: [0, -15]
});

// CURRENT MARKER
var marker = L.marker([currentLong,currentLat], { icon: currentIcon }).bindPopup(textbox, customOptions).addTo(map);


//PREVIOUS PLACES
for (p = 0; p<oldPlaces.length;p++){
  let neo = oldPlaces[p]

  var prevIcon = L.icon({
    iconUrl: newIcon[neo],
    iconSize: [100, 100], // size of the icon
    popupAnchor: [0, -15]
  });

  let lon = coord[neo][0];
  let lat = coord[neo][1];

  let markerLocation = new L.LatLng(lon,lat);
  let marker = new L.Marker(markerLocation, {icon: prevIcon}).on('click', onLocation);

  map.addLayer(marker)
}

function onLocation() {
  $('#audioWorldCont').html(`<h1>${titleWhile[this.getLatLng()]}</h1><br><audio src='${audioWhile[this.getLatLng()]}' controls></audio><br><button onclick="$('#audioWorld').fadeOut()">Close Me</button>`)
  $('#audioWorld').fadeIn();
}


// SHOW COLOPHON
L.easyButton('fa-question-circle-o', function(btn, map){
  $( "#colophon" ).fadeIn()
}, 'Colophon', 'colophone').addTo(map);

// SHOW INSTRUCTIONS
L.easyButton('fa-info-circle', function(btn, map){
  $( "#instructionsButton" ).fadeIn()
}, 'Instructions', 'instru').addTo(map);




// SHOW LEXICON
let lexicon = L.easyButton('fa-key', function(btn, map){
  $( "#lexicon" ).fadeIn()
},'Lexicon','lexotan').addTo(map);

// SHOW INFO
L.easyButton('fa-forward', function(btn, map){
  $( "#infoPlace" ).fadeIn()
  if (current == 'x7'){
    $( "#infoPlace" ).html(`<div class="flex"><h1>Next Location Info</h1><br><h1>${title[current]}</h1><br><p>${getSymb[current]}</p><br><button onclick="$('#infoPlace').fadeOut()">Close Me</button></div>`)
  } else {
    $( "#infoPlace" ).html(`<div class="flex"><h1>Next Location Info</h1><br><h1>${title[current]}</h1><br><audio src="${audioWhileX[current]}" controls></audio><br><p>${getSymb[current]}</p><br><button style='min-width: 100px;' onclick="$('#infoPlace').fadeOut()">Close Me</button></div>`)
  }
  
}, 'info Place', 'infos').addTo(map);



// CHOICE POPUP
var choice = $( "#choice" );

function choiceToggle() {
  if (choice.css('display', 'none') ) {
    choice.fadeIn();
  } }


// STORE CHOICE QUEST AND SHOW ONGOING CUSTOM GRAPH

let bck = customIconBack[current]

function closeMe0(){
  $( "#choice" ).fadeOut();
  deleteItem();
  let currP = current.replace("x","p");
  console.log(currP);
  Cookies.set(currP,0, { expires: 60 });

  $( "#showPicBack" ).fadeIn();

  $("#bigWhite").attr('src', bck);
  $("#showPic").append(`<img style="filter:invert(100%)" src="${customIcon[currP][0]}"/>`);
}

function closeMe1(){
  $( "#choice" ).fadeOut();
  deleteItem();
  let currP = current.replace("x","p");
  console.log(currP);
  Cookies.set(currP,0, { expires: 60 });

  $( "#showPicBack" ).fadeIn();
  
  $("#bigWhite").attr('src',bck);
  $("#showPic").append(`<img style="filter:invert(100%)" src="${customIcon[currP][1]}"/>`);
}


//END
function showEnd(){
  console.log('End');
  $('#end').fadeIn()
}

// DELETE COOKIES AND END GAME
function endd(){
    $('#customPicEnd').fadeIn();
    $('#end').fadeOut()
    showCustomGraph("#customPicEnd");
}

function realEnd(){
  for(remove=0;remove<8;remove++){
    Cookies.remove(svgChoices[remove])
    }
    Cookies.remove('x7');
    location.reload()
}