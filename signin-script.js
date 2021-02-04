const form1 = document.getElementById('form1');
const username1 = document.getElementById('username1');
const password1 = document.getElementById('password1');

form1.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue1 = username1.value.trim();
	const passwordValue1 = password1.value.trim();

	if(usernameValue1 === '') {
		setErrorFor(username1, 'Username cannot be blank');
	} 
	else {
	    setSuccessFor(username1);
	}
	if(passwordValue1 === '') {
		setErrorFor(password1, 'Password cannot be blank');
	} 
	else {
	    setSuccessFor(password1);
	}
}
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
    
	
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	