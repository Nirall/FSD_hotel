class Datepicker {
  constructor(elem) {
    this.node = elem;
    this.init();
  }

  init() {
    const inDateField = this.node.find($('.js-datepicker__input-field'))[0]
      ? this.node.find($('.js-datepicker__input-field'))
      : null;

    const outDateField = this.node.find($('.js-datepicker__out-date-field'))[0]
      ? this.node.find($('.js-datepicker__out-date-field'))
      : null;

    const wrapperInput = this.node.find($('.js-datepicker__wrapper-input-field'))[0]
      ? this.node.find($('.js-datepicker__wrapper-input-field'))
      : null;

    if (inDateField) {
      this.datepickerApi = inDateField.datepicker().data('datepicker');
      inDateField.datepicker({clearButton: true});
      inDateField.datepicker({todayButton: true});
      inDateField.datepicker({prevHtml: '<i class = "db-arrow material-icons">arrow_back</i>'});
      inDateField.datepicker({nextHtml: '<i class = "db-arrow material-icons">arrow_forward</i>'});
      const applyButt = $('.datepicker--button[data-action="today"]');
      applyButt.on('click', () => this.datepickerApi.hide());
      applyButt.html('Применить');
    }

    if (inDateField && outDateField && wrapperInput) {
      inDateField.datepicker({dateFormat: 'dd.mm.yyyy'});
      inDateField.datepicker({
        onSelect: (formattedDate) => {
          let inDate = formattedDate.match(/.+?(?=\s|$)/) ? formattedDate.match(/.+?(?=\s|$)/)[0] : '';
          let outDate = formattedDate.match(/(?<=\s-\s).+/) ? formattedDate.match(/(?<=\s-\s).+/)[0] : '';
          inDateField.val(inDate);
          outDateField.val(outDate);
        }
      });

      wrapperInput.on('click', () => this.datepickerApi.show());
    } else if (inDateField && wrapperInput) {
      inDateField.datepicker({dateFormat: 'dd MM'});
      inDateField.datepicker({
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

          inDateField.val(resDate);
        }
      });

      wrapperInput.on('click', () => this.datepickerApi.show());
    }
  }
}

export default Datepicker;
