const openAsses = document.getElementById("_assessment");

openAsses.addEventListener("click", () => {
  window.open("./assessment.html", "_self");
});

const openPat = document.getElementById("_patientData");

openPat.addEventListener("click", () => {
  window.open("./patientdata.html", "_self");
});

const openPlan = document.getElementById("_planning");
openPlan.addEventListener("click", () => {
  window.open("./planning.html", "_self");
});

const openEval = document.getElementById("_evaluation");

openEval.addEventListener("click", () => {
  window.open("./evaluation.html", "_self");
});

const openRem = document.getElementById("_reminder");

openRem.addEventListener("click", () => {
  window.open("./reminder.html", "_self");
});

var storedAnswers = localStorage.getItem("answers");
storedAnswers = JSON.parse(storedAnswers);
var keys;
var values;
var vitalSigns = {};
if (storedAnswers) {
  keys = Object.keys(storedAnswers);
  var removeKey = [
    "systolic",
    "diastolic",
    "pulse",
    "respiratory",
    "temp",
    "saturation",
  ];

  for (var i = 0; i < keys.length; i++) {
    if (removeKey.includes(keys[i])) {
      vitalSigns[keys[i]] = storedAnswers[keys[i]];

      delete storedAnswers[keys[i]];
    }
  }

  localStorage.setItem("vitalSigns", JSON.stringify(vitalSigns));
  localStorage.setItem("answers", JSON.stringify(storedAnswers));
} else {
  console.log("No answers found");
}

values = Object.values(storedAnswers);

if (
  values[0] == "type2D" &&
  values[1] == "option1" &&
  values[2] == "option3" &&
  values[3] == "option1" &&
  values[4] == "option1" &&
  values[5] == "option3" &&
  values[6] == "option1" &&
  values[7] == "option2" &&
  values[8] == "option2" &&
  values[9] == "option3" &&
  values[10] == "option2" &&
  values[11] == "option2" &&
  values[12] == "option2" &&
  values[13] == "option1" &&
  values[14] == "option1" &&
  Array.isArray(values[15]) &&
  values[15].includes("option1") &&
  values[15].includes("option2") &&
  values[15].includes("option3") &&
  Array.isArray(values[16]) &&
  values[16].includes("option1") &&
  values[16].includes("option2") &&
  values[16].includes("option3") &&
  Array.isArray(values[17]) &&
  values[17].includes("option1") &&
  values[17].includes("option2") &&
  values[18] == "option1" &&
  values[19] == "option1" &&
  values[20] == "option1" &&
  values[21] == "elevated" &&
  values[22] == "elevated" &&
  values[23] == "decreased" &&
  values[24] == "option3" &&
  values[25] == "option3" &&
  Array.isArray(values[26]) &&
  values[26].includes("option1") &&
  values[26].includes("option2") &&
  values[26].includes("option3") &&
  values[26].includes("option4") &&
  values[26].includes("option5") &&
  values[27] == "option5"
) {
  const suggestion = document.getElementById("_suggestion");

  suggestion.innerHTML = `<ol>
      <li class="txt-theme">Ineffective Glycemic Control related to medication non-adherence and lifestyle modifications.
        <p class="txt-theme">Short Term Goal</p>
        <ul>
          <li class="txt-theme">Develop tailored educational materials and reminders for medication adherence.</li>
        </ul>
        <p class=txt-theme>Long Term Goal</p>
        <ul>
        <li class=txt-theme> Establish sustainable systems for ongoing patient education and support.</li></ul>
      </li>
      <li class="txt-theme">Risk for Diabetic Complications related to prolonged hyperglycemia and poor disease management.
      <p class=txt-theme>Short Term Goal</p>
      <ul>
        <li class=txt-theme>Implement regular screening and monitoring for diabetes-related complications.
      </li>
      </ul>
      <p class=txt-theme>Long Term Goal</p>
      <ul>
        <li class=txt-theme>Institutionalize regular screening and monitoring protocols for diabetes-related complications.
        </li>
      </ul>
      </li>
      <li class="txt-theme">Deficient Knowledge related to diabetes self-management. 
        <p class=txt-theme>Short Term Goal</p>
        <ul>
        <li class=txt-theme> Initiate a structured diabetes education program tailored to patient learning needs.</li>
        </ul>
        <p class=txt-theme>Long Term Goal</p>
        <ul>
          <li class=txt-theme>Integrate diabetes education programs as a standard part of patient care, with continuous improvement based on feedback and outcomes.</li>
        </ul>
      </li>
    </ol>`;
  // Append the suggestionsDiv to the document body or any other desired element
}
