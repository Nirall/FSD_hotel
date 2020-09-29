class Navbar {
  constructor(elem) {
    this.node = elem;
    this.init();
  }

  init() {
    const expandButt = this.node.querySelector('.js-navbar__expand-btn');
    const list = this.node.querySelector('.js-navbar__list');
    const buttons = this.node.querySelector('.js-navbar__buttons');
    const inButt = this.node.querySelector('.js-navbar__in-btn');
    const regButt = this.node.querySelector('.js-navbar__reg-btn');
    const inForm = document.querySelector('.js-registration__in-form');
    const regForm = document.querySelector('.js-registration__reg-form');

    if (expandButt && list && buttons) {
      expandButt.onclick = () => {
        list.classList.toggle('navbar__item_visible_flex');
        buttons.classList.toggle('navbar__item_visible_flex');
      }
    }

    if (inButt && regButt && inForm && regForm) {
      inButt.onclick = () => {
        regForm.classList.add('registration__reg-form_hidden');
        inForm.classList.add('registration__in-form_displayed');
      }

      regButt.onclick = () => {
        regForm.classList.remove('registration__reg-form_hidden');
        inForm.classList.remove('registration__in-form_displayed')
      }
    }
  }
}

export default Navbar;
