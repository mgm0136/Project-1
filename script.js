//myArray datasets starts from 0-4

var myArray= [ 
  "Get themm gains",
  "do it now",
  "I believe in you",
  "Gains",
  "More Gains"];

function dude(){
    var Whatever = Math.floor(Math.random()*myArray.length);
    return Whatever;
}


function myFunction() {

document.getElementById("gains").innerHTML = myArray[(dude())];
}
