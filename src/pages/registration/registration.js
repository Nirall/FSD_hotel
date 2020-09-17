class Registration {
  static init() {
    const inButt = document.querySelector(".js-navbar__in-btn");
    const regButt = document.querySelector(".js-navbar__reg-btn");
    const inForm = document.querySelector(".js-registration__in-form");
    const regForm = document.querySelector(".js-registration__reg-form");
    inButt.onclick = () => {
      regForm.classList.add("registration__reg-form_hidden");
      inForm.classList.add("registration__in-form_displayed");
    }

    regButt.onclick = () => {
      regForm.classList.remove("registration__reg-form_hidden");
      inForm.classList.remove("registration__in-form_displayed")
    }
  }
}

try {
  Registration.init();
} catch {
  console.log("It's not a registration page")
}









