// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var allBoxes = document.getElementsByClassName('box');
var button = document.getElementById('myButton');

button.addEventListener('click', function(){
    for (i = 0; i < allBoxes.length; i++) {
        allBoxes[i].style.background = "blue";
    }
})
