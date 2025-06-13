// scripts/join.js
document.addEventListener('DOMContentLoaded', function () {
    const joinForm = document.getElementById('joinForm');

    // Set timestamp when form loads
    document.getElementById('timestamp').value = Date.now();

    // Form submission handling
    joinForm.addEventListener('submit', function (e) {
        // You could add additional validation here if needed
        console.log('Form submitted');
        // Form will proceed to thankyou.html as specified in the action attribute
    });

    // Membership level description toggle
    const membershipRadios = document.querySelectorAll('input[name="membership"]');
    membershipRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            // You could add visual feedback for selected membership level
            console.log('Selected membership:', this.value);
        });
    });
});