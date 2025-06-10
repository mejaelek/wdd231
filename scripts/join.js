// Add timestamp to hidden field
window.addEventListener("DOMContentLoaded", () => {
    const timestampInput = document.getElementById("timestamp");
    if (timestampInput) {
        timestampInput.value = new Date().toISOString();
    }
});

// Modal open/close logic
document.querySelectorAll('.card a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const modalId = this.getAttribute('href');
        const modal = document.querySelector(modalId);
        if (modal) {
            modal.style.display = 'block';
            modal.querySelector('.modal-content').setAttribute('tabindex', '-1');
            modal.querySelector('.modal-content').focus();
        }
    });
});

// Close modal when clicking the close button or outside modal content
document.querySelectorAll('.modal .close').forEach(btn => {

    btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', function (event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Optional: Trap focus inside modal for accessibility
function trapFocus(modal) {
    const focusableElements = modal.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) { // Shift + Tab
                if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            } else { // Tab
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }
        if (e.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
}

// Apply trapFocus to each modal
document.querySelectorAll('.modal').forEach(trapFocus);
// Dynamic form progress indicator
const form = document.querySelector("form");
const requiredFields = form.querySelectorAll("input[required], select[required]");
const progressBar = document.getElementById("progress-bar");

function updateProgressBar() {
    if (progress === 100) {
        progressBar.title = "All required fields completed!";
    } else {
        progressBar.title = "";
    }
    let filledCount = 0;
    requiredFields.forEach(field => {
        if (field.value.trim() !== "") {
            filledCount++;
        }
    });

    const progress = Math.round((filledCount / requiredFields.length) * 100);
    progressBar.style.width = progress + "%";
}

requiredFields.forEach(field => {
    field.addEventListener("input", updateProgressBar);
});