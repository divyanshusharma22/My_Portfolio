// Example: Add dynamic behavior for cards (optional)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});

// Function to handle scroll behavior
window.addEventListener('scroll', function () {
  const titleSection = document.getElementById('title');
  const scrollPosition = window.scrollY; // Get the current scroll position

  if (scrollPosition > 100) { // Trigger the effect after scrolling 100px down
    titleSection.classList.remove('animate');
  } else {
    titleSection.classList.add('animate'); // Remove the animation when scrolling up
  }
});

// Ensure the title section is initially visible after page load
window.addEventListener('DOMContentLoaded', (event) => {
  const titleSection = document.getElementById('title');
  titleSection.classList.add('animate');
});

