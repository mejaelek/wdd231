function loadMembers() {
    fetch("json/members.json") // Adjust path if needed
        .then(response => response.json())
        .then(data => {
            const memberList = document.getElementById("member-list");
            memberList.innerHTML = ""; // Clear previous content

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

// Ensure members load when the page is ready
document.addEventListener("DOMContentLoaded", loadMembers);
