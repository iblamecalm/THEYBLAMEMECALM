document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Remove intro animation after it's finished
    setTimeout(() => {
        const introAnimation = document.getElementById('intro-animation');
        if (introAnimation) {
            introAnimation.style.display = 'none'; // Hide animation div
            body.classList.add('loaded'); // Enable scrolling
        }
    }, 3000); // Matches animation duration (3 seconds)
});
