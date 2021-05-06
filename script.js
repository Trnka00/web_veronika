'use-strict';

const carouselContainer = document.querySelector('.carousel');
const carouselButtons = document.querySelectorAll('.carousel__btn');
const burgerMenu = document.querySelector('.burger-menu');

carouselButtons.forEach(btn =>
  btn.addEventListener('click', function () {
    carouselButtons.forEach(item => (item.style.backgroundColor = '#fffaf6'));
    let imgID = this.dataset.current;
    carouselContainer.style.backgroundImage = `url('fotky/carousel_${imgID}.jpg')`;
    btn.style.backgroundColor = '#fffaf67a';
  })
);

let isClicked = true;

document.querySelector('.burger-links').style.display = 'none';

burgerMenu.addEventListener('click', function () {
  if (!isClicked) {
    document
      .querySelector('.burger-links')
      .animate(
        [{ transform: 'translateX(0px)' }, { transform: 'translateX(95%)' }],
        {
          duration: 300,
          easing: 'ease-in',
        }
      );
    setTimeout(() => {
      document.querySelector('.burger-links').style.display = 'none';
    }, 300);
    document.querySelector('.burger-links').style.transform =
      'translateX(100%)';
    // document.querySelector('.burger-links').style.display = 'none';
    isClicked = true;
  } else {
    document
      .querySelector('.burger-links')
      .animate(
        [
          { transform: 'translateX(100%)' },
          { transform: 'translateX(-0.5rem)' },
        ],
        {
          duration: 300,
          easing: 'ease-out',
        }
      );
    document.querySelector('.burger-links').style.transform = 'translateX(0%)';
    document.querySelector('.burger-links').style.top = '10rem';
    document.querySelector('.burger-links').style.right = '0';
    document.querySelector('.burger-links').style.display = 'flex';
    isClicked = false;
  }
});

('use-strict');

const buttonNext = document.getElementById('btn-next');
const buttonPrevious = document.getElementById('btn-previous');
const allPics = document.querySelectorAll('.pic');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');

let currentPosition = 0;

allPics[0].classList.add('visible');

buttonNext.addEventListener('click', () => {
  if (currentPosition === 2) {
    currentPosition = 0;
  } else {
    currentPosition++;
  }

  allPics.forEach(el => el.classList.remove('visible'));
  allPics[currentPosition].classList.add('visible');
});

buttonPrevious.addEventListener('click', () => {
  if (currentPosition === 0) {
    currentPosition = 2;
  } else {
    currentPosition--;
  }
  allPics.forEach(el => el.classList.remove('visible'));
  allPics[currentPosition].classList.add('visible');
});
