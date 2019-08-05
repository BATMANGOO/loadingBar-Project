'use strict';
const loadingBarItemEl = document.querySelector('.loading-bar__item');
const buttonEls = document.getElementsByClassName('button');
const buttonContainer = document.querySelector('.button__container');

function hardCodedLoading() {
  buttonContainer.addEventListener('click', function(e) {
    if(e.target === this.firstElementChild) {
      loadingBarItemEl.style.width = `${'25%'}`;
    } else if (e.target === this.children[1]) {
      loadingBarItemEl.style.width = `${'50%'}`;
    } else if (e.target === this.children[2]) {
      loadingBarItemEl.style.width = `${'75%'}`;
    } else if (e.target === this.lastElementChild) {
      loadingBarItemEl.style.width = `${'100%'}`;
    }
  });
}

hardCodedLoading();


// let width = 1;
// let loadingBar = setInterval(() => {
//   if (width >= 100) {
//     clearInterval();
//   } else {
//     width ++;
//     loadingBarItemEl.style.width = width + '%';
//   }
// }, 10);

