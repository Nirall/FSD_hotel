try {
    const dropdownWrapperList = document.getElementsByClassName("appartment-form__dropdown-title");
    for (let item of dropdownWrapperList) {               
        item.onclick = () => {            
            const expandButt = item.parentNode.querySelector("span.material-icons");
            const checkboxes = item.parentNode.querySelector(".appartment-form__checkboxes");
            checkboxes.classList.toggle("appartment-form__checkboxes_dissappear");
            expandButt.classList.toggle("appartment-form__expand-butt_rotate");
        }
    }
} catch { console.log("There is no dropdown menu.")}