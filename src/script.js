
const ruKeysUnshifted = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Delete', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', '↑', 'Control', 'Meta', 'Alt', ' ', '←', '↓', '→'];
const ruKeysShifted = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Delete', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'Shift', '↑', 'Control', 'Meta', 'Alt', ' ', '←', '↓', '→'];
const enKeysUnshifted = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Delete', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', '↑', 'Control', 'Meta', 'Alt', ' ', '←', '↓', '→'];
const enKeysShifted = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Delete', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift', '↑', 'Control', 'Meta', 'Alt', ' ', '←', '↓', '→'];
const eventCodes = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 46, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 38, 17, 91, 18, 32, 37, 40, 39];
// const eventKeyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Delete', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
// Generates all HTML document at once
const container = document.createElement('div');
const keyboardWindow = document.createElement('textarea');
const keybed = document.createElement('div');

function generateElements() {
  container.className = 'container';
  document.body.appendChild(container);

  keyboardWindow.className = 'keyboardWindow';
  container.appendChild(keyboardWindow);

  keybed.id = 'keybed';
  container.appendChild(keybed);
}

function generateKeys() {
  let keys = '';
  for (let i = 0; i < ruKeysUnshifted.length; i++) {
    keys += `${`${'<div class="key" ' + 'id="'}${eventCodes[i]}">` + '<span class="ruKeysUnshifted" id="on" >'}${ruKeysUnshifted[i]}</span>` + `<span class="ruKeysShifted" id="off" >${ruKeysShifted[i]}</span>` + `<span class="enKeysUnshifted" id="off" >${enKeysUnshifted[i]}</span>` + `<span class="enKeysShifted" id="off" >${enKeysShifted[i]}</span>` + '</div>';
  }
  document.querySelector('#keybed').innerHTML = keys;
}

window.addEventListener('load', generateElements());

window.addEventListener('load', generateKeys());


document.onkeydown = function (event) {
  document.getElementById(event.keyCode).style.cssText = 'color: #161616; background-color: #ffffff; transition: 0.1s linear';

  if (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'Enter') {
    keyboardWindow.focus();
  }

  if (event.key !== 'Backspace' && event.key !== 'Delete' && event.key && 'ArrowUp' && event.key && 'ArrowDown' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight' && event.key !== 'Enter' && event.key !== 'Control' && event.key !== 'Alt' && event.key !== 'CapsLock' && event.key !== 'Tab' && event.key !== 'Meta') {
    keyboardWindow.blur();
    const keytopress = document.getElementById(event.keyCode);
    keyboardWindow.value += keytopress.querySelector('#on').textContent;
    keyboardWindow.blur();
  }

  if (event.shiftKey && event.altKey) {
    const currentKeys = document.getElementsByClassName('ruKeysUnshifted');
    const newKeys = document.getElementsByClassName('enKeysUnshifted');
    for (let i = 0; i < currentKeys.length; i++) {
      currentKeys[i].removeAttribute('id');
      currentKeys[i].setAttribute('id', 'off');
      newKeys[i].removeAttribute('id');
      newKeys[i].setAttribute('id', 'on');
    }
  }

  if (event.key === 'Shift' && document.getElementsByClassName('ruKeysUnshifted') === 'on') {
    const currentKeys = document.getElementsByClassName('ruKeysUnshifted');
    const newKeys = document.getElementsByClassName('ruKeysShifted');
    for (let i = 0; i < currentKeys.length; i++) {
      currentKeys[i].removeAttribute('id');
      currentKeys[i].setAttribute('id', 'off');
      newKeys[i].removeAttribute('id');
      newKeys[i].setAttribute('id', 'on');
    }
  }


  if (event.key === 'CapsLock' && document.getElementsByClassName('ruKeysUnshifted').id === 'on') {
    const currentKeys = document.getElementsByClassName('ruKeysUnshifted');
    const newKeys = document.getElementsByClassName('ruKeysShifted');
    for (let i = 0; i < currentKeys.length; i++) {
      currentKeys[i].removeAttribute('id');
      currentKeys[i].setAttribute('id', 'off');
      newKeys[i].removeAttribute('id');
      newKeys[i].setAttribute('id', 'on');
    }
  }

  if (event.key === 'CapsLock' && document.getElementsByClassName('ruKeysShifted').id === 'on') {
    const currentKeys = document.getElementsByClassName('ruKeysUnshifted');
    const newKeys = document.getElementsByClassName('ruKeysShifted');
    for (let i = 0; i < currentKeys.length; i++) {
      currentKeys[i].removeAttribute('id');
      currentKeys[i].setAttribute('id', 'on');
      newKeys[i].removeAttribute('id');
      newKeys[i].setAttribute('id', 'off');
    }
  }
};


document.onkeyup = function (event) {
  document.getElementById(event.keyCode).style.cssText = 'color: #ffffff; background-color: #161616; transition: 0.1s linear';
  if (event.key === 'Shift' && document.getElementsByClassName('ruKeysShifted').id === 'on') {
    const currentKeys = document.getElementsByClassName('ruKeysUnshifted');
    const newKeys = document.getElementsByClassName('ruKeysShifted');
    for (let i = 0; i < currentKeys.length; i++) {
      currentKeys[i].removeAttribute('id');
      currentKeys[i].setAttribute('id', 'on');
      newKeys[i].removeAttribute('id');
      newKeys[i].setAttribute('id', 'off');
    }
  }
};


keybed.onclick = function (event) {
  const { target } = event;
};
