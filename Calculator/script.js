const display = document.querySelector('.display');

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

document.body.addEventListener('keydown', (event) => {
  const key = event.key;
  if (!isNaN(parseInt(key)) || key === '.') {
    appendToDisplay(key);
  } else if (['+', '-', '*', '/'].includes(key)) {
    appendToDisplay(key);
  } else if (key === '=' || key === 'Enter') {
    calculate();
  } else if (key === 'C' || key === 'c') {
    clearDisplay();
  }
});
