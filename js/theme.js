// Theme Toggle JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme
  initTheme();
});

function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('theme') || 'dark';
  
  // Set initial theme based on stored preference or default to dark
  if (storedTheme === 'light') {
    document.body.classList.add('light-theme');
  }
  
  // Theme toggle functionality
  themeToggle.addEventListener('click', () => {
    // Toggle the light-theme class on the body
    document.body.classList.toggle('light-theme');
    
    // Store the current theme preference
    const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    
    // Update particle colors if particles are initialized
    if (window.pJSDom && window.pJSDom.length > 0) {
      updateParticleColors();
    }
  });
}

// Update particle colors when theme changes
function updateParticleColors() {
  const isLightTheme = document.body.classList.contains('light-theme');
  
  if (window.pJSDom && window.pJSDom.length > 0) {
    // Get the particles instance
    const particles = window.pJSDom[0].pJS;
    
    // Update particle colors based on theme
    if (isLightTheme) {
      particles.particles.color.value = '#d4af37';
      particles.particles.line_linked.color = '#d4af37';
    } else {
      particles.particles.color.value = '#d4af37';
      particles.particles.line_linked.color = '#d4af37';
    }
    
    // Refresh particles
    if (particles.fn) {
      particles.fn.particlesRefresh();
    }
  }
}