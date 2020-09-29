import UIFormElements from './ui-form-elements';

const elems = document.querySelectorAll(".js-ui-form__dropdown_expanded");

if (elems) {
  elems.forEach((elem) => {
    new UIFormElements(elem);
  })
}
