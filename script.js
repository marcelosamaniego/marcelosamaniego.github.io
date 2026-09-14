document.getElementById('year').textContent = new Date().getFullYear();

const emailItem = document.getElementById('email-item');
emailItem.addEventListener('click', function(e) {
  if (navigator.clipboard) {
    e.preventDefault();
    navigator.clipboard.writeText('Marcelo.samaniego77@gmail.com');
    const original = emailItem.innerHTML;
    emailItem.innerHTML = '<span class="k">Copiado</span> Marcelo.samaniego77@gmail.com';
    setTimeout(() => { emailItem.innerHTML = original; }, 1800);
  }
});
