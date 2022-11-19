import { getData } from './api.js';
import { alertMessage } from './messages.js';

const formPicturesElement = document.querySelector('.pictures');
const templatePicturesElement = document.querySelector('#picture').content.querySelector('.picture');

const similarPicture = (usersPictures) => {
  const usersPicturesFragment = document.createDocumentFragment();

  usersPictures.forEach(({url, likes, comments}) => {
    const pictureElement = templatePicturesElement.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    usersPicturesFragment.appendChild(pictureElement);
  });

  formPicturesElement.append(usersPicturesFragment);
};

getData(similarPicture, alertMessage);
