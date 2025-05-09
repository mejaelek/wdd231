document.addEventListener("DOMContentLoaded", () => {
    // Dynamic year
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Last modified
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

    // Hamburger menu
    const toggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav ul");
    toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
    });

    // Course filtering
    const courses = [
        { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
        { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 3, completed: false },
        { code: "CSE 110", name: "Programming Logic", credits: 2, completed: true },
        { code: "CSE 111", name: "Programming Principles", credits: 4, completed: false },
    ];

    const courseContainer = document.getElementById("course-container");
    const totalCredits = document.getElementById("total-credits");

    function renderCourses(filteredCourses) {
        courseContainer.innerHTML = "";
        let credits = 0;

        filteredCourses.forEach(course => {
            const div = document.createElement("div");
            div.className = "course-card" + (course.completed ? " completed" : "");
            div.innerHTML = `<strong>${course.code}</strong>: ${course.name} (${course.credits} credits)`;
            courseContainer.appendChild(div);
            credits += course.credits;
        });

        totalCredits.textContent = credits;
    }

    // Initial render
    renderCourses(courses);

    // Filter buttons
    document.getElementById("all-btn").addEventListener("click", () => renderCourses(courses));
    document.getElementById("wdd-btn").addEventListener("click", () =>
        renderCourses(courses.filter(course => course.code.startsWith("WDD")))
    );
    document.getElementById("cse-btn").addEventListener("click", () =>
        renderCourses(courses.filter(course => course.code.startsWith("CSE")))
    );
});
