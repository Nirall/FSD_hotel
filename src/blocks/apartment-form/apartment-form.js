class ApartmentForm {
  static init() {
    const dropdownWrapperList = document.getElementsByClassName("js-apartment-form__dropdown-title");
    for (let item of dropdownWrapperList) {
      item.onclick = () => {
        const expandButt = item.parentNode.querySelector(".js-apartment-form__symbol-expand");
        const checkboxes = item.parentNode.querySelector(".js-apartment-form__checkboxes");
        checkboxes.classList.toggle("apartment-form__checkboxes_hidden");
        expandButt.classList.toggle("apartment-form__symbol-expand_rotated");
      }
    }
  }
}

try {
  ApartmentForm.init();
} catch {
  console.log("There is no apartment's form.")
}