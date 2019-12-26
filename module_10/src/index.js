import './styles.css';
import './page_theme_mode_settings.js';
import menu from './menu.json';
import menuUnit from './menu_list.hbs';

const menuList = document.querySelector('.js-menu');

function createMenuList(menu) {
  const items = menu.map(menu => menuUnit(menu)).join('');
  menuList.insertAdjacentHTML('beforeend', items);
}

createMenuList(menu);
