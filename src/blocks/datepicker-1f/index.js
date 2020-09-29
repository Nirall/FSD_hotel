import Datepicker1f from './Datepicker-1f';

const datepickers = $('.js-datepicker-1f');

if (datepickers) {
  datepickers.each((i, elem) => {
    new Datepicker1f($(elem));
  })
}