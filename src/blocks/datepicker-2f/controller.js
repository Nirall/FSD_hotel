const datepickerApi = $('#inDateField').datepicker().data('datepicker');
const outDateField = $("#outDateField");
const inDateField = $("#inDateField");

inDateField.datepicker({   
    onSelect: (formattedDate) => {        
        let inDate = formattedDate.match(/.+?(?=\s|$)/) ? formattedDate.match(/.+?(?=\s|$)/)[0] : "";
        //inDateField.val(formattedDate.match(/.+?(?=\s|$)/)[0]);
        let outDate = formattedDate.match(/(?<=\s-\s).+/) ? formattedDate.match(/(?<=\s-\s).+/)[0] : "";
        inDateField.val(inDate);
        outDateField.val(outDate);
    }
})

$('#inDateField').datepicker({clearButton: true});
$('#inDateField').datepicker({todayButton: true});
$('#inDateField').datepicker({prevHtml: '<i class = "material-icons db-arrow">arrow_back</i>'});
$('#inDateField').datepicker({nextHtml: '<i class = "material-icons db-arrow">arrow_forward</i>'});

let applyButt = $(".datepicker--button[data-action='today']");
applyButt.html("Применить");
applyButt.click(() => datepickerApi.hide());

outDateField.click(() => datepickerApi.show());
