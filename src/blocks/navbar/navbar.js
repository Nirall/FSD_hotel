try {
    const navbarExpandButt = document.querySelector(".js-navbar__expand-butt");
    
    navbarExpandButt.onclick = () => {
        document.querySelector(".js-navbar__list ").classList.toggle("navbar__item_visible-flex");
        document.querySelector(".js-navbar__buttons").classList.toggle("navbar__item_visible-flex");
    }
} catch {
    console.error("There is no navbar");
}
