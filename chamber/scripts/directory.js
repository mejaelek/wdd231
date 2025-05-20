// scripts/directory.js

const directory = document.getElementById('directory');
const gridBtn = document.getElementById('gridBtn');
const listBtn = document.getElementById('listBtn');

// Fetch and display member data
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) throw new Error('Failed to load member data.');
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        directory.innerHTML = `<p class="error">Error loading members: ${error.message}</p>`;
    }
}

// Render members
function displayMembers(members) {
    directory.innerHTML = ''; // clear existing content
    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');

        card.innerHTML = `
      <img src="${member.image}" alt="${member.name} logo" loading="lazy" />
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p><a href="tel:${member.phone}">${member.phone}</a></p>
      <p><a href="${member.website}" target="_blank" rel="noopener">Visit Website</a></p>
    `;

        directory.appendChild(card);
    });
}

// Toggle layout
gridBtn.addEventListener('click', () => {
    directory.classList.add('grid');
    directory.classList.remove('list');
});

listBtn.addEventListener('click', () => {
    directory.classList.add('list');
    directory.classList.remove('grid');
});

// Load data on page load
fetchMembers();
