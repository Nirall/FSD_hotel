class RateButton {
  constructor(node) {
    this.node = node;
    this.init();
  }

  init = () => {
    this.stars = Array.from(this.node.children);
    this.bindEventListeners();
  }

  bindEventListeners = () => {
    this.stars.forEach((star) => {
      star.onclick = this.handleStarClick;
    });
  }

  update = (elem) => {
    const targetIndex = this.stars.indexOf(elem);
    this.stars.forEach((star, index) => {
      if (index <= targetIndex) {
        star.innerHTML = 'star';
      } else {
        star.innerHTML = 'star_border';
      }
    });
  }

  handleStarClick = (event) => {
    this.update(event.target);
  }
}

export default RateButton;