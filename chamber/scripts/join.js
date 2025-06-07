// Enhanced membership data with visual properties
const membershipLevels = {
    np: {
        title: "NP Membership",
        icon: "🏛️",
        price: "FREE",
        color: "linear-gradient(135deg, #f1c40f, #f39c12)",
        description: "For non-profit organizations",
        benefits: [
            "📌 Free directory listing",
            "🤝 Networking events",
            "📧 Monthly newsletter",
            "ℹ️ Resource center access"
        ]
    },
    // Add other levels with similar structure
};

function createMembershipCard(level, data) {
    const card = document.createElement('div');
    card.className = `membership-card ${level}-card`;
    card.innerHTML = `
        <div class="card-header" style="background: ${data.color}">
            <div class="card-icon">${data.icon}</div>
            <h3>${data.title}</h3>
        </div>
        <div class="card-body">
            <p class="price-tag">${data.price}</p>
            <p class="card-description">${data.description}</p>
            <ul class="benefits-preview">
                ${data.benefits.slice(0, 2).map(b => `<li>${b}</li>`).join('')}
            </ul>
            <button class="btn view-more-btn" data-level="${level}">
                View All Benefits
            </button>
        </div>
    `;
    return card;
}

function initPage() {
    const container = document.querySelector('.cards-container');

    // Create and append cards
    Object.entries(membershipLevels).forEach(([level, data]) => {
        const card = createMembershipCard(level, data);
        container.appendChild(card);

        // Add hover animation
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // Add other initialization code
}

document.addEventListener('DOMContentLoaded', initPage);