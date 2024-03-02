let choice = document.querySelector('.DiceNumber');
let resultText = document.querySelector('.output');
let resultImg = document.querySelector('.photos');
let result;

document.querySelector('.Roll').addEventListener('click', () => {
  result = [];
  resultImg.innerHTML = '';
  const value = choice.value;
  let random;
  if (value < 1 || value > 10) {
    alert('Wrong amount of rolls.\nPlease put another number in range from 1 to 10.');
    resultText.textContent = 'dice:';
    resultImg.innerHTML = '';
  } 
  else {
    for (let i = 0; i < value; i++) {
      random = Math.round(Math.random() * 5 + 1);
      result.push(random);
      resultImg.innerHTML += `<img src=./photos/Dice-${random}.png>`;
    }
    resultText.textContent = `dice: ${result}`;
  }
  choice.value = '';
});
