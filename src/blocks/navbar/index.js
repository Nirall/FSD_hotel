import Navbar from './Navbar';

const navbars = (document.querySelectorAll('.js-navbar'));

if (navbars) {
  navbars.forEach((elem) => {
    new Navbar(elem);
  })
}
