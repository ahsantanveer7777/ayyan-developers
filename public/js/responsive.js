
const hamburger = document.querySelector('.hamburger');
const navText = document.querySelector('.nav-text');
const logo = document.querySelector('.logo');
const h4 = document.querySelector('.h4');

hamburger.addEventListener('click', () => {
    navText.classList.toggle('show');
    logo.classList.toggle('show');
    h4.classList.toggle('show');
});


