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
