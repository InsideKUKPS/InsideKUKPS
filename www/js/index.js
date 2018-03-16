function initMap() {
    var uluru = {lat: 14.024017, lng:99.974597};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }