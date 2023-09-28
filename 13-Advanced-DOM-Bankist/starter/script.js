'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault;
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Scroll to an element with the ID "targetElement"

document
  .querySelector('.btn--scroll-to')
  .addEventListener('click', function () {
    const targetElement = document.getElementById('section--1');
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });

/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');

// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// const message = document.createElement('div');
// message.classList.add('cookie-message');

// message.innerHTML =
//   'We use cookied for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';

//header
//header.prepend(message);

//header.append(message);

//header.before(message);
// header.after(message);

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });
//style
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// //document.documentElement.style.setProperty('--color-primary', 'orangered');
// //atributes
// console.log('-------------------------------------------------------------');
// //full class
// const logo = document.querySelector('.nav__logo');
// //console.log(logo);
// console.log(logo.getAttribute('designer'));
// //absolute way
// console.log(logo.src);
// //relative way
// console.log(logo.getAttribute('src'));

// console.log('===================================');
// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// //Data Attributes
// console.log(logo.dataset.versionNumber);

// //Classes
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// Event listener

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('AddEventListener: Great! you are readiing the heading :D');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };
