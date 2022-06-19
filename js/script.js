const inputValues = [...document.getElementById("news-form").elements];
inputValues.pop();
const usernameRegex = [/(?=^[\w]{1,}$)/];
const passRegex = [
  /(?=^.{8,}$)/,
  /(?=.*[A-Z])/,
  /(?=.*[a-z])/,
  /(?=.*\d)/,
  /(?=.*[\W_])/,
];

let marker;
let usernameMarker;
let emailMarker;
let passMarkerOne;
let passMarkerTwo;
let passMarkerThree;
let passMarkerFour;
let passMarkerFive;

const passShower = document.getElementById("passwordShower");
const password = document.getElementById("new-password");

passShower.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

inputValues.map((input) => {
  const indicator = document.querySelector(`.indicator-${input.id}`);
  input.addEventListener("blur", () => {
    if (!input.validity.valid && (input.value != "" || input.value != null)) {
      marker = "&#9746;";
      if (input.id == "username") {
        indicator.innerHTML = `${marker} Your username can only contain letters, numbers, and/or underscores _ (example: user_22)`;
      }
    }
    if (input.validity.valid) {
      if (
        input.id == "email" ||
        (input.id == "username" && input.value != "")
      ) {
        marker = "&#9745;";
        indicator.innerHTML = `${marker} Field completed`;
      }
    }
    if (input.value == "" || input.value == null) {
      marker = "&#9746;";
      if (input.id == "email" || input.id == "new-password") {
        indicator.innerHTML = `${marker} Please fill out this field`;
      }
      if (input.id == "username") {
        indicator.innerHTML = ``;
      }
    }
  });
  input.addEventListener("focus", () => {
    if (input.value == "") {
      if (input.id == "username") {
        indicator.innerHTML = `Your username can only contain letters, numbers, and/or underscores _ (example: user_22)`;
      }
      if (input.id == "email" && !input.validity.valid) {
        if (input.value == "") {
          indicator.innerHTML = `Your email must include a local-part, the at sign @, and a domain (example: simple@email.com)`;
        }
      }
      if (input.id == "new-password") {
        passMarkerOne = "&#9746;";
        passMarkerTwo = "&#9746;";
        passMarkerThree = "&#9746;";
        passMarkerFour = "&#9746;";
        passMarkerFive = "&#9746;";
        indicator.innerHTML = `Your password must be at least 8 characters long, and contain numbers, 
        upper- and lowercase letters, and special characters (example: Super$ecret1)<br>${passMarkerOne} 8 characters
        <br>${passMarkerTwo} Uppercase<br>${passMarkerThree} Lowercase<br>${passMarkerFour} Number<br>${passMarkerFive} Special character`;
      }
    }
  });
  input.addEventListener("keyup", (e) => {
    if (input.id == "username") {
      if (!usernameRegex[0].test(input.value)) {
        if (input.value == "") {
          indicator.innerHTML = `Your username can only contain letters, numbers, and/or underscores _ (example: user_22)`;
        } else {
          usernameMarker = "&#9746;";
          indicator.innerHTML = `${usernameMarker} Your username can only contain letters, numbers, and/or underscores _ (example: user_22)`;
        }
      } else {
        usernameMarker = "&#9745;";
        indicator.innerHTML = `${usernameMarker} Field completed`;
      }
    }
    if (input.id == "email") {
      if (input.validity.valid) {
        emailMarker = "&#9745;";
        indicator.innerHTML = `${emailMarker} Field completed`;
      } else {
        emailMarker = "&#9746;";
        indicator.innerHTML = `${emailMarker} Invalid format. Please click on the Create Account button to get help`;
        if (input.value == "") {
          indicator.innerHTML = `Your email must include a local-part, the at sign @, and a domain (example: simple@email.com)`;
        }
      }
    }
    if (input.id == "new-password") {
      if (passRegex[0].test(input.value)) {
        passMarkerOne = "&#9745;";
      } else {
        passMarkerOne = "&#9746;";
      }
      if (passRegex[1].test(input.value)) {
        passMarkerTwo = "&#9745;";
      } else {
        passMarkerTwo = "&#9746;";
      }
      if (passRegex[2].test(input.value)) {
        passMarkerThree = "&#9745;";
      } else {
        passMarkerThree = "&#9746;";
      }
      if (passRegex[3].test(input.value)) {
        passMarkerFour = "&#9745;";
      } else {
        passMarkerFour = "&#9746;";
      }
      if (passRegex[4].test(input.value)) {
        passMarkerFive = "&#9745;";
      } else {
        passMarkerFive = "&#9746;";
      }
      indicator.innerHTML = `Your password must be at least 8 characters long, and contain numbers, 
        upper- and lowercase letters, and special characters (example: Super$ecret1)<br>${passMarkerOne} 8 characters
        <br>${passMarkerTwo} Uppercase<br>${passMarkerThree} Lowercase<br>${passMarkerFour} Number<br>${passMarkerFive} Special character`;
      if (passRegex.filter((regex) => regex.test(input.value)).length == 5) {
        passMarkerOne = "&#9745;";
        indicator.innerHTML = `${passMarkerOne} Field completed`;
      }
    }
  });
});
