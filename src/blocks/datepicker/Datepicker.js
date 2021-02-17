class Datepicker {
  constructor(elem) {
    this.node = elem;
    this.init();
  }

  init = () => {
    this.$inDateField = this.node.find($('.js-datepicker__input-field'))[0]
      ? this.node.find($('.js-datepicker__input-field'))
      : null;

    this.$outDateField = this.node.find($('.js-datepicker__out-date-field'))[0]
      ? this.node.find($('.js-datepicker__out-date-field'))
      : null;

    this.$wrapperInput = this.node.find($('.js-datepicker__wrapper-input-field'))[0]
      ? this.node.find($('.js-datepicker__wrapper-input-field'))
      : null;

    if (this.$inDateField) {
      this.datepickerApi = this.$inDateField.datepicker().data('datepicker');
      this.$inDateField.datepicker({clearButton: true});
      this.$inDateField.datepicker({todayButton: true});
      this.$inDateField.datepicker({prevHtml: '<i class = "db-arrow material-icons">arrow_back</i>'});
      this.$inDateField.datepicker({nextHtml: '<i class = "db-arrow material-icons">arrow_forward</i>'});
      this.$applyButt = $('.datepicker--button[data-action="today"]');
      this.$applyButt.html('Применить');
    }

    this.bindEventListeners();
    this.setDateFormat();
  }

  setDateFormat = () => {
    if (this.checkElemsDoubleFieldType()) {
      this.$inDateField.datepicker({dateFormat: 'dd.mm.yyyy'});
      this.$inDateField.datepicker({
        onSelect: (formattedDate) => {
          let inDate = formattedDate.match(/.+?(?=\s|$)/) ? formattedDate.match(/.+?(?=\s|$)/)[0] : '';
          let outDate = formattedDate.match(/(?<=\s-\s).+/) ? formattedDate.match(/(?<=\s-\s).+/)[0] : '';
          this.$inDateField.val(inDate);
          this.$outDateField.val(outDate);
        }
      });
    } else {
      this.$inDateField.datepicker({dateFormat: 'dd MM'});
      this.$inDateField.datepicker({
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

          this.$inDateField.val(resDate);
        }
      });
    }
  }

  bindEventListeners = () => {
    if (this.checkElems()) {
      this.$wrapperInput.on('click', this.handleWrapperInputClick);
      this.$applyButt.on('click', this.handleApplyButtonClick);
    }
  }

  handleApplyButtonClick = () => {
    this.datepickerApi.hide();
  }

  handleWrapperInputClick = () => {
    this.datepickerApi.show();
  }

  checkElems = () => {
    return this.$inDateField && this.$wrapperInput;
  }

  checkElemsDoubleFieldType = () => {
    return this.$inDateField && this.$outDateField && this.$wrapperInput;
  }
}

export default Datepicker;
