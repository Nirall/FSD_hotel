import RateButton from './RateButton';

const rateButtons = (document.querySelectorAll('.js-rate-button'));

if (rateButtons) {
  rateButtons.forEach((elem) => {
    new RateButton(elem);
  })
}