const ruKeysUnshifted = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.',  '↑', 'Delete', 'Control', 'Meta', 'Alt', ' ', '←', '↓', '→'];
const ruKeysShifted = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',',  '↑', 'Delete', 'Control', 'Meta', 'Alt', ' ', '←', '↓', '→'];
const enKeysUnshifted = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Delete', 'Control', 'Meta', 'Alt', ' ', '←', '↓', '→'];
const enKeysShifted = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Delete', 'Control', 'Meta', 'Alt', ' ', '←', '↓', '→'];
const eventCodes = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 46, 17, 91, 18, 32, 37, 40, 39];
// Generates all HTML document at once
const container = document.createElement('div');
const header = document.createElement('h1');
const keyboardWindow = document.createElement('textarea');
const keybed = document.createElement('div');
const text = document.createElement('p');
const ruLang = document.getElementsByClassName('ruKeysUnshifted');
const enLang = document.getElementsByClassName('enKeysUnshifted');
const ruLangShifted = document.getElementsByClassName('ruKeysShifted');
const enLangShifted = document.getElementsByClassName('enKeysShifted');

function langCheck(lang) {
  if (lang === 'ru') {
    for (let i = 0; i < ruLang.length; i++) {
      ruLang[i].removeAttribute('id');
      ruLang[i].setAttribute('id', 'on');
      enLang[i].removeAttribute('id');
      enLang[i].setAttribute('id', 'off');
      localStorage.setItem('lang', 'ru');
    }
  } else {
    for (let i = 0; i < ruLang.length; i++) {
      ruLang[i].removeAttribute('id');
      ruLang[i].setAttribute('id', 'off');
      enLang[i].removeAttribute('id');
      enLang[i].setAttribute('id', 'on');
      localStorage.setItem('lang', 'en');
    }
  }
}


function generateElements() {
  container.className = 'container';
  document.body.appendChild(container);

  header.textContent = 'Simple Keyboard';
  container.appendChild(header);

  keyboardWindow.className = 'keyboardWindow';
  container.appendChild(keyboardWindow);

  keybed.id = 'keybed';
  container.appendChild(keybed);

  text.textContent = 'Made in OS Windows. To switch language press Ctrl + Alt';
  container.appendChild(text);
}

function generateKeys() {
  let keys = '';
  for (let i = 0; i < ruKeysUnshifted.length; i++) {
    keys += `${`${`${'<div class="key ' + 'key'}${eventCodes[i]}"` + 'id="'}${eventCodes[i]}">` + '<span class="ruKeysUnshifted" id="on" >'}${ruKeysUnshifted[i]}</span>` + `<span class="ruKeysShifted" id="off" >${ruKeysShifted[i]}</span>` + `<span class="enKeysUnshifted" id="off" >${enKeysUnshifted[i]}</span>` + `<span class="enKeysShifted" id="off" >${enKeysShifted[i]}</span>` + '</div>';
  }
  document.querySelector('#keybed').innerHTML = keys;
}

window.addEventListener('load', generateElements());

window.addEventListener('load', generateKeys());

window.addEventListener('load', langCheck(localStorage.getItem('lang')));


document.onkeydown = function keyPressed(event) {
  const elemToChange = document.getElementById(event.keyCode)
  elemToChange.style.cssText = 'color: #161616; background-color: #ffffff; transition: 0.1s linear; border-radius: 30px;'; // start animation

  // if key is not a letter - focus on input
  if (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'Enter') {
    keyboardWindow.focus();
  }
  // if key is letter - focus on input
  if (event.key !== 'Backspace' && event.key !== 'Delete' && event.key && 'ArrowUp' && event.key && 'ArrowDown' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight' && event.key !== 'Enter' && event.key !== 'Control' && event.key !== 'Alt' && event.key !== 'CapsLock' && event.key !== 'Tab' && event.key !== 'Meta' && event.key !== 'Shift') {
    keyboardWindow.blur();
    const keytopress = document.getElementById(event.keyCode);
    keyboardWindow.value += keytopress.querySelector('#on').textContent;
    keyboardWindow.blur();
  }

  // switch lang
  if (event.altKey && event.ctrlKey) {
    const lang = localStorage.getItem('lang');
    if (lang === 'ru') {
      for (let i = 0; i < ruLang.length; i++) {
        ruLang[i].removeAttribute('id');
        ruLang[i].setAttribute('id', 'off');
        enLang[i].removeAttribute('id');
        enLang[i].setAttribute('id', 'on');
        localStorage.setItem('lang', 'en');
      }
    } else {
      for (let i = 0; i < ruLang.length; i++) {
        ruLang[i].removeAttribute('id');
        ruLang[i].setAttribute('id', 'on');
        enLang[i].removeAttribute('id');
        enLang[i].setAttribute('id', 'off');
        localStorage.setItem('lang', 'ru');
      }
    }
  }


  // Capslock
  if (event.key === 'CapsLock') {
    if (event.key === 'CapsLock' && ruLang[0].id === 'on') {
      for (let i = 0; i < ruLang.length; i++) {
        ruLang[i].removeAttribute('id');
        ruLang[i].setAttribute('id', 'off');
        ruLangShifted[i].removeAttribute('id');
        ruLangShifted[i].setAttribute('id', 'on');
        enLang[i].removeAttribute('id');
        enLang[i].setAttribute('id', 'off');
        enLangShifted[i].removeAttribute('id');
        enLangShifted[i].setAttribute('id', 'off');
      }
    } else if (event.key === 'CapsLock' && ruLangShifted[0].id === 'on') {
      for (let i = 0; i < ruLang.length; i++) {
        ruLang[i].removeAttribute('id');
        ruLang[i].setAttribute('id', 'on');
        ruLangShifted[i].removeAttribute('id');
        ruLangShifted[i].setAttribute('id', 'off');
        enLang[i].removeAttribute('id');
        enLang[i].setAttribute('id', 'off');
        enLangShifted[i].removeAttribute('id');
        enLangShifted[i].setAttribute('id', 'off');
      }
    } else if (event.key === 'CapsLock' && enLang[0].id === 'on') {
      for (let i = 0; i < ruLang.length; i++) {
        enLang[i].removeAttribute('id');
        enLang[i].setAttribute('id', 'off');
        enLangShifted[i].removeAttribute('id');
        enLangShifted[i].setAttribute('id', 'on');
        ruLang[i].removeAttribute('id');
        ruLang[i].setAttribute('id', 'off');
        ruLangShifted[i].removeAttribute('id');
        ruLangShifted[i].setAttribute('id', 'off');
      }
    } else if (event.key === 'CapsLock' && enLangShifted[0].id === 'on') {
      for (let i = 0; i < ruLang.length; i++) {
        enLang[i].removeAttribute('id');
        enLang[i].setAttribute('id', 'on');
        enLangShifted[i].removeAttribute('id');
        enLangShifted[i].setAttribute('id', 'off');
        ruLang[i].removeAttribute('id');
        ruLang[i].setAttribute('id', 'off');
        ruLangShifted[i].removeAttribute('id');
        ruLangShifted[i].setAttribute('id', 'off');
      }
    }
  }

  // Shift
  if (event.key === 'Shift') {
    if (event.key === 'Shift' && ruLang[0].id === 'on') {
      for (let i = 0; i < ruLang.length; i++) {
        ruLang[i].removeAttribute('id');
        ruLang[i].setAttribute('id', 'off');
        ruLangShifted[i].removeAttribute('id');
        ruLangShifted[i].setAttribute('id', 'on');
      }
    } else if (event.key === 'Shift' && enLang[0].id === 'on') {
      for (let i = 0; i < ruLang.length; i++) {
        enLang[i].removeAttribute('id');
        enLang[i].setAttribute('id', 'off');
        enLangShifted[i].removeAttribute('id');
        enLangShifted[i].setAttribute('id', 'on');
      }
    }
  }
};

document.onkeyup = function keyUnpressed(event) {
  // get back to standart color of a button
  const elemToChange = document.getElementById(event.keyCode)
  elemToChange.style.cssText = 'color: #ffffff; background-color: #161616; transition: 0.1s linear; border-radius: 10px; ';
  if (event.key === 'Shift') {
    if (event.key === 'Shift' && ruLangShifted[0].id === 'on') {
      for (let i = 0; i < ruLang.length; i++) {
        ruLang[i].removeAttribute('id');
        ruLang[i].setAttribute('id', 'on');
        ruLangShifted[i].removeAttribute('id');
        ruLangShifted[i].setAttribute('id', 'off');
      }
    } else if (event.key === 'Shift' && enLangShifted[0].id === 'on') {
      for (let i = 0; i < ruLang.length; i++) {
        enLang[i].removeAttribute('id');
        enLang[i].setAttribute('id', 'on');
        enLangShifted[i].removeAttribute('id');
        enLangShifted[i].setAttribute('id', 'off');
      }
    }
  }
};


keybed.onmousedown = function mouseClick(event) {
  if (event.target.tagName === 'SPAN') {
    const key = event.target.closest('div');
    const insideKey = event.target.textContent;
    const eventToDispatch = new KeyboardEvent('keydown', { keyCode: key.id, key: insideKey });
    document.dispatchEvent(eventToDispatch);
  } else {
    const key = event.target;
    const insideKey = key.getElementsByTagName('SPAN');
    let mySpan;
    for (let i = 0; i < insideKey.length; i++) {
      if (insideKey[i].id === 'on') {
        mySpan = insideKey[i].textContent;
      }
    }
    const eventToDispatch = new KeyboardEvent('keydown', { keyCode: key.id, key: mySpan });
    document.dispatchEvent(eventToDispatch);
  }
};

keybed.onmouseup = function mouseUnclick(event) {
  if (event.target.tagName === 'SPAN') {
    const key = event.target.closest('div');
    const insideKey = event.target.textContent;
    const eventToDispatch = new KeyboardEvent('keyup', { keyCode: key.id, key: insideKey });
    document.dispatchEvent(eventToDispatch);
  } else {
    const key = event.target;
    const insideKey = key.getElementsByTagName('SPAN');
    let mySpan;
    for (let i = 0; i < insideKey.length; i++) {
      if (insideKey[i].id === 'on') {
        mySpan = insideKey[i].textContent;
      }
    }
    const eventToDispatch = new KeyboardEvent('keyup', { keyCode: key.id, key: mySpan });
    document.dispatchEvent(eventToDispatch);
  }
};
