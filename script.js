/* Interacciones: tarjetas, enlaces, filtros, fotos ampliadas y preguntas. */
const $ = s => document.querySelector(s);
const money = n => new Intl.NumberFormat('es-MX').format(n);
const wa = message => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
function external(link, url) { link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; }
document.querySelectorAll('[data-whatsapp]').forEach(a => external(a, wa(a.dataset.whatsapp || CONFIG.mensaje)));
document.querySelectorAll('[data-instagram]').forEach(a => external(a, CONFIG.instagram));
$('#year').textContent = new Date().getFullYear();
function slot(src, alt, name, label, lazy = true) {
  const frame = document.createElement('div'); frame.className = 'photo-slot';
  const img = document.createElement('img'); img.alt = alt; img.loading = lazy ? 'lazy' : 'eager'; img.decoding = 'async';
  const missing = document.createElement('span'); missing.className = 'missing'; missing.textContent = label;
  frame.append(img, missing);
  img.addEventListener('error', () => frame.classList.add('empty'));
  img.addEventListener('load', () => frame.classList.remove('empty'));
  img.src = src;
  return {frame, img};
}
CONFIG.paquetes.forEach((p, i) => {
  const card = document.createElement('article'); card.className = `package ${i === 1 ? 'featured' : ''}`; card.style.setProperty('--package-color', p.color);
  const {frame, img} = slot(p.imagen, `Sesión ${p.nombre}`, p.imagen.split('/').pop(), 'Light Focus Studio', false);
  img.style.objectPosition = p.encuadre || '50% 35%';
  const tag = document.createElement('span'); tag.className = 'package-tag'; tag.textContent = p.etiqueta;
  const body = document.createElement('div'); body.className = 'package-content';
  const title = document.createElement('div'); title.className = 'package-title';
  const h = document.createElement('h3'); h.textContent = p.nombre;
  const price = document.createElement('span'); price.className = 'price'; price.textContent = `$${money(p.precio)} `;
  const currency = document.createElement('small'); currency.textContent = 'MXN'; price.append(currency); title.append(h, price);
  const list = document.createElement('ul');
  [p.tiempo + ' de sesión', p.fotos + ' fotografías editadas', p.locacion, 'Entrega digital'].forEach(text => { const li = document.createElement('li'); li.textContent = text; list.append(li); });
  const link = document.createElement('a'); link.className = 'package-link'; link.textContent = `Consultar ${p.nombre} ↗`; external(link, wa(`Hola, me interesa el paquete ${p.nombre} de $${money(p.precio)}. ¿Qué fechas tienes disponibles?`));
  body.append(tag, title, list, link); card.append(frame, body); $('#package-list').append(card);
});
CONFIG.preguntas.forEach(([question, answer]) => { const d = document.createElement('details'); const s = document.createElement('summary'); s.textContent = question; const p = document.createElement('p'); p.textContent = answer; d.append(s,p); $('#faq-list').append(d); });
const gallery = CONFIG.galeria.map((p, i) => ({...p, index:i, loaded:false, failed:false}));
let activeCategory = 'Todas', visiblePhotos = [], activePhoto = null, returnFocus = null;
const dialog = $('#lightbox');
const galleryButtons = [];
function updateGallery() {
  galleryButtons.forEach((button, i) => { button.hidden = activeCategory !== 'Todas' && gallery[i].categoria !== activeCategory; });
  visiblePhotos = gallery.filter(p => p.loaded && (activeCategory === 'Todas' || p.categoria === activeCategory));
  const relevant = gallery.filter(p => activeCategory === 'Todas' || p.categoria === activeCategory);
  $('#gallery-status').textContent = relevant.some(p => p.failed) ? 'Próximamente, más fotografías en esta colección.' : '';
}
gallery.forEach(p => {
  const button = document.createElement('button'); button.className = 'gallery-item'; button.disabled = true; button.setAttribute('aria-label', `Ampliar: ${p.descripcion}`);
  const {frame, img} = slot(`assets/${p.archivo}`, p.descripcion, p.archivo, p.categoria);
  const caption = document.createElement('span'); caption.className = 'gallery-label'; const title = document.createElement('span'); title.textContent = p.categoria; const number = document.createElement('span'); number.textContent = String(p.index+1).padStart(2,'0'); caption.append(title,number);
  img.addEventListener('load', () => {p.loaded = true; p.failed = false; button.disabled = false; updateGallery();});
  img.addEventListener('error', () => {p.loaded = false; p.failed = true; button.disabled = true; updateGallery();});
  button.append(frame,caption); button.addEventListener('click', () => {returnFocus = button; showPhoto(p); dialog.showModal(); document.body.classList.add('modal-open');}); $('#gallery').append(button); galleryButtons.push(button);
});
['Todas', ...new Set(gallery.map(p=>p.categoria))].forEach(category => {
 const b = document.createElement('button'); b.textContent = category; b.setAttribute('aria-pressed', category === 'Todas');
 b.addEventListener('click', () => {activeCategory = category; $('#filters').querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed', x === b)); updateGallery();}); $('#filters').append(b);
});
function showPhoto(p) {activePhoto = p; $('#large-photo').src = `assets/${p.archivo}`; $('#large-photo').alt = p.descripcion; $('#photo-caption').textContent = `${p.descripcion} · ${p.categoria}`;}
function movePhoto(direction) {const i = visiblePhotos.findIndex(p=>p.index === activePhoto?.index); if(visiblePhotos.length) showPhoto(visiblePhotos[(i+direction+visiblePhotos.length)%visiblePhotos.length]);}
$('#close-lightbox').addEventListener('click', ()=>dialog.close());
$('#previous-photo').addEventListener('click', ()=>movePhoto(-1)); $('#next-photo').addEventListener('click', ()=>movePhoto(1));
dialog.addEventListener('keydown', e=>{if(e.key==='ArrowRight') movePhoto(1); if(e.key==='ArrowLeft') movePhoto(-1);});
dialog.addEventListener('click', e=>{if(e.target===dialog) dialog.close();});
dialog.addEventListener('close', ()=>{document.body.classList.remove('modal-open'); returnFocus?.focus();});

// Retrato cuadrado del fotógrafo. Compatible con config.js de versiones previas.
const photographer = document.querySelector('#photographer-photo');
if (photographer) {
 const portrait = slot(CONFIG.fotoPerfil || 'assets/Angel.jpg', 'Angel, fotógrafo de Light Focus Studio', (CONFIG.fotoPerfil || 'assets/Angel.jpg').split('/').pop(), 'Detrás de la cámara');
 photographer.append(portrait.frame);
}
