import { isEscapeKey } from './util.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { sendData } from './api.js';
import { showAlert, alertMessage } from './messages.js';

const userFormElement = document.querySelector('.img-upload__form');
const imgUploadOverlayElement = document.querySelector('.img-upload__overlay');
const uploadFileElement = document.querySelector('#upload-file');
const closeButtonElement = document.querySelector('#upload-cancel');
const uploadButtonElement = document.querySelector('#upload-submit');

const blockSubmitButton = () => {
  uploadButtonElement.disabled = true;
  uploadButtonElement.textContent = 'Идет отправка...';
};

const unblockSubmitButton = () => {
  uploadButtonElement.disabled = false;
  uploadButtonElement.textContent = 'Опубликовать';
};

const pristine = new Pristine(userFormElement,
  {
    classTo: 'img-upload__text',
    errorTextParent: 'img-upload__text',
    errorTextClass: 'img-upload__text_error',
  },
  true
);

const showModal = () => {
  imgUploadOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscapeKey);
  userFormElement.addEventListener('submit', onFormSubmitButton);
};

const hideModal = () => {
  userFormElement.reset();
  resetScale();
  resetEffects();
  pristine.reset();
  imgUploadOverlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKey);
  userFormElement.removeEventListener('submit', onFormSubmitButton);
};

function onEscapeKey(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideModal();
  }
}

uploadFileElement.addEventListener('change', () => {
  showModal();
});

closeButtonElement.addEventListener('click', () => {
  hideModal();
});

userFormElement.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

function onFormSubmitButton (evt) {
  evt.preventDefault();

  const isValid = pristine.validate();

  if (isValid) {
    blockSubmitButton();
    const formData = new FormData(evt.target);
    sendData(
      () => {
        hideModal();
        alertMessage('success');
        unblockSubmitButton();
      },
      () => {
        showAlert('error');
        unblockSubmitButton();
      },
      formData
    );
  }
}

export { onFormSubmitButton };
