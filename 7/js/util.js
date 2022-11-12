const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0 || min === max) {
    return NaN;
  }

  if (min > max) {
    return NaN;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkLineLenght = (line, maxLenght) => String.length < maxLenght;

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomArrayElement, getRandomIntInclusive, checkLineLenght, isEscapeKey};
