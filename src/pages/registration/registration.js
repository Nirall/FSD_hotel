import "./images/registration-bg.jpg";

class Registration {
  static init() {
    const inButt = document.querySelector(".js-navbar__in-butt");
    const regButt = document.querySelector(".js-navbar__reg-butt");
    const inForm = document.querySelector(".js-registration__in-form");
    const regForm = document.querySelector(".js-registration__reg-form");
    inButt.onclick = () => {
      regForm.classList.add("registration__reg-form_hidden");
      inForm.classList.add("registration__in-form_visible");
    }

    regButt.onclick = () => {
      regForm.classList.remove("registration__reg-form_hidden");
      inForm.classList.remove("registration__in-form_visible")
    }
  }
}

try {
  Registration.init();
} catch {
  console.log("It's not a registration page")
}









