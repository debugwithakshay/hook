// Define progressBlocks and progressBlockRows
let progressBlocks = document.querySelectorAll(".progress-block");
let progressBlockRows = document.querySelectorAll(".progress-block-row");

// Function to toggle complete/uncomplete block and save progress data
function progressBlockWorking() {
  progressBlocks.forEach(function (progressBlock) {
    progressBlock.addEventListener("click", function () {
      this.classList.toggle("completed-block");
      saveProgressData();
      updateDayValue();
      unlockingRanks();
    });
  });
}

// Function to save progress data
function saveProgressData() {
  // Save the completion state of each block
  progressBlocks.forEach(function (progressBlock, index) {
    localStorage.setItem(
      `block${index}`,
      progressBlock.classList.contains("completed-block")
    );
  });
}

// Function to load progress data
function loadProgressData() {
  // Load the completion state of each block
  progressBlocks.forEach(function (progressBlock, index) {
    let isCompleted = localStorage.getItem(`block${index}`);
    if (isCompleted === "true") {
      progressBlock.classList.add("completed-block");
    } else {
      progressBlock.classList.remove("completed-block");
    }
  });
}

// Register event listeners
progressBlockWorking();

// Load progress data when the page loads
loadProgressData();

//updating day value
let day = document.querySelector(".day");
function updateDayValue() {
  let completedBlocks = document.querySelectorAll(".completed-block");
  day.innerText = completedBlocks.length;
}
