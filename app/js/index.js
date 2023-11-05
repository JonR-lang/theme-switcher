const toggleBtn = document.querySelector(".header__toggle-btn");

let darkMode = localStorage.getItem("theme");
if (darkMode === "dark") {
  enableDarkMode();
}

toggleBtn.addEventListener("click", () => {
  darkMode = localStorage.getItem("theme");
  if (darkMode !== "dark") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function enableDarkMode() {
  document.body.classList.add("dark-theme");
  toggleBtn.children[0].style.left = "8%";
  localStorage.setItem("theme", "dark");
}

function disableDarkMode() {
  document.body.classList.remove("dark-theme");
  toggleBtn.children[0].style.left = "49%";
  localStorage.setItem("theme", null);
}
