function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function () {
    let testimonials = document.querySelectorAll(".testimonial");
    let index = 0;

    function showTestimonial() {
        testimonials.forEach((t, i) => {
            t.style.display = i === index ? "block" : "none";
        });
        index = (index + 1) % testimonials.length;
    }

    setInterval(showTestimonial, 3000);
    showTestimonial();
});
