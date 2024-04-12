const openAsses = document.getElementById("_assessment");

openAsses.addEventListener("click", () => {
  window.open("./Pages/assessment.html", "_self");
});

const openDiag = document.getElementById("_diagnosis");

openDiag.addEventListener("click", () => {
  window.open("./Pages/diagnosis.html", "_self");
});

const openPlan = document.getElementById("_planning");

openPlan.addEventListener("click", () => {
  window.open("./Pages/planning.html", "_self");
});
const openEval = document.getElementById("_evaluation");

openEval.addEventListener("click", () => {
  window.open("./Pages/evaluation.html", "_self");
});
const submitBtn = document.getElementById("submit");
const editBtn = document.getElementById("edit");
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var patientData = {
    firstName: document.querySelector('input[id="fname"]').value,
    lastName: document.querySelector('input[id="lname"]').value,
    middleName: document.querySelector('input[id="mname"]').value,
    age: document.querySelector('input[id="age"]').value,
    gender: document.querySelector('select[id="gender"]').value,
    medHistory: document.querySelector('textarea[id="med-history"]').value,
    cardiovascularDisease: document.querySelector('select[id="cardioCon"]')
      .value,
    otherHistory: document.querySelector('textarea[id="other-history"]').value,
    notes: document.querySelector('textarea[id="notes"]').value,
  };
  localStorage.setItem("patientData", JSON.stringify(patientData));

  // Disable all form fields
  var formElements = document.querySelectorAll("input, select, textarea");
  for (var i = 0; i < formElements.length; i++) {
    console.log("Form Disabled");
    formElements[i].disabled = true;
  }
});

editBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var formElements = document.querySelectorAll("input, select, textarea");
  for (var i = 0; i < formElements.length; i++) {
    console.log("Form Enabled");
    formElements[i].disabled = false;
  }
});

function loadPatientData() {
  var patientData = JSON.parse(localStorage.getItem("patientData"));
  var formElements = document.querySelectorAll("input, select, textarea");
  if (patientData) {
    document.querySelector('input[id="fname"]').value = patientData.firstName;
    document.querySelector('input[id="lname"]').value = patientData.lastName;
    document.querySelector('input[id="mname"]').value = patientData.middleName;
    document.querySelector('input[id="age"]').value = patientData.age;
    document.querySelector('select[id="gender"]').value = patientData.gender;
    document.querySelector('textarea[id="med-history"]').value =
      patientData.medHistory;
    document.querySelector('select[id="cardioCon"]').value =
      patientData.cardiovascularDisease;
    document.querySelector('textarea[id="other-history"]').value =
      patientData.otherHistory;
    document.querySelector('textarea[id="notes"]').value = patientData.notes;

    for (var i = 0; i < formElements.length; i++) {
      console.log("Form Enabled");
      formElements[i].disabled = true;
    }
  } else {
    for (var i = 0; i < formElements.length; i++) {
      console.log("Form Enabled");
      formElements[i].disabled = false;
    }
  }
}

// Call the function when the page loads
window.onload = loadPatientData;
