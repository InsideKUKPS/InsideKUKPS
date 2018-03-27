//back page
  function goBack() {
    window.history.back();
  }
//open detail

function openInfo(key) {

  var playlist;  
    document.querySelector('#navigator').pushPage(key);
  }