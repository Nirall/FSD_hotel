class Registration {
  constructor(elem) {
    this.node = elem;
    this.init();
  }

  init() {
    const inButt = document.querySelector('.js-navbar__in-btn') || null;
    const regButt = document.querySelector('.js-navbar__reg-btn') || null;
    const inForm = this.node.querySelector('.js-registration__in-form') || null;
    const regForm = this.node.querySelector('.js-registration__reg-form') || null;

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

if (document.querySelectorAll('.js-registration')) {
  document.querySelectorAll('.js-registration').forEach((elem) => {
    new Registration(elem);
  })
}
