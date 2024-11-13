const hamburger = document.querySelector('.hamburger');
const navText = document.querySelector('.nav-text');
const logo = document.querySelector('.logo');
const VideoSecContent = document.querySelector('.video-sec-content');

hamburger.addEventListener('click', () => {
    navText.classList.toggle('show');
    logo.classList.toggle('show');
    VideoSecContent.classList.toggle('show');
});