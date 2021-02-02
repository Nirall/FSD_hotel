import Carousel from './Carousel';

const carousels = (document.querySelectorAll('.js-carousel'));

if (carousels) {
  carousels.forEach((elem) => {
    new Carousel(elem, elem.getAttribute('data'));
    elem.removeAttribute('data');
  })
}