class Slider {
  constructor() {
    this.init();
  }

  init() {
    const noUiSlider = require('./nouislider.js');
    const slider = document.getElementById('slider');
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
      document.querySelector(".js-apartment-form__slider-price").innerHTML = `${min} - ${max}`;
    });
  }
}

if (document.getElementById('slider')) {
  const slider = new Slider();
}
