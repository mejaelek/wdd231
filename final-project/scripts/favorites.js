import { getFavorites, openModal } from './main.js';

document.addEventListener('DOMContentLoaded', () => {
    const favoritesGrid = document.querySelector('.favorites-grid');
    const clearButton = document.getElementById('clear-favorites');
    const noFavoritesMsg = document.getElementById('no-favorites');

    function renderFavorites() {
        const favorites = getFavorites();

        if (favorites.length === 0) {
            noFavoritesMsg.style.display = 'block';
            favoritesGrid.innerHTML = '';
            return;
        }

        noFavoritesMsg.style.display = 'none';
        favoritesGrid.innerHTML = favorites.map(dest => `
      <article class="favorite-card">
        <img src="${dest.image}" alt="${dest.name}" loading="lazy">
        <h3>${dest.name}</h3>
        <p>${dest.country}</p>
        <button class="view-details" data-id="${dest.id}">Details</button>
        <button class="remove-favorite" data-id="${dest.id}">Remove</button>
      </article>
    `).join('');

        // Add event listeners
        document.querySelectorAll('.remove-favorite').forEach(btn => {
            btn.addEventListener('click', () => {
                const updatedFavorites = getFavorites().filter(f => f.id != btn.dataset.id);
                localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
                renderFavorites();
            });
        });
    }

    clearButton?.addEventListener('click', () => {
        localStorage.removeItem('favorites');
        renderFavorites();
    });

    renderFavorites();
});