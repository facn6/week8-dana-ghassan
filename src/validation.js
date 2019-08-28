var email = document.getElementsByName("email");

document.addEventListener("click", ValidateEmail(email => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        continue;
    }
    else alert("You have entered an invalid email address!")
}));