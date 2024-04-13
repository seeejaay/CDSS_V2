// Function to check the appointment time
function checkAppointmentTime() {
  var currentTime = new Date();
  currentTime.setSeconds(0, 0); // Ignore seconds and milliseconds

  // Get the appointment date and time from the local storage
  var storedAppointmentDate = localStorage.getItem("appointment-date");
  var storedAppointmentTime = localStorage.getItem("appointment-time");

  if (storedAppointmentDate && storedAppointmentTime) {
    alert(
      "Reminder: Your follow-up appointment for diabetes management is scheduled for " +
        storedAppointmentDate +
        " at " +
        storedAppointmentTime +
        ". Please ensure you attend as scheduled."
    );
  }
}

// Add event listener to execute the checkAppointmentTime function on page load
window.addEventListener("load", checkAppointmentTime);

// Function to check the glucose time
function checkGlucoseTime() {
  var glucose = localStorage.getItem("glucose-time");
  var currentTime = new Date();
  currentTime.setSeconds(0, 0); // Ignore seconds and milliseconds

  // Format the time string to a valid date format
  var glucoseTime = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate(),
    parseInt(glucose.split(":")[0]),
    parseInt(glucose.split(":")[1])
  );
  console.log(currentTime.getTime(), glucoseTime.getTime());
  if (glucoseTime.getTime() === currentTime.getTime()) {
    console.log("FIRE");
    alert(
      "Your glucose level is high. Please take your medication and consult your doctor."
    );
  } else {
    console.log("NO FIRE");
  }
}

// Add event listener to execute the checkGlucoseTime function every minute
setInterval(() => {
  checkGlucoseTime();
}, 60000);

// Add event listener to execute the checkAppointmentTime function on page load
window.addEventListener("load", checkAppointmentTime);
