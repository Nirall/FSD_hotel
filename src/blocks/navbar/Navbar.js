class Navbar {
  constructor(elem) {
    this.node = elem;
    this.init();
  }

  init() {
    const expandButt = this.node.querySelector('.js-navbar__expand-btn') || null;
    const list = this.node.querySelector('.js-navbar__list') || null;
    const buttons = this.node.querySelector('.js-navbar__buttons') || null;

    if (expandButt && list && buttons) {
      expandButt.onclick = () => {
        list.classList.toggle('navbar__item_visible_flex');
        buttons.classList.toggle('navbar__item_visible_flex');
      }
    }
  }
}

if (document.querySelectorAll('.js-navbar')) {
  document.querySelectorAll('.js-navbar').forEach((elem) => {
    new Navbar(elem);
  })
}
