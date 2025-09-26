document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.sidebar .close');
    if (hamburger && sidebar) {
        hamburger.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }
    if (closeBtn && sidebar) {
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }

    // Simple hero carousel logic
    const images = document.querySelectorAll('.hero-carousel .hero-image');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let current = 0;

    function showImage(idx) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === idx);
        });
    }

    if (prevBtn && nextBtn && images.length > 1) {
        prevBtn.addEventListener('click', () => {
            current = (current - 1 + images.length) % images.length;
            showImage(current);
        });
        nextBtn.addEventListener('click', () => {
            current = (current + 1) % images.length;
            showImage(current);
        });
    }
});
