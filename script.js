const hintForm = document.getElementById('hint-form');
const safeForm = document.getElementById('safe-form');

const hintInput = document.getElementById('hint-input');
const history = document.getElementById('history');

const hintLabel = document.getElementById('hint-label');
const safeLabel = document.getElementById('safe-label');

const googleUrl = `https://www.google.com/search?q=`;

const addToHistory = (prompt, question) => {
    const li = document.createElement('li');
    li.textContent = `${prompt} ${question}`;
    history.append(li);
}

function google(url, prompt, question, e) {
    e.preventDefault();
    // const question = hintInput.value;
    try {
        window.open(`${url}${prompt} \n${question}`);
    } catch (error) {
        alert('Not open');
    }
    addToHistory(prompt, question);
    hintInput.value = '';
}

const labels = [hintLabel, safeLabel]

// [hintForm, safeForm].forEach((el, index) => el.addEventListener('submit', (e) => {
//     e.preventDefault();
//     google(googleUrl, labels[index].textContent);
// }));

hintForm.addEventListener('submit', (e) => {
    google(googleUrl, hintInput.value, hintLabel.textContent, e);
});