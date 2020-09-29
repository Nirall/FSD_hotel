import Slider from './Slider';

const sliders = (document.querySelectorAll('.js-slider'));

if (sliders) {
  sliders.forEach((elem) => {
    new Slider(elem);
  })
}
