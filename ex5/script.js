// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so: https://www.w3schools.com/howto/howto_js_add_class.asp

var button = document.getElementById('myButton');
var container = document.getElementById('boxContainer');
//var newBoxArray = container.getElementsByTagName('div');

button.addEventListener('click', function(){
    var newBox = document.createElement('div');
    container.appendChild(newBox);
    newBox.classList.add("box");
})
