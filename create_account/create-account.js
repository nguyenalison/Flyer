
let createAccountForm = document.getElementById("create-account-form");

createAccountForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("email");
  let password = document.getElementById("pass");

  if(!validatePassword(password)){
    alert("Password must contain at least one uppercase letter, one special character, and one number");
    e.preventDefault()
  } else if (email.value === "" || password.value === "") {
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

function validatePassword(password){
  /*
    REGEX Explained:
      (?=.*[A-Z]) -> checks if there is at least on captial letter
      (?=.*[!@#$%^&*]) -> checks if there is at least one special character
      (?=.*[0-9]) -> checks if there is at least one number 
  */
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])$/;
  return passwordRegex.test(password);
}

