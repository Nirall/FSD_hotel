import Datepicker from './Datepicker';

const datepickers = $('.js-datepicker');

if (datepickers) {
  datepickers.each((_, elem) => {
    new Datepicker($(elem));
  })
}