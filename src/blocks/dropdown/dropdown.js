/*const listNodes = document.getElementsByClassName("dropdown__list-elem");
for (let list of listNodes) {
    for (let child of list.childNodes) {
        let dropdown__minus;
        let dropdown__plus;
        let dropdown__item;
        for (let i of child.classList) {
            switch(i) {
                case "dropdown__minus":
                    dropdown__minus = i;
                    break;
                case "dropdown__plus":
                    dropdown__plus = i;
                    break;
                case "dropdown__item":
                    dropdown__item = i;
                    break;
                default: null;                  
            }
        }
        dropdown__minus.onclick = () => {

        }
    }
}*/
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
        let content = item.previousSibling.innerHTML;
        let newContent = parseInt(content) + 1;
        item.previousSibling.innerHTML = newContent.toString();                
    }
}


