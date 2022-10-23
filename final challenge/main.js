const burgerBtn = document.querySelector(".burger-btn");
const nav = document.querySelector(".nav");

burgerBtn.addEventListener("click", () => {
  nav.classList.toggle("hide");
});
