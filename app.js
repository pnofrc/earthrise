// DICTIONARIES
var coord = {
    "x1": [51.914444, 4.470009], //DW
    "x2": [51.906289, 4.442124], //DW
    "x3": [51.906333, 4.492452], //DF
    "x4": [51.928074, 4.476836], //DF
    "x5": [51.912516, 4.501322], //PG
    "x6": [51.928861, 4.480778], //PG
    "x7": [51.916006, 4.476677] //END
}

var audioWhile = {
  "LatLng(51.914444, 4.470009)":"audio/audioWhile/dolphinwaves.mp3", //DW
  "LatLng(51.906289, 4.442124)":"audio/audioWhile/dolphinwaves.mp3", //DW
  "LatLng(51.906333, 4.492452)":"audio/audioWhile/dragonfly.mp3", //DF
  "LatLng(51.928074, 4.476836)":"audio/audioWhile/dragonfly.mp3", //DF
  "LatLng(51.912516, 4.501322)":"audio/audioWhile/progectgecko.mp3", //PG
  "LatLng(51.928861, 4.480778)":"audio/audioWhile/progectgecko.mp3", //PG
  "LatLng(51.916006, 4.476677)":"audio/outro.mp3"
}

var audioWhileX = {
  "x1":"audio/audioWhile/dolphinwaves.mp3", //DW
  "x2":"audio/audioWhile/dolphinwaves.mp3", //DW
  "x3":"audio/audioWhile/dragonfly.mp3", //DF
  "x4":"audio/audioWhile/dragonfly.mp3", //DF
  "x5":"audio/audioWhile/progectgecko.mp3", //PG
  "x6":"audio/audioWhile/progectgecko.mp3", //PG
  "x7":"audio/outro.mp3"
}

var getSymb = {
  "x1":"look around", //DW
  "x2":"look around", //DW
  "x3":"look around", //DF
  "x4":"look around", //DF
  "x5":"look around", //PG
  "x6":"look around", //PG
  "x7":"look around and take the stairs"
}

var codeword = {
  "x1": 'TEST', //DW
  "x2": 'TEST', //DW
  "x3": 'TEST', //DF
  "x4": 'TEST', //DF
  "x5": 'TEST', //PG
  "x6": 'TEST', //PG
  "x7": 'TEST' //END
}

var title = {
    "x1":"Dragonfly // Het Nieuwe Instituut", //DW
    "x2":"Dragonfly // Dakpark", //DW
    "x3":"Dolphin Waves // Floating Pavilion", //DF
    "x4":"Dolphin Waves // Benthemplein", //DF
    "x5":"Project Gecko // Hef Park", //PG
    "x6":"Project Gecko // Almondestraat", //PG
    "x7":"The Roof" //END
}

var audioQuest = {
    "x1":"audio/audioQuest/intro.wav", //DW
    "x2":"audio/audioQuest/intro.wav", //DW
    "x3":"audio/audioQuest/intro.wav", //DF
    "x4":"audio/audioQuest/intro.wav", //DF
    "x5":"audio/audioQuest/intro.wav", //PG
    "x6":"audio/audioQuest/intro.wav", //PG
    "x7":"audio/outro.mp3"
}

var button = {
    "x1":["1","2"], //DW
    "x2":["1","2"], //DW
    "x3":["1","2"], //DF
    "x4":["1","2"], //DF
    "x5":["1","2"], //PG
    "x6":["1","2"], //PG
    "x7":["1","2"]
}

// BLACK POINT
var icons = {
    "x1":"icons/newlocation.png",
    "x2":"icons/newlocation.png",
    "x3":"icons/newlocation.png",
    "x4":"icons/newlocation.png",
    "x5":"icons/newlocation.png",
    "x6":"icons/newlocation.png",
    "x7":"icons/newlocation.png"
}

// COLORED POINTS
var newIcon = {
  "x1":"icons/DolphinWaves.png", //DW
  "x2":"icons/DolphinWaves.png", //DW
  "x3":"icons/DragonFly.png", //DF
  "x4":"icons/DragonFly.png", //DF
  "x5":"icons/ProjectGecko.png", //PG
  "x6":"icons/ProjectGecko.png", //PG
  "x7": "http://www.clker.com/cliparts/J/C/Y/S/Q/R/eye-blue-clipart-hi.png", 
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
  "x6": "worlds/bck/PG.png"
}

var worldIcon= {
  "x1": "worlds/Dolphin_Waves/DolphinWaves.svg",
  "x2": "worlds/Dolphin_Waves/DolphinWaves.svg",
  "x3": 'worlds/Dragon_Fly/DragonFly.svg',
  "x4": 'worlds/Dragon_Fly/DragonFly.svg',
  "x5": "worlds/Project_Gecko/ProjectGecko.svg",
  "x6": "worlds/Project_Gecko/ProjectGecko.svg",
  "x7": ""
}



// SHUFFLE
function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
  }

let arr = ["x1","x2","x3","x4","x5","x6"];


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
    // let shuffleArr = shuffleArray(arr)
    arr.push('x7')
    for (c=0; c<7; c++){
      let r = arr[c].toString() 
      Cookies.set(r,r,  { expires: 60 })}
  }
}




//END
function showEnd(){
  console.log('End')
  $('#end').fadeIn()
}



// CURRENT PLACE x^n
let current = co[Object.keys(co)[0]];
console.log("current: "+ current)

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

function showCustomGraph(){
  for(pi = 0; pi < svgChoices.length; pi++){ 
    if (Object.keys(co).includes(svgChoices[pi])) { 
      doneSvgChoices.push(svgChoices[pi])
    }}

  for (const p of doneSvgChoices){
    let value = Cookies.get(p)
    $("#showPic").append(`<img src="${customIcon[p][value]}"/>`) 
  }
}


// SET CURRENT STATE IN HTML
$('#quest').attr('src', audioQuest[current]);
$("#title").append(title[current]);

$("#firstChoice").append(button[current][0]);
$("#secondChoice").append(button[current][1]);

$("#worldIcon").attr("src",worldIcon[current]);



// MAP

//  create map object, tell it to live in 'map' div and give initial latitude, longitude, zoom values 
var map = L.map('map', { scrollWheelZoom: false }).setView([51.90887172801163, 4.486906527767172], 13);

//  add base map tiles from OpenStreetMap and attribution info to 'map' div
var layer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '<a href="http://osm.org/copyright">&copy; OpenStreetMap</a>'
}).addTo(map);

layer.getContainer().classList.add('w3-sepia');
layer.getContainer().classList.add('w3-greyscale');

// GPS ON
map.addControl(L.control.locate({
    locateOptions: {
            enableHighAccuracy: true,
}}));


//to delete the current cookie when you pass the level
function deleteItem(){
  Cookies.remove(co[Object.keys(co)[0]]);  
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
  $('#audioWorld').html(`<audio src='${audioWhile[this.getLatLng()]}' controls></audio><br><button onclick="$('#audioWorld').fadeOut()">Close Me</button>`)
  $('#audioWorld').fadeIn();
}



// SHOW LEXICON
L.easyButton('fa-key', function(btn, map){
  $( "#lexicon" ).fadeIn()
}).addTo(map);

// SHOW COLOPHON
L.easyButton('fa-question-circle-o', function(btn, map){
  $( "#colophon" ).fadeIn()
}).addTo(map);

// SHOW INSTRUCTIONS
L.easyButton('fa-info-circle', function(btn, map){
  $( "#instructionsButton" ).fadeIn()
}).addTo(map);

// SHOW CUSTOM GRAPH
L.easyButton('<img src="icons/buttonPic.png" style="width:16px; ">', function(btn, map){
  $("#showPic").append('<img id="bigWhite" src="worlds/white.png" />')
  showCustomGraph();
  $( "#showPic" ).fadeToggle()
}).addTo(map);

// SHOW INFO
L.easyButton('fa-area-chart', function(btn, map){
  $( "#infoPlace" ).fadeIn()
  $( "#infoPlace" ).html(`<h1>${title[current]}</h1><br><audio src="${audioWhileX[current]}" controls></audio><br><p>${getSymb[current]}</p><br><button onclick="$('#infoPlace').fadeOut()">Close Me</button>`)
}).addTo(map);

// CHOICE POPUP
var choice = $( "#choice" );

function choiceToggle() {
  if (choice.css('display', 'none') ) {
    choice.fadeIn();
  } }


// STORE CHOICE QUEST AND SHOW ONGOING CUSTOM GRAPH

function closeMe0(){
  $( "#choice" ).fadeOut();
  deleteItem()
  let currP = current.replace("x","p")
  console.log(currP)
  Cookies.set(currP,0, { expires: 60 })

  $("#showPic").append(`<img src="${customIconBack[current]}"/>`)
  showCustomGraph();
  $("#showPic").append(`<img style="filter:invert(100%)" src="${customIcon[currP][0]}"/>`)
  $( "#showPic" ).fadeIn()
  $( "#showPic" ).click(function() { 
    if ($( "#showPic" ).fadeIn()){
    $( "#showPic" ).fadeOut();
    location.reload();
  }});
}

function closeMe1(){
  $( "#choice" ).fadeOut();
  deleteItem()
  let currP = current.replace("x","p")
  console.log(currP)
  Cookies.set(currP,1, { expires: 60 })

  $("#showPic").append(`<img src="${customIconBack[current]}"/>`)
  showCustomGraph();
  $("#showPic").append(`<img style="filter:invert(100%)" src="${customIcon[currP][1]}"/>`) 
  $( "#showPic" ).fadeIn()
    $( "#showPic" ).click(function() { 
    if ($( "#showPic" ).fadeIn()){
    $( "#showPic" ).fadeOut();
    location.reload();
  }});
}

// DELETE COOKIES AND END GAME
function endd(){
  for(remove=0;remove<8;remove++){
  Cookies.remove(svgChoices[remove])
  }
  Cookies.remove('x7')
  location.reload()
}

// PAUSE THE GAME AT THE END //
function pause(){
  $("#end").fadeOut()
}

