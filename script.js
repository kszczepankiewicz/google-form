const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = `https://www.google.com/search?`;
    const text = `Hint without solution: \n`;
    const query = `${url}q=${text}${input.value}`;
    window.open(query)
})

