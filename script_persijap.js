function showSection(id, el) {
  const sections = document.querySelectorAll('.page-section');
  const links = document.querySelectorAll('nav a');

  sections.forEach(section => section.style.display = 'none');
  links.forEach(link => link.classList.remove('active'));

  const target = document.getElementById(id);
  if (target) {
    target.style.display = 'block';
    el.classList.add('active');
  }

  if (id === 'beranda') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(section => section.style.display = 'none');
  document.getElementById('beranda').style.display = 'block';
});