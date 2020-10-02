import Datepicker from './Datepicker';

const datepickers = $('.js-datepicker');

if (datepickers) {
  datepickers.each((i, elem) => {
    new Datepicker($(elem));
  })
}