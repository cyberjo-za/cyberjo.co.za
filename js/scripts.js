// Countdown Timer Logic
document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    // Set the launch date: 1 September 2025, 00:00:00 South Africa Standard Time (SAST, UTC+2)
    const launchDate = new Date('2025-09-01T00:00:00+02:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = launchDate - now;

        if (distance < 0) {
            countdownElement.innerHTML = `<h3 class="font-orbitron text-3xl text-cyan-400">Launched!</h3>`;
            clearInterval(interval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0'); // Corrected line
        secondsEl.textContent = String(seconds).padStart(2, '0');
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call

    // Navbar background on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-gray-900', 'bg-opacity-80', 'backdrop-blur-sm', 'shadow-lg');
        } else {
            navbar.classList.remove('bg-gray-900', 'bg-opacity-80', 'backdrop-blur-sm', 'shadow-lg');
        }
    });
});