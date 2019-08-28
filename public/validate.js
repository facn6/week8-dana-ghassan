var email = document.getElementById("email");
var error = document.querySelector(".error");


form.addEventListener("click", function(event) {
    console.log("we r in index.js");
    
    if (email.validity.typeMismatch) {
        error.innerText = "Please enter a valid email address";
        event.preventDefault();
      }
    
      if (email.validity.valueMissing) {
        error.innerText = "Please enter an email address";
        event.preventDefault();
      }
    });

