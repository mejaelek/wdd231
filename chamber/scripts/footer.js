document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    const modifiedSpan = document.getElementById('lastModified');

    yearSpan.textContent = new Date().getFullYear();
    modifiedSpan.textContent = document.lastModified;
});

