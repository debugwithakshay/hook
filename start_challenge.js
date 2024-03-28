let startChallengeBox = document.querySelector(".start-challenge-box");

let mainBlanket = document.querySelector(".main-blanket");

// when user not started challenge
function startChallengelater() {
  let closeStartChallengeBtn = document.querySelector(
    ".close-start-challenge-btn"
  );

  closeStartChallengeBtn.addEventListener("click", function () {
    startChallengeBox.style.display = "none";
    mainBlanket.style.display = "none";
  });
}
startChallengelater();

//when user click on start challenge
function startChallenge() {
  let startChallengebtn = document.querySelector(".start-challenge-btn");

  startChallengebtn.addEventListener("click", function () {
    localStorage.setItem("challengeStarted", "yes");
    startChallengeBox.style.display = "none";
    mainBlanket.style.display = "none";

    let dateTime = new Date();

    let challengeStartedDate = dateTime.getDate();
    let challengeStartedMonth = dateTime.getMonth() + 1;
    let challengeStartedYear = dateTime.getFullYear();
    

    console.log(
      challengeStartedDate,
      challengeStartedMonth,
      challengeStartedYear
    );
  });
}
startChallenge();

//check if challengeStarted or not
let challengeStatus;
function checkChallengeStatus() {
  challengeStatus = localStorage.getItem("challengeStarted");

  if (challengeStatus == "yes") {
    console.log("Start ho Chuka hai");
    startChallengeBox.style.display = "none";
    mainBlanket.style.display = "none";
  } else {
    console.log("Abhi nhi start hua hai");
  }
}
checkChallengeStatus();
