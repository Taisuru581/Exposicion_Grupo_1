import { validarSolicitud } from './validacion.js';

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
