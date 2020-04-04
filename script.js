window.addEventListener('load', generateElements());

// Generates all HTML document at once

function generateElements() {
  const container = document.createElement('div');
  container.className = 'container';
  document.body.appendChild(container);

  const keyboardWindow = document.createElement('textarea');
  keyboardWindow.className = 'keyboardWindow';
  container.appendChild(keyboardWindow);
}


// Class Button

class Button {
  constructor(buttonValue, buttonType) {
    this.buttonValue = buttonValue;
    this.buttonType = buttonType;
  }

  typeInInput() {
    return keyboardWindow.value = this.buttonValue;
  }
}
