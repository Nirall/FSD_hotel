import "./images/registration.jpg"


const inButt = document.querySelector(".navbar .wrapper-button-in .navbar__button");
const regButt = document.querySelector(".navbar .wrapper-button-reg .navbar__button");
const inForm = document.querySelector(".content-registration .wrapper-in-form");
const regForm = document.querySelector(".content-registration .wrapper-registration-form");

inButt.onclick = () => {
    regForm.setAttribute("style", "display: none;");
    inForm.setAttribute("style", "display: block;");
}

regButt.onclick = () => {
    inForm.setAttribute("style", "display: none;");
    regForm.setAttribute("style", "display: block;");
}





