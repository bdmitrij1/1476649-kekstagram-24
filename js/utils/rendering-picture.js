const pictures = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const renderingPicture = function (imagesData) {
  imagesData.forEach((imageData) => {
    const elementFragment = document.querySelector('#picture').content.cloneNode(true);
    const imgPicture = elementFragment.querySelector('.picture__img');
    imgPicture.src = imageData.url;

    const commentsPicture = elementFragment.querySelector('.picture__comments');
    commentsPicture.textContent = imageData.comments.length;

    const likesPicture = elementFragment.querySelector('.picture__likes');
    likesPicture.textContent = imageData.likes;

    fragment.appendChild(elementFragment);

  });
  pictures.appendChild(fragment);
};

export {renderingPicture};
