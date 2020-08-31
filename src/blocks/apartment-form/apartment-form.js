try {
    const dropdownWrapperList = document.getElementsByClassName("apartment-form__dropdown-title");
    for (let item of dropdownWrapperList) {               
        item.onclick = () => {            
            const expandButt = item.parentNode.querySelector("span.material-icons");
            const checkboxes = item.parentNode.querySelector(".apartment-form__checkboxes");
            checkboxes.classList.toggle("apartment-form__checkboxes_disappear");
            expandButt.classList.toggle("apartment-form__expand-butt_rotate");
        }
    }
} catch { console.log("There is no dropdown menu.")}