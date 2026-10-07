'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.mobile-nav-toggle');
  const menu = document.getElementById('menu-principal');
  const setMenu = (open) => {
    if (!button || !menu) return;
    menu.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    button.textContent = open ? '×' : '☰';
  };
  button?.addEventListener('click', () => setMenu(button.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && button?.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      button.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (menu && button && !menu.contains(event.target) && !button.contains(event.target)) setMenu(false);
  });
  const current = location.pathname === '/index.html' ? '/' : location.pathname;
  menu?.querySelectorAll('a').forEach((link) => {
    if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'page');
    link.addEventListener('click', () => setMenu(false));
  });
  document.getElementById('quote-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const message = `Hola SECOYT, soy ${String(data.get('nombre')).trim()}.\nServicio: ${data.get('servicio')}\nZona: ${String(data.get('zona')).trim()}\nProyecto: ${String(data.get('detalle')).trim()}`;
    location.assign(`https://wa.me/5215564221858?text=${encodeURIComponent(message)}`);
  });
});
