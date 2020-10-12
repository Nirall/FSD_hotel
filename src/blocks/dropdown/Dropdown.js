class Dropdown {
  constructor(elem) {
    this.node = elem;
    this.init();
  }

  findElements() {
    this.inputField = this.node.querySelector('.js-dropdown__field');
    this.dropdownList = this.node.querySelector('.js-dropdown__list');
    this.minusBtnArr = this.node.querySelectorAll('.js-dropdown__minus');
    this.quantityArr = this.node.querySelectorAll('.js-dropdown__quantity');
    this.plusBtnArr = this.node.querySelectorAll('.js-dropdown__plus');
    this.blockBtns = this.node.querySelector('.js-dropdown__buttons');
    this.clearBtn = this.node.querySelector('.js-dropdown__clear-button');
    this.applyBtn = this.node.querySelector('.js-dropdown__apply-button');
  }

  typeCheck() {
    if (
      this.inputField.innerHTML.split('<span')[0] === 'Сколько гостей'
      || this.inputField.innerHTML.split(' ')[0] === 'Гостей'
    ) {
        this.type = 'guests';
    } else if (
      this.inputField.innerHTML.split('<span')[0] == 'Выберите удобства'
      || this.inputField.innerHTML.split(' ')[0] == 'Спален'
    ) {
      this.type = 'beds';
    }
  }

  elemsCheck() {
    if (this.type === 'guests') {
      return (this.inputField && this.dropdownList && this.minusBtnArr && this.quantityArr
        && this.plusBtnArr && this.clearBtn && this.applyBtn)
    }

    if (this.type === 'beds') {
      return (this.inputField && this.dropdownList && this.minusBtnArr && this.quantityArr && this.plusBtnArr)
    }
  }

  quantityCheck() {
    const arr = [];
    this.quantityArr.forEach((elem) => arr.push(elem.innerHTML !== "0"));

    if (arr.every((elem) => elem === false)) {
      this.clearBtn.innerHTML = " ";

      this.minusBtnArr.forEach((elem) => {
        elem.classList.add("dropdown__btn_disabled")
      });
    } else {
      this.clearBtn.innerHTML = "очистить";
      this.minusBtnArr.forEach((elem) => {
        elem.classList.remove("dropdown__btn_disabled")
      });
    }
  }

  quantityReset() {
    this.quantityArr.forEach((quan) => quan.innerHTML = '0');
  }

  handleMinusBtnClick(event) {
    const elem = event.currentTarget;
    let content = elem.nextSibling.innerHTML;

    if (content !== '0') {
      let newContent = parseInt(content) - 1;
      elem.nextSibling.innerHTML = newContent.toString();
    }

    this.quantityCheck();
  }

  handlePlusBtnClick(event) {
    const elem = event.currentTarget;
    let content = elem.previousSibling.previousSibling.innerHTML;
    let newContent = parseInt(content) + 1;
    elem.previousSibling.previousSibling.innerHTML = newContent.toString();
    this.quantityCheck();
  }

  handleClearBtnClick() {
    this.quantityReset();
    this.quantityCheck();
  }

  handleApplyBtnClick() {
    this.placeholderChanger();
    this.quantityCheck();
    this.dropdownList.classList.remove('dropdown__list_activated');
    this.inputField.classList.remove('dropdown__field_activated');
    this.blockBtns.classList.remove('dropdown__buttons_activated');
    this.quantityReset();
  }

  handleInputFieldClick() {
    this.placeholderChanger();
    this.quantityCheck();
    this.dropdownList.classList.toggle('dropdown__list_activated');
    this.inputField.classList.toggle('dropdown__field_activated');
    this.quantityReset();

    if (this.type === 'guests') {
      this.blockBtns.classList.toggle('dropdown__buttons_activated');
    }
  }

  placeholderChanger() {
    const expand = '<span class = "material-icons">expand_more</span>';
    if (this.type === 'guests') {
      let quanPeople = parseInt(this.quantityArr.item(0).innerHTML) + parseInt(this.quantityArr.item(1).innerHTML);
      let quanBaby = parseInt(this.quantityArr.item(2).innerHTML);
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
      let quanRoom = parseInt(this.quantityArr.item(0).innerHTML);
      let quanBed = parseInt(this.quantityArr.item(1).innerHTML);
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

  handlersProcessing() {
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

  init() {
    this.findElements();
    this.typeCheck();
    if (this.elemsCheck) {
      this.handlersProcessing();
    }
  }
}

export default Dropdown;
