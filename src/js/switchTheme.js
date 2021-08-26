import refs from './refs';
import themes from '../db/themes.js';

const { body, checkbox } = refs;
const { light, dark } = themes;

checkbox.addEventListener('change', () => {
  body.classList.toggle('dark-theme');

  localStorage.getItem('class')
    ? localStorage.removeItem('class')
    : localStorage.setItem('class', 'dark-theme');
});
if (localStorage.getItem('class') === 'dark-theme') {
  let className = localStorage.getItem('class');
  body.classList.add(className);
  checkbox.checked = true;
  //   checkbox.setAttribute('checked', 'checked');
}
