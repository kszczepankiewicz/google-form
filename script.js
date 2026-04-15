// // const hintForm = document.getElementById('hint-form');
// const hintInput = document.getElementById('hint-input');
// const hintLabel = document.getElementById('hint-label');

// const safeForm = document.getElementById('safe-form');
// const safeInput = document.getElementById('safe-input');
// const safeLabel = document.getElementById('safe-label');

const history = document.getElementById('history');

const googleUrl = `https://www.google.com/search?q=`;

const addToHistory = (prompt, question) => {
    const li = document.createElement('li');
    li.textContent = `${prompt} ${question}`;
    history.append(li);
}

function google(url, question, prompt, e) {
    e.preventDefault();
    try {
        window.open(`${url}${prompt} \n${question}`);
    } catch (error) {
        alert('Not open');
    }
    addToHistory(prompt, question);
    // hintInput.value = ''; // not working
}
// const copyInput = inputText => { }

// const labels = [hintLabel, safeLabel];
// const inputs = [hintInput, safeInput];

class Section {
    constructor(name) {
        this.form = document.getElementById(`${name}-form`);
        this.input = document.getElementById(`${name}-input`);
        this.label = document.getElementById(`${name}-label`);
    }
}


const hintObj = new Section('hint');
const safeObj = new Section('safe');
[hintObj, safeObj].forEach(obj => obj.form.addEventListener('submit', (e) => google(googleUrl, obj.input.value, obj.label.textContent, e)));
