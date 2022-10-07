// Источник функции https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min > max) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive(5, 10);

const checkLineLenght = (line, maxLenght) => String.length < maxLenght;

checkLineLenght('', 140);
