const username = document.getElementById("username");
const userField = document.getElementById("fieldset1");
const usernameErorr = document.getElementById('username-error');
const userWrongIcon = document.getElementById("img2");
const userCorrectIcon = document.getElementById("img1");

const email = document.getElementById("email");
const emailField = document.getElementById("fieldset3");
const emailErorr = document.getElementById('email-error');
const emailWrongIcon = document.getElementById("img4");
const emailCorrectIcon = document.getElementById("img3");

const pass = document.getElementById("password");
const passField = document.getElementById("fieldset2");
const passErorr = document.getElementById('password-error');
const passWrongIcon = document.getElementById("img6");
const passCorrectIcon = document.getElementById("img5");

username.addEventListener('input', function () {
    if (username.value.trim() === '') {
        userField.className = 'wrong';
        userWrongIcon.className = "wrong-icon user-icon show-icon icon";
        userCorrectIcon.className = "correct-icon user-icon hide-icon icon";
        usernameErorr.innerHTML = "This field can't be empty";
    } else if (username.value.trim().length < 5) {
        userField.className = 'wrong';
        userCorrectIcon.className = "correct-icon user-icon hide-icon icon";
        userWrongIcon.className = "wrong-icon user-icon show-icon icon";
        usernameErorr.innerHTML = "Username can't be less than 5 char";
    }
    else {
        userField.className = 'correct';
        userWrongIcon.className = "wrong-icon user-icon hide-icon icon";
        userCorrectIcon.className = "correct-icon user-icon show-icon icon";
        usernameErorr.innerHTML = "";
    }
});

pass.addEventListener('input', function () {
    if (pass.value.trim() === '') {
        passField.className = 'wrong';
        passWrongIcon.className = "wrong-icon password-icon show-icon icon";
        passCorrectIcon.className = "correct-icon password-icon hide-icon icon";
        passErorr.innerHTML = "This field can't be empty";
    } else if (pass.value.trim().length < 6) {
        passField.className = 'wrong';
        passCorrectIcon.className = "correct-icon password-icon hide-icon icon";
        passWrongIcon.className = "wrong-icon password-icon show-icon icon";
        passErorr.innerHTML = "Password can't be less than 6 char";
    }
    else {
        passField.className = 'correct';
        passWrongIcon.className = "wrong-icon password-icon hide-icon icon";
        passCorrectIcon.className = "correct-icon password-icon show-icon icon";
        passErorr.innerHTML = "";
    }
});

email.addEventListener('input', function () {
    if (email.value.trim() === '') {
        emailField.className = 'wrong';
        emailCorrectIcon.className = "correct-icon email-icon hide-icon icon";
        emailWrongIcon.className = "wrong-icon email-icon show-icon icon";
        emailErorr.innerHTML = "This field can't be empty";
    } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value.trim())) {
        emailField.className = 'correct';
        emailCorrectIcon.className = "wrong-icon email-icon show-icon icon";
        emailWrongIcon.className = "correct-icon email-icon hide-icon icon";
        emailErorr.innerHTML = "";
    }
    else {
        emailField.className = 'wrong';
        emailCorrectIcon.className = "correct-icon email-icon hide-icon icon";
        emailWrongIcon.className = "wrong-icon email-icon show-icon icon";
        emailErorr.innerHTML = "Invalid email address";
    }
});

