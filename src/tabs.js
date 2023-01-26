const menuItems = Array.from(
  document.getElementById('menu').children
);
const sections = Array.from(
  document.getElementById('sections').children
);
const frontpage = document.getElementById('Home');
const midpage = document.getElementById('About');
const lastpage = document.getElementById('Contact');
const colorBlock = document.getElementById('color-block');

menuItems.forEach((item) =>
  item.addEventListener('click', toggleActiveTab)
);

const showAnimation = [
  { transform: 'translateX(-120%)' },
  { transform: 'translateX(0)' },
];

const hideAnimation = [
  { transform: 'translateX(0)' },
  { transform: 'translateX(-120%)' },
];

const timingNoDelay = {
  duration: 500,
  fill: 'forwards',
  easing: 'ease',
};
const timingWithDelay = {
  duration: 500,
  delay: 500,
  fill: 'forwards',
  easing: 'ease',
};

const moveTabAnimation = (to) => {
  if (window.innerWidth < 720) {
    return [{ transform: `translateX(${to})` }];
  } else {
    return [{ transform: `translateY(${to})` }];
  }
};

function toggleActiveTab(event) {
  switch (event.target.innerText) {
    case frontpage.id:
      frontpage.style.zIndex = 20;
      midpage.style.zIndex = 1;
      lastpage.style.zIndex = 0;

      frontpage.animate(showAnimation, timingNoDelay);
      midpage.animate(hideAnimation, timingWithDelay);
      lastpage.animate(hideAnimation, timingWithDelay);

      colorBlock.style.backgroundColor = '#A8E5CF';
      colorBlock.animate(moveTabAnimation(0), timingNoDelay);
      break;
    case midpage.id:
      midpage.style.zIndex = 20;
      lastpage.style.zIndex = 0;
      frontpage.style.zIndex = 1;

      frontpage.animate(hideAnimation, timingWithDelay);
      midpage.animate(showAnimation, timingNoDelay);
      lastpage.animate(hideAnimation, timingWithDelay);

      colorBlock.style.backgroundColor = '#FFD3B6';
      colorBlock.animate(moveTabAnimation('100%'), timingNoDelay);
      break;
    case lastpage.id:
      lastpage.style.zIndex = 20;
      frontpage.style.zIndex = 1;
      midpage.style.zIndex = 0;

      frontpage.animate(hideAnimation, timingWithDelay);
      midpage.animate(hideAnimation, timingWithDelay);
      lastpage.animate(showAnimation, timingNoDelay);

      colorBlock.style.backgroundColor = '#FF8B94';
      colorBlock.animate(moveTabAnimation('200%'), timingNoDelay);
      break;
  }
}
