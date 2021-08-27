import theme from '../db/themes.js';
import refs from './refs';

const { dark } = theme;
const { body, checkbox } = refs;

export function checkThemeInLocalStorage() {
  if (localStorage.getItem('class') === `${dark}`) {
    let classValue = localStorage.getItem('class');
    body.className = classValue;
    checkbox.checked = true;
  }
}
