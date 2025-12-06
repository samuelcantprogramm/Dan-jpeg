const navbar = document.getElementById('navbar');

// Navbar style change on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.remove('solid-nav');
    navbar.classList.add('glass-nav');
  } else {
    navbar.classList.remove('glass-nav');
    navbar.classList.add('solid-nav');
  }
});

  const overlay = document.getElementById('lightboxOverlay');
  const fullImg = document.getElementById('lightboxFull');
  const images = document.querySelectorAll('.gallery-img');

// Image lightbox functionality (click image to view)
  images.forEach(img => {
    img.addEventListener('click', () => {
      fullImg.src = img.src;
      overlay.style.display = 'flex';
    });
  });

  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

// Character counter for message textarea
const message = document.getElementById('message');
const counter = document.getElementById('counter');

message.addEventListener('input', () => {
  counter.textContent = `${message.value.length} / ${message.maxLength}`;
});
