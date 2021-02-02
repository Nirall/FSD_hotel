class Carousel {
  constructor(node, dataImages) {
    this.node = node;
    this.currentIndex = 0;
    this.images = [];
    this.img = null;
    this.arrows = null;
    this.leftArrow = null;
    this.rightArrow = null;
    this.shadow = null;
    this.spots = [];
    this.init(dataImages);
  }

  init(dataImages) {
    this.findElements();
    this.images = dataImages.split(' ');
    if (this.images.length > 4) {
      this.images = this.images.slice(0, 3);
    };

    this.img.setAttribute('src', this.images[0]);
    this.node.onmouseover = this.handleCarouselMouseOver.bind(this);
    this.node.onmouseout = this.handleCarouselMouseOut.bind(this);
    this.leftArrow.onclick = this.handleLeftArrowClick.bind(this);
    this.rightArrow.onclick = this.handleRightArrowClick.bind(this);
    this.createSpots();
  }

  findElements() {
    this.img = this.node.querySelector('.js-carousel__img');
    this.arrows = this.node.querySelector('.js-carousel__arrows');
    this.leftArrow = this.node.querySelector('.js-carousel__arrow-left');
    this.rightArrow = this.node.querySelector('.js-carousel__arrow-right');
    this.shadow = this.node.querySelector('.js-carousel__shadow');
  }

  handleArrowClick(direction) {
    if (direction === 'forward') {
      this.currentIndex < this.images.length - 1 ? this.currentIndex += 1 : this.currentIndex = 0;
    } else if (direction === 'backward') {
      this.currentIndex > 0 ? this.currentIndex -= 1 : this.currentIndex = this.images.length - 1;
    };

    this.img.setAttribute('src', this.images[this.currentIndex]);
    this.spots.forEach((spot) => {
      if (this.spots.indexOf(spot) === this.currentIndex) {
        spot.classList.add('carousel__spot_filled');
      } else {
        spot.classList.remove('carousel__spot_filled');
      }
    })
  }

  handleLeftArrowClick() {
    this.handleArrowClick('backward');
  }

  handleRightArrowClick() {
    this.handleArrowClick('forward');
  }

  createSpots() {
    const spotsElem = this.node.querySelector('.js-carousel__spots');
    this.images.forEach((val) => {
      const elem = document.createElement('div');
      elem.classList.add('carousel__spot');
      spotsElem.append(elem);
      this.spots.push(elem);
    });

    this.spots[0].classList.add('carousel__spot_filled');
  }

  handleCarouselMouseOver() {
    this.shadow.classList.remove('carousel__shadow_hidden');
    this.arrows.classList.remove('carousel__arrows_hidden');
  }

  handleCarouselMouseOut() {
    this.shadow.classList.add('carousel__shadow_hidden');
    this.arrows.classList.add('carousel__arrows_hidden');
  }
}

export default Carousel;