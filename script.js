const formSearch = document.querySelector(".search");
const suggestList = document.querySelectorAll(".suggest-list");
const inputArea = document.querySelector(".js-area");
const inputHospital = document.querySelector(".js-hospital");
const inputInsurance = document.querySelector(".js-insurance");
const areaSuggestions = document.querySelector(".suggest-area");
const hospitalSuggestions = document.querySelector(".suggest-hopital");
const insuranceSuggestions = document.querySelector(".suggest-insurance");

const overlay = document.querySelector(".overlay");
const modalBox = document.querySelector(".modal-box");
const modelCloseBtn = document.querySelector(".js-model-btn");
const signForm = document.querySelector(".js-signup-form");
const mail = document.querySelector(".mail");
const inputMail = document.querySelector(".input-email");

const leftBtn = document.querySelector(".js-left-btn");
const rightBtn = document.querySelector(".js-right-btn");
const articlesList = document.querySelector(".health-article");
const articleCards = document.querySelectorAll(".health-article-card");

const signInSection = document.querySelector(".js-sign");
const logInBtn = document.querySelector(".js-btn-login");

//form prevent

formSearch.addEventListener("submit", function (e) {
  e.preventDefault();
});

// search suggetions
inputArea.addEventListener("click", function () {
  areaSuggestions.classList.remove("hidden");
});

inputHospital.addEventListener("click", function () {
  hospitalSuggestions.classList.remove("hidden");
});

inputInsurance.addEventListener("click", function () {
  insuranceSuggestions.classList.remove("hidden");
});
document.addEventListener("click", function (event) {
  const clickedElement = event.target;
  if (
    clickedElement !== inputArea &&
    clickedElement !== inputHospital &&
    clickedElement !== inputInsurance
  ) {
    areaSuggestions.classList.add("hidden");
    hospitalSuggestions.classList.add("hidden");
    insuranceSuggestions.classList.add("hidden");
  }
});

// open modal-box

signForm.addEventListener("submit", function (e) {
  e.preventDefault();
  document.querySelector("body").style.overflow = "hidden";
  if (inputMail.value) {
    mail.textContent = inputMail.value;
    inputMail.value = "";
    overlay.classList.remove("hidden");
  }
});

// close modal-box

function closeModal() {
  overlay.classList.add("hidden");
  document.querySelector("body").style.overflow = "visible";
}

overlay.addEventListener("click", closeModal);
modelCloseBtn.addEventListener("click", closeModal);

// slider component

const cardWidth = 300;
let currentPosition = 0;

leftBtn.addEventListener("click", function () {
  if (currentPosition > 0) {
    currentPosition--;
    moveCards();
  } else {
    currentPosition = articleCards.length;
    moveCards();
  }
});

rightBtn.addEventListener("click", function () {
  if (currentPosition < articleCards.length) {
    currentPosition++;
    moveCards();
  } else {
    currentPosition = 0;
    moveCards();
  }
});

function moveCards() {
  for (let i = 0; i < articleCards.length; i++) {
    articleCards[i].style.transform = `translateX(-${
      currentPosition * cardWidth
    }px)`;
  }
}

// scroll Into sign-in

logInBtn.addEventListener("click", function () {
  signInSection.scrollIntoView({
    behavior: "smooth",
  });
});
