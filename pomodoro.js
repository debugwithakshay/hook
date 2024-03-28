let pomodoroStatus = "inactive"; //rest, inactive

//setting images according to Status
let pomoImg = document.querySelector(".pomo-img");
function pomoImageSetter() {
  if (pomodoroStatus == "active") {
    pomoImg.src = "assets/goku.gif";
  } else if (pomodoroStatus == "rest") {
    pomoImg.src = "assets/rest.png";
  } else if (pomodoroStatus == "inactive") {
    pomoImg.src = "assets/normal.png";
  }
}
pomoImageSetter();

//start pomodoro
let pomodoroStartBtn = document.querySelector(".pomodoro_start_btn");
pomodoroStartBtn.addEventListener("click", startPomodoro);

let focusSec = document.querySelector(".focus-sec");
let focusMin = document.querySelector(".focus-min");
let currentLap = document.querySelector(".current-lap");
function startPomodoro() {
  //chaninging status to active
  pomodoroStatus = "active";

  //disabling start pomodoro button
  pomodoroStartBtn.style.cursor = "not-allowed";
  pomodoroStartBtn.style.backgroundColor = "rgb(218, 132, 121)";
  pomodoroStartBtn.style.color = "#060606";
  focusSec.innerText = "59";
  focusMin.innerText = "44";

  //function to start a pomoTimer
  pomoTimer();
  function pomoTimer() {
    let pomoTimerInterval = setInterval(() => {
      //decreasing second
      focusSec.innerText = padWithZeroes(--focusSec.innerText);

      //decreasing minute
      if (focusSec.innerText == "00") {
        focusMin.innerText = padWithZeroes(--focusMin.innerText);
        focusSec.innerText = "60";
      }

      //finishing pomotimer
      if (focusMin.innerText == "00" && focusSec.innerText == "01") {
        initRestStartNotification();
        document.querySelector("#pomoEndSound").play();
        clearInterval(pomoTimerInterval);
        pomodoroStartBtn.innerText = "Start Rest Timer";
        pomodoroStatus = "rest";
        pomoImageSetter();
        pomodoroStartBtn.style.cursor = "pointer";
        pomodoroStartBtn.style.backgroundColor = "rgb(227, 68, 47)";
        pomodoroStartBtn.style.color = "#000000";
        focusMin.innerText = "14";
        focusSec.innerText = "00";
        pomodoroStartBtn.removeEventListener("click", startPomodoro);
        pomodoroStartBtn.addEventListener("click", restTimer);
      }
    }, 1000);
  }

  function restTimer() {
    pomodoroStartBtn.style.cursor = "not-allowed";
    pomodoroStartBtn.style.backgroundColor = "rgb(218, 132, 121)";
    pomodoroStartBtn.style.color = "#060606";
    focusSec.innerText = "59";
    focusMin.innerText = "14";
    let restTimerInterval = setInterval(() => {
      //decreasing second
      focusSec.innerText = padWithZeroes(--focusSec.innerText);

      //decreasing minute
      if (focusSec.innerText == "00") {
        focusMin.innerText = padWithZeroes(--focusMin.innerText);
        focusSec.innerText = "60";
      }

      if (focusMin.innerText == "00" && focusSec.innerText == "01") {
        initRestEndNotification();
        document.querySelector("#restEndSound").play();
        clearInterval(restTimerInterval);
        pomodoroStartBtn.innerText = "Start Pomodore";
        pomodoroStatus = "inactive";
        pomoImageSetter();
        pomodoroStartBtn.style.cursor = "pointer";
        pomodoroStartBtn.style.backgroundColor = "rgb(227, 68, 47)";
        pomodoroStartBtn.style.color = "#000000";
        focusMin.innerText = "45";
        focusSec.innerText = "00";
        pomodoroStartBtn.removeEventListener("click", restTimer);
        pomodoroStartBtn.addEventListener("click", startPomodoro);
      }
    }, 1000);
  }

  pomoImageSetter();
}

//request notification permisiion
function notificationPermission() {
  if (Notification.permission === "granted") {
    console.log("Permission already granted");
  } else if (Notification.permission === "denied") {
    console.log("Permission denied previously");
  } else {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Permission granted");
      } else {
        console.log("Permission denied");
      }
    });
  }
}
notificationPermission();

//initialize notification
function initRestStartNotification() {
  new Notification("Congratulation, Take Rest for 15 minute");
}

function initRestEndNotification() {
  new Notification("It's Time for War, again");
}

// Function to pad a number with zeroes to ensure it's always two digits
function padWithZeroes(number) {
  return number < 10 ? "0" + number : number;
}
