// JavaScript for discover page
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('attractions-container');

    // Fetch attractions data
    fetch('data/attractions.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(attraction => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h2>${attraction.name}</h2>
                    <figure>
                        <img src="${attraction.image}" alt="${attraction.name}" loading="lazy">
                    </figure>
                    <div class="card-content">
                        <address>${attraction.address}</address>
                        <p>${attraction.description}</p>
                        <button onclick="location.href='contact.html'">Learn More</button>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error loading attractions:', error);
            container.innerHTML = '<p>Sorry, we couldn\'t load the attractions at this time.</p>';
        });
}); 