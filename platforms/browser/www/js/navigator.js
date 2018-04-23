var map = new google.maps.Map(document.getElementById('map'), {
  mapTypeId: google.maps.MapTypeId.ROADMAP
});
var marker = null;
var markerHere = null;
var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer({
  suppressMarkers: true
});
//
function initMap() {
  showAllLocation();
  //current location 
  navigator.geolocation.getCurrentPosition(function (position) {
    var newPoint = new google.maps.LatLng(position.coords.latitude,
      position.coords.longitude);
    document.getElementById("start").value = position.coords.latitude + ',' + position.coords.longitude;
  });
  // Instantiate a directions service.
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer({
     suppressMarkers: true
  });
  // Create a map and center it on Kasetsart University kamphaeng saen campus.
  map = new google.maps.Map(document.getElementById('map'), {
    position: { lat: 14.024228, lng: 99.976442 }
  });

  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('right-panel'));
  var onChangeHandler = function () {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };
  document.getElementById('start').addEventListener('change', onChangeHandler);
  document.getElementById('end').addEventListener('change', onChangeHandler);
  document.getElementById('mode').addEventListener('change', onChangeHandler);
  autoUpdate();
}
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  // alert("init calculateAndDisplayRoute ");
  directionsDisplay.setOptions({
    polylineOptions: {
      strokeColor: '#99ff99'
    }
  });
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  var selectedMode = document.getElementById('mode').value;
  directionsService.route({
    origin: start,
    destination: end,
    optimizeWaypoints: true,
    travelMode: google.maps.TravelMode[selectedMode]
  }, function (response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}
// Attaches an info window to a marker with the provided message. When the 
//marker is clicked, the info window will open with the secret message.
function attachSecretMessage(marker, secretMessage) {
  var infowindow = new google.maps.InfoWindow({
    content: secretMessage
  });
  marker.addListener('click', function () {
    infowindow.open(marker.get('map'), marker);
  });
}
//real time location
function autoUpdate() {
  navigator.geolocation.getCurrentPosition(function (position) {
    var newPoint = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    document.getElementById("start").value = position.coords.latitude + ',' + position.coords.longitude;
    var end = document.getElementById('end').value;
    var endText = document.getElementById('end').innerText;
    var commaPos = end.indexOf(',');
    var coordinatesLat = parseFloat(end.substring(0, commaPos));
    var coordinatesLong = parseFloat(end.substring(commaPos + 1, end.length));
    var endPoint = new google.maps.LatLng(coordinatesLat, coordinatesLong);
    //  alert(endPoint);
    if (marker) {
      // Marker already created - Move it
      marker.setPosition(endPoint);
      markerHere.setPosition(newPoint);
    }
    else {
      // Marker does not exist - Create it
      marker = new google.maps.Marker({
        position: endPoint,
        map: map,
      });
      attachSecretMessage(marker, "Your mark");
      markerHere = new google.maps.Marker({
        position: newPoint,
        map: map,
      });
      attachSecretMessage(markerHere, "You're here");
    }
    //Center the map on the new position
  //  map.setCenter(newPoint);
  });

  // Center the map on the new position
  //  map.setCenter(newPoint);
  //set navagator point A to point B
  calculateAndDisplayRoute(directionsService, directionsDisplay);
  // Call the autoUpdate() function every 2 seconds
  setTimeout(autoUpdate, 5000);
}
//show dropdown location in Kasetsart U.
function showAllLocation() {
  var str;
  for (var i = 0; i < obj.length; i++) {
    str += '<option value="' + obj[i].lat + ', ' + obj[i].lng + '">' + obj[i].name + '</option>';
  }
  document.getElementById("end").innerHTML = str

}
//slide
function on() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("showPanal").style.display = "none";
}
function off() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("showPanal").style.display = "block";
}
//back
function goBack() {
  window.history.back();
}