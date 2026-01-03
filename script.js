document.addEventListener('DOMContentLoaded', () => {

    // 1. Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.trigger-fade').forEach(el => {
        observer.observe(el);
    });

    // 2. Rolling Number Animation (Casino Shuffle)
    const rollingNumber = document.querySelector('.rolling-number');

    // Add to observer to trigger only when visible
    if (rollingNumber) {
        observer.observe(rollingNumber.parentElement); // Observe the wrapper
    }

    // Modify observer to handle the animation trigger
    // We need a specific observer for this or check class in existing one
    // Let's attach a specific logic to the existing observer loop

    // Re-defining observer to handle both fade-ins and the number roll
    const casinoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('number-wrapper') || entry.target.querySelector('.rolling-number')) {
                    startCasinoRoll(entry.target.querySelector('.rolling-number') || entry.target);
                    casinoObserver.unobserve(entry.target); // Run once
                }
            }
        });
    }, observerOptions);

    if (rollingNumber) {
        casinoObserver.observe(rollingNumber.parentElement);
    }

    function startCasinoRoll(element) {
        // Generate a random target between 4000 and 9000
        const target = Math.floor(Math.random() * (9000 - 4000 + 1) + 4000);
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = elapsed / duration;

            if (progress < 1) {
                // Show random number during animation
                const randomVal = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
                element.textContent = randomVal.toLocaleString();

                // Slow down the frame rate as we get closer to look like a wheel slowing down?
                // For simplicity, just high speed random shuffle
                requestAnimationFrame(update);
            } else {
                element.textContent = target.toLocaleString();
            }
        }
        requestAnimationFrame(update);
    }

    // 3. Google Forms Logic Removed (Replaced with WhatsApp CTA)
});
