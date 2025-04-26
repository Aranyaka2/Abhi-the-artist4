document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('navPanelToggle');
    const menu = document.getElementById('navPanel');
  
    toggle.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  
    // Close menu when clicking outside
    window.addEventListener('click', function(e) {
      if (e.target !== toggle && e.target !== menu && menu.classList.contains('active')) {
        menu.classList.remove('active');
      }
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('navPanelToggle');
    const menu = document.getElementById('navPanel');
  
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  
    window.addEventListener('click', (e) => {
      if (e.target !== toggle && e.target !== menu && menu.classList.contains('active')) {
        menu.classList.remove('active');
      }
    });
  });