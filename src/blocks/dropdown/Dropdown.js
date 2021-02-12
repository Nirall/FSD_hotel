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
      const quanPeople = this.quantity[0] + this.quantity[1];
      const quanBaby = this.quantity[2];
      let guestText;
      if (quanPeople === 1) {
        guestText = "1 гость";
      } else if (quanPeople <= 4) {
        guestText = `${quanPeople} гостя`;
      } else if (quanPeople > 4) {
        guestText = `${quanPeople} гостей`;
      }

      let babyText;
      if (quanBaby === 1) {
        babyText = "1 младенец";
      } else if (quanBaby <= 4) {
        babyText = `${quanBaby} младенца`;
      } else if (quanBaby > 4) {
        babyText = `${quanBaby} младенцев`;
      }

      let resultText = '';
      if (quanBaby && quanPeople) {
        resultText = `${guestText}, ${babyText}`;
      } else if (quanPeople) {
        resultText = `${guestText}`;
      } else if (quanBaby) {
        resultText = `${babyText}`;
      } else {
        resultText = 'Сколько гостей';
      }

      this.inputField.innerHTML = resultText + expand;
    }


    if (this.type === 'beds') {
      const quanRoom = this.quantity[0];
      const quanBed = this.quantity[1];
      const quanBath = this.quantity[2];
      let roomtText;
      if (quanRoom === 1) {
        roomtText = "1 спальня";
      } else if (quanRoom <= 4) {
        roomtText = `${quanRoom} спальни`;
      } else if (quanRoom > 4) {
        roomtText = `${quanRoom} спален`;
      }

      let bedText;
      if (quanBed === 1) {
        bedText = "1 кровать";
      } else if (quanBed <= 4) {
        bedText = `${quanBed} кровати`;
      } else if (quanBed > 4) {
        bedText = `${quanBed} кроватей`;
      }

      let resultText = '';
      if (quanRoom && quanBed && quanBath) {
        resultText = `${roomtText}, ${bedText}...`;
      } else if (quanRoom && quanBed) {
        resultText = `${roomtText}, ${bedText}`;
      } else if (quanRoom) {
        resultText = `${roomtText}`;
      } else if (quanBed) {
        resultText = `${bedText}`;
      } else {
        resultText = 'Выберите удобства';
      }

      this.inputField.innerHTML = resultText + expand ;
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
