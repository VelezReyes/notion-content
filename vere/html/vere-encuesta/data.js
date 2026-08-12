// Datos de las 12 preguntas de la encuesta de cultura VERE (escala 1-5)
window.VERE_SECTIONS = [
  {
    title: "The Way We Work",
    prompt: "¿Qué tan fuerte sientes que esto vive en nuestro equipo?",
    items: [
      { title: "Founder Mentality", desc: "Tenemos mentalidad de startup, somos un equipo pequeño." },
      { title: "Collaborative", desc: "Nada está por debajo de nosotros, trabajamos hacia el mismo objetivo. Sin ego, sin política." },
      { title: "Fast Paced", desc: "Tenemos un sesgo hacia la acción." },
      { title: "Flexible", desc: "Manejamos la presión, calibramos el esfuerzo y mantenemos el rendimiento." },
      { title: "No Excuses", desc: "Somos dueños de nuestros éxitos y nuestras fallas." },
      { title: "Rigorous", desc: "Nos exigimos dar lo mejor de nosotros." }
    ]
  },
  {
    title: "What We Don't Build",
    prompt: "¿Qué tan efectivamente evitamos esto en nuestro equipo?",
    items: [
      { title: "Victim Mindset", desc: "La culpa, la evasión y la pasividad no tienen lugar en un equipo construido sobre la responsabilidad." },
      { title: "We Don't Resist Changes", desc: "No podemos construir el futuro con una mentalidad anclada en el pasado." },
      { title: "No Sloppy Work", desc: "No entregamos trabajo a medias." },
      { title: "No Masks, No Double Faces", desc: "Decimos lo que pensamos y pensamos lo que decimos." },
      { title: "We Don't Burn to Perform", desc: "No somos Superman, reconocemos nuestras limitaciones y planeamos en consecuencia." },
      { title: "We Don't Play the Insider Game", desc: "No usamos el acceso, las relaciones o el contexto privado para beneficio personal." }
    ]
  }
];

// Aplana las secciones en una lista de 12 preguntas con metadatos de sección
window.VERE_QUESTIONS = window.VERE_SECTIONS.flatMap((section, sIdx) =>
  section.items.map((item) => ({
    globalIndex: null, // se asigna abajo
    sectionIndex: sIdx,
    sectionTitle: section.title,
    sectionPrompt: section.prompt,
    title: item.title,
    desc: item.desc
  }))
);
window.VERE_QUESTIONS.forEach((q, i) => { q.globalIndex = i; });

window.VERE_SCALE_LABELS = ["Nada", "Poco", "Algo", "Bastante", "Totalmente"];
