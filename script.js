const formSearch = document.querySelector(".search");
const overlay = document.querySelector(".overlay");
const modalBox = document.querySelector(".modal-box");
const modelClose = document.querySelector(".js-model-btn");
const signForm = document.querySelector(".js-signup-form");
const mail = document.querySelector(".mail");
const inputAreas = document.querySelectorAll(".search input");
const suggestList = document.querySelectorAll(".suggest-list");
const leftBtn = document.querySelector(".js-left-btn");
const rightBtn = document.querySelector(".js-right-btn");
const articlesList = document.querySelector(".health-article");
const articleCards = document.querySelectorAll(".health-article-card");

//form prevent
formSearch.addEventListener("submit", function (e) {
  e.preventDefault();
});

// open modal-box

signForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (document.querySelector(".input-email").value) {
    mail.textContent = document.querySelector(".input-email").value;
    document.querySelector(".input-email").value = "";
    overlay.classList.remove("hidden");
    modalBox.classList.remove("hidden");
  }
});

// close modal-box

function closeModal() {
  overlay.classList.add("hidden");
  modalBox.classList.add("hidden");
}

overlay.addEventListener("click", closeModal);
modelClose.addEventListener("click", closeModal);

//

inputAreas.forEach((el) =>
  el.addEventListener("click", function () {
    console.log(el);
    suggestList.forEach((elem) => {
      elem.classList.remove("hidden");
    });
  })
);

// slider component

const cardWidth = articleCards[0].offsetWidth;
let currentPosition = 0;

// leftBtn.addEventListener("click", slideLeft);
// rightBtn.addEventListener("click", slideRight);

leftBtn.addEventListener("click", function () {
  if (currentPosition > 0) {
    currentPosition--;
    moveCards();
  }
});

rightBtn.addEventListener("click", function () {
  if (currentPosition < articleCards.length - 1) {
    currentPosition++;
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
