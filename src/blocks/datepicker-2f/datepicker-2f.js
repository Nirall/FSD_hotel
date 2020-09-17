class Datepicker2f {
  constructor() {
    this.init();
  }

  init() {
    const datepickerApi_2f = $('.js-datepicker-2f__input-field').datepicker().data('datepicker');
    const outDateField_2f = $(".js-datepicker-2f__out-date-field");
    const inDateField_2f = $(".js-datepicker-2f__input-field");
    inDateField_2f.datepicker({
        onSelect: (formattedDate) => {
            let inDate = formattedDate.match(/.+?(?=\s|$)/) ? formattedDate.match(/.+?(?=\s|$)/)[0] : "";
            let outDate = formattedDate.match(/(?<=\s-\s).+/) ? formattedDate.match(/(?<=\s-\s).+/)[0] : "";
            inDateField_2f.val(inDate);
            outDateField_2f.val(outDate);
        }
    });

    inDateField_2f.datepicker({clearButton: true});
    inDateField_2f.datepicker({todayButton: true});
    inDateField_2f.datepicker({prevHtml: '<i class = "db-arrow material-icons">arrow_back</i>'});
    inDateField_2f.datepicker({nextHtml: '<i class = "db-arrow material-icons">arrow_forward</i>'});
    const applyButt = $(".datepicker--button[data-action='today']");
    applyButt.html("Применить");
    applyButt.on("click", () => datepickerApi_2f.hide());
    $('.js-datepicker-2f__wrapper-input-field').on("click", () => datepickerApi_2f.show());
  }
}

try {
  const datepicker2f = new Datepicker2f();
} catch {
  console.log("Something wrong with datepicker-2f");
}

