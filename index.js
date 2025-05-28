// Animate progress bars on scroll
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress');
    
    const animateOnScroll = () => {
        progressBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if(rect.top < window.innerHeight) {
                bar.style.width = bar.style.width;
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});

// Course category hover effects
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});
