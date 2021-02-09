class Dropdown {
  constructor(elem) {
    this.node = elem;
    this.isActive = false;
    this.init();
  }

  init(positions = 3) {
    this.quantity = new Array(positions);
    this.quantity.fill(0);
    this.findElements();
    this.checkType();
    if (this.checkElements()) {
      this.processHandlers();
    }
  }

  findElements() {
    this.inputField = this.node.querySelector('.js-dropdown__field');
    this.dropdownList = this.node.querySelector('.js-dropdown__list');
    this.minusBtnArr = Array.from(this.node.querySelectorAll('.js-dropdown__minus'));
    this.quantityElemsArr = Array.from(this.node.querySelectorAll('.js-dropdown__quantity'));
    this.plusBtnArr = Array.from(this.node.querySelectorAll('.js-dropdown__plus'));
    this.blockBtns = this.node.querySelector('.js-dropdown__buttons');
    this.clearBtn = this.node.querySelector('.js-dropdown__clear-button');
    this.applyBtn = this.node.querySelector('.js-dropdown__apply-button');
  }

  checkType() {
    const inputContent = this.inputField.innerHTML;
    if (inputContent.includes('гостей')) {
      this.type = 'guests';
    } else if (inputContent.includes('удобства')) {
      this.type = 'beds';
    }
  }

  checkElements() {
    if (this.type === 'guests') {
      return (this.inputField && this.dropdownList && this.minusBtnArr && this.quantityElemsArr
        && this.plusBtnArr && this.clearBtn && this.applyBtn)
    }

    if (this.type === 'beds') {
      return (this.inputField && this.dropdownList && this.minusBtnArr && this.quantityElemsArr && this.plusBtnArr)
    }
  }

  checkQuantity() {
    if (this.quantity.every((elem) => elem === 0)) {
      this.clearBtn.innerHTML = ' ';
      this.minusBtnArr.forEach((elem) => {
        elem.classList.add('dropdown__btn_disabled')
      });
    } else {
      this.clearBtn.innerHTML = 'очистить';
      this.minusBtnArr.forEach((elem) => {
        elem.classList.remove('dropdown__btn_disabled')
      });
    }
  }

  resetQuantity() {
    this.quantity.fill(0);
    this.quantityElemsArr.forEach((elem) => elem.innerHTML = '0');
  }

  handleMinusBtnClick(event) {
    const elem = event.currentTarget;
    const index = this.minusBtnArr.indexOf(elem);

    if (this.quantity[index] !== 0) {
      this.quantity[index] -= 1;
      this.quantityElemsArr[index].innerHTML = this.quantity[index].toString();
    }

    this.checkQuantity();
  }

  handlePlusBtnClick(event) {
    const elem = event.currentTarget;
    const index = this.plusBtnArr.indexOf(elem);
    this.quantity[index] += 1;
    this.quantityElemsArr[index].innerHTML = this.quantity[index].toString();
    this.checkQuantity();
  }

  handleClearBtnClick() {
    this.resetQuantity();
    this.checkQuantity();
  }

  handleApplyBtnClick(e) {
    this.changePlaceholder();
    this.checkQuantity();
    this.handleInputFieldClick(e)
  }

  handleInputFieldClick(e) {
    e.stopPropagation();
    this.changePlaceholder();
    this.checkQuantity();
    this.dropdownList.classList.toggle('dropdown__list_activated');
    this.inputField.classList.toggle('dropdown__field_activated');

    if (this.type === 'guests') {
      this.blockBtns.classList.toggle('dropdown__buttons_activated');
    }

    this.isActive = !this.isActive;
    this.isActive
      ? document.addEventListener('click', this.handleDocumentClick.bind(this))
      : document.removeEventListener('click', this.handleDocumentClick.bind(this));
  }

  handleDocumentClick(e) {
    if (this.isActive && !this.node.contains(e.target)) {
      this.handleInputFieldClick(e);
    }
  }

  changePlaceholder() {
    const expand = '<span class = "material-icons">expand_more</span>';
    if (this.type === 'guests') {
      let quanPeople = parseInt(this.quantityElemsArr[0].innerHTML) + parseInt(this.quantityElemsArr[1].innerHTML);
      let quanBaby = parseInt(this.quantityElemsArr[2].innerHTML);
      if (quanBaby !== 0) {
        this.inputField.innerHTML = `Гостей - ${quanPeople.toString()}, младенцев - ${quanBaby.toString()}` + expand;
      } else {
        if (quanPeople === 0) {
          this.inputField.innerHTML = 'Сколько гостей' + expand;
        } else {
          this.inputField.innerHTML = `Гостей - ${quanPeople.toString()}` + expand;
        }
      }
    }

    if (this.type === 'beds') {
      let quanRoom = parseInt(this.quantityElemsArr[0].innerHTML);
      let quanBed = parseInt(this.quantityElemsArr[1].innerHTML);
      if (quanBed !== 0) {
        this.inputField.innerHTML = `Спален - ${quanRoom.toString()}, кроватей - ${quanBed.toString()} ...` + expand;
      } else {
        if (quanRoom === 0) {
          this.inputField.innerHTML = 'Выберите удобства' + expand;
        } else {
          this.inputField.innerHTML = `Спален - ${quanRoom.toString()}, спать сидя ...` + expand;
        }
      }
    }
  }

  processHandlers() {
    Array.from(this.minusBtnArr, (elem) => {
      elem.onclick = this.handleMinusBtnClick.bind(this);
    });

    Array.from(this.plusBtnArr, (elem) => {
      elem.onclick = this.handlePlusBtnClick.bind(this);
    });

    this.clearBtn.onclick = this.handleClearBtnClick.bind(this);
    this.applyBtn.onclick = this.handleApplyBtnClick.bind(this);
    this.inputField.onclick = this.handleInputFieldClick.bind(this);
  }
}

export default Dropdown;
