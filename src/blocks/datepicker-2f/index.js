import Datepicker2f from './Datepicker-2f';

const datepickers = $('.js-datepicker-2f');

if (datepickers) {
  datepickers.each((i, elem) => {
    new Datepicker2f($(elem));
  })
}