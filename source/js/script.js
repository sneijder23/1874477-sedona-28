// Мобильное меню сайта
const mainNavToggle = document.querySelector('.main-nav__toggle');
const mainNavSiteList = document.querySelector('.main-nav');

mainNavSiteList.classList.remove('main-nav--nojs');
mainNavSiteList.classList.add('main-nav--close');

mainNavToggle.addEventListener('click', function () {
  if (mainNavSiteList.classList.contains('main-nav--close')) {
    mainNavSiteList.classList.replace('main-nav--close', 'main-nav--open');
  } else {
    mainNavSiteList.classList.replace('main-nav--open', 'main-nav--close');
  }
});


if (window.location.pathname === '/index.html') {
  const mapImage = document.querySelector('.map__wrapper');

  mapImage.classList.remove('map__wrapper--nojs')
}


const formElement = document.querySelector('.form__submit');

formElement?.addEventListener('click', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name');
  const surname = document.querySelector('#surname');
  const tel = document.querySelector('#telephone');
  const email = document.querySelector('#email');


  const isNameError = name.value === '';
  const isSurnameError = surname.value === '';
  const isTelephoneError = tel.value === '' || !tel.value.match(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);
  const isEmailError = email.value === '' || !email.value.match(/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,4}$/);

  if (isNameError || isSurnameError || isTelephoneError || isEmailError) {
    document.querySelector('.modal--error').classList.add('modal--open');
  } else {
    document.querySelector('.modal--success').classList.add('modal--open');
  }
});

if (window.location.pathname === '/form.html') {
  const modalContainers = document.querySelectorAll('.modal');
  const closeButtonError = document.querySelector('.modal__button--main');
  const closeButtonSuccess = document.querySelector('.modal__button--secondary');

  closeButtonError?.addEventListener('click', () => {
    modalContainers.forEach((container) => {
      if (container.classList.contains('modal--error')) {
        container.classList.remove('modal--open');
      }
    })
  });

  closeButtonSuccess?.addEventListener('click', () => {
    modalContainers.forEach((container) => {
      if (container.classList.contains('modal--success')) {
        container.classList.remove('modal--open');
      }
    })
  });
};
