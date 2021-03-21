const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const weak = document.querySelector(".Weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const indicator = document.querySelector(".indicator");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showBtn");
form.addEventListener('submit', e => {
	e.preventDefault();

});
function checkInputsUser() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	if(usernameValue === "") {
		setErrorFor(username, 'Username cannot be blank');
	}else if(usernameValue.length<=15){
	    setErrorFor(username, 'Username Length must be grater than or equal 10 characters');
	}else if((/^[a-zA-Z]+$/.test(usernameValue))){
		setSuccessFor(username);
	}else if((!((/^[a-zA-Z]+$/.test(usernameValue))))&&(usernameValue.replace(/\s/g,""))){
        setErrorFor(username, 'Username is valid ');
    }
}
function checkInputsEmail(){
    const emailValue = email.value.trim();
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
}
function checkInputsPassword(){	
    const passwordValue = password.value.trim();
    let regExpWeak = /[a-z]/;
    let regExpMedium = /\d+/;
    let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,(,)]/;    
	
    if(passwordValue !== ""){
        indicator.style.display = "block";
        if(passwordValue.length >=3 && (passwordValue.match(regExpWeak)))no=1;
        if(passwordValue.length >=6 && ((passwordValue.match(regExpWeak)) && (passwordValue.match(regExpMedium))))no=2;
        if(passwordValue.length >=6 && (passwordValue.match(regExpWeak)) && (passwordValue.match(regExpMedium)) && (passwordValue.match(regExpStrong)))no=3;
        if(no==1){
            weak.classList.add("active");
            text.style.display = "block";
            text.textContent = "your password is too week";
            text.classList.add("Weak");
            medium.style.display = "none";
            text.classList.remove("medium");
        }
        else if(no==2){
            medium.style.display = "block";
            medium.classList.add("active");
            text.textContent = "your password is medium ";
            text.classList.add("medium");
            strong.style.display = "none";
            text.classList.remove("strong");
        }
        else if(no==3){
            strong.style.display = "block";
            strong.classList.add("active");
            text.textContent = "your password is strong ";
            text.classList.add("strong");
            setSuccessFor(password);
        }
        showBtn.style.display = "block";
        showBtn.onclick = function(){
            if(password.type === "password"){
                password.type = "text";
                showBtn.textContent = "HIDE";
            }else{
                password.type = "password";
                showBtn.textContent = "SHOW";
            }
        }
    }else{
       indicator.style.display = "none";
       text.style.display = "none";
       showBtn.style.display = "none";
       setErrorFor(password,"");
    }
}
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
    
	
}
function configure(){
    const usernameValueNew = username.value.trim();
    const emailValueNew = email.value.trim();
    const passwordValueNew = password.value.trim();
    let regExpWeak = /[a-z]/;
    let regExpMedium = /\d+/;
    let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,(,)]/; 
    if(((usernameValueNew.length>=16)&&(/^[a-zA-Z]+$/.test(usernameValueNew)))&&(isEmail(emailValueNew))&&(passwordValueNew.length >=6 && (passwordValueNew.match(regExpWeak)) && (passwordValueNew.match(regExpMedium)) && (passwordValueNew.match(regExpStrong)))){
        alert('Welcome to web Quize \"'+usernameValueNew+"\".");
    }
    else{
        indicator.style.display = "none";
        text.style.display = "none";
        showBtn.style.display = "none";
        setErrorFor(password,"");
    }
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


