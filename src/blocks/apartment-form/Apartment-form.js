class ApartmentForm {
  constructor(elem) {
    this.node = elem;
    this.init();
  }

  init() {
    const dropdown = this.node.querySelector('.js-apartment-form__dropdown-title') || null;
    const expandButt = this.node.querySelector('.js-apartment-form__symbol-expand') || null;
    const checkboxes = this.node.querySelector('.js-apartment-form__checkboxes') || null;

    if (dropdown && expandButt && checkboxes) {
      dropdown.onclick = () => {;
        checkboxes.classList.toggle('apartment-form__checkboxes_hidden');
        expandButt.classList.toggle('apartment-form__symbol-expand_rotated');
      }
    }
  }
}

if (document.querySelectorAll('.js-apartment-form')) {
  document.querySelectorAll('.js-apartment-form').forEach((elem) => {
    new ApartmentForm(elem);
  })
}
