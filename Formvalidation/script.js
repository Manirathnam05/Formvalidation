// regular expression used:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/-email;
// !/^\d{10}$/.test(phoneValue);
const username = document.querySelector("#username");
const password = document.querySelector("#userpassword");
const email = document.querySelector("#UserEmail");
const phone = document.querySelector("#UserPhone");
const message = document.querySelector("#Your-message");
const submitError = document.querySelector("#submit-error");

const nameError = document.querySelector("#name-error");
const passwordError = document.querySelector("#password-error");
const emailError = document.querySelector("#email-error");
const phoneError = document.querySelector("#phone-error");
const messageError = document.querySelector("#message-error");

// Validate Name
function ValidateName() {
    const nameValue = username.value.trim();
    if (nameValue.length === 0) {
        nameError.textContent = "Name is required";
        return false;
    }
 
    nameError.textContent = "Valid";
    return true;
}

// Validate Password
function ValidatePassword() {
    const passwordValue = password.value.trim();
    if (passwordValue.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        return false;
    }
    passwordError.textContent = "Valid";
    return true;
}

// Validate Email
function ValidateEmail() {
    const emailValue = email.value.trim();
    if (emailValue.length === 0) {
        emailError.textContent = "Email is required";
        return false;
    }
    if (!emailValue.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        emailError.textContent = "Enter a valid email";
        return false;
    }
    emailError.textContent = "Valid";
    return true;
}

// Validate Phone
function ValidatePhone() {
    const phoneValue = phone.value.trim();
    if (phoneValue.length === 0) {
        phoneError.textContent = "Phone number is required";
        return false;
    }
    if (phoneValue.length !== 10 || !/^\d{10}$/.test(phoneValue)) {
        phoneError.textContent = "Phone number must be 10 digits";
        return false;
    }
    phoneError.textContent = "Valid";
    return true;
}

// Validate Message
function ValidateMessage() {
    const messageValue = message.value.trim();
    if (messageValue.length < 10) {
        messageError.textContent = "Message must be at least 10 characters";
        return false;
    }
    messageError.textContent = "Valid";
    return true;
}

// Validate Entire Form
function ValidateForm() {
    const isNameValid = ValidateName();
    const isPasswordValid = ValidatePassword();
    const isEmailValid = ValidateEmail();
    const isPhoneValid = ValidatePhone();
    const isMessageValid = ValidateMessage();

    if (isNameValid && isPasswordValid && isEmailValid && isPhoneValid && isMessageValid) {
        submitError.textContent = "Form submitted successfully!";
        submitError.style.color = "green";
    } else {
        submitError.textContent = "Please fix errors before submitting.";
        submitError.style.color = "red";
    }
}
