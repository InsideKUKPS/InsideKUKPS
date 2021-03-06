var map;
var markers = [];
var Message;
function initMap() {
  var uluru = { lat: 14.024017, lng: 99.974597 };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: uluru
  });
  for (var i = 0; i < obj.length; i++) {
    marker = new google.maps.Marker({
      position: {
        lat: obj[i].lat,
        lng: obj[i].lng
      },
      map: map,
      icon: "img/" + obj[i].category + ".svg",
      title: obj[i].name,
      animation: google.maps.Animation.DROP,
    });
    attachMessage(marker, obj[i].name);
  }
};

function initMap2(category) {
  var uluru = { lat: 14.024017, lng: 99.974597 };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: uluru
  });
  for (var i = 0; i < obj.length; i++) {
    if(obj[i].category==category){
      marker = new google.maps.Marker({
        position: {
          lat: obj[i].lat,
          lng: obj[i].lng
        },
        map: map,
        icon: "img/" + obj[i].category + ".svg",
        title: obj[i].name,
        animation: google.maps.Animation.DROP,
      });
      attachMessage(marker, obj[i].name);
    }
  }
};

function attachMessage(marker, Message) {
  var infowindow = new google.maps.InfoWindow({
    content: Message
  });
  marker.addListener('click', function () {
    map.setZoom(19);
    map.setCenter(marker.getPosition());
    infowindow.open(marker.get('map'), marker);
  });
}

//tab hamburger
fn = {};
fn.open = function () {
  var menu = document.getElementById('menu');
  menu.open();
};

fn.load = function (page) {
  if (page === "index.html") {
    location.reload();
  }
  else {
    var menu = document.getElementById('menu');
    var navi = document.getElementById('navi');
    menu.close();
    navi.resetToPage(page, { animation: 'fade' });
  }
};

function openInformation(){
  window.location="information.html";
}

function openCall(){
  window.location="call.html";
}

function openAbout(){
  window.location="About.html";
}

angular.module('myApp', []).controller('namesCtrl', function ($scope) {
  $scope.data = obj;
  $scope.Pfunc = function(obj){
    document.querySelector('ons-tabbar').setActiveTab(0);
    map.setZoom(19);
    map.setCenter( { lat: obj.lat, lng: obj.lng });
  }
});

//start navigator
function openNavigator() {
  window.open("navigator.html");
}
// onSuccess Callback
//   This method accepts a `Position` object, which contains
//   the current GPS coordinates
//
// var onSuccess = function (position) {
//   window.open("navigator.html?latitude=" + position.coords.latitude + "&longitude=" + position.coords.longitude);
// };

// // onError Callback receives a PositionError object
// //
// function onError(error) {
//   alert('code: ' + error.code + '\n' +
//     'message: ' + error.message + '\n');
// }

//end navigator