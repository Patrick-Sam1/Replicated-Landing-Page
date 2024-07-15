document.addEventListener('DOMContentLoaded', () => {
    // Countdown Timer
    function startCountdown(elementId, endTime) {
        const countdownElement = document.getElementById(elementId);

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = endTime - now;

            if (distance < 0) {
                clearInterval(interval);
                countdownElement.innerHTML = "00:00:00:00";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
    }

    const endTime = new Date().getTime() + (22 * 60 * 60 * 1000 + 35 * 60 * 1000 + 37 * 1000); // 22 hours, 35 minutes, 37 seconds from now
    startCountdown('countdown', endTime);
    startCountdown('countdown-2', endTime);

    // Carousel Functionality (if needed)
    // Placeholder for potential carousel initialization
});
