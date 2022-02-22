const form = document.querySelector('#form');
const message = document.querySelector('#message');
const password = document.querySelector('#password1');
const password2 = document.querySelector('#password2');

let passwordMatch = false;
let isValid = false;

function validateForm() {
    isValid = form.checkValidity();

    if (!isValid) {
        message.textContent = 'Please fill out all fields';
        message.style.color = 'red';
    } else {
        if (password.value === password2.value) {
            passwordMatch = true;
            password.style.borderColor = 'green';
            password2.style.borderColor = 'green';
        } else {
            passwordMatch = false;
            message.textContent = 'Make sure passwords match.';
            message.style.color = 'red';

            password.style.borderColor = 'red';
            password2.style.borderColor = 'red';
            return;
        }
        if (isValid && passwordMatch) {
            message.textContent = 'Successfully Registered';
            message.style.color = 'green';
        }
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();

    if (isValid && passwordMatch) {
        const user = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            website: form.website.value,
            password: form.password.value
        }

        console.log(user);
    }
});