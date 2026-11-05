
/* Interacciones: tarjetas, enlaces, filtros, fotos ampliadas y preguntas. */

const $ = s => document.querySelector(s);
const money = n => new Intl.NumberFormat('es-MX').format(n);

const wa = message =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;

function external(link, url) {
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
}

/* ----------------------------------
   1. Enlaces generales
---------------------------------- */

document.querySelectorAll('[data-whatsapp]').forEach(a => {
  external(a, wa(a.dataset.whatsapp || CONFIG.mensaje));
});

document.querySelectorAll('[data-instagram]').forEach(a => {
  external(a, CONFIG.instagram);
});

/* Año del footer: no todas las páginas tienen que incluirlo. */

const year = $('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

/* ----------------------------------
   2. Función para espacios de imagen
---------------------------------- */

function slot(src, alt, name, label, lazy = true) {
  const frame = document.createElement('div');
  frame.className = 'photo-slot';

  const img = document.createElement('img');
  img.alt = alt;
  img.loading = lazy ? 'lazy' : 'eager';
  img.decoding = 'async';

  const missing = document.createElement('span');
  missing.className = 'missing';
  missing.textContent = label;

  frame.append(img, missing);

  img.addEventListener('error', () => {
    frame.classList.add('empty');
  });

  img.addEventListener('load', () => {
    frame.classList.remove('empty');
  });

  img.src = src;

  return { frame, img };
}

/* ----------------------------------
   3. Paquetes de sesiones
---------------------------------- */

const packageList = $('#package-list');

if (packageList) {
  CONFIG.paquetes.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = `package ${i === 1 ? 'featured' : ''}`;
    card.style.setProperty('--package-color', p.color);

    const { frame, img } = slot(
      p.imagen,
      `Sesión ${p.nombre}`,
      p.imagen.split('/').pop(),
      'Light Focus Studio',
      false
    );

    img.style.objectPosition = p.encuadre || '50% 35%';

    const tag = document.createElement('span');
    tag.className = 'package-tag';
    tag.textContent = p.etiqueta;

    const body = document.createElement('div');
    body.className = 'package-content';

    const title = document.createElement('div');
    title.className = 'package-title';

    const h = document.createElement('h3');
    h.textContent = p.nombre;

    const price = document.createElement('span');
    price.className = 'price';
    price.textContent = `$${money(p.precio)} `;

    const currency = document.createElement('small');
    currency.textContent = 'MXN';

    price.append(currency);
    title.append(h, price);

    const list = document.createElement('ul');

    [
      p.tiempo + ' de sesión',
      p.fotos + ' fotografías editadas',
      p.locacion,
      'Entrega digital'
    ].forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      list.append(li);
    });

    const link = document.createElement('a');
    link.className = 'package-link';
    link.textContent = `Consultar ${p.nombre} ↗`;

    external(
      link,
      wa(`Hola, me interesa el paquete ${p.nombre} de $${money(p.precio)}. ¿Qué fechas tienes disponibles?`)
    );

    body.append(tag, title, list, link);
    card.append(frame, body);

    packageList.append(card);
  });
}

/* ----------------------------------
   3.5 Experiencias Destacadas (Inicio)
---------------------------------- */
const destacadosList = $('#destacados-list');

if (destacadosList && CONFIG.experienciasDestacadas) {
  CONFIG.experienciasDestacadas.forEach(p => {
    const card = document.createElement('article');
    card.className = `package ${p.destacado ? 'featured' : ''}`;
    card.style.setProperty('--package-color', p.color);

    let mediaContent;
    if (p.promocion && p.imagenes) {
      mediaContent = document.createElement('div');
      mediaContent.className = 'event-photo event-photo-stack';
      mediaContent.style.aspectRatio = '4 / 5';

      p.imagenes.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = p.nombre;
        img.loading = 'lazy';
        img.decoding = 'async';
        mediaContent.append(img);
      });
    } else {
      const { frame, img } = slot(
        p.imagen,
        `Sesión ${p.nombre}`,
        p.imagen.split('/').pop(),
        'Light Focus Studio',
        false
      );
      img.style.objectPosition = '50% 35%';
      mediaContent = frame;
    }

    const body = document.createElement('div');
    body.className = 'package-content';

    const tag = document.createElement('span');
    tag.className = 'package-tag';
    tag.textContent = p.etiqueta;
    
    if (p.promocion) {
      tag.style.background = p.color;
      tag.style.color = '#ffffff';
      tag.style.borderColor = p.color;
      tag.style.boxShadow = `0 4px 12px ${p.color}40`;
      tag.style.fontWeight = 'bold';
    }

    const title = document.createElement('div');
    title.className = 'package-title';

    const h = document.createElement('h3');
    h.textContent = p.nombre;

    const price = document.createElement('span');
    price.className = 'price';
    price.textContent = `$${money(p.precio)} `;

    const currency = document.createElement('small');
    currency.textContent = 'MXN';

    price.append(currency);
    title.append(h, price);

    const list = document.createElement('ul');
    p.caracteristicas.forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      list.append(li);
    });

    const link = document.createElement('a');
    link.className = 'package-link';
    link.textContent = `Consultar ${p.promocion ? 'promoción' : p.nombre} ↗`;

    external(link, wa(p.mensajeWa));

    body.append(tag, title, list, link);
    card.append(mediaContent, body);
    destacadosList.append(card);
  });
}

/* ----------------------------------
   3.6 Otros Servicios
---------------------------------- */
const otrosServiciosList = $('#otros-servicios-list');

if (otrosServiciosList && CONFIG.otrosServicios) {
  CONFIG.otrosServicios.forEach(s => {
    const card = document.createElement('article');
    card.className = 'package';

    const { frame, img } = slot(
      s.imagen,
      s.nombre,
      s.imagen.split('/').pop(),
      'Light Focus Studio'
    );
    img.style.objectPosition = '50% 35%';

    const body = document.createElement('div');
    body.className = 'package-content';

    const eyebrow = document.createElement('p');
    eyebrow.className = 'eyebrow';
    eyebrow.textContent = s.categoria;

    const h = document.createElement('h3');
    h.textContent = s.nombre;

    const p = document.createElement('p');
    p.textContent = s.descripcion;

    body.append(eyebrow, h, p);
    card.append(frame, body);
    otrosServiciosList.append(card);
  });
}

/* ----------------------------------
   4. Preguntas frecuentes
---------------------------------- */

const faqList = $('#faq-list');

if (faqList) {
  CONFIG.preguntas.forEach(([question, answer]) => {
    const d = document.createElement('details');

    const s = document.createElement('summary');
    s.textContent = question;

    const p = document.createElement('p');
    p.textContent = answer;

    d.append(s, p);
    faqList.append(d);
  });
}

/* ----------------------------------
   5. Galería y filtros
---------------------------------- */

const galleryRoot = $('#gallery');
const filters = $('#filters');
const galleryStatus = $('#gallery-status');

const dialog = $('#lightbox');
const largePhoto = $('#large-photo');
const photoCaption = $('#photo-caption');

const closeLightbox = $('#close-lightbox');
const previousPhoto = $('#previous-photo');
const nextPhoto = $('#next-photo');

/*
  La galería solo se inicializa cuando la página
  contiene todos sus elementos necesarios.
*/

if (
  galleryRoot &&
  filters &&
  galleryStatus &&
  dialog &&
  largePhoto &&
  photoCaption &&
  closeLightbox &&
  previousPhoto &&
  nextPhoto
) {
  const gallery = CONFIG.galeria.map((p, i) => ({
    ...p,
    index: i,
    loaded: false,
    failed: false
  }));

  let activeCategory = 'Todas';
  let visiblePhotos = [];
  let activePhoto = null;
  let returnFocus = null;

  const galleryButtons = [];

  function updateGallery() {
    galleryButtons.forEach((button, i) => {
      button.hidden =
        activeCategory !== 'Todas' &&
        gallery[i].categoria !== activeCategory;
    });

    visiblePhotos = gallery.filter(p =>
      p.loaded &&
      (activeCategory === 'Todas' || p.categoria === activeCategory)
    );

    const relevant = gallery.filter(p =>
      activeCategory === 'Todas' ||
      p.categoria === activeCategory
    );

    galleryStatus.textContent = relevant.some(p => p.failed)
      ? 'Próximamente, más fotografías en esta colección.'
      : '';
  }

  gallery.forEach(p => {
    const button = document.createElement('button');

    button.className = 'gallery-item';
    button.disabled = true;
    button.setAttribute(
      'aria-label',
      `Ampliar: ${p.descripcion}`
    );

    const { frame, img } = slot(
      `assets/${p.archivo}`,
      p.descripcion,
      p.archivo,
      p.categoria
    );

    const caption = document.createElement('span');
    caption.className = 'gallery-label';

    const title = document.createElement('span');
    title.textContent = p.categoria;

    const number = document.createElement('span');
    number.textContent = String(p.index + 1).padStart(2, '0');

    caption.append(title, number);

    img.addEventListener('load', () => {
      p.loaded = true;
      p.failed = false;
      button.disabled = false;
      updateGallery();
    });

    img.addEventListener('error', () => {
      p.loaded = false;
      p.failed = true;
      button.disabled = true;
      updateGallery();
    });

    button.append(frame, caption);

    button.addEventListener('click', () => {
      returnFocus = button;
      showPhoto(p);
      dialog.showModal();
      document.body.classList.add('modal-open');
    });

    galleryRoot.append(button);
    galleryButtons.push(button);
  });

  /*
    Se conserva el orden original de las categorías
    y de las fotografías definido en config.js.
  */

  ['Todas', ...new Set(gallery.map(p => p.categoria))]
    .forEach(category => {
      const b = document.createElement('button');

      b.textContent = category;
      b.setAttribute('aria-pressed', category === 'Todas');

      b.addEventListener('click', () => {
        activeCategory = category;

        filters.querySelectorAll('button').forEach(x => {
          x.setAttribute('aria-pressed', x === b);
        });

        updateGallery();
      });

      filters.append(b);
    });

  function showPhoto(p) {
    activePhoto = p;

    largePhoto.src = `assets/${p.archivo}`;
    largePhoto.alt = p.descripcion;

    photoCaption.textContent =
      `${p.descripcion} · ${p.categoria}`;
  }

  function movePhoto(direction) {
    const i = visiblePhotos.findIndex(
      p => p.index === activePhoto?.index
    );

    if (visiblePhotos.length) {
      showPhoto(
        visiblePhotos[
          (i + direction + visiblePhotos.length) %
          visiblePhotos.length
        ]
      );
    }
  }

  closeLightbox.addEventListener('click', () => {
    dialog.close();
  });

  previousPhoto.addEventListener('click', () => {
    movePhoto(-1);
  });

  nextPhoto.addEventListener('click', () => {
    movePhoto(1);
  });

  dialog.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') movePhoto(1);
    if (e.key === 'ArrowLeft') movePhoto(-1);
  });

  dialog.addEventListener('click', e => {
    if (e.target === dialog) dialog.close();
  });

  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    returnFocus?.focus();
  });
}

/* ----------------------------------
   6. Retrato del fotógrafo
---------------------------------- */

const photographer = $('#photographer-photo');

if (photographer) {
  const portrait = slot(
    CONFIG.fotoPerfil || 'assets/Angel.jpg',
    'Angel, fotógrafo de Light Focus Studio',
    (CONFIG.fotoPerfil || 'assets/Angel.jpg').split('/').pop(),
    'Detrás de la cámara'
  );

  photographer.append(portrait.frame);
}
