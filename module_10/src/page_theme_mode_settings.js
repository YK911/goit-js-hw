const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchControl = document.getElementById('theme-switch-control');
const modeTheme = document.body;
const currentTheme = localStorage.getItem('Theme');

const checkBox = document.querySelector('input[type="checkbox"]');
switchControl.addEventListener('click', clickEvent);

if (currentTheme === 'DARK') {
  modeTheme.classList.add('dark-theme');
  checkBox.checked = true;
} else {
  modeTheme.classList.add('light-theme');
  checkBox.checked = false;
}

function clickEvent(e) {
  if (modeTheme.classList.contains('light-theme')) {
    modeTheme.classList.remove('light-theme');
    modeTheme.classList.add('dark-theme');
    localStorage.setItem('Theme', 'DARK');
  } else {
    modeTheme.classList.remove('dark-theme');
    modeTheme.classList.add('light-theme');
    localStorage.setItem('Theme', 'LIGHT');
  }
}

localStorage.getItem('Theme');
