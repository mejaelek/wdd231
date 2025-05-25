document.addEventListener("DOMContentLoaded", () => {
    loadWeather();
    loadMembers();
});

// 🎯 Function: Fetch and Display Weather Data
function loadWeather() {
    const apiKey = "YOUR_API_KEY";
    const city = "Bloemfontein,ZA";
    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById("weather-info");
            const currentTemp = data.list[0].main.temp;
            const description = data.list[0].weather[0].description;

            weatherDiv.innerHTML = `
                <p>Current Temp: ${currentTemp}°C - ${description}</p>
            `;
        })
        .catch(error => console.error("Error fetching weather:", error));
}

// 🎯 Function: Load Member Data
function loadMembers() {
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            const memberList = document.getElementById("member-list");
            memberList.innerHTML = "";

            data.forEach(member => {
                const memberCard = `
                    <div class="member-card">
                        <img src="${member.logo}" alt="${member.name}">
                        <h3>${member.name}</h3>
                        <p>📞 ${member.phone}</p>
                        <p>📍 ${member.address}</p>
                        <a href="${member.website}" target="_blank">Visit Website</a>
                    </div>
                `;
                memberList.innerHTML += memberCard;
            });
        })
        .catch(error => console.error("Error loading members:", error));
}
