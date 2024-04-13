const openPat = document.getElementById("_patientData");

openPat.addEventListener("click", () => {
  window.open("../index.html", "_sefl");
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
