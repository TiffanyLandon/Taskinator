var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");
// declare a new variable to increment by one each time a task is created
var taskIdCounter = 0;

var taskFormHandler = function (event){

    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    if (!taskNameInput || !taskTypeInput){
        alert("You need to fill out the task form!");
        return false;
    }

    
   
    // package up data as an object
    var taskDataobj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    // send it as an argument to CreateTaskE1
    createTaskE1(taskDataobj);
    formE1.reset ();
}

var createTaskE1 = function (taskDataobj) {
 //create list item
 var listItemE1 = document.createElement("li");
 listItemE1.className ="task-item";

 //add task id as a custom attribute
 listItemE1.setAttribute("data-task-id", taskIdCounter);

 //create div to hold task info and add to list item 
 var taskInfoEl = document.createElement("div");
 taskInfoEl.className = "task-info";
 
 // add HTML content to div
 taskInfoEl.innerHTML = "<h3 class= 'task-name' >" + taskDataobj.name + "</h3><span class ='task-type'>" + taskDataobj.type + "</span>";
 // append the entire <li> to the parent <ul> 
 listItemE1.appendChild(taskInfoEl);

 var taskActionsE1 = createTaskActions(taskIdCounter);
 listItemE1.appendChild(taskActionsE1);


 //add entire list item to list
 tasksToDoE1.appendChild(listItemE1);

 // increase task counter for next unique id
 taskIdCounter++;
};

// create a function to edit and delete buttons
var createTaskActions = function(taskId){

    var actionContainerE1 = document. createElement("div");
    actionContainerE1.className = "task-actions" ;

    // create ediit button
    var editButtonE1  = document.createElement("button");
    editButtonE1.textContent ="Edit";
    editButtonE1.className = "btn edit-btn";
    editButtonE1.setAttribute ("data-task-id", taskId);

    actionContainerE1.appendChild (editButtonE1);

    //create delete button
    var deleteButtonE1 = document.createElement("button");
    deleteButtonE1.textContent = "Delete";
    deleteButtonE1.className = "btn delete-btn";
    deleteButtonE1.setAttribute("data-task-id", taskId);

    actionContainerE1.appendChild(deleteButtonE1);

    // adding the select or dropdown function
    var statusSelectE1 = document.createElement("select");
    statusSelectE1.className = "select-status";
    statusSelectE1. setAttribute ("name","status-change");
    statusSelectE1.setAttribute("data-task-id", taskId);

    var statusChoices = ["To Do", "In Progress", "Completed"];

    // for loop helps to execute a block of code a certain amount of times
    for (var i = 0; i < statusChoices.length; i++) {
        //create option element 
        var statusOptionE1 = document. createElement("option");
        statusOptionE1.textContent = statusChoices[i];
        statusOptionE1.setAttribute("value", statusChoices[i]);

        //append to select
        statusSelectE1.appendChild(statusOptionE1);
    }

    actionContainerE1.appendChild(statusSelectE1);

    return actionContainerE1;


};
    
    // we used submit unstilled of click for a form- specific event
formE1.addEventListener("submit", taskFormHandler);

