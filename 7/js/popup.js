import {getPictures} from './data.js';

const formPictures = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPicture = getPictures();

const similarListFragment = document.createDocumentFragment();

similarPicture.forEach(({url, likes, comments}) => {
  const pictureElement = picturesTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  similarListFragment.appendChild(pictureElement);

});

formPictures.append(similarListFragment);
