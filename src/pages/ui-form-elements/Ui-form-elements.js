class UIFormElements {
  constructor(elem) {
    this.node = elem;
    this.init();
  }

  init() {
    const dropdownField = this.node.querySelector(".js-dropdown__field");
    if (dropdownField) {
      const clickEvent = new Event("click");
      dropdownField.dispatchEvent(clickEvent);
    }
  }
}

export default UIFormElements;
