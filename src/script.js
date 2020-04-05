
// Generates all HTML document at once

function generateElements() {
  const container = document.createElement('div');
  container.className = 'container';
  document.body.appendChild(container);

  const keyboardWindow = document.createElement('textarea');
  keyboardWindow.className = 'keyboardWindow';
  container.appendChild(keyboardWindow);

  const keybed = document.createElement('div');
  keybed.className = 'keybed';
  container.appendChild(keybed);
}


window.addEventListener('load', generateElements());

