// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

// Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".post-box").show("1000");
        } else {
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
                .filter("." + value)
                .show("1000");
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

// Slider
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const slider = document.querySelector('.slider');

    let index = 0;
    const totalSlides = slides.length;

    // Function to show the slide based on the current index
    function showSlide(newIndex) {
        // Update index and prevent it from going out of bounds
        index = (newIndex + totalSlides) % totalSlides; // Wrap around using modulo
        slider.style.transition = 'transform 0.5s ease-in-out'; // Set the transition for sliding
        slider.style.transform = `translateX(-${index * 100}%)`; // Move the slider
    }

    nextButton.addEventListener('click', () => {
        showSlide(index + 1); // Go to the next slide
    });

    prevButton.addEventListener('click', () => {
        showSlide(index - 1); // Go to the previous slide
    });

    // Keyboard navigation
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            showSlide(index + 1); // Move to the next slide on right arrow
        } else if (event.key === 'ArrowLeft') {
            showSlide(index - 1); // Move to the previous slide on left arrow
        }
    });

    // Optional: Automatic sliding
    setInterval(() => {
        showSlide(index + 1); // Automatically slide to the next
    }, 20000); // Change slide every 20 seconds
});
