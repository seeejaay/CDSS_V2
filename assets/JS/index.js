function validateCredentials() {
  const username = "g1s6ADMIN";
  const password = "FEUihsn2024";

  const usernameInput = document.getElementById("_username");
  const passwordInput = document.getElementById("_password");
  const loginBtn = document.getElementById("_login");
  const warningMsg = document.getElementById("_warning");

  loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (username === usernameInput.value && password === passwordInput.value) {
      window.location.href = "./Pages/patientdata.html";
    } else {
      warningMsg.style.visibility = "visible";
      usernameInput.style.border = "1px solid red";
      passwordInput.style.border = "1px solid red";
    }
  });
}

validateCredentials();
