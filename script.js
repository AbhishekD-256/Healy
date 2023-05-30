const searchForm = document.querySelector(".search");
const suggestList = document.querySelectorAll(".suggest-list");

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

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

// search suggetions

const suggestions = {
  area: ["Chennai", "Vizag", "Hyderabad", "Bangaluru"],
  hospital: [
    "Apollo Hospital",
    "Fortis Malar Hospital",
    "Kims Hospital",
    "MGM Healthcare",
  ],
  insurance: [
    "Max Bupa Health Companion Plan",
    "Apollo Munich Optima Restore Health",
    "Cigna TTK ProHealth Plus",
    "Royal Sundaram Health Lifeline Supreme",
  ],
};

const containedList = [];
function createList(className, list) {
  if (containedList.includes(className)) {
    return;
  }
  containedList.push(className);
  list.forEach((li) => {
    const html = `<li>${li}</li>`;
    document
      .querySelector(`.${className}`)
      .insertAdjacentHTML("afterbegin", html);
  });
}

document.addEventListener("click", function (e) {
  const clicked = e.target.closest(".input-box");
  if (!clicked) {
    suggestList.forEach((sug) => sug.classList.add("hidden"));
  }
});

searchForm.addEventListener("click", function (e) {
  const clicked = e.target;
  if (!clicked.classList.contains("js-search-input")) return;
  suggestList.forEach((sug) => sug.classList.add("hidden"));
  createList(
    `suggest-${clicked.dataset.searchingValue}`,
    suggestions[clicked.dataset.searchingValue]
  );
  document
    .querySelector(`.suggest-${clicked.dataset.searchingValue}`)
    .classList.remove("hidden");
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
  document.querySelector("body").style.overflow = "visible";
  overlay.classList.add("hidden");
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
