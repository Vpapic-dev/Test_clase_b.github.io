// ================== BANCO: TRIVIA DEL LIBRO ==================
// Fuente: "Cuestionario General Licencias Clase B" (con clave de respuestas).
// Solo se incluyen preguntas cuyo enunciado, alternativas y clave se pudieron verificar.
// "correctas" son los índices (0 = primera alternativa) de las respuestas correctas.
const BANCO_LIBRO = [
  { tema: "Mantención", pregunta: "Su vehículo se desvía hacia un lado cuando usted frena. Usted debería:",
    opciones: ["Cambiar los neumáticos de un lado hacia el otro y viceversa.", "Bombear el pedal al frenar.", "Usar su freno de mano.", "Consultar con su mecánico lo antes posible."],
    correctas: [3], explicacion: "Una desviación al frenar debe revisarse con un mecánico lo antes posible." },

  { tema: "Mantención", pregunta: "Su vehículo se desvía hacia un lado cuando usted frena. ¿Cuál es la falla más probable?",
    opciones: ["Un bajo nivel del líquido de frenos.", "Su freno de mano está todavía puesto.", "Frenos mal ajustados.", "Neumáticos con presión de aire inadecuada."],
    correctas: [2], explicacion: "Frenos mal ajustados producen un efecto irregular al frenar que desvía el vehículo." },

  { tema: "Mantención", pregunta: "Mientras conduce usted siente un fuerte olor a gasolina. ¿Qué debería hacer usted?",
    opciones: ["No preocuparse, ya que sólo son los gases de escape.", "Continuar a una velocidad reducida.", "Continuar porque sabe que se detendrá algunos kilómetros más allá.", "Detenerse e investigar el problema."],
    correctas: [3], explicacion: "Un olor fuerte a gasolina puede indicar riesgo de incendio: hay que detenerse e investigar." },

  { tema: "Mantención", pregunta: "¿Cómo puede prevenir usted el riesgo de incendio de su vehículo?",
    opciones: ["Manteniendo los niveles de agua sobre el máximo.", "Evitando conducir con el estanque lleno de combustible.", "Usando gasolina sin plomo.", "Revisando su vehículo ante cualquier olor a gasolina extraño."],
    correctas: [3], explicacion: "Revisar el vehículo ante olores extraños a combustible ayuda a prevenir incendios." },

  { tema: "Conducción segura", pregunta: "¿Por qué es importante usar zapatos apropiados cuando conduce?",
    opciones: ["Para tener un adecuado control de los pedales.", "Para evitar el desgaste acelerado de las gomas de los pedales.", "Para poder efectuar los cambios de marcha más rápidamente.", "Para poder caminar sin problemas en el caso que necesite solicitar ayuda."],
    correctas: [0], explicacion: "El calzado adecuado permite controlar bien los pedales." },

  { tema: "Mantención", pregunta: "La presión de los neumáticos debe revisarse:",
    opciones: ["Después de un viaje largo.", "Después de conducir a alta velocidad.", "Cuando los neumáticos están fríos.", "Cuando los neumáticos están calientes."],
    correctas: [2], explicacion: "La presión se revisa con los neumáticos fríos, porque al calentarse la presión sube." },

  { tema: "Mantención", pregunta: "¿Cuál de estos líquidos, en el caso de estar en un nivel bajo, podría causar un accidente?",
    opciones: ["El líquido de freno.", "El anticongelante.", "El agua de la batería.", "El líquido refrigerante."],
    correctas: [0], explicacion: "Un nivel bajo de líquido de frenos puede hacer que los frenos fallen." },

  { tema: "Seguridad vial", pregunta: "¿Cuándo usaría usted las luces de advertencia de peligro de su vehículo?",
    opciones: ["Cuando esté en pana moviéndose lentamente.", "Cuando esté siendo remolcado.", "Cuando esté retrocediendo en una calle de poco tránsito.", "Cuando esté en pana y obstaculizando el tránsito."],
    correctas: [3], explicacion: "Las luces de peligro se usan cuando está en pana y obstaculiza el tránsito." },

  { tema: "Mantención", pregunta: "¿Por qué los neumáticos deben mantenerse a la presión indicada por el fabricante?",
    opciones: ["Para que el vehículo se mantenga a la altura correcta sobre la vía.", "Para no desgastar el motor.", "Para ayudar a evitar que el automóvil se roncee.", "Para evitar que el automóvil se incline hacia un lado."],
    correctas: [2], explicacion: "Presiones incorrectas se suman al riesgo de que el automóvil se roncee." },

  { tema: "Mantención", pregunta: "¿A qué se debe un alto consumo de combustible?",
    opciones: ["Fallas en el sistema de dirección.", "Aceleraciones en curvas.", "Frecuentes frenadas y aceleraciones.", "Conducción en marchas altas."],
    correctas: [2], explicacion: "Las frenadas y aceleraciones frecuentes aumentan el consumo de combustible." },

  { tema: "Mantención", pregunta: "La profundidad de los surcos de los neumáticos de un automóvil no debería ser inferior a:",
    opciones: ["5.0 mm", "4.0 mm", "1.6 mm", "1.0 mm"],
    correctas: [2], explicacion: "Con surcos de menos de 1,6 mm empeora la adherencia, sobre todo en pavimento mojado." },

  { tema: "Distancias y velocidad", pregunta: "Suponga que su distancia de reacción es de 10 metros, su distancia de frenado es de 8 metros y su distancia de detención es de 18 metros. ¿Cuál sería su distancia de detención si sigue en las mismas condiciones, pero aumenta al doble su velocidad?",
    opciones: ["46 metros", "52 metros", "64 metros", "78 metros"],
    correctas: [1], explicacion: "La reacción se duplica (20 m) y el frenado se cuadruplica (32 m): 52 m en total." },

  { tema: "Distancias y velocidad", pregunta: "¿Cuál de las siguientes afirmaciones es falsa cuando usted aumenta su velocidad de 30 km/h a 60 km/h?",
    opciones: ["Se duplica la energía cinética.", "Se cuadruplica la energía cinética.", "Se duplica la distancia de reacción.", "Se cuadruplica la distancia de frenado."],
    correctas: [0], explicacion: "La energía cinética se cuadruplica, no se duplica." },

  { tema: "Distancias y velocidad", pregunta: "¿Qué es lo más importante para evitar chocar al vehículo que va adelante?",
    opciones: ["Asegurarse de que sus frenos sean eficientes.", "Conducir a una velocidad constante.", "Mantener una adecuada distancia de separación entre vehículos.", "Tener neumáticos en muy buen estado."],
    correctas: [2], explicacion: "La distancia de separación es el factor más importante; los otros ayudan, pero no bastan." },

  { tema: "Distancias y velocidad", pregunta: "De las siguientes variables, ¿cuáles influyen en la distancia de frenado? (Marque todas las correctas)",
    opciones: ["La velocidad.", "El alumbrado público.", "El estado de los frenos y neumáticos.", "Las condiciones climáticas.", "La hora del día."],
    correctas: [0, 2, 3], explicacion: "Influyen la velocidad, el estado de frenos y neumáticos, y las condiciones climáticas." },

  { tema: "Distancias y velocidad", pregunta: "¿Cuál es el tiempo de reacción promedio de un conductor ante un imprevisto?",
    opciones: ["1 segundo", "0.1 minuto", "0.1 segundo", "2 segundos"],
    correctas: [0], explicacion: "El tiempo de reacción promedio es de un segundo." },

  { tema: "Seguridad vial", pregunta: "Dos factores frecuentes en accidentes de carretera con un solo vehículo involucrado son: (Marque todas las correctas)",
    opciones: ["Que el conductor no posea licencia para conducir.", "Que el conductor esté muy cansado o bajo los efectos del alcohol.", "Que el conductor esté bajo los efectos de medicamentos.", "Que el conductor sobrestime sus capacidades y conduzca a exceso de velocidad."],
    correctas: [1, 3], explicacion: "El cansancio, el alcohol y el exceso de velocidad por sobrestimar capacidades son factores frecuentes." },

  { tema: "Conducción segura", pregunta: "Usted está próximo a descender por una pendiente muy pronunciada. ¿Qué debería hacer para controlar la velocidad de su vehículo?",
    opciones: ["Seleccionar un cambio bajo y usar los frenos cuidadosamente.", "Seleccionar un cambio alto y usar los frenos cuidadosamente.", "Seleccionar un cambio alto y usar los frenos firmemente.", "Seleccionar un cambio bajo y evitar usar los frenos."],
    correctas: [0], explicacion: "Un cambio bajo ayuda a controlar la velocidad; en pendientes muy pronunciadas también se necesitan los frenos." },

  { tema: "Alcohol y drogas", pregunta: "Si usted ha ingerido alcohol, ¿cuáles son los efectos más probables? (Marque todas las correctas)",
    opciones: ["Su capacidad de coordinación se reducirá.", "Su autoconfianza se incrementará.", "Presentará ceguera al color.", "Sus reacciones serán más rápidas.", "Su juicio empeorará.", "Su capacidad de concentración aumentará."],
    correctas: [0, 1, 4], explicacion: "El alcohol reduce la coordinación, aumenta la falsa confianza y empeora el juicio." },

  { tema: "Convivencia vial", pregunta: "Usted pretende doblar hacia la izquierda en un cruce, pero hay vehículos estacionados que le obstruyen la visual. ¿Qué debería hacer usted?",
    opciones: ["Avanzar rápidamente, pero estando preparado para detenerse.", "Tocar la bocina y avanzar lentamente.", "Detenerse, luego avanzar lentamente hasta que tenga una visual plena.", "Tocar la bocina y avanzar rápidamente."],
    correctas: [2], explicacion: "Hay que detenerse y avanzar lentamente hasta tener visual completa." },

  { tema: "Convivencia vial", pregunta: "Al adelantar en un camino a una manada de ovejas, ¿qué hace usted? (Marque tres respuestas)",
    opciones: ["Deja un espacio lateral suficiente.", "Adelanta rápidamente y sin vacilaciones.", "Conduce lentamente.", "Toca la bocina levemente.", "Está preparado para detenerse."],
    correctas: [0, 2, 4], explicacion: "Al adelantar animales hay que dejar espacio, conducir lento y estar listo para detenerse." },

  { tema: "Seguridad vial", pregunta: "Se ha quedado detenido en un cruce ferroviario con barreras y no puede volver a encender el motor. La campanilla comienza a sonar. ¿Qué debería hacer?",
    opciones: ["Correr por la vía para intentar avisar al maquinista.", "Salir del vehículo y alejarse de él.", "Seguir intentando reiniciar la marcha del vehículo.", "Intentar despejar el cruce empujando su vehículo."],
    correctas: [1], explicacion: "Ante un tren que se aproxima, lo prioritario es salir del vehículo y alejarse de él." },

  { tema: "Convivencia vial", pregunta: "Usted está esperando en un cruce en T. El vehículo azul que se acerca desde la izquierda señaliza a la derecha. ¿Qué debería hacer usted?",
    opciones: ["Avanzar acelerando a fondo.", "Ponerse en marcha antes de que el vehículo azul llegue al cruce.", "Esperar hasta que el vehículo azul haya comenzado a virar.", "Avanzar lentamente."],
    correctas: [2], explicacion: "Hay que esperar a que el otro vehículo haya comenzado a virar antes de avanzar." },

  { tema: "Seguridad vial", pregunta: "Usted debería utilizar su teléfono celular en su automóvil sólo en la siguiente situación:",
    opciones: ["Si su vehículo tiene cambio automático.", "Si necesita efectuar una llamada de emergencia.", "Cuando se encuentra detenido en un lugar seguro.", "Al circular por un camino secundario."],
    correctas: [2], explicacion: "El uso del celular debe hacerse detenido en un lugar seguro." }
];

// ================== BANCO: TRIVIA DE SEÑALES ==================
// "img" es la URL de cada señal alojada en Cloudinary.
// Los significados siguen la normativa chilena; cada pregunta tiene una sola respuesta correcta.
const BANCO_SENALES = [
  { img: "https://res.cloudinary.com/vf5vkgjn/image/upload/v1794181723/stv_prohibida_circulacion_vehiculos_de_carga.png",
    pregunta: "¿Qué significa esta señal?",
    opciones: ["Prohibida la circulación de vehículos de carga.", "Obligatorio detenerse para revisar la carga.", "Solo permitido el paso de vehículos de carga.", "Área de descanso para camiones."],
    correctas: [0], explicacion: "Prohíbe el tránsito de vehículos de carga por la vía." },

  { img: "https://res.cloudinary.com/vf5vkgjn/image/upload/v1794181723/stv_preferencia_ciclistas_al_virar_izquierda.png",
    pregunta: "¿Qué significa esta señal?",
    opciones: ["Ciclovía cerrada por obras; prohibido circular en bicicleta.", "Al virar a la izquierda debe ceder el paso a los ciclistas de la ciclovía que va a cruzar.", "Prohibido virar a la izquierda para cualquier vehículo.", "Velocidad máxima de 30 km/h para bicicletas."],
    correctas: [1], explicacion: "Indica que el conductor que vira a la izquierda cruzará una ciclovía, donde los ciclistas tienen preferencia y el conductor debe cederles el paso." },

  { img: "https://res.cloudinary.com/vf5vkgjn/image/upload/v1794181723/stv_prohibida_circulacion_vehiculos_motorizados.png",
    pregunta: "¿Qué significa esta señal?",
    opciones: ["Obligatorio circular en bicicleta por la vía.", "Solo permitido el tránsito de camiones.", "Prohibida la circulación de vehículos motorizados por la vía señalizada.", "Estacionamiento permitido solo para motos."],
    correctas: [2], explicacion: "Prohíbe el tránsito de vehículos motorizados por la vía señalizada." },

  { img: "https://res.cloudinary.com/vf5vkgjn/image/upload/v1794181722/stv_no_entrar.png",
    pregunta: "¿Qué significa esta señal?",
    opciones: ["Ingreso permitido solo para peatones.", "Velocidad máxima de 40 km/h.", "Vía de doble sentido con preferencia de paso.", "Prohibido el ingreso de vehículos a la vía desde el punto donde está ubicada la señal."],
    correctas: [3], explicacion: "Prohíbe el ingreso de vehículos a la vía desde el punto donde está ubicada la señal." },

  { img: "https://res.cloudinary.com/vf5vkgjn/image/upload/v1794181722/stv_pare.png",
    pregunta: "¿Qué significa esta señal?",
    opciones: ["Reduzca la velocidad, pero puede seguir sin detenerse.", "Vía preferente: tiene derecho de paso sobre los demás.", "Prohibido estacionar en este tramo.", "Obliga a detenerse por completo antes de la línea de detención o del cruce, y a ceder el paso."],
    correctas: [3], explicacion: "Obliga al conductor a detenerse por completo antes de la línea de detención o del cruce, y a ceder el paso a los vehículos y peatones que circulan por la vía preferente." },

  { img: "https://res.cloudinary.com/vf5vkgjn/image/upload/v1794181722/stv_no_adelantar.png",
    pregunta: "¿Qué significa esta señal?",
    opciones: ["Adelantar solo está permitido a motos.", "Prohibido adelantar a otros vehículos en el tramo señalizado.", "Zona de adelantamiento permitido.", "Circular a menos de 30 km/h."],
    correctas: [1], explicacion: "Prohíbe a los conductores adelantar a otros vehículos en el tramo de vía señalizado." },

  { img: "https://res.cloudinary.com/vf5vkgjn/image/upload/v1794181722/stv_no_virar_en_u.png",
    pregunta: "¿Qué significa esta señal?",
    opciones: ["Prohibido efectuar un giro en U en el punto donde está ubicada la señal.", "Obligatorio girar en U en este punto.", "Prohibido virar a la derecha.", "Prohibido estacionar en la esquina."],
    correctas: [0], explicacion: "Prohíbe al conductor efectuar un giro en U, es decir, invertir el sentido de su marcha, en el punto donde está ubicada la señal." },

  { img: "https://res.cloudinary.com/vf5vkgjn/image/upload/v1794181722/stv_no_cambiar_pista.png",
    pregunta: "¿Qué significa esta señal?",
    opciones: ["Obligatorio cambiar de pista hacia la izquierda.", "Solo permitido cambiar de pista a camiones.", "Prohibido circular por la pista derecha.", "Prohibido cambiarse de pista dentro del tramo señalizado."],
    correctas: [3], explicacion: "Prohíbe al conductor cambiarse de pista dentro del tramo de vía señalizado." },

  { img: "https://res.cloudinary.com/vf5vkgjn/image/upload/v1794181722/stv_pare_no_virar_derecha.png",
    pregunta: "¿Qué significa esta señal?",
    opciones: ["Obligatorio virar a la derecha.", "Prohibido virar a la izquierda.", "Prohibido virar a la derecha en el punto donde está ubicada la señal.", "Prohibido adelantar en este tramo."],
    correctas: [2], explicacion: "Prohíbe al conductor virar a la derecha en el punto donde está ubicada la señal." },

  { img: "https://res.cloudinary.com/vf5vkgjn/image/upload/v1794181722/stv_pare_no_virar_izquierda.png",
    pregunta: "¿Qué significa esta señal?",
    opciones: ["Obligatorio virar a la izquierda.", "Prohibido virar a la izquierda en el punto donde está ubicada la señal.", "Prohibido virar a la derecha.", "Prohibido estacionar a la izquierda."],
    correctas: [1], explicacion: "Prohíbe al conductor virar a la izquierda en el punto donde está ubicada la señal." },

  { img: "https://res.cloudinary.com/vf5vkgjn/image/upload/v1794181722/stv_preferencia_ciclistas_al_virar_derecha.png",
    pregunta: "¿Qué significa esta señal?",
    opciones: ["Prohibido virar a la derecha para cualquier vehículo.", "Ciclovía cerrada por obras.", "Al virar a la derecha debe ceder el paso a los ciclistas de la ciclovía que va a cruzar.", "Velocidad máxima de 30 km/h para bicicletas."],
    correctas: [2], explicacion: "Indica que el conductor que vira a la derecha cruzará una ciclovía, donde los ciclistas tienen preferencia y el conductor debe cederles el paso." },

  { img: "https://res.cloudinary.com/vf5vkgjn/image/upload/v1794181721/stv_pare_ninos.png",
    pregunta: "¿Qué significa esta señal?",
    opciones: ["Prohibido estacionar frente a un colegio.", "Detenerse por completo para permitir el paso seguro de escolares, sin reanudar la marcha mientras la señal esté mostrada.", "Velocidad máxima de 30 km/h en zona escolar.", "Ceda el paso a los peatones en un cruce."],
    correctas: [1], explicacion: "Obliga a detenerse por completo para permitir el paso seguro de escolares, y a no reanudar la marcha mientras la señal esté mostrada." }
];

// ================== CONFIGURACIÓN Y ESTADO ==================
const MODOS = { rapido: 10, medio: 20, real: 35 };
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const quiz = {
  tipo: "", banco: [], modo: "rapido", preguntas: [],
  idx: 0, correctas: 0, racha: 0, respondidas: 0,
  seleccion: new Set(), confirmada: false
};

const memo = { cartas: [], volteadas: [], bloqueo: false, movs: 0, pares: 0 };

// Fisher-Yates: mezcla sin modificar el arreglo original
function barajar(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ================== NAVEGACIÓN ==================
const PANTALLAS = ["pantalla-menu", "pantalla-modo", "pantalla-quiz", "pantalla-resultado", "pantalla-memo"];

function mostrar(id) {
  PANTALLAS.forEach((p) => { $("#" + p).hidden = p !== id; });
  window.scrollTo(0, 0);
  const titulo = $("#" + id + " h2");
  if (titulo) titulo.focus();
}

// ================== TRIVIAS ==================
function iniciarTrivia(tipo) {
  quiz.tipo = tipo;
  quiz.banco = tipo === "libro" ? BANCO_LIBRO : BANCO_SENALES;
  $("#modo-titulo").textContent = tipo === "libro"
    ? "Trivia del Libro del Conductor"
    : "Trivia de señales de tránsito";
  actualizarAvisoModo();
  mostrar("pantalla-modo");
}

function seleccionarModo(modo) {
  quiz.modo = modo;
  $$(".modo").forEach((b) => b.setAttribute("aria-pressed", b.dataset.modo === modo));
  actualizarAvisoModo();
}

// Avisa cuando el banco tiene menos preguntas que el modo elegido
function actualizarAvisoModo() {
  const pedidas = MODOS[quiz.modo];
  const disp = quiz.banco.length;
  $("#modo-aviso").textContent = disp < pedidas
    ? `Hay ${disp} preguntas verificadas; la ronda tendrá ${disp}.`
    : `Se prepararán ${pedidas} preguntas aleatorias.`;
}

function comenzarRonda() {
  const n = Math.min(MODOS[quiz.modo], quiz.banco.length);
  // Se baraja la pregunta y las alternativas; cada alternativa conserva si es correcta
  quiz.preguntas = barajar(quiz.banco).slice(0, n).map((p) => ({
    ...p,
    opciones: barajar(p.opciones.map((t, i) => ({ t, ok: p.correctas.includes(i) })))
  }));
  Object.assign(quiz, { idx: 0, correctas: 0, racha: 0, respondidas: 0 });
  mostrarPregunta();
  mostrar("pantalla-quiz");
}

function mostrarPregunta() {
  const p = quiz.preguntas[quiz.idx];
  quiz.seleccion = new Set();
  quiz.confirmada = false;

  $("#quiz-progreso").textContent = `Pregunta ${quiz.idx + 1} de ${quiz.preguntas.length}`;
  actualizarStats();

  const figura = $("#quiz-figura");
  const img = $("#quiz-img");
  const aviso = $("#quiz-img-aviso");
  const tieneImg = Boolean(p.img);
  figura.hidden = !tieneImg;
  aviso.hidden = true;
  if (tieneImg) {
    img.alt = "Imagen de la señal consultada";
    img.hidden = false;
    // Si la imagen no carga, se muestra un aviso claro
    img.onerror = () => {
      img.hidden = true;
      aviso.hidden = false;
      aviso.textContent = "No se pudo cargar la imagen de la señal. Revise su conexión e intente de nuevo.";
    };
    img.src = p.img;
  } else {
    img.removeAttribute("src");
  }

  $("#quiz-pregunta").textContent = p.pregunta;
  // Se indica el tipo de respuesta con texto, no solo con color
  $("#quiz-instr").textContent = p.opciones.filter((o) => o.ok).length > 1
    ? "Marque todas las respuestas correctas y luego confirme."
    : "Marque una respuesta y luego confirme.";

  const cont = $("#quiz-opciones");
  cont.innerHTML = "";
  p.opciones.forEach((op, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "opcion";
    b.setAttribute("aria-pressed", "false");
    const txt = document.createElement("span");
    txt.textContent = op.t;
    // Clase propia para la marca de la alternativa, distinta de la del encabezado
    const marca = document.createElement("span");
    marca.className = "marca-op";
    b.append(txt, marca);
    b.addEventListener("click", () => alternar(i));
    cont.appendChild(b);
  });

  $("#quiz-feedback").hidden = true;
  $("#quiz-feedback").textContent = "";
  $("#btn-confirmar").disabled = true;
  $("#btn-siguiente").hidden = true;
  $("#btn-siguiente").disabled = false;
}

// Marca o desmarca una alternativa; en preguntas de una sola respuesta reemplaza la anterior
function alternar(i) {
  if (quiz.confirmada) return;
  const p = quiz.preguntas[quiz.idx];
  const esMulti = p.opciones.filter((o) => o.ok).length > 1;
  if (esMulti) {
    quiz.seleccion.has(i) ? quiz.seleccion.delete(i) : quiz.seleccion.add(i);
  } else {
    quiz.seleccion = new Set(quiz.seleccion.has(i) ? [] : [i]);
  }
  $$("#quiz-opciones .opcion").forEach((b, k) => {
    const on = quiz.seleccion.has(k);
    b.setAttribute("aria-pressed", String(on));
    b.classList.toggle("elegida", on);
  });
  $("#btn-confirmar").disabled = quiz.seleccion.size === 0;
}

function confirmar() {
  // Evita contar dos veces la misma pregunta si se presiona repetidamente
  if (quiz.confirmada || quiz.seleccion.size === 0) return;
  quiz.confirmada = true;
  const p = quiz.preguntas[quiz.idx];

  const correctasIdx = p.opciones.map((o, i) => (o.ok ? i : -1)).filter((i) => i >= 0);
  const acierto = correctasIdx.length === quiz.seleccion.size &&
    correctasIdx.every((i) => quiz.seleccion.has(i));

  quiz.respondidas++;
  if (acierto) { quiz.correctas++; quiz.racha++; } else { quiz.racha = 0; }

  $$("#quiz-opciones .opcion").forEach((b, k) => {
    b.disabled = true;
    const o = p.opciones[k];
    const marca = b.querySelector(".marca-op");
    if (o.ok) {
      b.classList.add("correcta");
      marca.textContent = "✔ Correcta";
    } else if (quiz.seleccion.has(k)) {
      b.classList.add("incorrecta");
      marca.textContent = "✘ Tu elección";
    }
  });

  const fb = $("#quiz-feedback");
  fb.hidden = false;
  fb.className = "feedback " + (acierto ? "ok" : "mal");
  fb.textContent = (acierto ? "¡Correcto! " : "Incorrecto. ") + p.explicacion;

  $("#btn-confirmar").disabled = true;
  const sig = $("#btn-siguiente");
  sig.hidden = false;
  sig.textContent = quiz.idx + 1 < quiz.preguntas.length ? "Siguiente" : "Ver resultado";
  actualizarStats();
}

function siguiente() {
  if (!quiz.confirmada) return;
  // Se deshabilita para que un doble toque no avance dos preguntas
  $("#btn-siguiente").disabled = true;
  if (quiz.idx + 1 < quiz.preguntas.length) {
    quiz.idx++;
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
}

function actualizarStats() {
  $("#st-correctas").textContent = quiz.correctas;
  $("#st-racha").textContent = quiz.racha;
  $("#st-restantes").textContent = quiz.preguntas.length - quiz.respondidas;
}

function mostrarResultado() {
  const total = quiz.preguntas.length;
  const pct = total ? Math.round((quiz.correctas / total) * 100) : 0;
  $("#res-texto").textContent = `Acertaste ${quiz.correctas} de ${total} preguntas (${pct}%).`;
  mostrar("pantalla-resultado");
}

// ================== MEMORICE ==================
// Cada señal aparece dos veces; formar el par es encontrar las dos cartas iguales.
function iniciarMemo() {
  const imgs = BANCO_SENALES.map((s) => s.img);
  const mazo = barajar([...imgs, ...imgs]).map((img, id) => ({ id, img, vuelta: false, hallada: false }));
  Object.assign(memo, { cartas: mazo, volteadas: [], bloqueo: false, movs: 0, pares: 0 });
  $("#memo-mensaje").textContent = imgs.length
    ? ""
    : "No hay señales verificadas para el memorice.";
  renderMemo();
  mostrar("pantalla-memo");
}

function renderMemo() {
  const tablero = $("#memo-tablero");
  tablero.innerHTML = "";
  $("#memo-movs").textContent = memo.movs;
  $("#memo-pares").textContent = `${memo.pares} de ${memo.cartas.length / 2}`;

  memo.cartas.forEach((c, i) => {
    const visible = c.vuelta || c.hallada;
    const b = document.createElement("button");
    b.type = "button";
    b.className = "carta" + (visible ? " vuelta" : "") + (c.hallada ? " hallada" : "");
    b.disabled = c.hallada;
    b.setAttribute("aria-label", visible ? `Señal de tránsito, carta ${i + 1}` : `Carta oculta ${i + 1}`);
    if (visible) {
      const im = document.createElement("img");
      im.src = c.img;
      im.alt = "Señal de tránsito";
      im.onerror = () => { im.replaceWith(document.createTextNode("Imagen no disponible")); };
      b.appendChild(im);
    } else {
      b.textContent = "?";
    }
    b.addEventListener("click", () => voltear(i));
    tablero.appendChild(b);
  });
}

function voltear(i) {
  const c = memo.cartas[i];
  if (memo.bloqueo || c.vuelta || c.hallada) return;
  c.vuelta = true;
  memo.volteadas.push(i);

  if (memo.volteadas.length < 2) {
    renderMemo();
    return;
  }

  memo.movs++;
  memo.bloqueo = true;
  const [a, b] = memo.volteadas.map((k) => memo.cartas[k]);

  if (a.img === b.img) {
    a.hallada = true;
    b.hallada = true;
    memo.pares++;
    memo.volteadas = [];
    memo.bloqueo = false;
    renderMemo();
    if (memo.pares === memo.cartas.length / 2) {
      $("#memo-mensaje").textContent = `¡Completado en ${memo.movs} movimientos!`;
    }
  } else {
    renderMemo();
    // Pausa breve para ver las dos cartas antes de voltearlas
    setTimeout(() => {
      a.vuelta = false;
      b.vuelta = false;
      memo.volteadas = [];
      memo.bloqueo = false;
      renderMemo();
    }, 900);
  }
}

// ================== INICIO ==================
document.addEventListener("DOMContentLoaded", () => {
  $$("[data-trivia]").forEach((b) => {
    b.addEventListener("click", () => iniciarTrivia(b.dataset.trivia));
  });
  $$("[data-ir]").forEach((b) => {
    b.addEventListener("click", () => mostrar(b.dataset.ir));
  });
  $$(".modo").forEach((b) => {
    b.addEventListener("click", () => seleccionarModo(b.dataset.modo));
  });
  $("#btn-comenzar").addEventListener("click", comenzarRonda);
  $("#btn-confirmar").addEventListener("click", confirmar);
  $("#btn-siguiente").addEventListener("click", siguiente);
  $("#btn-otra").addEventListener("click", comenzarRonda);
  $("#btn-memo-inicio").addEventListener("click", iniciarMemo);
  $("#btn-memo-nueva").addEventListener("click", iniciarMemo);
  mostrar("pantalla-menu");
});
