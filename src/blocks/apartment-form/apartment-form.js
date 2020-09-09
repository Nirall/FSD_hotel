class ApartmentForm {
  static init() {
    const dropdownWrapperList = document.getElementsByClassName("apartment-form__dropdown-title");
    for (let item of dropdownWrapperList) {               
      item.onclick = () => {            
        const expandButt = item.parentNode.querySelector("span.material-icons");
        const checkboxes = item.parentNode.querySelector(".apartment-form__checkboxes");
        checkboxes.classList.toggle("apartment-form__checkboxes_disappear");
        expandButt.classList.toggle("apartment-form__expand-butt_rotate");
      }
    }
  }
}

try {
  ApartmentForm.init();
} catch {
  console.log("There is no apartment's form.")
}