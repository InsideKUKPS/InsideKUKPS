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

angular.module('myApp', []).controller('namesCtrl', function ($scope) {
  $scope.data = obj;
});