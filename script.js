// select the slider menu and toggle button
const sliderMenu = document.querySelector('.slider-menu');
const toggleBtn = document.querySelector('.toggle-btn');

// add event listener to toggle button
toggleBtn.addEventListener('click', () => {
  sliderMenu.classList.toggle('open');
});
