const NOTA_APROBACION = 4.0;

const asignaturas = [
  {
    "nombre": "Inglés comunicativo 1 nivel principiante",
    "semestre": 1
  },
  {
    "nombre": "Comunicación y orientación profesional y personal",
    "semestre": 1
  },
  {
    "nombre": "Introducción a las ciencias de la biología",
    "semestre": 1
  },
  {
    "nombre": "Química general",
    "semestre": 1
  },
  {
    "nombre": "Matemática I",
    "semestre": 1
  },
  {
    "nombre": "Complementaria I",
    "semestre": 1
  },
  {
    "nombre": "Inglés comunicativo 2 nivel elemental",
    "semestre": 2,
    "requisitos": [
      "Inglés comunicativo 1 nivel principiante"
    ]
  },
  {
    "nombre": "Complementaria 2",
    "semestre": 2
  },
  {
    "nombre": "Bioinorgánica",
    "semestre": 2,
    "requisitos": [
      "Química general"
    ]
  },
  {
    "nombre": "Biología celular",
    "semestre": 2,
    "requisitos": [
      "Introducción a las ciencias de la biología"
    ]
  },
  {
    "nombre": "Biología ambiente y vida",
    "semestre": 2,
    "requisitos": [
      "Introducción a las ciencias de la biología"
    ]
  },
  {
    "nombre": "Matemáticas II",
    "semestre": 2,
    "requisitos": [
      "Matemática I"
    ]
  },
  {
    "nombre": "Complementaria 3",
    "semestre": 3
  },
  {
    "nombre": "Bioestadística",
    "semestre": 3,
    "requisitos": [
      "Matemática I"
    ]
  },
  {
    "nombre": "Física I",
    "semestre": 3,
    "requisitos": [
      "Matemática I"
    ]
  },
  {
    "nombre": "Química Orgánica básica",
    "semestre": 3,
    "requisitos": [
      "Química general"
    ]
  },
  {
    "nombre": "Diversidad animal I",
    "semestre": 3,
    "requisitos": [
      "Biología ambiente y vida"
    ]
  },
  {
    "nombre": "Diversidad vegetal I",
    "semestre": 3,
    "requisitos": [
      "Biología ambiente y vida",
      "Biología celular"
    ]
  },
  {
    "nombre": "Taller integrado de biodiversidad",
    "semestre": 4,
    "requisitos": [
      "Diversidad animal I",
      "Diversidad vegetal I",
      "Bioestadística"
    ]
  },
  {
    "nombre": "Diversidad vegetal II",
    "semestre": 4,
    "requisitos": [
      "Biología ambiente y vida"
    ]
  },
  {
    "nombre": "Diversidad animal II",
    "semestre": 4,
    "requisitos": [
      "Biología ambiente y vida"
    ]
  },
  {
    "nombre": "Bioestadística computacional aplicada",
    "semestre": 4,
    "requisitos": [
      "Bioestadística"
    ]
  },
  {
    "nombre": "Física II",
    "semestre": 4,
    "requisitos": [
      "Física I"
    ]
  },
  {
    "nombre": "Bioquímica",
    "semestre": 4,
    "requisitos": [
      "Química Orgánica básica",
      "Biología ambiente y vida"
    ]
  },
  {
    "nombre": "Microbiología",
    "semestre": 5,
    "requisitos": [
      "Bioquímica"
    ]
  },
  {
    "nombre": "Genética",
    "semestre": 5,
    "requisitos": [
      "Bioquímica",
      "Bioestadística computacional aplicada",
      "Bioestadística"
    ]
  },
  {
    "nombre": "Fundamentos de geociencias",
    "semestre": 5, "requisitos": [
      "Biología ambiente y vida"  ]
  },
  {
    "nombre": "Diversidad animal III",
    "semestre": 5,
    "requisitos": [
      "Biología ambiente y vida"
    ]
  },
  {
    "nombre": "Electiva 1",
    "semestre": 5,
    "requisitos": [
      "Biología ambiente y vida"
    ]
  },
  {
    "nombre": "Biología molecular",
    "semestre": 6,
    "requisitos": [
      "Genética"
    ]
  },
  {
    "nombre": "Ecología",
    "semestre": 6,
    "requisitos": [
      "Diversidad animal III",
      "Diversidad animal I",
      "Diversidad vegetal I",
      "Diversidad vegetal II",
      "Diversidad animal II",
      "Bioestadística computacional aplicada"
    ]
  },
  {
    "nombre": "Fisiología vegetal",
    "semestre": 6,
    "requisitos": [
      "Bioestadística computacional aplicada",
      "Bioquímica",
      "Diversidad vegetal II"
    ]
  },
  {
    "nombre": "Fisiología animal",
    "semestre": 6,
    "requisitos": [
      "Diversidad animal III",
      "Bioquímica"
    ]
  },
  {
    "nombre": "Diversidad vegetal III",
    "semestre": 6,
    "requisitos": [
      "Diversidad vegetal II"
    ]
  },
  {
    "nombre": "Diseño y gestión de proyectos",
    "semestre": 7,
    "requisitos": [
      "Diversidad vegetal III",
      "Fisiología animal",
      "Fisiología vegetal",
      "Ecología",
      "Biología molecular"
    ]
  },
  {
    "nombre": "Filosofía de la investigación biologíca",
    "semestre": 7,
    "requisitos": [
      "Fisiología animal",
      "Diversidad vegetal III",
      "Fisiología vegetal",
      "Ecología",
      "Biología molecular"
    ]
  },
  {
    "nombre": "Práctica profesional",
    "semestre": 7,
    "requisitos": [
      "Diversidad vegetal III",
      "Fisiología animal",
      "Fisiología vegetal",
      "Ecología",
      "Biología molecular"
    ]
  },
  {
    "nombre": "Evolución",
    "semestre": 7,
    "requisitos": [
      "Diversidad vegetal III",
      "Fisiología animal",
      "Fisiología vegetal",
      "Ecología",
      "Biología molecular"
    ]
  },
  {
    "nombre": "Electiva 2",
    "semestre": 7
  },
  {
    "nombre": "Biogeografía",
    "semestre": 8,
    "requisitos": [
      "Evolución"
    ]
  },
  {
    "nombre": "Legislación  y normativa ambiental",
    "semestre": 8
  },
  {
    "nombre": "Unidad de investigación",
    "semestre": 8,
    "requisitos": [
      "Diseño y gestión de proyectos"
    ]
  },
  {
    "nombre": "Campaña de terreno",
    "semestre": 8
  },
  {
    "nombre": "Electiva 3",
    "semestre": 8
  },
  {
    "nombre": "Evaluación de impacto ambiental sobre el sistema natural",
    "semestre": 9,
    "requisitos": [
      "Campaña de terreno"
    ]
  },
  {
    "nombre": "Manejo y conservación de recursos naturales",
    "semestre": 9,
    "requisitos": [
      "Legislación  y normativa ambiental"
    ]
  },
  {
    "nombre": "El sistema de INF.GEOG. (SIG) aplicado a la biología ambiental",
    "semestre": 9
  },
  {
    "nombre": "Proyecto de seminario de titulo",
    "semestre": 9,
    "requisitos": [
      "Unidad de investigación"
    ]
  },
  {
    "nombre": "Electiva 4",
    "semestre": 9
  },
  {
    "nombre": "Seminario de Titulo - Biológico",
    "semestre": 10
  }
];

function crearMalla() {
  const contenedor = document.getElementById("malla");
 contenedor.innerHTML = "";

  asignaturas.forEach(asig => {
    const { semestre } = asig;
    if (!semestres[semestre]) {
      semestres[semestre] = [];
    }
    semestres[semestre].push(asig);
  });

  Object.keys(semestres).sort((a,b)=>a-b).forEach(semestre => {
    const div = document.createElement("div");
    div.className = "semestre";
    div.innerHTML = `<h2>Semestre ${semestre}</h2>`;
    
    semestres[semestre].forEach(asig => {
      const estado = obtenerEstado(asig);
      const clase = estado.clase;
      const notaGuardada = obtenerNota(asig.nombre);
      const bloqueada = clase === "bloqueada" ? "disabled" : "";
      const asignaturaDiv = document.createElement("div");
      asignaturaDiv.className = `asignatura ${clase}`;
      asignaturaDiv.innerHTML = `
        <label>${asig.nombre}</label>
        <input type="number" step="0.1" min="1.0" max="7.0" value="${notaGuardada ?? ""}" data-nombre="${asig.nombre}">
      `;
      
      div.appendChild(asignaturaDiv);
    });

    contenedor.appendChild(div);
  });

  document.querySelectorAll("input[type=number]").forEach(input => {
    input.addEventListener("input", () => {
     const nombre = input.dataset.nombre;
     let nota = parseFloat(input.value);

    if (!isNaN(nota)) {
    if (nota < 1.0) nota = 1.0;
    if (nota > 7.0) nota = 7.0;

    input.value = nota.toFixed(1);
    localStorage.setItem(`nota_${nombre}`, nota.toFixed(1));
  } else {
    localStorage.removeItem(`nota_${nombre}`);
  }
  recargarColores();
  actualizarResumen();
    });
  });

  actualizarResumen();
}

function obtenerNota(nombre) {
  const val = localStorage.getItem(`nota_${nombre}`);
  return val ? parseFloat(val) : null;
}

function obtenerEstado(asig) {
  const nota = obtenerNota(asig.nombre);

  if (asig.requisitos && asig.requisitos.some(req => {
    const n = obtenerNota(req);
    return n === null || n < NOTA_APROBACION;
  })) {
    return { clase: "bloqueada" };
  }

  if (nota === null) return { clase: "pendiente" };
  return { clase: nota >= NOTA_APROBACION ? "aprobada" : "reprobada" };
}

function recargarColores() {
  document.querySelectorAll(".asignatura").forEach(div => {
    const nombre = div.querySelector("input").dataset.nombre;
    const asig = asignaturas.find(a => a.nombre === nombre);
    const estado = obtenerEstado(asig);

    div.className = `asignatura ${estado.clase}`;
  });
}

function actualizarResumen() {
  const notas = asignaturas
    .map(a => obtenerNota(a.nombre))
    .filter(n => n !== null);

  const aprobadas = notas.filter(n => n >= NOTA_APROBACION).length;
  const total = asignaturas.length;
  const porcentaje = Math.round((aprobadas / total) * 100);

  const promedio = notas.length ? (notas.reduce((a,b)=>a+b) / notas.length).toFixed(2) : "-";

  document.getElementById("progreso").style.width = `${porcentaje}%`;
  document.getElementById("progreso-texto").textContent = `${porcentaje}%`;
  document.getElementById("promedio").textContent = promedio;
}

document.addEventListener("DOMContentLoaded", crearMalla);
