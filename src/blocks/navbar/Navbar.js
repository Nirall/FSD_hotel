class Navbar {
  constructor(elem) {
    this.node = elem;
    this.init();
  }

  handleExpandButtonClick = () => {
    this.list.classList.toggle('navbar__item_visible_flex');
    this.buttons.classList.toggle('navbar__item_visible_flex');
  }

  handleInButtonClick = () => {
    this.regForm.classList.add('registration__reg-form_hidden');
    this.inForm.classList.add('registration__in-form_displayed');
  }

  handleRegButtonClick = () =>{
    this.regForm.classList.remove('registration__reg-form_hidden');
    this.inForm.classList.remove('registration__in-form_displayed');
  }

  elemsCheckCollapsedMenu = () => {
    return this.expandButton && this.list && this.buttons;
  }

  elemsCheckForms = () => {
    return this.inButton && this.regButton && this.inForm && this.regForm;
  }

  bindEventListeners = () => {
    this.inButton.addEventListener('click', this.handleInButtonClick);
    this.regButton.addEventListener('click', this.handleRegButtonClick);
  }

  init = () => {
    this.expandButton = this.node.querySelector('.js-navbar__expand-btn');
    this.list = this.node.querySelector('.js-navbar__list');
    this.buttons = this.node.querySelector('.js-navbar__buttons');
    this.inButton = this.node.querySelector('.js-navbar__in-btn');
    this.regButton = this.node.querySelector('.js-navbar__reg-btn');
    this.inForm = document.querySelector('.js-registration__in-form');
    this.regForm = document.querySelector('.js-registration__reg-form');

    if (this.elemsCheckCollapsedMenu()) {
      this.expandButton.onclick = this.handleExpandButtonClick;
    }

    if (this.elemsCheckForms()) {
      this.bindEventListeners();
    }
  }
}

export default Navbar;
