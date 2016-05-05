$(document).ready(init);
function init(){
  
var submitEntry = $("#submit");
submitEntry.on("click", update);
  
function update(evt){
evt.preventDefault();
var latNum = $('#lat').val();
  if(isNaN(latNum)){
     alert("Enter a NUMBER for latitude");
    return;
     };
var longNum = $('#long').val();
  if(isNaN(longNum)){
     alert("Enter a NUMBER for longitude");
    return;
     };  
var zoomNum = $('#zoom').val();
  if(isNaN(zoomNum)){
     alert("Enter a NUMBER for zoom");
    return;
     };  
//
//    new google.maps.Map(document.getElementById('mapDiv'), {
//    center: {lat: latNum, lng: longNum},
//    scrollwheel: false,
//    zoom: zoomNum
//  });



  
console.log(latNum);
console.log(longNum);
console.log(zoomNum);

$("form").trigger("reset");
  //console.log('clicked');

};//end update
  
  
  var map;
function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: parseInt(latNum, 10), lng: parseInt(longNum, 10)},
    scrollwheel: false,
    zoom: parseInt(zoomNum, 10)
  });
}//end map
};//end init
  