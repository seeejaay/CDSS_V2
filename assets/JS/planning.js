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

const label1 = document.getElementById("_label1");
const plan1 = document.getElementById("_plan1");

label1.addEventListener("click", () => {
  console.log("FIRE");
  plan1.classList.toggle("active");
  if (label1.classList.contains("fa-plus")) {
    label1.classList.remove("fa-plus");
    label1.classList.add("fa-minus");
  } else {
    label1.classList.remove("fa-minus");
    label1.classList.add("fa-plus");
  }
});

const label2 = document.getElementById("_label2");
const plan2 = document.getElementById("_plan2");

label2.addEventListener("click", () => {
  console.log("FIRE");
  plan2.classList.toggle("active");
  if (label2.classList.contains("fa-plus")) {
    label2.classList.remove("fa-plus");
    label2.classList.add("fa-minus");
  } else {
    label2.classList.remove("fa-minus");
    label2.classList.add("fa-plus");
  }
});

const label3 = document.getElementById("_label3");
const plan3 = document.getElementById("_plan3");

label3.addEventListener("click", () => {
  console.log("FIRE");
  plan3.classList.toggle("active");
  if (label3.classList.contains("fa-plus")) {
    label3.classList.remove("fa-plus");
    label3.classList.add("fa-minus");
  } else {
    label3.classList.remove("fa-minus");
    label3.classList.add("fa-plus");
  }
});

const label4 = document.getElementById("_label4");
const plan4 = document.getElementById("_plan4");

label4.addEventListener("click", () => {
  console.log("FIRE");
  plan4.classList.toggle("active");
  if (label4.classList.contains("fa-plus")) {
    label4.classList.remove("fa-plus");
    label4.classList.add("fa-minus");
  } else {
    label4.classList.remove("fa-minus");
    label4.classList.add("fa-plus");
  }
});

const label5 = document.getElementById("_label5");
const plan5 = document.getElementById("_plan5");

label5.addEventListener("click", () => {
  console.log("FIRE");
  plan5.classList.toggle("active");
  if (label5.classList.contains("fa-plus")) {
    label5.classList.remove("fa-plus");
    label5.classList.add("fa-minus");
  } else {
    label5.classList.remove("fa-minus");
    label5.classList.add("fa-plus");
  }
});

const label6 = document.getElementById("_label6");
const plan6 = document.getElementById("_plan6");

label6.addEventListener("click", () => {
  console.log("FIRE");
  plan6.classList.toggle("active");
  if (label6.classList.contains("fa-plus")) {
    label6.classList.remove("fa-plus");
    label6.classList.add("fa-minus");
  } else {
    label6.classList.remove("fa-minus");
    label6.classList.add("fa-plus");
  }
});
