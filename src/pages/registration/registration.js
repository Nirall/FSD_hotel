import "../../images/registration.jpg";

const inButt = document.querySelector(".js-in-butt");
const regButt = document.querySelector(".js-reg-butt");
const inForm = document.querySelector(".js-in-form");
const regForm = document.querySelector(".js-reg-form");

inButt.onclick = () => {
    try {
        regForm.classList.add("wrapper-registration-form_hidden");
        inForm.classList.add("wrapper-in-form_visibled");
    } catch {
        console.log("There are no reg and(or) sign-in forms");
    }
}

regButt.onclick = () => {
    try {
        regForm.classList.remove("wrapper-registration-form_hidden");
        inForm.classList.remove("wrapper-in-form_visibled")
    } catch {
        console.log("There are no reg and(or) sign-in forms");
    }
}







