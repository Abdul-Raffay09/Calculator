const display = document.getElementById('display');

function appendNumber(num) {
  if (display.value === '0') {
    display.value = num;
  } else {
    display.value += num;
  }
}

function appendOperator(op) {
  const lastChar = display.value.slice(-1);
  if (!['+', '-', '*', '/'].includes(lastChar)) {
    display.value += op;
  }
}

function appendDot() {
  const parts = display.value.split(/[\+\-\*\/]/);
  const lastPart = parts[parts.length - 1];
  if (!lastPart.includes('.')) {
    display.value += '.';
  }
}

function clearDisplay() {
  display.value = '0';
}

function removeLast() {
  let current = display.value;
  if (current.length > 1) {
    display.value = current.slice(0, -1);
  } else {
    display.value = '0';
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}
