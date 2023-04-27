// Мобильное меню сайта
const mainNavToggle = document.querySelector('.main-nav__toggle');
const mainNavSiteList = document.querySelector('.main-nav');

mainNavSiteList.classList.remove('.main-nav--nojs');
mainNavSiteList.classList.add('main-nav--close');

mainNavToggle.addEventListener('click', function () {
  if (mainNavSiteList.classList.contains('main-nav--close')) {
    mainNavSiteList.classList.replace('main-nav--close', 'main-nav--open');
  } else {
    mainNavSiteList.classList.replace('main-nav--open', 'main-nav--close');
  }
});


// Модальное окно страницы Форма
const form = document.querySelector('.form');
const errorModal = document.querySelector('.modal__container--error');
const successModal = document.querySelector('.modal__container--success');
const successCloseButton = successModal.querySelector('.modal__button');
const errorCloseButton = errorModal.querySelector('.modal__button');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // предотвращаем отправку формы по умолчанию

  // проверяем, прошла ли валидация формы
  if (form.checkValidity()) {
    // если успешно
    successModal.classList.add('modal__container--open');
  } else {
    // если есть ошибки
    errorModal.classList.add('modal__container--open');
  }
});


successCloseButton.addEventListener('click', function () {
  successModal.classList.remove('modal__container--open');
});

errorCloseButton.addEventListener('click', function () {
  errorModal.classList.remove('modal__container--open');
});
