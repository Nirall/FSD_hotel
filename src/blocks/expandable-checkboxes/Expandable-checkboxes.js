class ExpandableCheckboxes {
  constructor(elem) {
    this.node = elem;
    this.init();
  }

  handleDropdownClick() {
    this.checkboxes.classList.toggle('expandable-checkboxes__checkboxes_hidden');
    this.expandButt.classList.toggle('expandable-checkboxes__symbol-expand_rotated');
  }

  elemsCheck() {
    return this.dropdown && this.expandButt && this.checkboxes;
  }

  init() {
    this.dropdown = this.node.querySelector('.js-expandable-checkboxes__dropdown-title');
    this.expandButt = this.node.querySelector('.js-expandable-checkboxes__symbol-expand');
    this.checkboxes = this.node.querySelector('.js-expandable-checkboxes__checkboxes');

    if (this.elemsCheck()) {
      this.dropdown.onclick = this.handleDropdownClick.bind(this);
    }
  }
}

export default ExpandableCheckboxes;
