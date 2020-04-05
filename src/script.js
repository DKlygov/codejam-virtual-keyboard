
const ruKeysUnshifted = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Delete', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', '↑', 'Control', 'Meta', 'Alt', ' ', '←', '↓', '→'];
const ruKeysShifted = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Delete', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'Shift', '↑', 'Control', 'Meta', 'Alt', ' ', '←', '↓', '→'];
const enKeysUnshifted = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Delete', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', '↑', 'Control', 'Meta', 'Alt', ' ', '←', '↓', '→'];
const enKeysShifted = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Delete', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift', '↑', 'Control', 'Meta', 'Alt', ' ', '←', '↓', '→'];
// Generates all HTML document at once

function generateElements() {
  const container = document.createElement('div');
  container.className = 'container';
  document.body.appendChild(container);

  const keyboardWindow = document.createElement('textarea');
  keyboardWindow.className = 'keyboardWindow';
  container.appendChild(keyboardWindow);

  const keybed = document.createElement('div');
  keybed.id = 'keybed';
  container.appendChild(keybed);

}

function generateKeys() {
  let keys = '';
  for (let i = 0; i < ruKeysUnshifted.length; i++) {
     keys += '<div class="key" >' + '<span class="ruUnshifted inactive" id="on" >' + ruKeysUnshifted[i] + "</span>" + '<span class="ruKeysShifted inactive" id="off" >' + ruKeysShifted[i] + "</span>" + '<span class="enKeysUnshifted inactive" id="off" >' + enKeysUnshifted[i] + "</span>" + '<span class="enKeysShifted inactive" id="off" >' + enKeysShifted[i] + "</span>" + '</div>';
  }
  document.querySelector('#keybed').innerHTML = keys;
}

window.addEventListener('load', generateElements());

window.addEventListener('load', generateKeys());
