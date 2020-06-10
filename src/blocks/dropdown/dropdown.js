const listMinus = document.getElementsByClassName("dropdown__minus");
for (let item of listMinus) {
    item.onclick = () => {
        let content = item.nextSibling.innerHTML;
        if (content !== "0") {
            let newContent = parseInt(content) - 1;
            item.nextSibling.innerHTML = newContent.toString();
        }        
    }
}
const listPlus = document.getElementsByClassName("dropdown__plus");
for (let item of listPlus) {
    item.onclick = () => {
        let content = item.previousSibling.previousSibling.innerHTML;
        let newContent = parseInt(content) + 1;        
        item.previousSibling.previousSibling.innerHTML = newContent.toString();                
    }
}
const listClear = document.getElementsByClassName("dropdown__clear");
for (let item of listClear) {
    item.onclick = () => {
        for (let quan of item.parentNode.parentNode.querySelectorAll(".dropdown__quantity")) {
            quan.innerHTML = "0";
        }        
    }           
}
const listApply = document.getElementsByClassName("dropdown__apply");
for (let item of listApply) {
    item.onclick = () => {
        let quanList = item.parentNode.parentNode.querySelectorAll(".dropdown__quantity");              
        let quanPeople = parseInt(quanList.item(0).innerHTML) + parseInt(quanList.item(1).innerHTML);
        let quanBaby = parseInt(quanList.item(2).innerHTML);
        if (quanBaby !=0) {
            item.parentNode.parentNode.querySelector(".dropdown__field").innerHTML = `${quanPeople.toString()} гостя, ${quanBaby.toString()} младенца`;
        } else {
            item.parentNode.parentNode.querySelector(".dropdown__field").innerHTML = `${quanPeople.toString()} гостя`;
        }       
        item.parentNode.parentNode.querySelector("ul").setAttribute("style", "display: none");
        item.parentNode.parentNode.querySelector(".dropdown__buttons").setAttribute("style", "display: none");
    }           
}
const listField = document.getElementsByClassName("dropdown__field");
for (let item of listField) {
    item.onclick = () => {
        item.parentNode.querySelector("ul").setAttribute("style", "display: block");
        item.parentNode.querySelector(".dropdown__buttons").setAttribute("style", "display: flex");
    }        
}           



