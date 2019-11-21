let myArray = [];

$(document).ready(function() {

var myNodelist = document.getElementsByTagName("LI");
var i;

for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    console.log();
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
const input = document.querySelector('#myInput');
input.addEventListener('keyup',function(e){
  if (e.keyCode === 13) {
  newElement();
}
});


function newElement() {
    
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '' || myArray.includes (inputValue)) {
    alert("You must write something!");
  } else {
    myArray.push([inputValue, false]);
    document.getElementById("myUL").appendChild(li);
    console.log(inputValue);
  }

  $("#btn_settings").click(
    function(){
      $("#myUL").children('li').each(function () {
        if (this.classList.contains('checked')) {
          myArray.splice($(this).inputValue);
        }
      $(".checked").remove();
      });
    });
  
  
  document.getElementById("myInput").value = "";
  
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  $( "#myUL" ).sortable();
  var trashItem = function(){
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      

    }
  }};

}
// Each time this is called (whenever the dom in div is), clear the array and loop through the elements into the array
$("body").on("DOMSubtreeModified", "div", function(){

    $(function(){
      myArray =[];
      $("li").each(function(){
          myArray.push($(this).text());


      });


    });
});


});
