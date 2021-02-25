class ExpandableCheckboxes {
  constructor(elem) {
    this.node = elem;
    this.init();
    this.isActive = false;
  }

  handleDropdownClick = () => {
    this.checkboxes.classList.toggle('expandable-checkboxes__checkboxes_displayed');
    this.expandButt.classList.toggle('expandable-checkboxes__symbol-expand_rotated');
    this.isActive = !this.isActive;
    this.isActive
      ? document.addEventListener('click', this.handleDocumentClick)
      : document.removeEventListener('click', this.handleDocumentClick);
  }

  elemsCheck = () => {
    return this.dropdown && this.expandButt && this.checkboxes;
  }

  handleDocumentClick = (e) => {
    if (this.isActive && !this.node.contains(e.target)) {
      this.handleDropdownClick();
    }
  }

  init = () => {
    this.dropdown = this.node.querySelector('.js-expandable-checkboxes__dropdown-title');
    this.expandButt = this.node.querySelector('.js-expandable-checkboxes__symbol-expand');
    this.checkboxes = this.node.querySelector('.js-expandable-checkboxes__checkboxes');

    if (this.elemsCheck()) {
      this.bindEventListeners();
    }
  }

  bindEventListeners = () => {
    this.dropdown.addEventListener('click', this.handleDropdownClick);
  }
}

export default ExpandableCheckboxes;
