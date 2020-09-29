class Slider {
  constructor(elem) {
    this.node = elem;
    this.init();
  }

  init() {
    const noUiSlider = require('./nouislider.js');
    const slider = this.node.querySelector('.js-slider__body');
    const price = this.node.querySelector('.js-slider__price');

    if (noUiSlider && slider && price) {
      noUiSlider.create(slider, {
        start: [2000, 8000],
        connect: true,
        step: 100,
        range: {
          'min': 0,
          'max': 15000
        },
      });

      slider.noUiSlider.on('update', () => {
        let min = slider.noUiSlider.get()[0]
          .match(/.+(?=\.00)/)[0]
          .replace(/(\d+)(\d{3}$)/, '$1 $2₽');
        let max = slider.noUiSlider.get()[1]
          .match(/.+(?=\.00)/)[0]
          .replace(/(\d+)(\d{3}$)/, '$1 $2₽');
          price.innerHTML = `${min} - ${max}`;
      });
    } else {
      this.node.querySelector('.slider__title-text').innerHTML = 'Здесь могла быть Ваша реклама';
    }
  }
}

export default Slider;
