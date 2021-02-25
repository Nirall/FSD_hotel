class LikeButton {
  constructor(elem) {
    this.node = elem;
    this.init();
  }

  init = () => {
    this.icon = this.node.querySelector('.js-like-button__icon');
    this.bindEventListeners();
  }

  bindEventListeners = () => {
    this.node.addEventListener('click', this.handleButtonClick);
  }

  handleButtonClick = () => {
    const iconContent = this.icon.innerHTML;
    this.icon.innerHTML = iconContent === 'favorite' ? 'favorite_border' : 'favorite';
    this.node.classList.toggle('like-button_activated');
  }
}

export default LikeButton;