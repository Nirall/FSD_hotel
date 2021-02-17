class Carousel {
  constructor(node, dataImages) {
    this.node = node;
    this.init(dataImages);
  }

  init = (dataImages) => {
    this.currentIndex = 0;
    this.spots = [];
    this.findElements();
    this.images = dataImages.split(' ');
    this.img.setAttribute('src', this.images[0]);
    this.createSpots();
    this.bindEventListeners();
  }

  createSpots = () => {
    const spotsElem = this.node.querySelector('.js-carousel__spots');
    this.images.forEach(() => {
      const elem = document.createElement('div');
      elem.classList.add('carousel__spot');
      spotsElem.append(elem);
      this.spots.push(elem);
    });

    this.spots[0].classList.add('carousel__spot_filled');
  }

  bindEventListeners = () => {
    this.node.addEventListener('mouseover', this.handleCarouselMouseOver);
    this.node.addEventListener('mouseout', this.handleCarouselMouseOut);
    this.leftArrow.addEventListener('click', this.handleLeftArrowClick);
    this.rightArrow.addEventListener('click', this.handleRightArrowClick);
  }

  findElements = () => {
    this.img = this.node.querySelector('.js-carousel__img');
    this.arrows = this.node.querySelector('.js-carousel__arrows');
    this.leftArrow = this.node.querySelector('.js-carousel__arrow-left');
    this.rightArrow = this.node.querySelector('.js-carousel__arrow-right');
    this.shadow = this.node.querySelector('.js-carousel__shadows');
  }

  handleArrowClick = (direction) => {
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

  handleLeftArrowClick = () => {
    this.handleArrowClick('backward');
  }

  handleRightArrowClick = () => {
    this.handleArrowClick('forward');
  }

  handleCarouselMouseOver = () => {
    this.shadow.classList.remove('carousel__shadows_hidden');
    this.arrows.classList.remove('carousel__arrows_hidden');
  }

  handleCarouselMouseOut = () => {
    this.shadow.classList.add('carousel__shadows_hidden');
    this.arrows.classList.add('carousel__arrows_hidden');
  }
}

export default Carousel;