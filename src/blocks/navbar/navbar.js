class Navbar {
  static init() {
    const navbarExpandButt = document.querySelector(".js-navbar__expand-btn");
    navbarExpandButt.onclick = () => {
      document.querySelector(".js-navbar__list").classList.toggle("navbar__item_visible_flex");
      document.querySelector(".js-navbar__buttons").classList.toggle("navbar__item_visible_flex");
    }
  }
}

try {
  Navbar.init();
} catch {
  console.log("There is no navbar");
}