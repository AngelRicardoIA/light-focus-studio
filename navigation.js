// Navegación compacta: los enlaces originales se conservan en el menú.
(() => {
  const header = document.querySelector('.header');
  const nav = header?.querySelector('nav');
  const contact = nav?.querySelector('.nav-contact');
  if (!nav || !contact) return;
  const mobile = window.matchMedia('(max-width: 900px)');
  const actions = document.createElement('div');
  actions.className = 'header-actions';
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'nav-toggle';
  nav.id = 'header-menu';
  toggle.setAttribute('aria-controls', nav.id);
  toggle.innerHTML = '<span aria-hidden="true" class="menu-lines"></span>';
  contact.setAttribute('aria-label', 'Contactar por WhatsApp (abre otra pestaña)');
  const label = document.createElement('span');
  label.className = 'contact-label';
  label.textContent = contact.textContent;
  contact.replaceChildren(label);
  contact.insertAdjacentHTML('afterbegin', '<svg class="contact-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.4 7.6L3 20.5l1.4-5.1A8.5 8.5 0 1 1 20.5 11.5Z"/><path d="M8.2 7.8c.7 3.3 2.7 5.3 6 6l1.2-1.4 1.6.8c-.1 1.5-1 2.3-2.5 2.1-4.1-.6-6.8-3.3-7.4-7.4-.2-1.5.6-2.4 2.1-2.5l.8 1.6Z"/></svg>');
  actions.append(contact, toggle);
  header.append(actions);
  header.classList.add('compact-header');
  let open = false;
  function render() {
    nav.hidden = mobile.matches && !open;
    toggle.hidden = !mobile.matches;
    toggle.setAttribute('aria-expanded', String(open && mobile.matches));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  }
  function close() { open = false; render(); }
  toggle.addEventListener('click', () => { open = !open; render(); });
  nav.addEventListener('click', event => { if (event.target.closest('a') && mobile.matches) close(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && open) { close(); toggle.focus(); }
  });
  document.addEventListener('pointerdown', event => { if (open && !header.contains(event.target)) close(); });
  header.addEventListener('focusout', event => { if (open && !header.contains(event.relatedTarget)) close(); });
  mobile.addEventListener('change', close);
  render();
})();
