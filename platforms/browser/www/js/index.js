var map;
var markers = [];
function initMap() {
    var uluru = {lat: 14.024017, lng:99.974597};
    map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: uluru
    });
    for(var i=0;i<obj.length;i++){
      marker = new google.maps.Marker({
      position: {lat:obj[i].lat,lng:obj[i].lng},
      map: map,
      icon:"",
      animation: google.maps.Animation.DROP,
      });
    }
  };
  document.addEventListener('init', function(event) {
    var page = event.target;
    if (page.id === 'index') {
      page.querySelector('#push-button').onclick = function() {
        document.querySelector('#myNavigator').pushPage('search.html', {data: {title: ""}});
      };
    } else if (page.id === 'search') {
      //page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
      document.querySelector('#back-button').onClick = function() {
        // Reset the whole stack instead of popping 1 page
        document.querySelector('#myNavigator').resetToPage('index.html');
      };
    }
  });