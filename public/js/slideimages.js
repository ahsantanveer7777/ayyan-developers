// Java Script for Automatic & Manual Slide Show Images on Home Page:  
let slideIndex = 0;
let slideTimer;  // Declare timer globally

// Function to show slides and reset the timer when necessary
const showSlides = ((n) => {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and set the active dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
});

// Function to increment/decrement slide manually
const plusSlides = ((n) => {
    slideIndex += n;
    if (slideIndex > document.getElementsByClassName("mySlides").length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = document.getElementsByClassName("mySlides").length;
    }
    showSlides(slideIndex);
    resetTimer();  // Reset the timer when manual slide change occurs
});

// Function to go to a specific slide
const currentSlide = ((n) => {
    slideIndex = n;
    showSlides(slideIndex);
    resetTimer();  // Reset the timer when specific slide is selected
});

// Automatically change slides every 3 seconds
const autoSlide = (() => {
    slideIndex++;
    showSlides(slideIndex);
});

// Start or reset the timer when needed
const resetTimer = (() => {
    clearInterval(slideTimer);  // Clear the previous timer
    slideTimer = setInterval(autoSlide, 3000);  // Restart the auto-slideshow
});

// Initialize the slideshow
const initSlideshow = (() => {
    showSlides(slideIndex = 1);  // Start with the first slide
    resetTimer();  // Start the timer
});

initSlideshow();  // Start the slideshow when the page loads