const courses = [
    { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 3, completed: true },
    { code: "CSE 110", name: "Programming Building Blocks", credits: 2, completed: true },
    { code: "WDD 230", name: "Web Frontend Development", credits: 3, completed: false },
    { code: "CSE 210", name: "Programming with Classes", credits: 3, completed: true },
    { code: "WDD 330", name: "Web Backend Development", credits: 3, completed: false }
];

const cardContainer = document.getElementById("course-cards");
const creditDisplay = document.getElementById("credit-total");

function renderCourses(courseList) {
    cardContainer.innerHTML = "";
    courseList.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("course-card");
        if (course.completed) {
            card.classList.add("completed");
        }
        card.innerHTML = `<h3>${course.code}</h3><p>${course.name}</p><p>Credits: ${course.credits}</p>`;
        cardContainer.appendChild(card);
    });

    const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);
    creditDisplay.textContent = `Total Credits: ${totalCredits}`;
}

document.getElementById("all").addEventListener("click", () => renderCourses(courses));
document.getElementById("wdd").addEventListener("click", () => renderCourses(courses.filter(c => c.code.startsWith("WDD"))));
document.getElementById("cse").addEventListener("click", () => renderCourses(courses.filter(c => c.code.startsWith("CSE"))));

// Initial render
renderCourses(courses);
