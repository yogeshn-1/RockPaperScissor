const addBoxButton = document.getElementById("togglerulebook");
const hiddenBox = document.querySelector(".rulebook.hidden");
const crossbtn = document.getElementById("cross");
addBoxButton.addEventListener("click", () => {
  if (hiddenBox.classList.contains("hidden")) {
    hiddenBox.classList.remove("hidden");
  } else {
    hiddenBox.classList.add("hidden");
  }
  crossbtn.addEventListener("click", function () {
    hiddenBox.classList.add("hidden");
  });
});
