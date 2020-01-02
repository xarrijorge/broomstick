// Open when someone clicks on the span element
function openNav() {
  document.getElementById('myNav').style.width = '100%';
  document.getElementById('mobileNavBurger').style.display = 'none';
}

// Close when someone clicks on the "x" symbol inside the overlay
function closeNav() {
  document.getElementById('myNav').style.width = '0%';
  document.getElementById('mobileNavBurger').style.display = 'inline-block';
}

const hideArrowOnScroll = () => {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop;
  let hideOn = 10;
  let bannerCon = document.getElementById('arrowBoy');

  if (distanceY > hideOn) {
    bannerCon.classList.add('transparent');
  } else {
    bannerCon.classList.remove('transparent');
  }
};

window.addEventListener('scroll', hideArrowOnScroll);

const changeHeaderOnScroll = () => {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop;
  let hideOn = 710;
  let headerCon = document.getElementById('headerContainer');

  if (distanceY > hideOn) {
    headerCon.classList.add('whiteContainer');
  } else if (distanceY < hideOn) {
    headerCon.classList.remove('whiteContainer');
  }
};

window.addEventListener('scroll', changeHeaderOnScroll);

const featureSquareAppear = () => {
  const distanceY = document.documentElement.scrollTop;
  let reveal = 660;
  let feature = document.getElementById('featureOne');
  let feature2 = document.getElementById('featureTwo');
  let feature3 = document.getElementById('featureThree');

  if (distanceY < reveal) {
    feature.classList.add('transparent');
    feature2.classList.add('transparent');
    feature3.classList.add('transparent');
  } else {
    feature.classList.remove('transparent');
    feature2.classList.remove('transparent');
    feature3.classList.remove('transparent');
  }
};

window.addEventListener('scroll', featureSquareAppear);

const featureSquareSlide = () => {
  const distanceY = document.documentElement.scrollTop;
  let slide = 1000;
  let feature = document.getElementById('featureOneIcon');
  let feature2 = document.getElementById('featureTwo');
  let feature3 = document.getElementById('featureThree');

  if (distanceY > slide) {
    feature.style.animation = 'slidein 3s';
    feature2.classList.add('slidein');
    feature3.classList.add('slidein');
  }
};

window.addEventListener('scroll', featureSquareSlide);
