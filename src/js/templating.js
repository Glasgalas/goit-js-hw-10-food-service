// импортируем шаблон создания разметки
import menuItemsTemplate from '../templates/gallery-menu.hbs';
// импортируем данные элементов меню
import menu from '../menu.json';

// назначаем вызов функции создания разметки на переменную markup
const markup = menuItemsTemplate(menu);

// создаем переменную выбора тега в разметке
const menuRef = document.querySelector('.js-menu');

// вносим разметку шаблона в ДОМ
menuRef.insertAdjacentHTML('beforeend', markup);
