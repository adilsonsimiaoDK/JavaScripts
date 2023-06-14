'use strict';
// document.querySelector('.show-modal').addEventListener('click', function () {
//   const modal = document.querySelectorAll('.modal');
//   modal.style.display = 'block';
// });

// document.querySelector('.close-modal').addEventListener('click', function () {
//   const closeModal = document.querySelector('.modal');
//   closeModal.style.display = 'none';
// });
// document.querySelector('.overlay').addEventListener('click', function () {
//   const overlay = document.querySelector('.modal');
// });
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalClosebtn = document.querySelector('.close-modal');
const modalOpenbtn = document.querySelectorAll('.show-modal');

// Function open and show of button content
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//Function close of button content
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for to open * buttons with the same names
for (let i = 0; i < modalOpenbtn.length; i++)
  modalOpenbtn[i].addEventListener('click', openModal);

modalClosebtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// for (let i = 0; i < modalOpenbtn.length; i++)
//   modalOpenbtn[i].addEventListener('click', function () {
//     console.log('Button');
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });

// for (let i = 0; i < modalClosebtn.length; i++)
//   modalClosebtn[i].addEventListener('click', function () {
//     console.log('Button');
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
//   });

//Event for close screen with keyboard I used button escape
document.addEventListener('keydown', function (ev) {
  if (ev.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
  console.log('press');
  console.log(ev.key);
});
