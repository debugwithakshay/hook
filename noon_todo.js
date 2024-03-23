//adding a new task
taskInput = document.querySelector(".noon-task-box .add-task-input");

taskInput.addEventListener("keypress", function (event) {
  if (event.key == "Enter" && this.value != "") {
    //creating elements
    let task = document.createElement("div");
    let checkbox = document.createElement("div");
    let checkMark = document.createElement("img");
    let taskHeading = document.createElement("h2");
    let deleteTask = document.createElement("span");

    //adding attributes
    task.classList.add("task");
    checkbox.classList.add("checkbox");
    checkMark.src = "assets/check_mark.png";
    checkMark.setAttribute("alt", "checkmark");
    taskHeading.classList.add("task-heading");
    deleteTask.classList.add("delete-task");

    //insering text
    taskHeading.innerText = this.value;
    deleteTask.innerText = "✗";

    //appending
    task.appendChild(checkbox);
    task.appendChild(taskHeading);
    task.appendChild(deleteTask);
    checkbox.appendChild(checkMark);
    document.querySelector(".noon-task-box .task-container").appendChild(task);

    //clearing input
    this.value = "";

    //reassigning variable
    checkboxes = document.querySelectorAll(".task-box .checkbox");
    deleteTaskBtns = document.querySelectorAll(".delete-task");

    checkboxWorking();
    deleteTaskWorking();
    updateProgressInfo();
    saveDataPomo();
  }
});