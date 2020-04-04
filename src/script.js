// Generates all HTML document at once

function generateElements() {
  const container = document.createElement('div');
  container.className = 'container';
  document.body.appendChild(container);

  const keyboardWindow = document.createElement('textarea');
  keyboardWindow.className = 'keyboardWindow';
  container.appendChild(keyboardWindow);
}


window.addEventListener('load', generateElements());
