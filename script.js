const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    window.open(`https://www.google.com/search?q=Hint without solution: \n${input.value}`);
    input.value = '';
})

