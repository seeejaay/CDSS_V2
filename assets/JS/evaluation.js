const openPat = document.getElementById("_patientData");

openPat.addEventListener("click", () => {
  window.open("../index.html", "_self");
});

const openAssess = document.getElementById("_assessment");

openAssess.addEventListener("click", () => {
  window.open("./assessment.html", "_self");
});

const openDiag = document.getElementById("_diagnosis");

openDiag.addEventListener("click", () => {
  window.open("./diagnosis.html", "_self");
});

const openPlan = document.getElementById("_planning");

openPlan.addEventListener("click", () => {
  window.open("./planning.html", "_self");
});

const openRem = document.getElementById("_reminder");

openRem.addEventListener("click", () => {
  window.open("./reminder.html", "_self");
});

const btnRadio1 = document.querySelector(".btn-radio1");
const btnRadio2 = document.querySelector(".btn-radio2");
btnRadio1.addEventListener("click", () => {
  if (btnRadio1.classList.contains("active")) {
    btnRadio1.classList.remove("active");
  } else {
    console.log("FIRE");
    btnRadio1.classList.add("active");
    btnRadio2.classList.remove("active");
  }
});

btnRadio2.addEventListener("click", () => {
  if (btnRadio2.classList.contains("active")) {
    btnRadio2.classList.remove("active");
  } else {
    console.log("FIRE");
    btnRadio2.classList.add("active");
    btnRadio1.classList.remove("active");
  }
});

const btnRadio3 = document.querySelector(".btn-radio3");
const btnRadio4 = document.querySelector(".btn-radio4");
btnRadio3.addEventListener("click", () => {
  if (btnRadio3.classList.contains("active")) {
    btnRadio3.classList.remove("active");
  } else {
    console.log("FIRE");
    btnRadio3.classList.add("active");
    btnRadio4.classList.remove("active");
  }
});

btnRadio4.addEventListener("click", () => {
  if (btnRadio4.classList.contains("active")) {
    btnRadio4.classList.remove("active");
  } else {
    console.log("FIRE");
    btnRadio4.classList.add("active");
    btnRadio3.classList.remove("active");
  }
});

const btnRadio5 = document.querySelector(".btn-radio5");
const btnRadio6 = document.querySelector(".btn-radio6");
btnRadio5.addEventListener("click", () => {
  if (btnRadio5.classList.contains("active")) {
    btnRadio5.classList.remove("active");
  } else {
    console.log("FIRE");
    btnRadio5.classList.add("active");
    btnRadio6.classList.remove("active");
  }
});

btnRadio6.addEventListener("click", () => {
  if (btnRadio6.classList.contains("active")) {
    btnRadio6.classList.remove("active");
  } else {
    console.log("FIRE");
    btnRadio6.classList.add("active");
    btnRadio5.classList.remove("active");
  }
});

const btnRadio7 = document.querySelector(".btn-radio7");
const btnRadio8 = document.querySelector(".btn-radio8");

btnRadio7.addEventListener("click", () => {
  if (btnRadio7.classList.contains("active")) {
    btnRadio7.classList.remove("active");
  } else {
    console.log("FIRE");
    btnRadio7.classList.add("active");
    btnRadio8.classList.remove("active");
  }
});

btnRadio8.addEventListener("click", () => {
  if (btnRadio8.classList.contains("active")) {
    btnRadio8.classList.remove("active");
  } else {
    console.log("FIRE");
    btnRadio8.classList.add("active");
    btnRadio7.classList.remove("active");
  }
});

const btnRadio9 = document.querySelector(".btn-radio9");
const btnRadio10 = document.querySelector(".btn-radio10");

btnRadio9.addEventListener("click", () => {
  if (btnRadio9.classList.contains("active")) {
    btnRadio9.classList.remove("active");
  } else {
    console.log("FIRE");
    btnRadio9.classList.add("active");
    btnRadio10.classList.remove("active");
  }
});

btnRadio10.addEventListener("click", () => {
  if (btnRadio10.classList.contains("active")) {
    btnRadio10.classList.remove("active");
  } else {
    console.log("FIRE");
    btnRadio10.classList.add("active");
    btnRadio9.classList.remove("active");
  }
});

const btnRadio11 = document.querySelector(".btn-radio11");
const btnRadio12 = document.querySelector(".btn-radio12");

btnRadio11.addEventListener("click", () => {
  if (btnRadio11.classList.contains("active")) {
    btnRadio11.classList.remove("active");
  } else {
    console.log("FIRE");
    btnRadio11.classList.add("active");
    btnRadio12.classList.remove("active");
  }
});

btnRadio12.addEventListener("click", () => {
  if (btnRadio12.classList.contains("active")) {
    btnRadio12.classList.remove("active");
  } else {
    console.log("FIRE");
    btnRadio12.classList.add("active");
    btnRadio11.classList.remove("active");
  }
});
