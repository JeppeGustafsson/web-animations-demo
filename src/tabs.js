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
colorBlock.style.backgroundColor = '#A8E5CF';

menuItems.forEach((item) =>
  item.addEventListener('click', toggleActiveTab)
);

function toggleActiveTab(event) {
  if (
    event.target.innerText === frontpage.id &&
    !frontpage.className.includes('active')
  ) {
    frontpage.classList.add('active');
    midpage.classList.remove('active');
    lastpage.classList.remove('active');

    colorBlock.style.backgroundColor = '#A8E5CF';
    if (window.innerWidth < 720) {
      colorBlock.style.left = '0';
    } else {
      colorBlock.style.top = '0';
    }
  }
  if (
    event.target.innerText === midpage.id &&
    !midpage.className.includes('active')
  ) {
    frontpage.classList.remove('active');
    midpage.classList.add('active');
    lastpage.classList.remove('active');

    colorBlock.style.backgroundColor = '#FFD3B6';
    if (window.innerWidth < 720) {
      colorBlock.style.left = '33%';
    } else {
      colorBlock.style.top = '33%';
    }
  }
  if (
    event.target.innerText === lastpage.id &&
    !lastpage.className.includes('active')
  ) {
    frontpage.classList.remove('active');
    midpage.classList.remove('active');
    lastpage.classList.add('active');

    colorBlock.style.backgroundColor = '#FF8B94';
    if (window.innerWidth < 720) {
      colorBlock.style.left = '68%';
    } else {
      colorBlock.style.top = '68%';
    }
  }
}
