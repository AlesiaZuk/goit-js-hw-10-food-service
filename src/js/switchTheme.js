import { checkThemeInLocalStorage } from './checkThemeInLocalStorage.js';
import refs from './refs';
import themes from '../db/themes.js';

const { body, checkbox } = refs;
const { light, dark } = themes;

body.className = `${light}`;

checkbox.addEventListener('change', changeTheme);

function changeTheme() {
  if (checkbox.checked) {
    body.className = `${dark}`;
    localStorage.setItem('class', `${dark}`);
  } else {
    body.className = `${light}`;
    localStorage.setItem('class', `${light}`);
  }
}

checkThemeInLocalStorage();
