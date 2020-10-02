class Datepicker1f {
  constructor(elem) {
    this.node = elem;
    this.init();
  }

  init() {
    const inDateField_1f = this.node.find($('.js-datepicker-1f__input-field'))[0]
      ? this.node.find($('.js-datepicker-1f__input-field'))
      : null;

    const wrapperInput = this.node.find($('.js-datepicker-1f__wrapper-input-field'))[0]
      ? this.node.find($('.js-datepicker-1f__wrapper-input-field'))
      : null;

    if (inDateField_1f) {
      const datepickerApi_1f = inDateField_1f.datepicker().data('datepicker');
      inDateField_1f.datepicker({clearButton: true});
      inDateField_1f.datepicker({todayButton: true});
      inDateField_1f.datepicker({dateFormat: 'dd MM'});
      inDateField_1f.datepicker({prevHtml: '<i class = "db-arrow material-icons">arrow_back</i>'});
      inDateField_1f.datepicker({nextHtml: '<i class = "db-arrow material-icons">arrow_forward</i>'});
      const applyButt = $('.datepicker--button[data-action="today"]');
      applyButt.on('click', () => datepickerApi_1f.hide());
      applyButt.html('Применить');
    }

    if (inDateField_1f && wrapperInput) {
      inDateField_1f.datepicker({
        onSelect: (formattedDate) => {
          let resDate = '';
          if (formattedDate) {
            if (formattedDate.split(' - ').length > 1) {
              let arrDates = formattedDate.toLowerCase().split(' - ');
              arrDates = arrDates.map(val => val.match(/\d{2}\s[а-яА-Я]{3}/)[0]);
              resDate = arrDates.join(' - ');
            } else {
              resDate = formattedDate.match(/\d{2}\s[а-яА-Я]{3}/)[0];
            }
          }

          inDateField_1f.val(resDate);
        }
      });

      wrapperInput.on('click', () => datepickerApi_1f.show());
    }
  }
}

export default Datepicker1f;