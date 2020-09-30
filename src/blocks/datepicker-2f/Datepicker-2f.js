class Datepicker2f {
  constructor(elem) {
    this.node = elem;
    this.init();
  }

  init() {
    const inDateField_2f = this.node.find($('.js-datepicker-2f__input-field'))[0]
      ? this.node.find($('.js-datepicker-2f__input-field'))
      : null;

    const outDateField_2f = this.node.find($('.js-datepicker-2f__out-date-field'))[0]
      ? this.node.find($('.js-datepicker-2f__out-date-field'))
      : null;

    const wrapperInput = this.node.find($('.js-datepicker-2f__wrapper-input-field'))[0]
      ? this.node.find($('.js-datepicker-2f__wrapper-input-field'))
      : null;

    if (inDateField_2f) {
      inDateField_2f.datepicker({clearButton: true});
      inDateField_2f.datepicker({todayButton: true});
      inDateField_2f.datepicker({prevHtml: '<i class = "db-arrow material-icons">arrow_back</i>'});
      inDateField_2f.datepicker({nextHtml: '<i class = "db-arrow material-icons">arrow_forward</i>'});
    }

    const applyButt = $('.datepicker--button[data-action="today"]');
    applyButt.on('click', () => datepickerApi_2f.hide());
    applyButt.html('Применить');

    if (inDateField_2f && outDateField_2f && wrapperInput) {
      inDateField_2f.datepicker({
        onSelect: (formattedDate) => {
          let inDate = formattedDate.match(/.+?(?=\s|$)/) ? formattedDate.match(/.+?(?=\s|$)/)[0] : '';
          let outDate = formattedDate.match(/(?<=\s-\s).+/) ? formattedDate.match(/(?<=\s-\s).+/)[0] : '';
          inDateField_2f.val(inDate);
          outDateField_2f.val(outDate);
        }
      });

      const datepickerApi_2f = inDateField_2f.datepicker().data('datepicker');
      wrapperInput.on('click', () => datepickerApi_2f.show());
    }
  }
}

export default Datepicker2f;
