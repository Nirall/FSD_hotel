import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';

class Slider {
  constructor(elem) {
    this.node = elem;
    this.init();
  }

  handleSliderUpdate() {
    let min = this.slider.noUiSlider.get()[0]
      .match(/.+(?=\.00)/)[0]
      .replace(/(\d+)(\d{3}$)/, '$1 $2₽');
    let max = this.slider.noUiSlider.get()[1]
      .match(/.+(?=\.00)/)[0]
      .replace(/(\d+)(\d{3}$)/, '$1 $2₽');
      this.price.innerHTML = `${min} - ${max}`;
  }

  elemsCheck() {
    return noUiSlider && this.slider && this.price;
  }

  init() {
    this.slider = this.node.querySelector('.js-slider__body');
    this.price = this.node.querySelector('.js-slider__price');

    if (this.elemsCheck()) {
      noUiSlider.create(this.slider, {
        start: [2000, 8000],
        connect: true,
        step: 100,
        range: {
          'min': 0,
          'max': 15000
        },
      });

      this.slider.noUiSlider.on('update', this.handleSliderUpdate.bind(this));
    } else {
      this.node.querySelector('.slider__title-text').innerHTML = 'Здесь могла быть Ваша реклама';
    }
  }
}

export default Slider;
