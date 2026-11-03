/* EDITA AQUÍ: no necesitas cambiar el HTML para actualizar fotos y enlaces. */
const CONFIG = {
  // Número actualizado por Angel, con 52 de México.
  whatsapp: "523350517645",
  instagram: "https://www.instagram.com/light.focus.studio/",
  fotoPerfil: "assets/Angel.jpg", // Tu retrato 1:1. Puede ser PNG si cambias la ruta.
  mensaje: "Hola, me gustaría información para una sesión fotográfica.",
  // true muestra tarjetas claramente rotuladas como ejemplos. Pon false antes de publicar.
  mostrarOpinionesDemo: true,
  paquetes: [
    {nombre:"Esencial", precio:1200, tiempo:"30 minutos", fotos:15, locacion:"Una locación acordada", imagen:"assets/Paquete_01.jpg", color:"#ad624b", etiqueta:"UN MOMENTO PARA TI"},
    {nombre:"Signature", precio:1800, tiempo:"1 hora", fotos:30, locacion:"Una locación acordada", imagen:"assets/Paquete_02.jpg", color:"#ae292d", etiqueta:"NUESTRA SUGERENCIA"},
    {nombre:"Historia", precio:2500, tiempo:"2 horas", fotos:50, locacion:"Hasta 2 locaciones acordadas", imagen:"assets/Paquete_03.jpg", color:"#702d40", etiqueta:"PARA CONTAR UN POCO MÁS"}
  ],
  // Agrega o elimina renglones. Cada foto puede tener una categoría y descripción propia.
  galeria: [
    {archivo:"IMG001.jpg", categoria:"Retratos", descripcion:"Retrato en exterior"},
    {archivo:"IMG002.jpg", categoria:"Parejas", descripcion:"Un instante en pareja"},
    {archivo:"IMG003.jpg", categoria:"XV", descripcion:"Retrato de XV años"},
    {archivo:"IMG004.jpg", categoria:"Retratos", descripcion:"Luz natural y retrato"},
    {archivo:"IMG005.jpg", categoria:"Parejas", descripcion:"Recuerdos juntos"},
    {archivo:"IMG006.jpg", categoria:"XV", descripcion:"Una etapa para recordar"}
  ],
  preguntas: [
    ["¿Necesito saber posar?", "No. Te guío durante la sesión para encontrar posturas y movimientos con los que te sientas cómodo."],
    ["¿Dónde se hace la sesión?", "En exterior, en una locación que acordamos antes de reservar. Si tiene costo de acceso, permiso o un traslado adicional, lo cotizamos por separado."],
    ["¿Cómo reservo mi fecha?", "Escríbeme por WhatsApp con el paquete y la fecha que tienes en mente. Te confirmaré disponibilidad, anticipo y condiciones antes de reservar."],
    ["¿Qué incluye la edición?", "Ajustes de luz, color y encuadre. Si buscas retoque de piel detallado, cambios de fondo u otra edición especial, lo acordamos y cotizamos previamente."],
    ["¿Cuándo y cómo recibo mis fotos?", "La entrega es digital. Antes de reservar acordamos el plazo de entrega y los detalles de descarga."],
    ["¿Qué pasa si llueve?", "Revisamos el clima y acordamos una alternativa o una nueva fecha. Las condiciones de reprogramación quedan definidas al reservar."]
  ]
};
