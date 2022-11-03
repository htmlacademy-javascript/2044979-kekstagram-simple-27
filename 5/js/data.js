import {getRandomArrayElement, getRandomIntInclusive} from './util.js';

const PICTURE_COUNT = 25;

const LIKES_COUNT = {
  MIN: 15,
  MAX: 200,
};

const COMMENTS_COUNT = {
  MIN: 0,
  MAX: 200,
};

const DESCRIPTIONS = [
  'Зачем я это сфоткал?',
  'Сейчас бы на работу, а не вот это вот все...',
  'А, что собственно говоря происходит?',
  'Вау, вот это красота',
  'Это было хорошее времяпрепровождение',
  'Шикарный вид',
  'Не очень получилось',
  'Это просто великолепно!',
  'Это войдет в историю!',
];

const getListElements = (counter) => {
  const newArray = [];
  for (let i = 1; i <= counter; i++) {
    newArray.push(i);
  }
  return newArray;
};

const ID_ARRAY = getListElements(25);

const createPicture = () => ({
  id: getRandomArrayElement(ID_ARRAY),
  url: `photos/${getRandomArrayElement(ID_ARRAY)}.jpg`,
  description:  getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomIntInclusive(LIKES_COUNT.MIN, LIKES_COUNT.MAX),
  comments: getRandomIntInclusive(COMMENTS_COUNT.MIN, COMMENTS_COUNT.MAX),
});

const getPictures = () =>
  Array.from({length: PICTURE_COUNT}, createPicture);

export {getPictures};

