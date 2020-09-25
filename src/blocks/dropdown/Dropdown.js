class Dropdown {
  constructor(elem) {
    this.node = elem;
    this.init();
  }

  findElements() {
    this.inputField = this.node.querySelector('.js-dropdown__field') || null;
    this.dropdownList = this.node.querySelector('.js-dropdown__list') || null;
    this.minusBtnArr = this.node.querySelectorAll('.js-dropdown__minus') || null;
    this.quantityArr = this.node.querySelectorAll('.js-dropdown__quantity') || null;
    this.plusBtnArr = this.node.querySelectorAll('.js-dropdown__plus') || null;
    this.blockBtns = this.node.querySelector('.js-dropdown__buttons') || null;
    this.clearBtn = this.node.querySelector('.js-dropdown__clear') || null;
    this.applyBtn = this.node.querySelector('.js-dropdown__apply') || null;
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

  handlersProcessing() {
    const placeholderChanger = () => {
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

    Array.from(this.minusBtnArr, (elem) => {
      elem.onclick = () => {
        let content = elem.nextSibling.innerHTML;
        if (content !== '0') {
          let newContent = parseInt(content) - 1;
          elem.nextSibling.innerHTML = newContent.toString();
        }
      }
    });

    Array.from(this.plusBtnArr, (elem) => {
      elem.onclick = () => {
        let content = elem.previousSibling.previousSibling.innerHTML;
        let newContent = parseInt(content) + 1;
        elem.previousSibling.previousSibling.innerHTML = newContent.toString();
      };
    });

    this.clearBtn.onclick = () => {
      this.quantityArr.forEach((quan) => quan.innerHTML = '0');
    }

    this.applyBtn.onclick = () => {
      placeholderChanger();
      this.dropdownList.classList.remove('dropdown__list_activated');
      this.inputField.classList.remove('dropdown__field_activated');
      this.blockBtns.classList.remove('dropdown__buttons_activated');
    }

    this.inputField.onclick = () => {
      placeholderChanger();
      this.dropdownList.classList.toggle('dropdown__list_activated');
      this.inputField.classList.toggle('dropdown__field_activated');
      this.quantityArr.forEach((quan) => quan.innerHTML = '0');
      if (this.type === 'guests') {
        this.blockBtns.classList.toggle('dropdown__buttons_activated');
      }
    }
  }

  init() {
    this.findElements();
    this.typeCheck();
    if (this.elemsCheck) {
      this.handlersProcessing();
    }
  }
}

if (document.querySelectorAll('.js-dropdown')) {
  document.querySelectorAll('.js-dropdown').forEach((elem) => {
    new Dropdown(elem);
  })
}
