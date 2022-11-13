const MAX_SCALE = 100;
const MIN_SCALE = 25;
const SCALE_STEP = 25;
const DEFAULT_SCALE = 100;

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const img = document.querySelector('.img-upload__preview img');

const scaleImage = (value = DEFAULT_SCALE) => {
  img.style.transform = `scale(${value / DEFAULT_SCALE})`;
  scaleInput.value = `${value}`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

const resetScale = () => {
  scaleImage();
};

smallerButton.addEventListener ('click', onSmallerButtonClick);
biggerButton.addEventListener ('click', onBiggerButtonClick);

export { resetScale };
