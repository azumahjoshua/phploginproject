/* Toggle Menu */
const hamburger = document.querySelector("#togglenava");
// console.log(hamburger.classList)
const navMenu = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
	// console.log(navMenu.classList.contains('nav-links'))
	navMenu.classList.toggle("responsive");
});

/* Toggle Menu  Ends */

/* Form Validation */
const form = document.getElementById("form-registeration");
// console.log(form)
const username = document.getElementById("username");
const password = document.getElementById("password");
const passwordrepeat = document.getElementById("repeat-password");
const title = document.getElementById("title");
// const gender  = document.querySelector('dropdown')
const lastname = document.getElementById("lastname");
const firstname = document.getElementById("firstname");
// const address1 = document.getElementById('address1')
// const address2 = document.getElementById('address2')
const post_code = document.getElementById("post-code");
// const description = document.getElementById('description')
const email = document.getElementById("email");
const telephone = document.getElementById("phone");
const sub = document.getElementById("submit-form");
// const profile_url = document.getElementById('profile_url')
//
form.addEventListener("submit", (event) => {
	// event.preventDefault();
	validateInputs();
});

function validateInputs() {
	// validate username
	// username.value.trim();
	// console.log(usernameValue.split(' '))
	if (username.value.trim() === "") {
		errorMessage(username, "Username cannot be blank");
	} else {
		successMessage(username);
	}

	// validate password
	if (password.value === "") {
		errorMessage(password, "Password cannot be blank");
	} else {
		successMessage(password);
	}
	if (passwordrepeat.value === "") {
		errorMessage(passwordrepeat, "Password cannot be blank");
	} else if (password.value !== passwordrepeat.value) {
		errorMessage(passwordrepeat, "Passwords does not match");
	} else {
		successMessage(passwordrepeat);
	}

	// Validate First name
	if (firstname.value.trim() === "") {
		errorMessage(firstname, "First name cannot be blank");
	} else {
		successMessage(firstname);
	}

	// Validate Last name
	if (lastname.value.trim() === "") {
		errorMessage(lastname, "First name cannot be blank");
	} else {
		successMessage(lastname);
	}
	// Validate Title
	if (!isNaN(title.value.trim())) {
		errorMessage(title, "Title should not be a number");
	} else if (title.value.length <= 0) {
		errorMessage(title, "Title should not be  blank");
	} else {
		successMessage(title);
	}
	// Validate Email
	if (email.value.trim() === "") {
		errorMessage(email, "Email can not be blank");
	} else if (!emailTest(email.value.trim())) {
		errorMessage(email, "Not a valid email");
	} else {
		successMessage(email);
	}
	// Validate Postal Code
	if (isUSAZipCode(post_code.value)) {
		successMessage(post_code);
	} else {
		errorMessage(post_code, "Postal Code can not be be black");
	}
}
/* Error Message */
function errorMessage(input, message) {
	const formControl = input.parentElement;
	// console.log(formControl)
	const small = formControl.querySelector("small");
	formControl.className = "form-group  error";
	small.innerText = message;
}
/* Success Message */
function successMessage(input) {
	const formControl = input.parentElement;
	formControl.className = "form-group success";
}

/* Validate Email Using Rejex*/
function emailTest(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}
/* Form Validation Ends */

/* Postal Code Validation 
This function uses a regular expression that checks for 5 digits 
( \d{5} ) followed by optional hyphen and four digits( (-\d{4})? ).
Ref
https://www.javascript-coder.com/form-validation/javascript-zip-code-validation/
*/
function isUSAZipCode(str) {
	return /^\d{5}(-\d{4})?$/.test(str);
}

function phonenumber(inputtxt) {
	/*
  +XX-XXX-XXX-XXX
  +XX.XXX.XXX-XXX
  +XX XXX XXX XXX
  */
	let phoneno =
		/^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
	if (inputtxt.value.match(phoneno)) {
		return true;
	}
	return false;
}
