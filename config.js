/* EDITA AQUÍ: no necesitas cambiar el HTML para actualizar fotos y enlaces. */
const CONFIG = {
  whatsapp: "523350517645",
  instagram: "https://www.instagram.com/light.focus.studio/",
  fotoPerfil: "assets/Angel.jpg", 
  mensaje: "Hola, me gustaría información para una sesión fotográfica.",
  mostrarOpinionesDemo: true,
  
  paquetes: [
    {nombre:"Esencial", precio:1200, tiempo:"30 minutos", fotos:15, locacion:"Una locación acordada", imagen:"assets/Paquete_01.jpg", color:"#ad624b", etiqueta:"UN MOMENTO PARA TI"},
    {nombre:"Clásico", precio:1800, tiempo:"1 hora", fotos:30, locacion:"Una locación acordada", imagen:"assets/Paquete_02.jpg", color:"#ae292d", etiqueta:"NUESTRA SUGERENCIA"},
    {nombre:"Historia", precio:2500, tiempo:"2 horas", fotos:50, locacion:"Hasta 2 locaciones acordadas", imagen:"assets/Paquete_03.jpg", color:"#702d40", etiqueta:"PARA CONTAR UN POCO MÁS"}
  ],

  experienciasDestacadas: [
    {
      nombre: "Esencial", precio: 1200, color: "#ad624b", etiqueta: "UN MOMENTO PARA TI",
      imagen: "assets/Paquete_01.jpg",
      caracteristicas: ["30 minutos de sesión", "15 fotografías editadas", "Una locación acordada", "Entrega digital"],
      mensajeWa: "Hola, me interesa el paquete Esencial de $1,200. ¿Qué fechas tienes disponibles?"
    },
    {
      nombre: "Clásico", precio: 1800, color: "#ae292d", etiqueta: "NUESTRA SUGERENCIA", destacado: true,
      imagen: "assets/Paquete_02.jpg",
      caracteristicas: ["1 hora de sesión", "30 fotografías editadas", "Una locación acordada", "Entrega digital"],
      mensajeWa: "Hola, me interesa el paquete Clásico de $1,800. ¿Qué fechas tienes disponibles?"
    },
    {
      nombre: "Evento + Clásico", precio: 3800, color: "#ae292d", etiqueta: "PROMOCIÓN ESPECIAL", promocion: true,
      imagenes: ["assets/Evento.jpg", "assets/Paquete_02.jpg"],
      caracteristicas: ["4 horas de cobertura fotográfica", "1 hora de sesión Clásica", "30 fotografías editadas de la sesión", "Entrega digital de ambos servicios"],
      mensajeWa: "Hola, me interesa la promoción Evento + Clásico de $3,800. ¿Qué fechas tienes disponibles?"
    }
  ],

otrosServicios: [
    {
      nombre: "Semblanzas audiovisuales",
      categoria: "AUDIOVISUAL",
      descripcion: "Videos personalizados elaborados con fotografías, música, textos y recuerdos para contar la historia de una persona.",
      imagen: "assets/Servicio_Semblanza.jpg" // Sube una foto con este nombre
    },
    {
      nombre: "Impresiones y cuadros",
      categoria: "FORMATO FÍSICO",
      descripcion: "Permiten convertir fotografías en productos físicos. Exclusivo como complemento de la contratación de un paquete fotográfico.",
      imagen: "assets/Servicio_Impresion.jpg" // Sube una foto con este nombre
    }
  ],

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