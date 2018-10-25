// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

var sectionHead = document.getElementById('section-header');
var theSection = document.getElementById('section');

sectionHead.addEventListener('click', function(){
    if(theSection.style.display == 'block') {
        theSection.style.display = 'none';
    } else {
        theSection.style.display = 'block';
    }
})