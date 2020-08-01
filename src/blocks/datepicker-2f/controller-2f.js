const datepickerApi_2f = $('.datepicker-2f .datepicker-2f__input-field').datepicker().data('datepicker');
const outDateField_2f = $(".datepicker-2f .datepicker-2f__out-date-field");
const inDateField_2f = $(".datepicker-2f .datepicker-2f__input-field");

inDateField_2f.datepicker({   
    onSelect: (formattedDate) => {        
        let inDate = formattedDate.match(/.+?(?=\s|$)/) ? formattedDate.match(/.+?(?=\s|$)/)[0] : "";
        let outDate = formattedDate.match(/(?<=\s-\s).+/) ? formattedDate.match(/(?<=\s-\s).+/)[0] : "";
        inDateField_2f.val(inDate);
        outDateField_2f.val(outDate);
    }
})

inDateField_2f.datepicker({clearButton: true});
inDateField_2f.datepicker({todayButton: true});
//inDateField_2f.datepicker({dateFormat: "dd MM"});
inDateField_2f.datepicker({prevHtml: '<i class = "db-arrow material-icons">arrow_back</i>'});
inDateField_2f.datepicker({nextHtml: '<i class = "db-arrow material-icons">arrow_forward</i>'});

let applyButt = $(".datepicker--button[data-action='today']");
applyButt.html("Применить");
applyButt.click(() => datepickerApi_2f.hide());

$('.datepicker-2f__wrapper-input-field').click(() => datepickerApi_2f.show());
