// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
}

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Modal functionality (used in destinations.js)
export function openModal(content) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      ${content}
    </div>
  `;
    document.body.appendChild(modal);

    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });
}

// LocalStorage helpers
export function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

export function saveFavorite(destination) {
    const favorites = getFavorites();
    if (!favorites.some(fav => fav.id === destination.id)) {
        favorites.push(destination);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}
// Check WebP support
function checkWebPSupport() {
    const elem = document.createElement('canvas');
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
}

if (!checkWebPSupport()) {
    document.documentElement.classList.add('no-webp');
}