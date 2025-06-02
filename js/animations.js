// Animations JavaScript file

document.addEventListener('DOMContentLoaded', function() {
  // Initialize animations
  initTextAnimations();
  initHoverAnimations();
});

// Text reveal animations
function initTextAnimations() {
  // Add staggered animations to elements with specific classes
  const animatedElements = document.querySelectorAll('.reveal-text, .reveal-text-delay');
  
  // Create animation sequence for text elements if needed
  // This is a simple implementation; in a production site, you might use a library like GSAP
  animatedElements.forEach((element, index) => {
    // Already have CSS animations applied in animations.css
    // This function could be extended for more complex animations
  });
}

// Hover animations and interactions
function initHoverAnimations() {
  // Skill bar hover effect
  const skillBars = document.querySelectorAll('.skill');
  
  skillBars.forEach(skillBar => {
    skillBar.addEventListener('mouseenter', () => {
      const skillLevel = skillBar.querySelector('.skill-level');
      skillLevel.style.width = skillLevel.style.width || skillLevel.getAttribute('style').split('width:')[1].split(';')[0].trim();
      skillLevel.style.width = '0';
      setTimeout(() => {
        skillLevel.style.width = skillLevel.dataset.width || skillLevel.getAttribute('style').split('width:')[1].split('%')[0].trim() + '%';
      }, 50);
    });
  });

  // Button hover effects
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-3px)';
      button.style.boxShadow = 'var(--shadow-md)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = '';
      button.style.boxShadow = '';
    });
  });

  // Logo hover animation
  const logo = document.querySelector('.logo');
  
  if (logo) {
    logo.addEventListener('mouseenter', () => {
      logo.style.transform = 'rotate(10deg) scale(1.1)';
      logo.style.boxShadow = '0 0 15px var(--color-gold)';
    });
    
    logo.addEventListener('mouseleave', () => {
      logo.style.transform = '';
      logo.style.boxShadow = '';
    });
  }

  // Section title hover effect
  const sectionTitles = document.querySelectorAll('.section-title');
  
  sectionTitles.forEach(title => {
    title.addEventListener('mouseenter', () => {
      const highlight = title.querySelector('.highlight');
      if (highlight) {
        highlight.style.color = 'var(--color-ruby)';
      }
    });
    
    title.addEventListener('mouseleave', () => {
      const highlight = title.querySelector('.highlight');
      if (highlight) {
        highlight.style.color = '';
      }
    });
  });
}