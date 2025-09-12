const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];

    if (email.value.trim() === '' || email.value == null) {
        messages.push('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        messages.push('Email is not valid');
    }

    if (password.value.trim() === '' || password.value == null) {
        messages.push('Password is required');
    } else if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters');
    } else if (password.value.length >= 20) {
        messages.push('Password must be less than 20 characters');
    } else if (password.value.toLowerCase() === 'password') {
        messages.push('Password cannot be "password"');
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    } else {
        errorElement.innerText = '';
        alert("Form submitted successfully!");
    }
    });
