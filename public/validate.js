var form = document.getElementsByTagName("form")[0];
let email = document.getElementById("email");
let error = document.querySelector(".error");
let phone_number = document.getElementById("phone_number");
let patt = new RegExp('\d*');
form.addEventListener("submit", function(event) {
    
    if (email.validity.typeMismatch) {
        error.innerText = "Please enter a valid email address";
        event.preventDefault();
    }
    if(!patt.test(phone_number))
    {
        error.innerText = "Please enter a valid phone number";
        error.style.color = "red";
        event.preventDefault();
    }
    });

