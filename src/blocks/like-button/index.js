import LikeButton from './LikeButton';

const likeButtons = (document.querySelectorAll('.js-like-button'));

if (likeButtons) {
  likeButtons.forEach((elem) => {
    new LikeButton(elem);
  })
}