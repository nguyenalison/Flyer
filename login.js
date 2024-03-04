let createAccountForm = document.getElementById("create-account-form");

createAccountForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("email");
  let password = document.getElementById("pass");

  if (email.value == "" || password.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${email.value} and password of ${password.value}`
    );

    email.value = "";
    password.value = "";
  }
});
