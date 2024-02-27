const random = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const colors = ['red','orange','yellow','green','blue','purple','pink'];

let randomColor;

function start() {
    generateNewChangingColor();
    document.querySelector('.randomColorButton').style.background = 'linear-gradient(to right, ' + colors[Math.floor((Math.random()*7))] + ', ' + colors[Math.floor((Math.random()*7))] + ')';
}

start();

function randomColorGenerator() {
    randomColor = '#';
    for (let i = 0; i < 6; i++) {
        randomColor += random[Math.floor((Math.random()*15))];
    }
    return randomColor;
}

function generateNewBackground() {
    randomColor = randomColorGenerator();
    document.body.style.backgroundColor = randomColor;
    document.querySelector('.randomColor').innerText = randomColor;
}

document.querySelector('.randomColorButton').addEventListener('click', () => generateNewBackground());

function generateNewChangingColor() {
    randomColor = randomColorGenerator();
    document.querySelector('.changingColor').style.color = randomColor;
}

setInterval(() => generateNewChangingColor(), 1000);

setInterval(() => document.querySelector('.randomColorButton').style.background = 'linear-gradient(to right, ' + colors[Math.floor((Math.random()*7))] + ', ' + colors[Math.floor((Math.random()*7))] + ')', 1000);
    
