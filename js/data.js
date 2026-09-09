/*
  CONFIGURACIÓN PRINCIPAL DEL SITIO
  Cambia aquí teléfonos, redes, ubicación y contenido dinámico.
*/
window.SITE_DATA = {
  siteUrl: "https://alejoadmade.github.io/EscueladeManejodelEste/",
  whatsapp: "50766267154",
  phoneDisplay: "6626-7154",
  telephone: "396-7687",
  instagram: "https://www.instagram.com/escuelademanejopanamaeste/",
  facebook: "",
  tiktok: "",
  youtube: "",
  address: "Plaza Panamericana, 24 de Diciembre, Panamá Este",
  addressDetail: "A un costado de La Doña, Plaza Panamericana",
  wazeEmbed: "https://embed.waze.com/iframe?zoom=16&lat=9.103954&lon=-79.372165&ct=livemap",
  wazeLink: "https://ul.waze.com/ul?ll=9.10395400%2C-79.37216500&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",

  courses: {
    es: [
      { tag:"PRIMERA VEZ", title:"Curso teórico + práctico", text:"Empieza desde cero con formación teórica y práctica.", icon:"steering", bullets:["Formación teórica","Práctica de conducción","Orientación para el proceso"], message:"Hola, quiero información sobre el curso teórico y práctico para primera licencia.", page:"pages/primera-licencia.html" },
      { tag:"LICENCIAS A / C / D", title:"Certificación y orientación", text:"Certificación y orientación para licencias particulares y comerciales.", icon:"license", bullets:["Licencia particular","Licencia comercial","Exámenes requeridos"], message:"Hola, quiero información sobre certificación para licencia A, C o D.", page:"pages/certificacion-licencias.html" },
      { tag:"AMPLIACIONES", title:"Amplía tu categoría", text:"Avanza a categorías profesionales según tu objetivo.", icon:"arrow", bullets:["E1, E2 y E3","F, G, H e I","Orientación de requisitos"], message:"Hola, quiero información sobre ampliación de licencia.", page:"pages/ampliaciones.html" },
      { tag:"TRÁMITES ESPECIALES", title:"Recuperación de licencia", text:"Orientación para procesos de licencia retenida.", icon:"shield", bullets:["Orientación personalizada","Proceso guiado","Acompañamiento"], message:"Hola, quiero orientación sobre recuperación de licencia retenida.", page:"pages/recuperacion-licencia.html" }
    ],
    en: [
      { tag:"FIRST LICENSE", title:"Theory + practical course", text:"Start from zero with theory and practical training.", icon:"steering", bullets:["Theory training","Driving practice","Process guidance"], message:"Hello, I would like information about the theory and practical course for a first license.", page:"pages/primera-licencia.html" },
      { tag:"LICENSES A / C / D", title:"Certification & guidance", text:"Certification and guidance for private and commercial licenses.", icon:"license", bullets:["Private license","Commercial license","Required exams"], message:"Hello, I would like information about certification for A, C or D licenses.", page:"pages/certificacion-licencias.html" },
      { tag:"UPGRADES", title:"Upgrade your category", text:"Move into professional categories based on your goal.", icon:"arrow", bullets:["E1, E2 and E3","F, G, H and I","Requirements guidance"], message:"Hello, I would like information about upgrading my license category.", page:"pages/ampliaciones.html" },
      { tag:"SPECIAL PROCEDURES", title:"License recovery", text:"Guidance for retained-license recovery processes.", icon:"shield", bullets:["Personalized guidance","Guided process","Support"], message:"Hello, I would like guidance about recovering a retained driver's license.", page:"pages/recuperacion-licencia.html" }
    ]
  },

  faqs: {
    es: [
      {q:"¿Atienden personas que nunca han manejado?",a:"Sí. Puedes consultar por cursos teóricos y prácticos para primera vez y recibir orientación según tu nivel de experiencia."},
      {q:"¿Qué categorías de licencia trabajan?",a:"El material de la escuela muestra atención para licencias A, C y D, además de ampliaciones E1, E2, E3, F, G, H e I. Los requisitos exactos deben confirmarse al momento de solicitar información."},
      {q:"¿Realizan trámites de ampliación?",a:"Sí. Puedes consultar por ampliaciones y recibir orientación sobre la categoría, requisitos y proceso correspondiente."},
      {q:"¿Ofrecen certificados y exámenes médicos?",a:"La escuela publica servicios de certificación y orientación para exámenes requeridos según el tipo de licencia. Confirma disponibilidad y costo vigente por WhatsApp."},
      {q:"¿Ayudan con licencias retenidas?",a:"Sí. La escuela ofrece orientación para procesos de recuperación de licencia retenida y ha publicado atención para distintos tipos de casos."},
      {q:"¿Dónde están ubicados?",a:"En Plaza Panamericana, sector 24 de Diciembre, Panamá Este, a un costado de La Doña. Puedes abrir la ubicación directamente en Waze desde esta página."},
      {q:"¿Cómo solicito precios y disponibilidad?",a:"La forma más rápida es por WhatsApp al 6626-7154. Desde cada servicio de esta web puedes abrir una conversación con el mensaje ya preparado."}
    ],
    en: [
      {q:"Do you teach people who have never driven before?",a:"Yes. You can ask about first-time theory and practical courses and receive guidance based on your experience level."},
      {q:"Which license categories do you work with?",a:"The school's published material shows services for A, C and D licenses, plus E1, E2, E3, F, G, H and I upgrades. Exact requirements should be confirmed when requesting information."},
      {q:"Do you handle license upgrades?",a:"Yes. You can ask about upgrades and receive guidance about the category, requirements and applicable process."},
      {q:"Do you offer certificates and medical exams?",a:"The school publishes certification services and guidance for exams required by license type. Confirm current availability and pricing by WhatsApp."},
      {q:"Can you help with retained licenses?",a:"Yes. The school offers guidance for retained-license recovery processes and has published services for different types of cases."},
      {q:"Where are you located?",a:"At Plaza Panamericana, 24 de Diciembre, Panama East, next to La Doña. You can open the location directly in Waze from this website."},
      {q:"How do I request prices and availability?",a:"The fastest way is WhatsApp at 6626-7154. Each service on this website can open a conversation with a prepared message."}
    ]
  },

  videos: [
    {file:"assets/videos/reel-01.mp4", poster:"images/instructor.jpg", es:"Formación de conductores", en:"Driver training"},
    {file:"assets/videos/reel-02.mp4", poster:"images/estudiante.jpg", es:"Experiencias de estudiantes", en:"Student experiences"},
    {file:"assets/videos/reel-03.mp4", poster:"images/licencias-ac.jpg", es:"Licencias y certificaciones", en:"Licenses & certifications"},
    {file:"assets/videos/reel-04.mp4", poster:"images/ampliacion-e2.jpg", es:"Ampliaciones profesionales", en:"Professional upgrades"}
  ],

  textMap: {
    "Servicios":"Services","Cómo funciona":"How it works","Licencias":"Licenses","La escuela":"The school","Ubicación":"Location","Preguntas frecuentes":"FAQ","Escribir por WhatsApp":"Message on WhatsApp",
    "Escuela de Manejo · Panamá Este":"Driving School · Panama East","Tu licencia.":"Your license.","Tu movilidad.":"Your mobility.","Nuestro compromiso.":"Our commitment.",
    "Cursos teóricos y prácticos, primera licencia, ampliaciones y orientación para que avances con seguridad y confianza.":"Theory and practical courses, first license, upgrades and guidance so you can move forward safely and confidently.",
    "Quiero empezar":"Get started","Ver servicios":"View services","Formación responsable":"Responsible training","Para conductores seguros":"For safer drivers","Proceso guiado":"Guided process","Orientación de principio a fin":"Guidance from start to finish","Plaza Panamericana":"Plaza Panamericana",
    "Escríbenos":"Message us","Cuéntanos qué licencia necesitas.":"Tell us which license you need.","Te orientamos":"We guide you","Revisamos tu objetivo y categoría.":"We review your goal and category.","Completa tu proceso":"Complete your process","Curso, certificación o ampliación.":"Course, certification or upgrade.","Sigue avanzando":"Keep moving forward","Más confianza y movilidad.":"More confidence and mobility.",
    "SERVICIOS":"SERVICES","Todo lo que necesitas para seguir avanzando.":"Everything you need to keep moving forward.","Desde tu primera experiencia al volante hasta una ampliación profesional, te orientamos para escoger el proceso que corresponde a tu objetivo.":"From your first experience behind the wheel to a professional upgrade, we guide you toward the process that fits your goal.",
    "¿No sabes qué categoría o trámite necesitas?":"Not sure which category or procedure you need?","Escríbenos y te orientamos directamente.":"Message us and we will guide you directly.","Hablar con la escuela →":"Talk to the school →",
    "UN PROCESO MÁS SIMPLE":"A SIMPLER PROCESS","Tu siguiente oportunidad podría empezar aquí.":"Your next opportunity could start here.","Queremos que sepas qué hacer desde el primer contacto. Te orientamos según tu caso y te indicamos el siguiente paso.":"We want you to know what to do from the first contact. We guide you based on your case and show you the next step.",
    "Cuéntanos tu objetivo":"Tell us your goal","Primera licencia, ampliación, certificado o recuperación.":"First license, upgrade, certificate or recovery.","Revisamos tu categoría":"We review your category","Te orientamos según el tipo de licencia o trámite.":"We guide you according to the type of license or procedure.","Completa los requisitos":"Complete the requirements","Curso, práctica, exámenes o documentación aplicable.":"Course, practice, exams or applicable documentation.","Avanza con acompañamiento":"Move forward with support","Continúa tu proceso con una ruta más clara.":"Continue your process with a clearer path.","Tu proceso":"Your process","PASO ACTUAL":"CURRENT STEP","Orientación personalizada":"Personalized guidance","Proceso claro":"Clear process","Atención por WhatsApp":"WhatsApp assistance","Continuar":"Continue",
    "CATEGORÍAS Y AMPLIACIONES":"CATEGORIES & UPGRADES","Una licencia para cada nueva ruta.":"A license for every new route.","Estas son algunas de las categorías que aparecen en los servicios y materiales de la escuela.":"These are some of the categories shown in the school's services and materials.","Licencia particular":"Private license","Licencia comercial":"Commercial license","Consultar →":"Ask about it →","AMPLIACIÓN":"UPGRADE","Colegiales / vans":"School transport / vans","Camiones combinados":"Combination trucks","Carga peligrosa":"Hazardous cargo","Categoría E1":"E1 category","Categoría E3":"E3 category","Categoría F":"F category","Categoría I":"I category",
    "FORMACIÓN RESPONSABLE":"RESPONSIBLE TRAINING","No es solo obtener una licencia. Es aprender a conducir mejor.":"It is not just about getting a license. It is about learning to drive better.","La escuela comunica un enfoque basado en formación responsable, horarios flexibles, vehículos en buenas condiciones e instructores capacitados.":"The school promotes responsible training, flexible schedules, well-maintained vehicles and trained instructors.","Instructores capacitados":"Trained instructors","Acompañamiento durante tu formación.":"Support throughout your training.","Proceso rápido y claro":"Fast, clear process","Orientación para saber qué sigue.":"Guidance so you know what comes next.","Certificación de conductores":"Driver certification","Opciones según tu licencia y objetivo.":"Options based on your license and goal.","Aprende. Practica. Conduce.":"Learn. Practice. Drive.","Una ruta enfocada en seguridad y confianza.":"A path focused on safety and confidence.","Conocer mis opciones":"See my options",
    "MÁS SERVICIOS":"MORE SERVICES","Orientación más allá de las clases.":"Guidance beyond driving lessons.","La escuela también publica servicios relacionados con certificaciones, exámenes, ampliaciones y recuperación de licencia.":"The school also offers services related to certificates, exams, upgrades and license recovery.","Certificación":"Certification","Certificados y exámenes":"Certificates & exams","Consulta los requisitos médicos según el tipo de licencia.":"Ask about medical requirements based on license type.","Orientación":"Guidance","Recuperación de licencia":"License recovery","Atención para procesos de licencia retenida según tu caso.":"Assistance for retained-license processes based on your case.","Ampliación":"Upgrade","Categorías profesionales":"Professional categories","E2, G, H y otras categorías disponibles para consulta.":"E2, G, H and other categories available for consultation.","Ver categorías →":"View categories →",
    "RESULTADOS REALES":"REAL RESULTS","Personas que dieron el siguiente paso.":"People who took the next step.","Una web también debe mostrar el lado humano de la escuela: estudiantes, certificaciones y avances reales.":"A website should also show the human side of the school: students, certifications and real progress.","Ver más en Instagram":"See more on Instagram",
    "CONTENIDO DE LA ESCUELA":"SCHOOL CONTENT","Servicios, ampliaciones y orientación.":"Services, upgrades and guidance.","Integramos el contenido que ya manejan en redes para que la web se sienta realmente conectada con la marca.":"We connect the content already shared on social media so the website feels genuinely tied to the brand.","Transporte colegial":"School transportation","Carga peligrosa":"Hazardous cargo","Primera licencia":"First license",
    "VIDEOS / REELS":"VIDEOS / REELS","La escuela también vive en video.":"The school also comes alive on video.","Estos espacios están listos para cargar reels y videos propios directamente desde GitHub o Cloudflare, sin depender del reproductor de Instagram.":"These slots are ready for the school's own reels and videos, hosted directly on GitHub or Cloudflare without depending on Instagram's player.","Video próximamente":"Video coming soon","Reemplaza el archivo indicado en assets/videos/":"Replace the indicated file in assets/videos/",
    "Comparte esta página":"Share this page","Compartir":"Share","Copiar enlace":"Copy link","Compartir por WhatsApp":"Share on WhatsApp","Seguir en Instagram":"Follow on Instagram","Enlace copiado":"Link copied",
    "PREGUNTAS FRECUENTES":"FREQUENTLY ASKED QUESTIONS","Resuelve tus dudas antes de empezar.":"Get answers before you start.","Los requisitos pueden variar según la categoría. Para información exacta y vigente, comunícate con la escuela.":"Requirements may vary by category. For exact and current information, contact the school.","Hacer otra pregunta →":"Ask another question →",
    "HABLEMOS":"LET'S TALK","Tu próximo paso puede empezar hoy.":"Your next step can start today.","Completa tus datos y abriremos WhatsApp con tu solicitud lista para enviar.":"Complete your details and we will open WhatsApp with your request ready to send.","Nombre":"Name","Teléfono":"Phone","¿Qué necesitas?":"What do you need?","Selecciona una opción":"Select an option","Curso teórico y práctico":"Theory and practical course","Primera licencia A/C":"First license A/C","Licencia comercial D":"Commercial license D","Ampliación de licencia":"License upgrade","Certificado / exámenes médicos":"Certificate / medical exams","Otro":"Other","Cuéntanos un poco más":"Tell us a little more","Enviar por WhatsApp":"Send via WhatsApp","No se guardan datos en esta página. Al enviar, se abrirá WhatsApp.":"No data is stored on this page. Submitting will open WhatsApp.",
    "ENCUÉNTRANOS":"FIND US","Abrir ruta en Waze →":"Open route in Waze →","Navegación":"Navigation","Contacto":"Contact","Abrir Waze →":"Open Waze →","Diseño web demostrativo.":"Demonstration website design.","Tu licencia, tu movilidad, nuestro compromiso.":"Your license, your mobility, our commitment."
  }
};
