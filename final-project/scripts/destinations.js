// destinations.js
import { openModal, saveFavorite, getFavorites } from './main.js';

// Track loaded images to prevent duplicates
const loadedImages = new Set();

async function loadDestinations() {
  try {
    const response = await fetch('./data/destinations.json');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const destinations = await response.json();

    if (!destinations?.length) {
      throw new Error('No destinations found in JSON file');
    }

    return destinations;

  } catch (error) {
    console.error('Loading failed:', error);
    return getFallbackData(); // Always return array
  }
}

function getFallbackData() {
  return [
    {
      id: 0,
      name: "Sample Destination",
      country: "Online",
      image: "images/default.webp",
      rating: 4.5,
      description: "Fallback content"
    }
  ];
}

function renderDestinationCard(dest) {
  return `
    <article class="destination-card" data-id="${dest.id}">
      <picture>
        <source srcset="${dest.image}" type="image/webp">
        <img src="${dest.image.replace('.webp', '.jpg')}" 
             alt="${dest.name}, ${dest.country}"
             loading="lazy"
             width="400"
             height="300">
      </picture>
      <div class="card-content">
        <h3>${dest.name}</h3>
        <p>${dest.country}</p>
        <p>⭐ ${dest.rating}/5</p>
        <button class="view-details">Details</button>
        <button class="save-favorite">
          ${getFavorites().some(f => f.id === dest.id) ? '❤️ Saved' : '♡ Save'}
        </button>
      </div>
    </article>
  `;
}

function setupCardInteractions(destinations) {
  document.querySelectorAll('.view-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.destination-card');
      const dest = destinations.find(d => d.id == card.dataset.id);
      openModal(`
        <h2>${dest.name}</h2>
        <img src="${dest.image}" alt="${dest.name}" style="max-width:100%">
        <p><strong>Country:</strong> ${dest.country}</p>
        <p><strong>Rating:</strong> ${dest.rating}/5</p>
        <p>${dest.description}</p>
      `);
    });
  });

  document.querySelectorAll('.save-favorite').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.destination-card');
      const dest = destinations.find(d => d.id == card.dataset.id);
      saveFavorite(dest);
      btn.textContent = '❤️ Saved';
    });
  });
}

// Main execution
document.addEventListener('DOMContentLoaded', async () => {
  const destinations = await loadDestinations();
  const grid = document.querySelector('.destinations-grid');

  if (!grid) return;

  grid.innerHTML = destinations.map(renderDestinationCard).join('');
  setupCardInteractions(destinations);

  // Track successful image loads
  document.querySelectorAll('.destination-card img').forEach(img => {
    img.onload = () => loadedImages.add(img.src);
    img.onerror = () => {
      console.warn('Failed to load:', img.src);
      img.src = 'images/default.webp';
    };
  });
});