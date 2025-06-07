// Modal functionality
document.addEventListener('DOMContentLoaded', function () {
    const modalLinks = document.querySelectorAll('.modal-link');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-button');

    // Open modal
    modalLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const modalId = this.getAttribute('href');
            document.querySelector(modalId).style.display = 'flex';
        });
    });

    // Close modal
    closeButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            this.closest('.modal').style.display = 'none';
        });
    });

    // Close when clicking outside modal content
    modals.forEach(modal => {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    });

    // Close with ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        }
    });
}); 