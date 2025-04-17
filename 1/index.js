document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      overlay.innerHTML = `<div class="popup"><img src="${img.src}" /><span>&times;</span></div>`;
      document.body.appendChild(overlay);
  
      overlay.querySelector('span').addEventListener('click', () => {
        overlay.remove();
      });
    });
  });
  
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  