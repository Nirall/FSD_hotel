class ExpandableCheckboxes {
  constructor(elem) {
    this.node = elem;
    this.init();
  }

  init() {
    const dropdown = this.node.querySelector('.js-expandable-checkboxes__dropdown-title');
    const expandButt = this.node.querySelector('.js-expandable-checkboxes__symbol-expand');
    const checkboxes = this.node.querySelector('.js-expandable-checkboxes__checkboxes');

    if (dropdown && expandButt && checkboxes) {
      dropdown.onclick = () => {;
        checkboxes.classList.toggle('expandable-checkboxes__checkboxes_hidden');
        expandButt.classList.toggle('expandable-checkboxes__symbol-expand_rotated');
      }
    }
  }
}

export default ExpandableCheckboxes;
