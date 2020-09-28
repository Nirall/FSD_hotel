class UIFormElements {
  constructor(elem) {
    this.node = elem;
    this.init();
  }

  init(elem) {
    if (this.node.querySelector(".js-dropdown__field")) {
      const clickEvent = new Event("click");
      this.node.querySelector(".js-dropdown__field").dispatchEvent(clickEvent);
    }
  }
}


if (document.querySelectorAll(".js-ui-form__dropdown_expanded")) {
  dropdownElems = document.querySelectorAll(".js-ui-form__dropdown_expanded");
  dropdownElems.forEach((elem) => new UIFormElements(elem));
}
