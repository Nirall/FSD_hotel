class Dropdown {
  static init() {
    const isGuestsDropdown = function (placeholder) {
      if (
        placeholder.innerHTML.split("<span")[0] === "Сколько гостей"
        || placeholder.innerHTML.split(" ")[0] === "Гостей"
      ) {
        return true;
      }

      return false
    }

    const isBedsDropdown = function (placeholder) {
      if (
        placeholder.innerHTML.split("<span")[0] == "Выберите удобства"
        || placeholder.innerHTML.split(" ")[0] == "Спален"
      ) {
        return true;
      }

      return false
    }

    const placeholderChanger = function (quanList, placeholder) {
      const expand = '<span class = "material-icons">expand_more</span>';
      if (isGuestsDropdown(placeholder)) {
        let quanPeople = parseInt(quanList.item(0).innerHTML) + parseInt(quanList.item(1).innerHTML);
        let quanBaby = parseInt(quanList.item(2).innerHTML);
        if (quanBaby !== 0) {            
          placeholder.innerHTML = `Гостей - ${quanPeople.toString()}, младенцев - ${quanBaby.toString()}` + expand;
        } else {
          if (quanPeople === 0) {
            placeholder.innerHTML = "Сколько гостей" + expand;
          } else {
            placeholder.innerHTML = `Гостей - ${quanPeople.toString()}` + expand;
          }            
        }     
      } else if (isBedsDropdown(placeholder)) {
        let quanRoom = parseInt(quanList.item(0).innerHTML);
        let quanBed = parseInt(quanList.item(1).innerHTML);            
        if (quanBed !== 0) {            
          placeholder.innerHTML = `Спален - ${quanRoom.toString()}, кроватей - ${quanBed.toString()} ...` + expand;
        } else {
          if (quanRoom === 0) {
            placeholder.innerHTML = "Выберите удобства" + expand;
          } else {
            placeholder.innerHTML = `Спален - ${quanRoom.toString()}, спать сидя ...` + expand;
          }            
        }     
      }
    }

    const listMinus = document.getElementsByClassName("js-dropdown__minus");
    Array.from(listMinus, (item) => {
      item.onclick = () => {
        let content = item.nextSibling.innerHTML;
        if (content !== "0") {
          let newContent = parseInt(content) - 1;
          item.nextSibling.innerHTML = newContent.toString();
        }        
      }
    });

    const listPlus = document.getElementsByClassName("js-dropdown__plus");
    Array.from(listPlus, (item) => {
      item.onclick = () => {        
        let content = item.previousSibling.previousSibling.innerHTML;        
        let newContent = parseInt(content) + 1;               
        item.previousSibling.previousSibling.innerHTML = newContent.toString();                
      }
    });

    const listClear = document.getElementsByClassName("js-dropdown__clear");
    Array.from(listClear, (item) => {
      item.onclick = () => {
        item.parentNode.parentNode.querySelectorAll(".js-dropdown__quantity").forEach((quan) => quan.innerHTML = "0");
      }           
    });

    const listApply = document.getElementsByClassName("js-dropdown__apply");
    Array.from(listApply, (item) => {
      let placeholder = item.parentNode.parentNode.querySelector(".js-dropdown__field");        
      let quanList = item.parentNode.parentNode.querySelectorAll(".js-dropdown__quantity");
      item.onclick = () => {
        placeholderChanger(quanList, placeholder);
        item.parentNode.parentNode.querySelector(".js-dropdown__ul").classList.remove("dropdown__ul_active");
        item.parentNode.parentNode.querySelector(".dropdown__field_active").classList.remove("dropdown__field_active");
        item.parentNode.parentNode.querySelector(".js-dropdown__buttons").classList.remove("dropdown__buttons_active");
      }           
    });

    const listField = document.getElementsByClassName("js-dropdown__field");
    Array.from(listField, (item) => {
      item.onclick = () => {
        let quanList = item.parentNode.querySelectorAll(".js-dropdown__quantity");
        placeholderChanger(quanList, item);
        item.parentNode.querySelector(".js-dropdown__ul").classList.toggle("dropdown__ul_active");
        item.classList.toggle("dropdown__field_active");
        if (!item.parentNode.querySelector(".js-dropdown__buttons").classList.contains("dropdown__buttons_none")) {
          item.parentNode.querySelector(".js-dropdown__buttons").classList.toggle("dropdown__buttons_active");
        }
      }        
    });
  }
}

try {
  Dropdown.init();
} catch {
  console.log("There are no dropdowns")
}
