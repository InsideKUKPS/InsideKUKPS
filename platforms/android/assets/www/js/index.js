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

document.addEventListener('init', function (event) {
  var page = event.target;
  if (page.id === 'index') {
    page.querySelector('#push-button').onclick = function () {
      document.querySelector('#myNavigator').pushPage('search.html', { data: { title: "" } });
    };
  } else if (page.id === 'search') {
    //page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    document.querySelector('#back-button').onClick = function () {
      // Reset the whole stack instead of popping 1 page
      document.querySelector('#myNavigator').resetToPage('index.html');
    };
  }
});
//tab hamburger
window.fn = {};

window.fn.open = function () {
  var menu = document.getElementById('menu');
  menu.open();
};
window.fn.load = function (page) {
  if (page == "index.html") {
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
window.location="information.html"
}
angular.module('myApp', []).controller('namesCtrl', function ($scope) {
  $scope.data = obj;
});
