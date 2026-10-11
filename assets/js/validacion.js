/* Reglas de nuestra demo. Bootstrap aporta estilos; la lógica sigue siendo nuestra. */
export function validarSolicitud(datos, hoy) {
  const errores = {};
  if (String(datos.nombre || '').trim().length < 2) errores.nombre = 'Escribí tu nombre, con al menos dos caracteres.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(datos.correo || '').trim())) errores.correo = 'Revisá el correo; por ejemplo, nombre@ejemplo.com.';
  if (!['playa', 'bosque', 'montana'].includes(datos.destino)) errores.destino = 'Elegí el ambiente que te gustaría visitar.';
  const fecha = String(datos.fecha || '');
  const fechaReal = /^\d{4}-\d{2}-\d{2}$/.test(fecha) && !Number.isNaN(Date.parse(fecha)) && new Date(fecha).toISOString().slice(0, 10) === fecha;
  if (!fechaReal || fecha < hoy) errores.fecha = 'Elegí hoy o una fecha posterior.';
  if (!datos.confirmacion) errores.confirmacion = 'Confirmá que entendés que se trata de una demo.';
  return errores;
}
