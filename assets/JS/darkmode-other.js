//HAMBURGER MENU
const burgerButton = document.getElementById("burgerButton");
const burgerIcon = document.getElementById("_hamburger");

//CHANGE THEME ICONS
const changeSmall = document.getElementById("_changeThemeConS");
const changeLarge = document.getElementById("_changeThemeConL");

//CHANGE THEME CONTAINERS
const changeThemeS = document.getElementById("_changeThemeS");
const changeThemeL = document.getElementById("_changeThemeL");
//NAVBAR ELEMENTS
const navColor = document.getElementById("_navColor");

//TEXT
const txtTheme = document.querySelectorAll(".txt-theme");

const btnCartL = document.getElementById("_btnCartL");
const btnCartIcon = document.getElementById("_btnCartIconL");

const btnCartS = document.getElementById("_btnCartS");
const btnCartIconS = document.getElementById("_btnCartIconS");

const wrapper = document.querySelector(".wrapper");

// const formGroup = document.querySelector("#_form-group");
//BURGER ICON CHANGE
burgerButton.addEventListener("click", () => {
  if (burgerIcon.classList.contains("fa-bars")) {
    burgerIcon.classList.remove("fa-bars");
    burgerIcon.classList.add("fa-times");
    burgerIcon.style.transform = "rotate(360deg)";
  } else {
    burgerIcon.classList.remove("fa-times");
    burgerIcon.classList.add("fa-bars");
    burgerIcon.style.transform = "rotate(0deg)";
  }
});
//DISPLAY CHANGE SMALL AND CHANGE LARGE
const updateButtonVisibility = () => {
  const win = window;

  if (win.innerWidth >= 992) {
    changeSmall.style.display = "none";
    changeLarge.style.display = "block";
  } else {
    changeSmall.style.display = "block";
    changeLarge.style.display = "none";
  }
};
//CHANGE THEME FOR SMALL SCREEN
changeSmall.addEventListener("click", () => {
  if (changeThemeS.classList.contains("fa-moon")) {
    //ICON CHANGE
    changeThemeS.classList.remove("fa-moon");
    changeThemeS.classList.add("fa-sun");

    //R0TATE ICON
    changeThemeS.style.transform = changeThemeS.classList.contains("fa-moon")
      ? "rotate(360deg)"
      : "rotate(0deg)";
    changeThemeS.style.transform = changeThemeS.classList.contains("fa-sun")
      ? "rotate(360deg)"
      : "rotate(0deg)";

    //NAVBAR
    navColor.style.background = "var(--dark)";
    navColor.classList.remove("navbar-light");
    navColor.classList.add("navbar-dark");

    //BODY BACKGROUND
    wrapper.style.background = "var(--dark)";
    wrapper.style.color = "white";
    // formGroup.style.border = "1px solid var(--ivory)";
    //TEXT COLOR
    txtTheme.forEach((c) => (c.style.color = "#fff"));

    // Save theme to localStorage
    localStorage.setItem("theme", "dark");
  } else {
    //ICON CHANGE
    changeThemeS.classList.remove("fa-sun");
    changeThemeS.classList.add("fa-moon");

    //ROTATE ICON
    changeThemeS.style.transform = changeThemeS.classList.contains("fa-moon")
      ? "rotate(360deg)"
      : "rotate(0deg)";
    changeThemeS.style.transform = changeThemeS.classList.contains("fa-sun")
      ? "rotate(360deg)"
      : "rotate(0deg)";

    //NAVBAR
    navColor.style.background = "var(--ivory)";

    navColor.classList.remove("navbar-dark");
    navColor.classList.add("navbar-light");

    // BODY BACKGROUND
    wrapper.style.background = "var(--ivory)";
    wrapper.style.color = "black";
    // formGroup.style.border = "1px solid var(--dark)";
    //TEXT COLOR
    txtTheme.forEach((c) => (c.style.color = "#000"));

    // Save theme to localStorage
    localStorage.setItem("theme", "light");
  }
});

changeLarge.addEventListener("click", () => {
  if (changeThemeL.classList.contains("fa-moon")) {
    //ICON CHANGE
    changeThemeL.classList.remove("fa-moon");
    changeThemeL.classList.add("fa-sun");

    //R0TATE ICON
    changeThemeL.style.transform = changeThemeL.classList.contains("fa-moon")
      ? "rotate(360deg)"
      : "rotate(0deg)";
    changeThemeL.style.transform = changeThemeL.classList.contains("fa-sun")
      ? "rotate(360deg)"
      : "rotate(0deg)";

    //NAVBAR

    navColor.style.background = "var(--dark)";
    navColor.classList.remove("navbar-light");
    navColor.classList.add("navbar-dark");

    //BODY BACKGROUND
    wrapper.style.background = "var(--dark)";
    wrapper.style.color = "white";
    // formGroup.style.border = "1px solid var(--ivory)";
    //TEXT COLOR
    txtTheme.forEach((c) => (c.style.color = "#fff"));

    // Save theme to localStorage
    localStorage.setItem("theme", "dark");
  } else {
    //ICON CHANGE
    changeThemeL.classList.remove("fa-sun");
    changeThemeL.classList.add("fa-moon");

    //ROTATE ICON
    changeThemeL.style.transform = changeThemeL.classList.contains("fa-moon")
      ? "rotate(360deg)"
      : "rotate(0deg)";
    changeThemeL.style.transform = changeThemeL.classList.contains("fa-sun")
      ? "rotate(360deg)"
      : "rotate(0deg)";

    //NAVBAR
    navColor.style.background = "var(--ivory)";

    navColor.classList.remove("navbar-dark");
    navColor.classList.add("navbar-light");

    // BODY BACKGROUND
    wrapper.style.background = "var(--ivory)";
    wrapper.style.color = "black";
    // formGroup.style.border = "1px solid var(--dark)";

    //TEXT COLOR
    txtTheme.forEach((c) => (c.style.color = "#000"));

    // Save theme to localStorage
    localStorage.setItem("theme", "light");
  }
});

// On page load, check for saved theme in localStorage and apply it
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    changeSmall.click();
    changeLarge.click();
  } else {
    // If no theme is saved or the saved theme is light, set to light mode
    changeThemeS.classList.remove("fa-sun");
    changeThemeS.classList.add("fa-moon");
    changeThemeL.classList.remove("fa-sun");
    changeThemeL.classList.add("fa-moon");
    navColor.style.background = "var(--ivory)";
    navColor.classList.remove("navbar-dark");
    navColor.classList.add("navbar-light");
    wrapper.style.background = "var(--ivory)";
    wrapper.style.color = "black";
    txtTheme.forEach((c) => (c.style.color = "#000"));
  }
});
window.addEventListener("resize", updateButtonVisibility);
updateButtonVisibility();
