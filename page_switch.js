// page variables
let dashboard_page = document.querySelector(".dashboard_main");
let progress_page = document.querySelector(".progress-page");
let rank_page = document.querySelector(".rank-page");
let battlefield_page = document.querySelector(".battlefield-page");

//page icon variables
let icon_progress = document.querySelector(".icon--burger");
let icon_rank = document.querySelector(".icon--cup");
let icon_battlefield = document.querySelector(".icon--sword");
let icon_dashboard = document.querySelector(".day_box");

//default page
function defaultPageLoad() {
  dashboard_page.style.display = "inline";
  progress_page.style.display = "none";
  rank_page.style.display = "none";
  battlefield_page.style.display = "none";
}
defaultPageLoad();

//switching to main_dashboard
icon_dashboard.addEventListener("click", () => {
  dashboard_page.style.display = "inline";
  progress_page.style.display = "none";
  rank_page.style.display = "none";
  battlefield_page.style.display = "none";
});

//switching to progress page
icon_progress.addEventListener("click", () => {
  dashboard_page.style.display = "none";
  progress_page.style.display = "flex";
  rank_page.style.display = "none";
  battlefield_page.style.display = "none";
});

// switching to rank page
icon_rank.addEventListener("click", () => {
  dashboard_page.style.display = "none";
  progress_page.style.display = "none";
  rank_page.style.display = "flex";
  battlefield_page.style.display = "none";
});

//swiching to battlefield page
icon_battlefield.addEventListener("click", () => {
  dashboard_page.style.display = "none";
  progress_page.style.display = "none";
  rank_page.style.display = "none";
  battlefield_page.style.display = "inline";
});
