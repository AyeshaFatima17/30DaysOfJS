const toggleButton = document.getElementById('toggle-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
        body.style.backgroundColor = '#333';
        body.style.color = '#fff';
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
        body.style.backgroundColor = '#fff';
        body.style.color = '#000';
    }
});