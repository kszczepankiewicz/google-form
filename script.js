const history = document.getElementById('history');

const googleUrl = `https://www.google.com/search?q=`;


function google(url, question, prompt, e) {
    debugger
    e.preventDefault();
    try {
        window.open(`${url}${prompt}${question}`);
    } catch (error) {
        alert('Not open');
    }
    addToHistory(prompt, question);
    // hintInput.value = ''; // not working
}

class Section {
    constructor(name) {
        this.form = document.getElementById(`${name}-form`);
        this.input = document.getElementById(`${name}-input`);
        this.label = document.getElementById(`${name}-label`);
    }

    // google(url, e) {
    //     e.preventDefault();
    //     try {
    //         window.open(`${url}${this.label.textContent}${this.input.value}`);
    //     } catch (error) {
    //         alert('Not open');
    //     }
    // }

    // addToHistory() {

}



const addToHistory = (prompt, question) => {
    const li = document.createElement('li');
    li.textContent = `${prompt} ${question}`;
    history.append(li);
}


const hintObj = new Section('hint');
const safeObj = new Section('safe');
const generalObj = new Section('general');

// hintObj.form.addEventListener('submit', (e) => { debugger; hintObj.google(googleUrl, e) });
[hintObj, safeObj, generalObj].forEach(obj => obj.form.addEventListener('submit', (e) => google(googleUrl, obj.input.value, obj.label.textContent, e)));
