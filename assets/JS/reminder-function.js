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
