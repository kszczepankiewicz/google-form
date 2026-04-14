const hintForm = document.getElementById('hint-form');
const hintInput = document.getElementById('hint-input');
const history = document.getElementById('history');
const hintLabel = document.getElementById('hint-label');

const googleUrl = `https://www.google.com/search?q=`;

const addToHistory = (prompt, question) => {
    const li = document.createElement('li');
    li.textContent = `${prompt} ${question}`;
    history.append(li);
}

function google(e, url, prompt) {
    e.preventDefault();
    const question = hintInput.value;
    window.open(`${url}${prompt} \n${question}`);
    addToHistory(prompt, question);
    hintInput.value = '';
}

[hintForm].forEach(el => el.addEventListener('submit', (e) => {
    google(e, googleUrl, hintLabel.textContent);
}));

