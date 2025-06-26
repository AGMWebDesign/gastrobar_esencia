document.addEventListener("DOMContentLoaded", () => {
  
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav a');

  const toggleMenu = () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
  };

  hamburger.addEventListener('click', toggleMenu);

  // Cerrar menú al hacer clic en un enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

  // Cerrar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      nav.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});
