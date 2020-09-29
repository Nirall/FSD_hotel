import Dropdown from './Dropdown';

const dropdowns = (document.querySelectorAll('.js-dropdown'));

if (dropdowns) {
  dropdowns.forEach((elem) => {
    new Dropdown(elem);
  })
}
