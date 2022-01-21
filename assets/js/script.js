var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var taskFormHandler = function (event){

    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
   
    // package up data as an object
    var taskDataobj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    // send it as an argument to CreateTaskE1
    createTaskE1(taskDataobj);
}

var createTaskE1 = function (taskDataobj) {
 //create list item
 var listItemE1 = document.createElement("li");
 listItemE1.className ="task-item";

 //create div to hold task info and add to list item 
 var taskInfoEl = document.createElement("div");
 taskInfoEl.className = "task-info";
 
 // add HTML content to div
 taskInfoEl.innerHTML = "<h3 class= 'task-name' >" + taskDataobj.name + "</h3><span class ='task-type'>" + taskDataobj.type + "</span>";
 // append the entire <li> to the parent <ul> 
 listItemE1.appendChild(taskInfoEl);

 //add entire list item to list
 tasksToDoE1.appendChild(listItemE1);
};

// we used submit unstilled of click for a form- specific event
formE1.addEventListener("submit", taskFormHandler);

