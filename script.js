const hintForm = document.getElementById('hint-form');
const hintInput = document.getElementById('hint-input');

hintForm.addEventListener('submit', (e) => {
    google(e);
})

function google(e) {
    e.preventDefault();
    window.open(`https://www.google.com/search?q=Hint without solution: \n${hintInput.value}`);
    hintInput.value = '';
}

