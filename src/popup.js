const message = document.querySelector('#message');
const button = document.querySelector('#change-message');

button.addEventListener('click', () => {
    message.innerText = 'Hello, World!';

    alert('Hello, World!');
});