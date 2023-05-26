const overlay = document.querySelector(".overlay");
const modalBox = document.querySelector(".modal-box");
const modelClose = document.querySelector(".js-model-btn");
const signForm = document.querySelector(".js-signup-form");
const mail = document.querySelector(".mail");
const inputArea = document.querySelector(".search input");

function closeModal() {
  overlay.classList.add("hidden");
  modalBox.classList.add("hidden");
}

signForm.addEventListener("submit", function (e) {
  e.preventDefault();
  mail.textContent = document.querySelector(".input-email").value;
  document.querySelector(".input-email").value = "";
  overlay.classList.remove("hidden");
  modalBox.classList.remove("hidden");
});

overlay.addEventListener("click", closeModal);
modelClose.addEventListener("click", closeModal);
