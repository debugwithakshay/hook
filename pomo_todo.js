//opening add task box
let addTaskBtns = document.querySelectorAll(".add-task");

addTaskBtns.forEach(function (addTaskBtn) {
  addTaskBtn.addEventListener("click", function () {
    this.parentElement.previousElementSibling.style.visibility = "visible";
  });
});

//closing add task btn
let closeAddTaskBoxBtns = document.querySelectorAll(".close-add-task-box");

closeAddTaskBoxBtns.forEach(function (closeAddTaskBoxBtn) {
  closeAddTaskBoxBtn.addEventListener("click", function () {
    this.parentElement.style.visibility = "collapse";
  });
});

//adding a new task
let taskInput = document.querySelector(".pomo-task-box .add-task-input");

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
    document.querySelector(".pomo-task-box .task-container").appendChild(task);

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

//completing task
let checkboxes = document.querySelectorAll(".task-box .checkbox");

function checkboxWorking() {
  checkboxes.forEach(function (checkbox) {
    let checked = false;
    checkbox.addEventListener("click", function () {
      if (checked) {
        checked = false;
        this.nextElementSibling.style.textDecoration = "line-through";
        this.nextElementSibling.style.color = "#6b6b6b";
        this.children[0].style.display = "inline";
        this.parentElement.classList.add("task-complete");
        updateProgressInfo();
        saveDataPomo();
      } else if (!checked) {
        checked = true;
        this.nextElementSibling.style.textDecoration = "none";
        this.nextElementSibling.style.color = "#000";
        this.children[0].style.display = "none";
        this.parentElement.classList.remove("task-complete");
        updateProgressInfo();
        saveDataPomo();
      }
    });
  });
}

//deleting task
let deleteTaskBtns = document.querySelectorAll(".delete-task");
function deleteTaskWorking() {
  deleteTaskBtns.forEach(function (deleteTaskBtn) {
    deleteTaskBtn.addEventListener("click", function () {
      this.parentElement.remove();
      updateProgressInfo();
      saveDataPomo();
    });
  });
}

//saving to localstorage
let pomoTaskContainer = document.querySelector(
  ".pomo-task-box .task-container"
);
let morningTaskContainer = document.querySelector(
  ".morning-task-box .task-container"
);
let noonTaskContainer = document.querySelector(
  ".noon-task-box .task-container"
);
let eveningTaskContainer = document.querySelector(
  ".evening-task-box .task-container"
);
function saveDataPomo() {
  localStorage.setItem("pomodata", pomoTaskContainer.innerHTML);
  localStorage.setItem("morningdata", morningTaskContainer.innerHTML);
  localStorage.setItem("noondata", noonTaskContainer.innerHTML);
  localStorage.setItem("eveningdata", eveningTaskContainer.innerHTML);
}

//fetching from local storage
function fetchDataPomo() {
  pomoTaskContainer.innerHTML = localStorage.getItem("pomodata");
  morningTaskContainer.innerHTML = localStorage.getItem("morningdata");
  noonTaskContainer.innerHTML = localStorage.getItem("noondata");
  eveningTaskContainer.innerHTML = localStorage.getItem("eveningdata");

  checkboxes = document.querySelectorAll(".task-box .checkbox");
  deleteTaskBtns = document.querySelectorAll(".delete-task");

  checkboxWorking();
  deleteTaskWorking();
}
fetchDataPomo();

//updating progress info
function updateProgressInfo() {
  let pomoTotalTaskNum = document.querySelectorAll(
    ".pomo-task-box .task-container .task"
  ).length;

  let pomoCompleteTaskNum = document.querySelectorAll(
    ".pomo-task-box .task-container .task-complete"
  ).length;

  let morningTotalTaskNum = document.querySelectorAll(
    ".morning-task-box .task-container .task"
  ).length;

  let morningCompleteTaskNum = document.querySelectorAll(
    ".morning-task-box .task-container .task-complete"
  ).length;

  let noonTotalTaskNum = document.querySelectorAll(
    ".noon-task-box .task-container .task"
  ).length;

  let noonCompleteTaskNum = document.querySelectorAll(
    ".noon-task-box .task-container .task-complete"
  ).length;

  let eveningTotalTaskNum = document.querySelectorAll(
    ".evening-task-box .task-container .task"
  ).length;

  let eveningCompleteTaskNum = document.querySelectorAll(
    ".evening-task-box .task-container .task-complete"
  ).length;

  //assigning progress data
  document.querySelector(".pomo-task-box .completed-task-num").innerText =
    pomoCompleteTaskNum;

  document.querySelector(".pomo-task-box .total-task-num").innerText =
    pomoTotalTaskNum;

  document.querySelector(".morning-task-box .completed-task-num").innerText =
    morningCompleteTaskNum;

  document.querySelector(".morning-task-box .total-task-num").innerText =
    morningTotalTaskNum;

  document.querySelector(".noon-task-box .completed-task-num").innerText =
    noonCompleteTaskNum;

  document.querySelector(".noon-task-box .total-task-num").innerText =
    noonTotalTaskNum;

  document.querySelector(".evening-task-box .completed-task-num").innerText =
    eveningCompleteTaskNum;

  document.querySelector(".evening-task-box .total-task-num").innerText =
    eveningTotalTaskNum;

  //progress circular bar
  document.querySelector(
    ".pomo-task-box .task-box--progress"
  ).style.background = `conic-gradient(#ffffff ${
    (pomoCompleteTaskNum / pomoTotalTaskNum) * 360
  }deg, #000000 0deg)`;

  document.querySelector(
    ".morning-task-box .task-box--progress"
  ).style.background = `conic-gradient(#ffffff ${
    (morningCompleteTaskNum / morningTotalTaskNum) * 360
  }deg, #000000 0deg)`;

  document.querySelector(
    ".noon-task-box .task-box--progress"
  ).style.background = `conic-gradient(#ffffff ${
    (noonCompleteTaskNum / noonTotalTaskNum) * 360
  }deg, #000000 0deg)`;

  document.querySelector(
    ".evening-task-box .task-box--progress"
  ).style.background = `conic-gradient(#ffffff ${
    (eveningCompleteTaskNum / eveningTotalTaskNum) * 360
  }deg, #000000 0deg)`;
}
updateProgressInfo();
