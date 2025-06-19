document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('destination-form');
    const ratingValue = document.getElementById('rating-value');
    const ratingInput = document.getElementById('rating');

    // Update rating display
    ratingInput.addEventListener('input', () => {
        ratingValue.textContent = ratingInput.value;
    });

    form?.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const submission = {
            name: formData.get('name'),
            country: formData.get('country'),
            whyRecommend: formData.get('why-recommend'),
            bestSeason: formData.get('best-season'),
            rating: formData.get('rating')
        };

        // Store submission (simulated)
        sessionStorage.setItem('lastSubmission', JSON.stringify(submission));

        // Redirect to confirmation
        window.location.href = 'form-submit.html?success=true';
    });

    // Show confirmation if redirected
    if (new URLSearchParams(window.location.search).has('success')) {
        const lastSubmission = JSON.parse(sessionStorage.getItem('lastSubmission'));
        document.querySelector('main').innerHTML = `
      <div class="confirmation">
        <h2>Thank You!</h2>
        <p>Your recommendation for <strong>${lastSubmission.name}</strong> has been received.</p>
        <p>We'll review your submission and may add it to our collection!</p>
        <a href="destinations.html" class="button">Back to Destinations</a>
      </div>
    `;
    }
});