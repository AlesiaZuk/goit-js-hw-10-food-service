import createCardMarkup from '../templates/cardTemplate.hbs';
import menu from '../db/menu.json';
import refs from './refs.js';

const { list } = refs;

const cardMarkup = createCardMarkup(menu);

list.insertAdjacentHTML('afterbegin', cardMarkup);
