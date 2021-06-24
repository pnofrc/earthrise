// MAP 

//  create map object, tell it to live in 'map' div and give initial latitude, longitude, zoom values 
var map = L.map('map', { scrollWheelZoom: false }).setView([51.937913743795015, 4.4499489649703685], 15);

//  add base map tiles from OpenStreetMap and attribution info to 'map' div
var layer = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
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
    "x1": [51.935872, 4.450348], //DF
    "x2": [51.9362931,4.4454543], //DF
    "x3": [51.9365196,4.4431771], //DW
    "x4": [51.9384935,4.4440943], //DW
    "x5": [51.9411234,4.4422231], //PG
    "x6": [51.940813, 4.437955], //PG
    "x7": [51.916006, 4.476677] //END
}

var audioWhile = {
  "LatLng(51.935872, 4.450348)":"audio/audioWhile/dragonfly.mp3", //DF
  "LatLng(51.9362931,4.4454543)":"audio/audioWhile/dragonfly.mp3", //DF
  "LatLng(51.9365196,4.4431771)":"audio/audioWhile/dolphinwaves.mp3", //DW
  "LatLng(51.9384935,4.4440943)":"audio/audioWhile/dolphinwaves.mp3", //DW
  "LatLng(51.9411234,4.4422231)":"audio/audioWhile/projectgecko.mp3", //PG
  "LatLng(51.940813, 4.437955)":"audio/audioWhile/projectgecko.mp3", //PG
  "x7":""
}

var audioWhileX = {
  "x1":"audio/audioWhile/dragonfly.mp3", //DF
  "x2":"audio/audioWhile/dragonfly.mp3", //DF
  "x3":"audio/audioWhile/dolphinwaves.mp3", //DW
  "x4":"audio/audioWhile/dolphinwaves.mp3", //DW
  "x5":"audio/audioWhile/projectgecko.mp3", //PG
  "x6":"audio/audioWhile/projectgecko.mp3", //PG
  "x7":""

}

var getSymb = {
  "x1":"Step on the marked spot on the given location and look towards the black and white pillar. What word appears? Enter it by tapping on the icon.", //DF
  "x2":"Step on the marked spot on the given location and look towards the black and white pillar. What word appears? Enter it by tapping on the icon.", //DF
  "x3":"Step on the marked spot on the given location and look towards the black and white pillar. What word appears? Enter it by tapping on the icon.", //DW
  "x4":"Step on the marked spot on the given location and look towards the black and white pillar. What word appears? Enter it by tapping on the icon.", //DW
  "x5":"Step on the marked spot on the given location and look towards the black and white pillar. What word appears? Enter it by tapping on the icon.", //PG
  "x6":"Step on the marked spot on the given location and look towards the black and white pillar. What word appears? Enter it by tapping on the icon.", //PG
  "x7":""
}

var codeword = {
  "x1": 'FORWARD', //DF
  "x2": 'FROG', //DF
  "x3": '', //DW
  "x4": 'DE SPEELMAN', //DW
  "x5": 'HEART', //PG
  "x6": 'STORK', //PG
  "x7": '' //END
}

var title = {
    "x1":"Location 1", //DF
    "x2":"Location 2", //DF
    "x3":"Location 3", //DW
    "x4":"Location 4", //DW
    "x5":"Location 5", //PG
    "x6":"Location 6", //PG
    "x7":"FINAL" //END
}


var titleWhile = {
  "LatLng(51.914444, 4.470009)":"Location 1", //DF
  "LatLng(51.906289, 4.442124)":"Location 2", //DF
  "LatLng(51.906333, 4.492452)":"Location 3", //DW
  "LatLng(51.928074, 4.476836)":"Location 4", //DW
  "LatLng(51.912516, 4.501322)":"Location 5", //PG
  "LatLng(51.928861, 4.480778)":"Location 6", //PG
  "LatLng(51.916006, 4.476677)":"FINAL" //END
}


var audioQuest = {
  "x1":"audio/audioQuest/DF1.mp3", //DF
  "x2":"audio/audioQuest/DF2.mp3", //DF
  "x3":"audio/audioQuest/DW1.mp3", //DW
  "x4":"audio/audioQuest/DW2.mp3", //DW
  "x5":"audio/audioQuest/PG1.mp3", //PG
  "x6":"audio/audioQuest/PG2.mp3", //PG
  "x7":"audio/outro.mp3"
}

var button = {
    "x1":["NEXT LOCATION"], //DF
    "x2":["NEXT LOCATION"], //DF
    "x3":["NEXT LOCATION"],//DW
    "x4":["NEXT LOCATION"], //DW
    "x5":["NEXT LOCATION"], //PG
    "x6":["NEXT LOCATION"], //PG
    "x7":""

}

// BLACK POINT
var icons = {
    "x1":"icons/newlocation1.png",
    "x2":"icons/newlocation1.png",
    "x3":"icons/newlocation1.png",
    "x4":"icons/newlocation1.png",
    "x5":"icons/newlocation1.png",
    "x6":"icons/newlocation1.png",
    "x7":"icons/final.png"
}

// COLORED POINTS
var newIcon = {
  "x1":"icons/newlocation2.png", //DF
  "x2":"icons/newlocation2.png", //DF
  "x3":"icons/newlocation2.png", //DW
  "x4":"icons/newlocation2.png", //DW
  "x5":"icons/newlocation2.png", //PG
  "x6":"icons/newlocation2.png", //PG
  "x7":""

}


var customX= {
  "LatLng(51.914444, 4.470009)": 'worlds/Dragon_Fly/DragonFly.svg',
  "LatLng(51.906289, 4.442124)": 'worlds/Dragon_Fly/DragonFly.svg',
  "LatLng(51.906333, 4.492452)": "worlds/Dolphin_Waves/DolphinWaves.svg",
  "LatLng(51.928074, 4.476836)": "worlds/Dolphin_Waves/DolphinWaves.svg",
  "LatLng(51.928861, 4.480778)": "worlds/Project_Gecko/ProjectGecko.svg",
  "LatLng(51.916006, 4.476677)": "worlds/Project_Gecko/ProjectGecko.svg",
}



var flexBck={
  "x1": "linear-gradient(129deg, #1e1d9d,#6e66cf)", //DF
  "x2": "linear-gradient(129deg, #1e1d9d,#6e66cf)",
  "x3": "linear-gradient(129deg, #6e66cf,#fd729f)",//DW
  "x4": "linear-gradient(129deg, #6e66cf,#fd729f)",
  "x5": "linear-gradient(129deg, #4fe98d,#3a9b73)",//PG
  "x6": "linear-gradient(129deg, #4fe98d,#3a9b73)",
  "x7": "linear-gradient(129deg, #d0b580,#fcefc9)"
}

var flexBckX={
  "LatLng(51.914444, 4.470009)" : "linear-gradient(129deg, #1e1d9d,#6e66cf)",//DF
  "LatLng(51.906289, 4.442124)": "linear-gradient(129deg, #1e1d9d,#6e66cf)",
  "LatLng(51.906333, 4.492452)": "linear-gradient(129deg, #6e66cf,#fd729f)",//DW
  "LatLng(51.928074, 4.476836)": "linear-gradient(129deg, #6e66cf,#fd729f)",
  "LatLng(51.912516, 4.501322)": "linear-gradient(129deg, #4fe98d,#3a9b73)",//PG
  "LatLng(51.928861, 4.480778)": "linear-gradient(129deg, #4fe98d,#3a9b73)",
  "LatLng(51.916006, 4.476677)": "linear-gradient(129deg, #d0b580,#fcefc9)"
}


var worldIcon= {
  "x1": 'worlds/Dragon_Fly/DragonFly.svg',
  "x2": 'worlds/Dragon_Fly/DragonFly.svg',
  "x3": "worlds/Dolphin_Waves/DolphinWaves.svg",
  "x4": "worlds/Dolphin_Waves/DolphinWaves.svg",
  "x5": "worlds/Project_Gecko/ProjectGecko.svg",
  "x6": "worlds/Project_Gecko/ProjectGecko.svg",
  "x7":""
}

let array = ["x1","x2","x3","x4","x5","x6","x7"];

// // SHUFFLE
// function shuffleArray(arr) {
//     arr.sort(() => Math.random() - 0.5);
//   }

// shuffleArray(array)


// COOKIES
let co = Cookies.get();
console.log(co)


// SHOW INTRO
if  (Object.entries(co).length === 0){
  var intro = $( "#zero" );
  if (intro.css('display', 'none') ) {
    intro.fadeIn();
  } 
} else {
  checkCookies()
}


// Set Cookies
function checkCookies(){
  if (Object.entries(co).length === 0){
    //  var shuffleArr = shuffleArray(arr)
    // array.push('x7')
    for (c=0; c<7; c++){
      let r = array[c] 
      Cookies.set(r,r,  { expires: 60 });}
  }
}



// CURRENT PLACE x^n
var daje = Object.keys(co)
let currents = []

 for (element=0;element<7;element++){
  // if (daje[element].startsWith('x')){
    currents.push(daje[element])
  // }
 }
let current = currents[0]

//Next Location Info
if (current === 'x7'){
  $( "#infoPlace" ).html(`<div class="flex"><h3>Last Location Info</h3><h1>${title[current]}</h1><br><p>${getSymb[current]}</p><button style='min-width: 100px;' onclick="$('#infoPlace').fadeOut()">Go!</button></div>`)
} else {
  $( "#infoPlace" ).html(`<div class="flex"><h3>Next Location Info</h3><h1>${title[current]}</h1><br><audio src="${audioWhileX[current]}" controls></audio><p>${getSymb[current]}</p><br><button style='min-width: 100px;' onclick="$('#infoPlace').fadeOut()">Go!</button></div>`)
}
$( ".flex" ).css("background", flexBck[current])
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

// // SHOW STACK OF SVG | CUSTOM GRAPH
// var svgChoices = ["p1","p2","p3","p4","p5","p6"];
// var doneSvgChoices = []

// function showCustomGraph(pic){
//   for(pi = 0; pi < svgChoices.length; pi++){ 
//     if (Object.keys(co).includes(svgChoices[pi])) { 
//       doneSvgChoices.push(svgChoices[pi])
//     }}

//   for (const p of doneSvgChoices){
//     let value = Cookies.get(p)
//     $(pic).append(`<img src="${customIcon[p][value]}"/>`) 
//   }
// }
// showCustomGraph("#showPic")

// SET CURRENT STATE IN HTML
$('#quest').attr('src', audioQuest[current]);
$("#title").append(title[current]);

$("#firstChoice").append(button[current][0]);
// $("#secondChoice").append(button[current][1]);

$("#worldIcon").attr("src","worlds/star-highres.png");

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
    // deleteItem()
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
  $('#audioWorld').html(`<div class="flex"><img src="${customX[this.getLatLng()]}"/><h1>${titleWhile[this.getLatLng()]}</h1><br><audio src='${audioWhile[this.getLatLng()]}' controls></audio><br><button style='min-width: 100px;' onclick="$('#audioWorld').fadeOut()">Close</button></div>`)
  $( ".flex" ).css("background", flexBckX[this.getLatLng()])
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
// let lexicon = L.easyButton('fa-key', function(btn, map){
//   $( "#lexicon" ).fadeIn()
// },'Lexicon','lexotan').addTo(map);

// SHOW INFO
L.easyButton('fa-forward', function(btn, map){
  $( "#infoPlace" ).fadeIn()
  if (current == 'x7'){
    $( "#infoPlace" ).html(`<div class="flex"><h3>Last Location Info</h3><h1>${title[current]}</h1><br><p>${getSymb[current]}</p><button style='min-width: 100px;' onclick="$('#infoPlace').fadeOut()">Close</button></div>`)
  } else {
    $( "#infoPlace" ).html(`<div class="flex"><h3>Next Location Info</h3><h1>${title[current]}</h1><br><audio src="${audioWhileX[current]}" controls></audio><p>${getSymb[current]}</p><br><button style='min-width: 100px;' onclick="$('#infoPlace').fadeOut()">Close</button></div>`)
  }
  $( ".flex" ).css("background", flexBck[current])

}, 'info Place', 'infos').addTo(map);



// CHOICE POPUP
var choice = $( "#choice" );

function choiceToggle() {
  if (choice.css('display', 'none') ) {
    choice.fadeIn();
  } }


// STORE CHOICE QUEST AND SHOW ONGOING CUSTOM GRAPH

// let bck = customIconBack[current]

function closeMe0(){
  $( "#choice" ).fadeOut();
  deleteItem();
  // let currP = current.replace("x","p");
  // console.log(currP);
  // Cookies.set(currP,0, { expires: 60 });

  // $( "#showPicBack" ).fadeIn();

  // $("#bigWhite").attr('src', bck);
  // $("#showPic").append(`<img style="filter:invert(100%)" src="${customIcon[currP][0]}"/>`);
  $( "img" ).css('top','0');
  $( "img" ).css('width','90%');
  $( "button" ).css('box-shadow','0px 0px 0px var(--subtitle);');
  $("button").click(location.reload())


}

// function closeMe1(){
//   $( "#choice" ).fadeOut();
//   deleteItem();
//   let currP = current.replace("x","p");
//   console.log(currP);
//   Cookies.set(currP,1, { expires: 60 });

//   $( "#showPicBack" ).fadeIn();
  
//   $("#bigWhite").attr('src',bck);
//   $("#showPic").append(`<img style="filter:invert(100%)" src="${customIcon[currP][1]}"/>`);
//   $( "img" ).css('top','0');
//   $( "img" ).css('width','90%');
//   $( "button" ).css('box-shadow','0px 0px 0px var(--subtitle);');
// }


//END
function showEnd(){
  console.log('End');
  $('#showPic').fadeOut()
  $('#end').fadeIn()
}

// DELETE COOKIES AND END GAME
function endd(){
    // $("#showPic").fadeOut();
    $('#customPicEnd').fadeIn();
    $('#customPicEndEnd').fadeIn();
    showCustomGraph("#customPicEndEnd");
    $('#end').fadeOut();
    
    // $('#customPicEnd').append('<button onclick="realEnd()">Start Again</button>')

}

function realEnd(){
  for(remove=0;remove<8;remove++){
    Cookies.remove(svgChoices[remove])
    }
    Cookies.remove('x7');
    location.reload()
}
