// Common JavaScript for all pages
document.addEventListener('DOMContentLoaded', function () {
    // Hamburger menu functionality
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const primaryNav = document.getElementById('primaryNav');

    hamburgerBtn.addEventListener('click', function () {
        primaryNav.classList.toggle('hidden');
    });

    // Current date in header
    const dateElement = document.querySelector('.date');
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = currentDate.toLocaleDateString('en-US', options);

    // Footer year and last modified
    document.getElementById('currentYear').textContent = currentDate.getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
}); 