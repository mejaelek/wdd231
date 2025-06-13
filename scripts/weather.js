// scripts/weather.js
document.addEventListener('DOMContentLoaded', function () {
    // Mock weather data - in a real application, you would fetch this from a weather API
    const weatherData = {
        current: {
            temp: 72,
            condition: "Partly Cloudy",
            humidity: 65,
            icon: "images/weather-icon.webp"
        },
        forecast: [
            { day: "Mon", temp: 75, icon: "images/sunny.webp" },
            { day: "Tue", temp: 78, icon: "images/sunny.webp" },
            { day: "Wed", temp: 80, icon: "images/partly-cloudy.webp" }
        ]
    };

    // Display current weather
    document.getElementById('current-temp').textContent = weatherData.current.temp;
    document.getElementById('weather-desc').textContent = weatherData.current.condition;
    document.getElementById('humidity').textContent = weatherData.current.humidity;
    document.getElementById('weather-icon').src = weatherData.current.icon;
    document.getElementById('weather-icon').alt = weatherData.current.condition;

    // Display forecast
    const forecastContainer = document.getElementById('forecast-container');
    weatherData.forecast.forEach(day => {
        const forecastDay = document.createElement('div');
        forecastDay.className = 'forecast-day';
        forecastDay.innerHTML = `
            <p><strong>${day.day}</strong></p>
            <img src="${day.icon}" alt="${day.day} weather">
            <p>${day.temp}°F</p>
        `;
        forecastContainer.appendChild(forecastDay);
    });

    // In a real implementation, you would use:
    // fetch('https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=Springfield&days=3')
    //     .then(response => response.json())
    //     .then(data => {
    //         // Process and display real weather data
    //     })
    //     .catch(error => {
    //         console.error('Error fetching weather:', error);
    //     });
});