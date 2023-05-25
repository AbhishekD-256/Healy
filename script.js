const modelBtn = document.querySelector(".btn-model");
const overlay = document.querySelector(".overlay");
const modelBox = document.querySelector(".model-box");
const inputArea = document.querySelector(".search input");

inputArea.addEventListener("click", function (e) {
  document.querySelector(".suggest-area").classList.remove("hidden");
});

// document.addEventListener("click", function (e) {
//   if (!e.target.classList.contains("suggest-list") || e.target !== inputArea) {
//     console.log(e.target);
//     console.log("closed");
//     document.querySelector(".suggest-area").classList.add("hidden");
//   }
// });

modelBtn.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  modelBox.classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
  modelBox.classList.add("hidden");
});
