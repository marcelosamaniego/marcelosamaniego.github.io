document.getElementById('year').textContent = new Date().getFullYear();

const root = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

const revealItems = document.querySelectorAll('.project-card, .tl-item, .bar-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.2 });

revealItems.forEach((item) => observer.observe(item));

document.querySelectorAll('.bar-item').forEach((bar) => {
  const level = bar.getAttribute('data-level');
  const fill = bar.querySelector('.fill');
  fill.style.setProperty('--level', level + '%');
});

const emailItem = document.getElementById('email-item');
const copyNote = document.getElementById('copy-note');

emailItem.addEventListener('click', function (e) {
  if (navigator.clipboard) {
    e.preventDefault();
    navigator.clipboard.writeText('Marcelo.samaniego77@gmail.com');
    copyNote.textContent = 'Correo copiado al portapapeles';
    setTimeout(() => { copyNote.textContent = ''; }, 1800);
  }
});