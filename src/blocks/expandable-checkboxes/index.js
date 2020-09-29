import ExpandableCheckboxes from './Expandable-checkboxes';

const checkboxes = (document.querySelectorAll('.js-expandable-checkboxes'));

if (checkboxes) {
  checkboxes.forEach((elem) => {
    new ExpandableCheckboxes(elem);
  })
}
