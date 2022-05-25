const showPlatforms = document.querySelector(".share-bar");
const shareBtn = document.querySelector(".share-btn");

const shareBtn2 = document.querySelector(".share-btn2");

shareBtn.addEventListener("click", () => {
  showPlatforms.classList.toggle("hidden");
});

shareBtn2.addEventListener("click", () => {
  showPlatforms.classList.add("hidden");
});
