const courses = [
    { code: 'WDD 130', name: 'Web Fundamentals', credits: 3, type: 'WDD', completed: true },
    { code: 'WDD 131', name: 'Dynamic Web Fundamentals', credits: 3, type: 'WDD', completed: true },
    { code: 'CSE 110', name: 'Intro to Programming', credits: 2, type: 'CSE', completed: false },
    { code: 'CSE 210', name: 'Programming with Classes', credits: 4, type: 'CSE', completed: false },
    { code: 'WDD 231', name: 'Frontend Development I', credits: 3, type: 'WDD', completed: false }
];

const courseCards = document.getElementById("course-cards");
const creditTotal = document.getElementById("credit-total");

function displayCourses(filtered) {
    courseCards.innerHTML = "";
    let totalCredits = 0;

    filtered.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("course-card");
        if (course.completed) {
            card.classList.add("completed");
        }
        card.innerHTML = `<h3>${course.code}</h3><p>${course.name}</p><p>${course.credits} credits</p>`;
        courseCards.appendChild(card);
        totalCredits += course.credits;
    });

    creditTotal.textContent = `Total Credits: ${totalCredits}`;
}

document.getElementById("all").addEventListener("click", () => displayCourses(courses));
document.getElementById("wdd").addEventListener("click", () =>
    displayCourses(courses.filter(c => c.type === "WDD"))
);
document.getElementById("cse").addEventListener("click", () =>
    displayCourses(courses.filter(c => c.type === "CSE"))
);

// Initial Display
displayCourses(courses);

// Current Year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Last Modified
document.getElementById("lastmodified").textContent = `Last Modified: ${document.lastModified}`;

// Responsive Navigation Toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
    document.querySelector("nav ul").classList.toggle("show");
});
