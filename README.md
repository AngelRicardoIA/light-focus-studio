# Light Focus Studio — portafolio estático

Diseño actualizado: fondos luminosos, superficies glass con blur, tarjetas redondeadas y encabezados sin numeración.

Sitio sin instalaciones, sin frameworks, sin backend. HTML + CSS + JavaScript.
Funciona abriendo index.html y se puede publicar en GitHub Pages.
No está publicado todavía. Las imágenes reales las agregas tú.

## 1. Abre la página

Descomprime el ZIP y abre `index.html` con doble clic.
Mantén todos los archivos y la carpeta assets juntos.

## 2. Agrega fotografías

Dentro de `assets/`, coloca:

| Archivo exacto | Uso |
| --- | --- |
| Paquete_01.jpg | Foto de Esencial |
| Paquete_02.jpg | Foto de Signature |
| Paquete_03.jpg | Foto de Historia |
| IMG001.jpg a IMG006.jpg | Primeras seis fotos de la galería |

Es 01 con número cero, no letra O. Respeta mayúsculas, extensión y guiones bajos.
Los archivos deben ser fotografías JPG exportadas, no simplemente un PNG renombrado.
Recomendación práctica: exporta en sRGB, lado largo de unos 1600–2000 px y calidad 80–85; revisa el resultado antes de subir.
Las fotos de paquete tienen formato vertical 4:5 y se recortan suavemente para cubrir la tarjeta. Usa fotografías originales sin el diseño del banner. Para mover el encuadre, agrega `encuadre: "50% 25%"` a la entrada del paquete en config.js: el primer valor es la posición horizontal y el segundo la vertical. Si lo omites, se usa "50% 35%". Una foto 4:5 ya recortada por ti permite controlar mejor la composición.
Si falta una imagen, aparece un espacio con su nombre. No se utiliza fotografía ajena.

## 3. Personaliza config.js

Ábrelo con Bloc de notas o VS Code. Cada pieza tiene una función:

- `whatsapp`: destino de todos los botones. Número actualizado: 523350517645 (33 5051 7645).
- `instagram`: enlace a tu perfil. Se precargó light.focus.studio del banner; confírmalo también.
- `mensaje`: texto que prepara el botón general de WhatsApp. Nunca envía mensajes automáticamente.
- `paquetes`: cambia precio, tiempo, número de fotos, imagen y color.
- `galeria`: una entrada por foto, con archivo, categoría y descripción.
- `preguntas`: preguntas y respuestas desplegables. Define tus plazos, anticipos y condiciones reales.
- `mostrarOpinionesDemo`: true muestra el diseño de calificaciones con ejemplos explícitamente identificados. Cámbialo a false antes de publicar o sustituye el contenido por opiniones reales autorizadas. No hay promedio, clientes ficticios ni sistema de recepción de opiniones.

Para agregar IMG007.jpg, copia una entrada de galeria, agrega una coma entre entradas y cambia sus datos. Agrega también el JPG a assets. El sitio NO descubre archivos automáticamente: esta lista determina qué se muestra.
Las categorías de los filtros se forman automáticamente a partir de esa lista. Cambia las descripciones para que describan realmente cada fotografía.

## 4. Qué hace cada archivo

- `index.html`: orden y contenido fijo de la página.
- `styles.css`: colores, tipografías, glass sutil y adaptación a celulares.
- `config.js`: tus datos, fotografías, paquetes y preguntas.
- `script.js`: crea las tarjetas, filtros, enlaces y visor de fotos.
- `assets/`: tus fotografías.
- `.nojekyll`: indica a GitHub que son archivos estáticos.

Interacciones: filtros, ampliación de fotos cargadas, flechas del visor, teclas izquierda/derecha y Escape, preguntas desplegables y enlaces externos. Las fotos que faltan no abren el visor.

## 5. Publica en GitHub Pages desde el navegador

1. En GitHub, crea un repositorio público llamado `light-focus-studio`. No tienes que instalar Git.
2. En el repositorio, usa **Add file → Upload files**.
3. Sube index.html, styles.css, config.js, script.js, README.md y la carpeta assets con fotos. Sube el contenido del ZIP, no el ZIP ni una carpeta que lo envuelva. index.html debe quedar en la raíz del repositorio.
4. Confirma con **Commit changes**.
5. Si .nojekyll no aparece, usa **Add file → Create new file**, escribe `.nojekyll`, agrega un comentario breve y confirma el archivo.
6. Abre **Settings → Pages**.
7. En **Build and deployment → Source**, selecciona **Deploy from a branch**.
8. Selecciona **main**, carpeta **/(root)** y **Save**.
9. Espera a que GitHub complete la publicación. Pages mostrará la dirección del sitio. Usa ese enlace, no el del repositorio.
10. Abre el sitio desde tu celular y verifica fotos, WhatsApp, Instagram y textos.

Guía oficial consultada: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 6. Actualiza después

Edita config.js desde GitHub con el lápiz, o sube las fotos actualizadas a assets. Confirma los cambios y espera la nueva publicación. Si el navegador muestra una versión anterior, recarga con Ctrl+F5.

## Antes de anunciar

- Confirma número y usuario de redes.
- Completa anticipos, plazo de entrega y política de clima/reprogramación.
- Acuerda si traslados entre locaciones cuentan dentro de las dos horas.
- Oculta las opiniones de demostración; publica únicamente opiniones reales autorizadas.
- Usa fotografías que puedas publicar con autorización de sus protagonistas.
- Los enlaces llevan a WhatsApp/Instagram; no hay pagos, reservas automáticas ni formulario que almacene datos.

## Nuevas secciones y privacidad

- Tu retrato cuadrado usa `assets/Angel.jpg`. Puedes cambiar la ruta agregando `fotoPerfil` en config.js; script.js también funciona con tu config anterior y toma esa ruta por defecto.
- Se agregaron “Así funciona tu sesión” y condiciones de reserva sin inventar importes, penalizaciones ni fechas: confirma esos detalles en cada cotización.
- Las opiniones tienen textos ficticios y etiquetas visibles de ejemplo. No representan testimonios de clientes; reemplázalas por opiniones reales autorizadas u ocúltalas.
- `privacidad.html` es una página aparte y carga `privacidad.js` para el contacto. Necesita config.js y styles.css.
- IMPORTANTE: el aviso es un borrador operativo. Antes de publicarlo completa el domicilio del responsable, confirma su identidad y los proveedores reales de almacenamiento/entrega, periodos de conservación y transferencias. No se presenta como revisión jurídica ni como garantía de cumplimiento.
- La autorización de publicación debe recabarse por separado: una página informativa no la obtiene automáticamente. Registra quién autorizó, qué fotografías, canales, finalidad y fecha; para anuncios pagados pide autorización específica. Para menores confirma representación legal.
- Contacto para privacidad y retiro: 33 5051 7645, configurable mediante whatsapp.
- Referencias consultadas: https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf y https://www.diputados.gob.mx/LeyesBiblio/pdf_mov/Ley_Federal_del_Derecho_de_Autor.pdf
