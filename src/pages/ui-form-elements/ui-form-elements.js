class UIFormElements {
  static init() {
    const DropdownElems = document.getElementsByClassName("js-ui-form-elements__dropdown_expanded");
    const clickEvent = new Event("click");

    Array.from(DropdownElems, (elem) => {
      elem.querySelector(".js-dropdown__field").dispatchEvent(clickEvent);
    });

    const checkboxElems = document.getElementsByClassName("js-ui-form-elements__more-options_collapsed");
    Array.from(checkboxElems, (elem) => {
      const expandButt = elem.querySelector("span.material-icons");
      const checkboxes = elem.querySelector(".apartment-form__checkboxes");
      checkboxes.classList.toggle("apartment-form__checkboxes_disappear");
      expandButt.classList.toggle("apartment-form__expand-butt_rotate");
    });
  }
}

try {
  UIFormElements.init();
} catch {
  console.log("There is no UIFormElements");
}

