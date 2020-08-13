const datepickerApi_1f = $('.datepicker-1f .datepicker-1f__input-field').datepicker().data('datepicker');
const inDateField_1f = $(".datepicker-1f .datepicker-1f__input-field");

inDateField_1f.datepicker({   
    onSelect: (formattedDate) => {
        let resDate = "";
        if (formattedDate.split(" - ").length > 1) {
            let arrDates = formattedDate.split(" - ");
            arrDates = arrDates.map(val => val.match(/\d{2}\s[а-яА-Я]{3}/)[0]);
            resDate = arrDates.join(" - ");
        } else {
            resDate = formattedDate.match(/\d{2}\s[а-яА-Я]{3}/)[0];
        }               
        inDateField_1f.val(resDate);       
    }
})

inDateField_1f.datepicker({clearButton: true});
inDateField_1f.datepicker({todayButton: true});
inDateField_1f.datepicker({dateFormat: "dd MM"});
inDateField_1f.datepicker({prevHtml: '<i class = "db-arrow material-icons">arrow_back</i>'});
inDateField_1f.datepicker({nextHtml: '<i class = "db-arrow material-icons">arrow_forward</i>'});

let applyButt = $(".datepicker--button[data-action='today']");
applyButt.html("Применить");
applyButt.click(() => datepickerApi_1f.hide());

$('.datepicker-1f__wrapper-input-field').click(() => datepickerApi_1f.show());
