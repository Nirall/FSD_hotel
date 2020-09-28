class ExpandableCheckboxes {
  constructor(elem) {
    this.node = elem;
    this.init();
  }

  init() {
    const dropdown = this.node.querySelector('.js-expandable-checkboxes__dropdown-title') || null;
    const expandButt = this.node.querySelector('.js-expandable-checkboxes__symbol-expand') || null;
    const checkboxes = this.node.querySelector('.js-expandable-checkboxes__checkboxes') || null;

    if (dropdown && expandButt && checkboxes) {
      dropdown.onclick = () => {;
        checkboxes.classList.toggle('expandable-checkboxes__checkboxes_hidden');
        expandButt.classList.toggle('expandable-checkboxes__symbol-expand_rotated');
      }
    }
  }
}

if (document.querySelectorAll('.js-expandable-checkboxes')) {
  document.querySelectorAll('.js-expandable-checkboxes').forEach((elem) => {
    new ExpandableCheckboxes(elem);
  })
}
