// JavaScript for tracking last visit
document.addEventListener('DOMContentLoaded', function () {
    const lastVisitElement = document.getElementById('lastVisit');
    const lastVisitKey = 'lastVisitDate';
    const currentDate = Date.now();
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day

    // Get last visit date from localStorage
    const lastVisitDate = localStorage.getItem(lastVisitKey);

    if (!lastVisitDate) {
        // First visit
        lastVisitElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = Math.floor((currentDate - lastVisitDate) / oneDay);

        if (daysSinceLastVisit < 1) {
            lastVisitElement.textContent = "Back so soon! Awesome!";
        } else {
            const dayText = daysSinceLastVisit === 1 ? "day" : "days";
            lastVisitElement.textContent = `You last visited ${daysSinceLastVisit} ${dayText} ago.`;
        }
    }

    // Store current visit date
    localStorage.setItem(lastVisitKey, currentDate);
});