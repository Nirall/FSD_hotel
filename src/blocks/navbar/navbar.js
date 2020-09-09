import "./images/logo-toxin.png";

class Navbar {
  static init() {
    const navbarExpandButt = document.querySelector(".js-navbar__expand-butt");
    navbarExpandButt.onclick = () => {
      document.querySelector(".js-navbar__list ").classList.toggle("navbar__item_visible-flex");
      document.querySelector(".js-navbar__buttons").classList.toggle("navbar__item_visible-flex");
    }
  }
}

try {
  Navbar.init();
} catch {
  console.log("There is no navbar");
}
