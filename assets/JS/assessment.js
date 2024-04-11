const openPat = document.getElementById("_patientData");

openPat.addEventListener("click", () => {
  window.open("../index.html", "_self");
});

const openDiag = document.getElementById("_diagnosis");
openDiag.addEventListener("click", () => {
  window.open("./diagnosis.html", "_self");
});
// Select the form and the edit button
const form = document.querySelector("form");
const editButton = document.querySelector("#_edit");
const submit = document.querySelector("#_submit");
// Attach an event listener to the submit event of the form
// Attach an event listener to the click event of the submit button
submit.addEventListener("click", function (event) {
  // Prevent the form from being submitted to the server
  event.preventDefault();

  // Select all input elements
  var inputElements = form.querySelectorAll("input, select");

  // Initialize an empty object to store the answers
  var answers = {};

  // Iterate over the input elements
  inputElements.forEach(function (input) {
    // If the input is checked and is a checkbox and its name already exists in the answers object,
    // append the value to the existing array. Otherwise, create a new array with the value.
    if (input.tagName === "SELECT") {
      answers[input.name] = input.value;
    }
    if (input.checked && input.type === "checkbox") {
      if (answers[input.name]) {
        answers[input.name].push(input.value);
      } else {
        answers[input.name] = [input.value];
      }
    } else if (input.checked || input.type === "number") {
      // For checked radio buttons or number inputs, just store the value
      answers[input.name] = input.value;
    }

    // Disable the input element
    input.disabled = true;
  });

  // Save the answers to local storage
  localStorage.setItem("answers", JSON.stringify(answers));
});

// Attach an event listener to the click event of the edit button
editButton.addEventListener("click", function (event) {
  event.preventDefault();
  // Get the answers from local storage
  var answers = JSON.parse(localStorage.getItem("answers"));

  // Select all input elements
  var inputElements = form.querySelectorAll("input, select");

  // Enable all input elements and set their values according to the saved answers
  inputElements.forEach(function (input) {
    // Check the checkbox or radio button if its value is in the saved answers
    if (input.type === "checkbox") {
      if (answers[input.name] && answers[input.name].includes(input.value)) {
        input.checked = true;
      }
    } else if (input.type === "radio") {
      if (answers[input.name] === input.value) {
        input.checked = true;
      }
    } else if (input.type === "number") {
      if (answers[input.name]) {
        input.value = answers[input.name];
      }
    } else if (input.tagName === "SELECT") {
      if (answers[input.name]) {
        input.value = answers[input.name];
      }
    }

    // Enable the input element
    input.disabled = false;
  });
});
// Function to load saved answers and apply them to the form
// Function to load saved answers and apply them to the form
function loadSavedAnswers() {
  // Get the answers from local storage
  var answers = JSON.parse(localStorage.getItem("answers"));

  // Select all input and select elements
  var inputElements = form.querySelectorAll("input, select");

  // If there are no saved answers, enable all input elements
  if (!answers) {
    inputElements.forEach(function (input) {
      input.disabled = false;
    });
    return;
  } else {
    inputElements.forEach(function (input) {
      input.disabled = true;
    });
  }

  // Set the values of the input elements according to the saved answers
  inputElements.forEach(function (input) {
    // Check the checkbox or radio button if its value is in the saved answers
    if (input.type === "checkbox") {
      if (answers[input.name] && answers[input.name].includes(input.value)) {
        input.checked = true;
      }
    } else if (input.type === "radio") {
      if (answers[input.name] === input.value) {
        input.checked = true;
      }
    } else if (input.type === "number" || input.tagName === "SELECT") {
      if (answers[input.name]) {
        input.value = answers[input.name];
      }
    }
  });
}

// Select the systolic and diastolic input fields
const systolicInput = document.querySelector("#_systolic");
const diastolicInput = document.querySelector("#_diastolic");
const pulse = document.querySelector("#_pulse");
const respRate = document.querySelector("#_respRate");
const temp = document.querySelector("#_temp");
const oxygenSat = document.querySelector("#_oxygenSat");
// Function to check the values and change the color
async function checkValues() {
  // Get the values of the input fields
  const systolicValue = systolicInput.value
    ? parseInt(systolicInput.value)
    : null;
  const diastolicValue = diastolicInput.value
    ? parseInt(diastolicInput.value)
    : null;
  const pulseValue = pulse.value ? parseInt(pulse.value) : null;
  const respRateValue = respRate.value ? parseInt(respRate.value) : null;
  const tempValue = temp.value ? parseFloat(temp.value) : null;
  const oxygenSatValue = oxygenSat.value ? parseInt(oxygenSat.value) : null;

  // If the input field is empty, return early
  if (
    systolicValue === null ||
    diastolicValue === null ||
    pulseValue === null ||
    respRateValue === null ||
    tempValue === null ||
    oxygenSatValue === null
  ) {
    return;
  }

  // If the systolic value is between 120 and 129 and the diastolic value is below 80,
  // change the color to yellow. Otherwise, change it back to the default color.
  if (systolicValue <= 120 && diastolicValue <= 80) {
    systolicInput.style.background = "#2b803c";
    diastolicInput.style.background = "#2b803c";
    systolicInput.style.color = "#ffffff";
    diastolicInput.style.color = "#ffffff";
  } else if (
    systolicValue >= 120 &&
    systolicValue <= 129 &&
    diastolicValue <= 80
  ) {
    systolicInput.style.background = "#bab81e";
    diastolicInput.style.background = "#bab81e";
    systolicInput.style.color = "#ffffff";
    diastolicInput.style.color = "#ffffff";
  } else if (
    (systolicValue >= 130 && systolicValue <= 139) ||
    (diastolicValue >= 80 && diastolicValue <= 89)
  ) {
    systolicInput.style.background = "#dea01b";
    diastolicInput.style.background = "#dea01b";
    systolicInput.style.color = "#ffffff";
    diastolicInput.style.color = "#ffffff";
  } else if (
    (systolicValue >= 140 && systolicValue <= 179) ||
    (diastolicValue >= 90 && diastolicValue <= 119)
  ) {
    systolicInput.style.background = "#ff6600";
    diastolicInput.style.background = "#ff6600";
    systolicInput.style.color = "#ffffff";
    diastolicInput.style.color = "#ffffff";
  } else {
    systolicInput.style.background = "#ff0000";
    diastolicInput.style.background = "#ff0000";
    systolicInput.style.color = "#ffffff";
    diastolicInput.style.color = "#ffffff";
  }

  if (pulseValue < 60 || pulseValue > 100) {
    pulse.style.background = "#ff0000";
    pulse.style.color = "#ffffff";
  } else {
    pulse.style.background = "#2b803c";
    pulse.style.color = "#ffffff";
  }

  if (respRateValue < 12 || respRateValue > 18) {
    respRate.style.background = "#ff0000";
    respRate.style.color = "#ffffff";
  } else {
    respRate.style.background = "#2b803c";
    respRate.style.color = "#ffffff";
  }

  if (tempValue < 36.5 || tempValue > 37.3) {
    temp.style.background = "#ff0000";
    temp.style.color = "#ffffff";
  } else {
    temp.style.background = "#2b803c";
    temp.style.color = "#ffffff";
  }

  if (oxygenSatValue < 90 || oxygenSatValue > 100) {
    oxygenSat.style.background = "#ff0000";
    oxygenSat.style.color = "#ffffff";
  } else {
    oxygenSat.style.background = "#2b803c";
    oxygenSat.style.color = "#ffffff";
  }
}
// Attach the function to the input event of the input fields
systolicInput.addEventListener("input", checkValues);
diastolicInput.addEventListener("input", checkValues);
pulse.addEventListener("input", checkValues);
respRate.addEventListener("input", checkValues);
temp.addEventListener("input", checkValues);
oxygenSat.addEventListener("input", checkValues);
// Run the function when the page loads
window.onload = function () {
  loadSavedAnswers();
  checkValues();
};
