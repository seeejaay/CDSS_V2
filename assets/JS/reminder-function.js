const openPat = document.getElementById("_patientData");

openPat.addEventListener("click", () => {
  window.open("./patientdata.html", "_sefl");
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

const openEval = document.getElementById("_evaluation");

openEval.addEventListener("click", () => {
  window.open("./evaluation.html", "_self");
});

var appointmentDateElement = document.getElementById("appointment-date");
var appointmentTimeElement = document.getElementById("appointment-time");

appointmentDateElement.addEventListener("input", saveAppointment);
appointmentTimeElement.addEventListener("input", saveAppointment);

function saveAppointment() {
  var appointmentDate = appointmentDateElement.value;
  var appointmentTime = appointmentTimeElement.value;

  localStorage.setItem("appointment-date", appointmentDate);
  localStorage.setItem("appointment-time", appointmentTime);
}

var glucoseTimeElement = document.getElementById("glucose-time");

glucoseTimeElement.addEventListener("input", saveGlucoseTime);

function saveGlucoseTime() {
  var glucoseTime = glucoseTimeElement.value;
  localStorage.setItem("glucose-time", glucoseTime);
}

var lifesyleTimeElement = document.getElementById("lifestyle-time");

lifesyleTimeElement.addEventListener("input", saveLifestyleTime);

function saveLifestyleTime() {
  var lifestyleTime = lifesyleTimeElement.value;
  console.log(lifestyleTime);
  localStorage.setItem("lifestyle-time", lifestyleTime);
}
