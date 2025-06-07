// ===== CORE FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function () {
    // Set footer dates
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

    // Mobile menu toggle
    const menuButton = document.getElementById('menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', function () {
            const nav = document.querySelector('nav');
            nav.classList.toggle('open');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            const nav = document.querySelector('nav');
            if (nav.classList.contains('open')) {
                nav.classList.remove('open');
            }
        });
    });

    // Animate elements on scroll
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.animate');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    // Card hover effects
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
        });
        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
    });

    // Load weather data (example)
    const loadWeather = async function () {
        try {
            // Replace with actual weather API call
            const weatherWidget = document.getElementById('weather-widget');
            weatherWidget.innerHTML = `
                <p>Partly Cloudy</p>
                <p>24°C</p>
                <p>Humidity: 65%</p>
            `;
        } catch (error) {
            console.error('Error loading weather:', error);
        }
    };

    loadWeather();
});