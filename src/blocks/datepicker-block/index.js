import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';
import Datepicker from './DatepickerBlock';

const datepickers = $('.js-datepicker');

if (datepickers) {
  datepickers.each((_, elem) => {
    new Datepicker($(elem));
  })
}