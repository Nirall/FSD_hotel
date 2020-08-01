try {
    const moreButt = document.querySelector(".navbar .navbar__items__menu-collapsed span");
    moreButt.onclick = () => {
        document.querySelector(".navbar .navbar__list").classList.toggle("navbar__item_visible-flex");
        document.querySelector(".navbar .navbar__buttons").classList.toggle("navbar__item_visible-flex");
    }
} catch {
    console.error("There is no navbar");
}
