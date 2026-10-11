// El bundle de Bootstrap 5.3.8 se carga antes, mediante un script clásico en HTML.
// Activa los atributos data-bs-* y ofrece el objeto global bootstrap.
import { validarSolicitud } from './validacion.js';

// Datos ilustrativos, sin API ni servicios externos.
const destinos = [
  { id: 1, nombre: 'Un día de playa', tipo: 'playa', foto: 'playa', texto: 'Caminar por la orilla y escuchar las olas sin andar con tanta prisa.' },
  { id: 2, nombre: 'Una caminata en el bosque', tipo: 'bosque', foto: 'bosque', texto: 'Disfrutar el aire fresco y observar lo que normalmente pasamos por alto.' },
  { id: 3, nombre: 'Una vista desde la montaña', tipo: 'montana', foto: 'montana', texto: 'Un paisaje abierto y un recorrido con un poco más de movimiento.' },
  { id: 4, nombre: 'Una tarde junto al mar', tipo: 'playa', foto: 'playa', texto: 'Buscar un lugar tranquilo para conversar y ver cómo termina la tarde.' },
  { id: 5, nombre: 'Un sendero entre árboles', tipo: 'bosque', foto: 'bosque', texto: 'Recorrer un sendero corto y tomarse el tiempo para disfrutar el entorno.' },
  { id: 6, nombre: 'Un descanso en las alturas', tipo: 'montana', foto: 'montana', texto: 'Llegar a un mirador y aprovechar la vista para desconectarse de la rutina.' }
];
let filtro = 'todos';
let pagina = 1;
let elegido = destinos[0];
const catalogo = document.getElementById('catalogo');
const paginas = document.getElementById('paginacion');

function renderizarCatalogo() {
  const visibles = destinos.filter(d => filtro === 'todos' || d.tipo === filtro);
  const total = Math.max(1, Math.ceil(visibles.length / 3));
  pagina = Math.min(Math.max(1, pagina), total);
  // Solo se interpola contenido fijo del catálogo, nunca texto escrito por el usuario.
  catalogo.innerHTML = visibles.slice((pagina - 1) * 3, pagina * 3).map(d => `
    <div class="col-12 col-md-6 col-lg-4"><article class="ruta-card">
      <img src="assets/img/${d.foto}-800.jpg" class="img-fluid" width="800" height="533" loading="lazy" alt="Paisaje ilustrativo: ${d.nombre}">
      <div class="ruta-card-body"><span class="ruta-kicker">${d.tipo === 'montana' ? 'Montaña' : d.tipo}</span><h3>${d.nombre}</h3><p>${d.texto}</p>
      <button class="btn btn-success" type="button" data-detalle="${d.id}" data-bs-toggle="modal" data-bs-target="#detalleDestino">Ver detalle ↗</button></div>
    </article></div>`).join('');
  document.getElementById('catalogoEstado').textContent = `${filtro === 'todos' ? 'Todos los destinos' : 'Filtro: ' + filtro} · página ${pagina} de ${total} · ${visibles.length} resultados`;
  const botonPagina = (n, texto, deshabilitado = false) => `<li class="page-item ${deshabilitado ? 'disabled' : ''} ${n === pagina && /^\d+$/.test(texto) ? 'active' : ''}"><button type="button" class="page-link" data-pagina="${n}" ${deshabilitado ? 'disabled' : ''} ${n === pagina && /^\d+$/.test(texto) ? 'aria-current="page"' : ''}>${texto}</button></li>`;
  paginas.innerHTML = botonPagina(pagina - 1, 'Anterior', pagina === 1) + Array.from({length: total}, (_, i) => botonPagina(i + 1, String(i + 1))).join('') + botonPagina(pagina + 1, 'Siguiente', pagina === total);
}

document.getElementById('filtros').addEventListener('click', e => {
  const boton = e.target.closest('[data-filter]');
  if (!boton) return;
  filtro = boton.dataset.filter;
  pagina = 1;
  renderizarCatalogo();
});
paginas.addEventListener('click', e => {
  const boton = e.target.closest('[data-pagina]');
  if (!boton || boton.disabled) return;
  pagina = Number(boton.dataset.pagina);
  renderizarCatalogo();
});
catalogo.addEventListener('click', e => {
  const boton = e.target.closest('[data-detalle]');
  if (!boton) return;
  elegido = destinos.find(d => d.id === Number(boton.dataset.detalle));
  document.getElementById('detalleTitulo').textContent = elegido.nombre;
  document.getElementById('detalleTexto').textContent = elegido.texto;
  document.getElementById('detalleImagen').src = `assets/img/${elegido.foto}-800.jpg`;
  document.getElementById('detalleImagen').alt = `Paisaje ilustrativo: ${elegido.nombre}`;
});
document.getElementById('elegirDestino').addEventListener('click', () => {
  document.getElementById('destino').value = elegido.tipo;
  document.getElementById('destino').dispatchEvent(new Event('input', { bubbles: true }));
  const modal = document.getElementById('detalleDestino');
  // hide() inicia una transición: el foco se mueve cuando la ventana ya se cerró.
  modal.addEventListener('hidden.bs.modal', () => {
    document.getElementById('solicitud').scrollIntoView();
    document.getElementById('nombre').focus({ preventScroll: true });
  }, { once: true });
  bootstrap.Modal.getOrCreateInstance(modal).hide();
});
// Collapse agrupa los enlaces en móvil. Al elegir uno, cerramos el menú.
document.querySelectorAll('#menuMovil a').forEach(a => a.addEventListener('click', e => {
  const menu = document.getElementById('menuMovil');
  if (!menu.classList.contains('show')) return;
  e.preventDefault();
  menu.addEventListener('hidden.bs.collapse', () => {
    const destino = a.getAttribute('href');
    history.replaceState(null, '', destino);
    document.querySelector(destino).scrollIntoView();
  }, { once: true });
  bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
}));
renderizarCatalogo();

const form = document.getElementById('formPaseo');
const estado = document.getElementById('estadoFormulario');
const errorIds = { nombre: 'errorNombre', correo: 'errorCorreo', destino: 'errorDestino', fecha: 'errorFecha', confirmacion: 'errorConfirmacion' };
const ahora = new Date();
const hoy = `${ahora.getFullYear()}-${String(ahora.getMonth() + 1).padStart(2, '0')}-${String(ahora.getDate()).padStart(2, '0')}`;
document.getElementById('fecha').min = hoy;
document.getElementById('personas').addEventListener('input', e => { document.getElementById('cantidad').value = e.target.value; });

function leerFormulario() {
  const datos = Object.fromEntries(new FormData(form));
  datos.confirmacion = form.elements.confirmacion.checked;
  return datos;
}
function actualizarErrores(errores) {
  for (const [nombre, id] of Object.entries(errorIds)) {
    const control = form.elements[nombre];
    control.setAttribute('aria-invalid', String(Boolean(errores[nombre])));
    // Estas clases muestran los estados de validación propios de Bootstrap 5.
    control.classList.toggle('is-invalid', Boolean(errores[nombre]));
    control.classList.toggle('is-valid', !errores[nombre]);
    control.setCustomValidity(errores[nombre] || '');
    if (errores[nombre]) document.getElementById(id).textContent = errores[nombre];
  }
}
form.addEventListener('submit', e => {
  e.preventDefault(); // Esta demo muestra el resultado localmente.
  const datos = leerFormulario();
  const errores = validarSolicitud(datos, hoy);
  actualizarErrores(errores);
  if (Object.keys(errores).length) {
    estado.className = 'alert alert-danger mb-3';
    estado.textContent = 'Revisá los campos marcados para continuar.';
    form.elements[Object.keys(errores)[0]].focus();
    return;
  }
  estado.className = 'alert alert-success mb-3';
  // textContent evita interpretar como HTML el nombre o el correo del visitante.
  estado.textContent = `Listo, ${datos.nombre.trim()}. Tu solicitud de muestra es para ${datos.personas} persona(s), en ${datos.destino === 'montana' ? 'montaña' : datos.destino}, el ${datos.fecha}, por la ${datos.horario}. Correo de referencia: ${datos.correo.trim()}.`;
});
form.addEventListener('input', () => {
  if (form.querySelector('[aria-invalid]')) actualizarErrores(validarSolicitud(leerFormulario(), hoy));
  // Si cambia la solicitud, no dejamos un mensaje de éxito correspondiente a datos anteriores.
  estado.textContent = '';
  estado.className = 'mb-3';
});
