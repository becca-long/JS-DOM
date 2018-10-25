/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

var buttonEl = document.getElementById('add-button');
var listEl = document.getElementById('todo-list');

function clickOnAddTask () {
    newTask.appendChild(taskDescription);
    myList.appendChild(newTask);
    var newTask = document.createElement('li');
    var taskDescription = document.getElementById('description');
}

button.addEventListener('click', clickOnAddTask)
    
//add event handler on the parent that targets the target (event bubbling)

// var button = document.getElementById('myButton');
// var container = document.getElementById('boxContainer');
// var newBox = document.createElement('div');
// var newBoxArray = container.getElementsByTagName('div');

// button.addEventListener('click', function(){
//     document.getElementById('boxContainer').appendChild(newBox);
//     newBox.classList.add("box");
// })
