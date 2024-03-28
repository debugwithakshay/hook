let lockedRankBoxes = document.querySelectorAll(".rank-locked");

function unlockingRanks() {
  for (let box = 0; box < lockedRankBoxes.length; box++) {
    if (
      Number(day.innerText) >=
      lockedRankBoxes[box].children[0].children[1].innerText
    ) {
      lockedRankBoxes[box].classList.remove(".rank-locked");
      lockedRankBoxes[box].children[2].style.display = "none";
    } else if (
      Number(day.innerText) <=
      lockedRankBoxes[box].children[0].children[1].innerText
    ) {
      lockedRankBoxes[box].classList.add(".rank-locked");
      lockedRankBoxes[box].children[2].style.display = "flex";
    }
  }
}
unlockingRanks();
