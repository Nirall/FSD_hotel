try {
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
        let placeholder = item.parentNode.parentNode.querySelector(".dropdown__field");        
        let quanList = item.parentNode.parentNode.querySelectorAll(".dropdown__quantity");
        item.onclick = () => {
            if (placeholder.innerHTML.split("<span")[0] == "Сколько гостей"
                || placeholder.innerHTML.split(" ")[0] == "Гостей") {
                let quanPeople = parseInt(quanList.item(0).innerHTML) + parseInt(quanList.item(1).innerHTML);
                let quanBaby = parseInt(quanList.item(2).innerHTML);
                if (quanBaby !=0) {            
                    placeholder.innerHTML = `Гостей - ${quanPeople.toString()}, младенцев - ${quanBaby.toString()}`;
                } else {
                    if (quanPeople == 0) {
                        placeholder.innerHTML = "Сколько гостей";
                    } else {
                        placeholder.innerHTML = `Гостей - ${quanPeople.toString()}`;
                    }            
                }     
            } else if (placeholder.innerHTML.split("<span")[0] == "Выберите удобства"
                || placeholder.innerHTML.split(" ")[0] == "Спален") {
                let quanRoom = parseInt(quanList.item(0).innerHTML);
                let quanBed = parseInt(quanList.item(1).innerHTML);            
                if (quanBed !=0) {            
                    placeholder.innerHTML = `Спален - ${quanRoom.toString()}, кроватей - ${quanBed.toString()} ...`;
                } else {
                    if (quanRoom == 0) {
                        placeholder.innerHTML = "Выберите удобства";
                    } else {
                        placeholder.innerHTML = `Спален - ${quanRoom.toString()}, спать на коврике ...`;
                    }            
                }     
            }
            item.parentNode.parentNode.querySelector(".dropdown__ul").classList.remove("dropdown__ul_active");
            item.parentNode.parentNode.querySelector(".dropdown__field_active").classList.remove("dropdown__field_active");
            item.parentNode.parentNode.querySelector(".dropdown__buttons").setAttribute("style", "display: none");
        }           
    }
    const listField = document.getElementsByClassName("dropdown__field");
    for (let item of listField) {
        item.onclick = () => {
            item.parentNode.querySelector(".dropdown__ul").classList.add("dropdown__ul_active");
            item.parentNode.querySelector(".dropdown__field").classList.add("dropdown__field_active");
            item.parentNode.querySelector(".dropdown__buttons").setAttribute("style", "display: flex");
        }        
    }  
} catch {
    console.log("There is no dropdown-guests")
}



