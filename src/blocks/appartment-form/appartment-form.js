const dropdownWrapper = document.querySelector(".appartment-form__dropdown-wrapper");
dropdownWrapper.onclick = () => {
    const expandButt = document.querySelector(".appartment-form__dropdown-wrapper span.material-icons");
    const checkboxes = document.querySelector(".appartment-form__checkboxes");    
    if (getComputedStyle(checkboxes).opacity !== "0") {
        checkboxes.classList.add("appartment-form__checkboxes_dissappear");
        expandButt.classList.add("appartment-form__expand-butt_rotate");
    } else {
        checkboxes.classList.remove("appartment-form__checkboxes_dissappear");
        expandButt.classList.remove("appartment-form__expand-butt_rotate");
    }
}