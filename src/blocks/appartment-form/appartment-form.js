try {
    const dropdownWrapperList = document.getElementsByClassName("appartment-form__dropdown-wrapper");
    for (let item of dropdownWrapperList) {               
        item.onclick = () => {            
            const expandButt = item.parentNode.querySelector("span.material-icons");
            const checkboxes = item.parentNode.querySelector(".appartment-form__checkboxes");    
            if (window.getComputedStyle(checkboxes).opacity !== "0") {
                checkboxes.classList.add("appartment-form__checkboxes_dissappear");
                expandButt.classList.add("appartment-form__expand-butt_rotate");
            } else {
                checkboxes.classList.remove("appartment-form__checkboxes_dissappear");
                expandButt.classList.remove("appartment-form__expand-butt_rotate");
            }
        }
    }
} catch { console.log("There is no dropdown menu.")}