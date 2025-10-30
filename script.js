

// Cargar cursos dinámicamente
const contenedor = document.getElementById("cursos-lista");

const cursos = [
  {
    id: 1,
    titulo: "Introducción a la Informática",
    descripcion: "Aprendé conceptos fundamentales de la informática.<br>Duración: 4 meses.",
    enlaceVideo: "#",
    enlaceMaterial: "https://drive.google.com/file/d/1IzHEnirPW5EaB5SRdmdPgG-5J6ZJUTug/view?usp=sharing",
    enlaceClaseVirtual: "#"
  },
  {
    id: 2,
    titulo: "Desarrollo Web",
    descripcion: "Crea tus primeras páginas web desde cero.<br>Duración: 6 meses.",
    enlaceVideo: "#",
    enlaceMaterial: "https://drive.google.com/file/d/1_AtYZtw4DW0rmODXQmsOtXeowQA238qf/view?usp=sharing",
    enlaceClaseVirtual: "#"
  },
  {
    id: 3,
    titulo: "Programación con Python",
    descripcion: "Aprendé uno de los lenguajes más populares.<br>Duración: 6 meses.",
    enlaceVideo: "#",
    enlaceMaterial: "https://drive.google.com/file/d/17JmDs5dgHGXCGe8bAIdOgUgl2JQskZTc/view?usp=sharing",
    enlaceClaseVirtual: "#"
  },
    {
    id: 4,
    titulo: "Programación con C++",
    descripcion: "Aprendé uno de los lenguajes más técnicos.<br>Duración: 6 meses.",
    enlaceVideo: "https://drive.google.com/dddd",
    enlaceMaterial: "https://drive.google.com/eeee",
    enlaceClaseVirtual: "https://meet.google.com/fff"
  },
    {
    id: 5,
    titulo: "Inteligencia Artificial",
    descripcion: "Aprendé sobre los fundamentos de la IA y sus aplicaciones.<br>Duración: 3 meses.",
    enlaceVideo: "#",
    enlaceMaterial: "https://drive.google.com/file/d/1zPb66mxpKh1D6EvZ9CpdqUa-PhnsmjxZ/view?usp=sharing",
    enlaceClaseVirtual: "#"
  },
    {
    id: 6,
    titulo: "Diseño Gráfico",
    descripcion: "Aprendé sobre los principios del diseño y la creatividad.<br>Duración: 4 meses.",
    enlaceVideo: "https://drive.google.com/dddd",
    enlaceMaterial: "https://drive.google.com/eeee",
    enlaceClaseVirtual: "https://meet.google.com/fff"
  },
    {
    id: 7,
    titulo: "Corel Draw",
    descripcion: "Aprendé sobre diseño gráfico y edición de imágenes.<br>Duración: 4 meses.",
    enlaceVideo: "https://drive.google.com/dddd",
    enlaceMaterial: "https://drive.google.com/eeee",
    enlaceClaseVirtual: "https://meet.google.com/fff"
  },
    {
    id: 8,
    titulo: "Photoshop",
    descripcion: "Aprendé sobre edición de imágenes y diseño gráfico.<br>Duración: 4 meses.",
    enlaceVideo: "https://drive.google.com/dddd",
    enlaceMaterial: "https://drive.google.com/eeee",
    enlaceClaseVirtual: "https://meet.google.com/fff"
  },
    {
    id: 9,
    titulo: "Excel de inicial a avanzado",
    descripcion: "Aprendé sobre hojas de cálculo y análisis de datos.<br>Duración: 4 meses.",
    enlaceVideo: "#",
    enlaceMaterial: "https://drive.google.com/file/d/1Bs4fDgw_I5Ps-IsWKeJSF24IGfmGUhCh/view?usp=sharing",
    enlaceClaseVirtual: "#"
  },
    {
    id: 10,
    titulo: "Redes y Seguridad Informática",
    descripcion: "Aprendé sobre redes y cómo proteger la información.<br>Duración: 4 meses.",
    enlaceVideo: "https://drive.google.com/dddd",
    enlaceMaterial: "https://drive.google.com/eeee",
    enlaceClaseVirtual: "https://meet.google.com/fff"
  },
    {
    id: 11,
    titulo: "Reparación de PC y Mantenimiento",
    descripcion: "Aprendé sobre el mantenimiento y reparación de computadoras.<br>Duración: 6 meses.",
    enlaceVideo: "https://drive.google.com/dddd",
    enlaceMaterial: "https://drive.google.com/eeee",
    enlaceClaseVirtual: "https://meet.google.com/fff"
  },
    {
    id: 12,
    titulo: "Soporte Técnico",
    descripcion: "Aprendé sobre el soporte y mantenimiento de sistemas informáticos.<br>Duración: 6 meses.",
    enlaceVideo: "https://drive.google.com/dddd",
    enlaceMaterial: "https://drive.google.com/eeee",
    enlaceClaseVirtual: "https://meet.google.com/fff"
  }
];


cursos.forEach(curso => {
  const div = document.createElement("div");
  div.classList.add("curso");

  div.innerHTML = `
    <h3>${curso.titulo}</h3>
    <p>${curso.descripcion}</p>
    <p>📂 Materiales</p>
    <p>🎥 Clases Virtuales</p>
    <a href="${curso.enlaceMaterial}" target="_blank">Ver Programa</a>
    `;

  contenedor.appendChild(div);
});
