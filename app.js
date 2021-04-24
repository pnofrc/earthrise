// add text to older 
// custom text system



$(document).ready(function() {


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

  var title = {
      "x1":"Dragonfly \ Het Nieuwe Instituut", //DW
      "x2":"Dragonfly \ Dakpark", //DW
      "x3":"Dolphin Waves \ Floating Pavilion", //DF
      "x4":"Dolphin Waves \ Benthemplein", //DF
      "x5":"Project Gecko \ Hef Park", //PG
      "x6":"Project Gecko \ Almondestraat", //PG
      "x7":"The Roof" //END
  }

  // change text to audio tag
  var audio = {
      "x1":"siesta LIV.mp3", //DW
      "x2":"siesta LIV.mp3", //DW
      "x3":"siesta LIV.mp3", //DF
      "x4":"siesta LIV.mp3", //DF
      "x5":"siesta LIV.mp3", //PG
      "x6":"siesta LIV.mp3", //PG
      "x7":"siesta LIV.mp3"
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

// black point
  var icons = {
      "x1":"icons/newlocation.png",
      "x2":"icons/newlocation.png",
      "x3":"icons/newlocation.png",
      "x4":"icons/newlocation.png",
      "x5":"icons/newlocation.png",
      "x6":"icons/newlocation.png",
      "x7":"icons/newlocation.png"
  }

  var customIcon= {
    "x1":["worlds/Dolphin_Waves/1-01.svg","worlds/Dolphin_Waves/1-02.svg"],
    "x2":["worlds/Dolphin_Waves/2-01.svg","worlds/Dolphin_Waves/2-02.svg"],
    "x3":['worlds/Dragon_Fly/1-01.svg','worlds/Dragon_Fly/1-02.svg'],
    "x4":['worlds/Dragon_Fly/2-01.svg','worlds/Dragon_Fly/2-02.svg'],
    "x5":["worlds/Project_Gecko/1-01.svg","worlds/Project_Gecko/1-02.svg"],
    "x6":["worlds/Project_Gecko/2-01.svg","worlds/Project_Gecko/2-02.svg"],
    "x7":["1","2"]
  }

  //colored points
  var newIcon = {
    "x1":"icons/DolphinWaves.png", //DW
    "x2":"icons/DolphinWaves.png", //DW
    "x3":"icons/DragonFly.png", //DF
    "x4":"icons/DragonFly.png", //DF
    "x5":"icons/ProjectGecko.png", //PG
    "x6":"icons/ProjectGecko.png", //PG
    "x7": "http://www.clker.com/cliparts/J/C/Y/S/Q/R/eye-blue-clipart-hi.png", 
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

  checkCookies()

  console.log(co)

  // current x^n
  console.log("current: "+(co[Object.keys(co)[0]]))


  //Show completed places
  let places = ["x1","x2","x3","x4","x5","x6"];
  let oldPlaces = []

  function showCompleted(){
    for( var l = 0; l < places.length; l++){ 
      if (!Object.keys(co).includes(places[l])) { 
        oldPlaces.push(places[l])
      }}
  }

  showCompleted();



  // SET CURRENT STATE
  let current = co[Object.keys(co)[0]];

  $("#firstChoice").append(button[current][0]);
  $("#secondChoice").append(button[current][1]);

  $('#quest').attr('src', audio[current]);
  $("#title").append(title[current]);


  // HERE THE STACK!!
  let customIconProg = customIcon["x1"][0]  

  $('#image').attr('href', customIconProg);


  

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

  // SHOW PIC AT RELOAD
  if (Object.entries(co).length != 6){
    $( "#image" ).click();
  } else if (Object.entries(co).length == 6){

    var intro = $( "#intro" );
    if (intro.css('display', 'none') ) {
      intro.fadeIn();
    } 
  }


  // // CUSTOM ICON
  // var currentIcon = L.icon({
  //     iconUrl: icons[current],
  //     iconSize: [100, 100], // size of the icon
  //     //popupAnchor: [0, -15]
  // });


  //to delete the current cookie when you pass the level
  function deleteItem(){
    Cookies.remove(co[Object.keys(co)[0]]);  
  }


  // Create a TextBox with an attached event
  var textbox = $('<input type="text" placeholder="codeword" />').keyup(function () {
    if (event.keyCode === 13 && $(textbox).val() === "test"){
      choiceToggle()
      deleteItem()
      marker.removeFrom(map)
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
  // console.log(currentLong,currentLat)

  // CUSTOM ICON
  var currentIcon = L.icon({
    iconUrl: icons[current],
    iconSize: [100, 100], // size of the icon
    popupAnchor: [0, -15]
  });

  // CURRENT POSTITION
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
    let marker = new L.Marker(markerLocation, {icon: prevIcon});
    marker.bindPopup(title[neo]);
    map.addLayer(marker)
  }


  var music = document.getElementById("mp3");
  // var play_music_button = document.getElementById("fa-volume-up");

  function playAudio() {
    if (music.paused) {
      music.play();
      // play_music_button.className = 'load';
    } else {
      // music.pause();
      music.load()
      // play_music_button.className = 'play';
    }
    // music.addEventListener('ended',function() {
    //   play_music_button.className = 'play';
    // });
  }

  L.easyButton('fa-volume-up', function(btn, map){
      playAudio()
  }).addTo(map);


  // BUTTON SHOW IMAGE
  L.easyButton('<img src="https://cdn.onlinewebfonts.com/svg/img_490843.png" style="width:15px; text-align: center">', function(btn, map){
      $( "#image" ).click();
  }).addTo(map);


  // CHOICE POPUP
  var choice = $( "#choice" );

  function choiceToggle() {
    if (choice.css('display', 'none') ) {
      choice.fadeIn();
    } }

  //LAST LOCATION
  let ol = oldPlaces.length
  if (ol == 5){
    Cookies.set("x7","x7")
    console.log("LAST LOCATION")
  }


});  

