
//Social Network Tab 
function openup(){
    document.getElementById("Social").style.height="250px";
    document.getElementsByTagName("IMG").style.display="flex";
}
function closeup(){
    document.getElementById("Social").style.height="0px";
    document.getElementsByTagName("IMG").style.display="none";
}

//To change the current navbar
var header = document.getElementById("Navvbar");
var btns = header.getElementsByClassName("bar");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// $("tr:not(:first-child)").each(function(index){
//   $(this).css('animation-delay', index*3 +'s');
// });