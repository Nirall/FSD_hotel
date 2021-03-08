import UIFormElements from './Ui-form-elements';

const elems = document.querySelectorAll(".js-ui-form__dropdown-beds_expanded, .js-ui-form__dropdown-guests_expanded");

if (elems) {
  elems.forEach((elem) => {
    new UIFormElements(elem);
  })
}
