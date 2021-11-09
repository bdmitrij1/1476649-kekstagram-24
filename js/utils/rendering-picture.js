// import {createPicture} from './create-picture.js';

const pictures = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const renderingPicture = function (imageData) {
  const elementFragment = document.querySelector('#picture').content;
  const imgPicture = elementFragment.querySelector('.picture__img');
  imgPicture.src = imageData.url;

  const commentsPicture = elementFragment.querySelector('.picture__comments');
  commentsPicture.textContent = imageData.comments.id;

  const likesPicture = elementFragment.querySelector('.picture__likes');
  likesPicture.textContent = imageData.likes;

  fragment.appendChild(elementFragment);
  pictures.appendChild(fragment);
};

export {renderingPicture};
