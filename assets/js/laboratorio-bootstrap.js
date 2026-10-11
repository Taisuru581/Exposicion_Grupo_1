// El grid y las utilidades usan el CSS local de Bootstrap 5.3.8.
const grid = document.getElementById('gridRow');
const container = document.getElementById('gridContainer');
const tipo = document.getElementById('tipoContainer');
const combinacion = document.getElementById('combinacion');
function renderGrid() {
  container.className = tipo.value;
  const spans = combinacion.value.split(',').map(Number);
  grid.innerHTML = spans.map((n,i) => `<div class="col-12 col-md-6 col-lg-${n}"><div class="grid-block">Bloque ${i+1}<small>col-12 · col-md-6 · col-lg-${n}</small></div></div>`).join('');
  document.getElementById('gridCode').textContent = `<div class="${tipo.value}">\n  <div class="row g-3">\n${spans.map((n,i)=>`    <div class="col-12 col-md-6 col-lg-${n}">Bloque ${i+1}</div>`).join('\n')}\n  </div>\n</div>`;
}
tipo.addEventListener('change', renderGrid);
combinacion.addEventListener('change', renderGrid);
renderGrid();

// Cada clase aparece con una explicación y un control que realmente la aplica.
const utilidades = [
  ['p-3','Padding en todos los lados.'], ['px-4','Padding horizontal.'], ['py-2','Padding vertical.'],
  ['m-0','Quita todos los márgenes.'], ['mb-3','Margen debajo del elemento.'], ['mt-4','Margen encima del elemento.'],
  ['gap-3','Espacio entre elementos flex.'], ['d-flex','Activa Flexbox.'], ['d-block','Muestra como bloque.'],
  ['d-none','Oculta el elemento.'], ['flex-column','Coloca los elementos en columna.'], ['flex-wrap','Permite pasar a otra línea.'],
  ['justify-content-between','Separa los elementos en el eje principal.'], ['align-items-center','Centra en el eje transversal.'],
  ['text-center','Centra el texto.'], ['text-end','Alinea el texto al final.'], ['fw-bold','Texto en negrita.'],
  ['bg-success','Aplica un fondo verde.'], ['text-white','Aplica texto blanco.'], ['border','Agrega un borde.'],
  ['rounded-3','Redondea las esquinas.'], ['shadow-sm','Aplica una sombra pequeña.'], ['w-100','Ocupa todo el ancho disponible.'], ['h-100','Ocupa la altura del contenedor.']
];
const opciones = document.getElementById('utilityOptions');
const muestra = document.getElementById('utilityExample');
const defaults = ['p-3','d-flex','flex-wrap','gap-3','border','rounded-3'];
opciones.innerHTML = utilidades.map(([clase,descripcion],i) => `<label class="utility-option" for="util${i}"><input id="util${i}" type="checkbox" value="${clase}"><span><code>${clase}</code><small>${descripcion}</small></span></label>`).join('');
const checks = [...opciones.querySelectorAll('input')];
function actualizarUtilidades() {
  const activas = checks.filter(c=>c.checked).map(c=>c.value);
  muestra.className = activas.join(' ');
  document.getElementById('hiddenMessage').hidden = !activas.includes('d-none');
  document.getElementById('utilityCode').textContent = `<div class="${activas.join(' ')}">\n  <span>Playa</span>\n  <span>Bosque</span>\n  <span>Montaña</span>\n</div>`;
}
opciones.addEventListener('change', e => {
  const display = ['d-flex','d-block','d-none'];
  const align = ['text-center','text-end'];
  for (const grupo of [display,align]) if (e.target.checked && grupo.includes(e.target.value)) checks.filter(c=>grupo.includes(c.value)&&c!==e.target).forEach(c=>c.checked=false);
  if (e.target.checked && ['flex-column','flex-wrap','gap-3','justify-content-between','align-items-center'].includes(e.target.value)) {
    checks.filter(c=>display.includes(c.value)).forEach(c=>c.checked=c.value==='d-flex');
  }
  actualizarUtilidades();
});
function restablecer() { checks.forEach(c=>c.checked=defaults.includes(c.value)); actualizarUtilidades(); }
document.getElementById('resetUtility').addEventListener('click',restablecer);
restablecer();
function informar() {
  document.getElementById('labAncho').textContent = `${window.innerWidth} px CSS`;
  if (window.parent !== window) window.parent.postMessage({tipo:'altura-lab',altura:document.querySelector('main').offsetHeight+24}, location.origin);
}
new ResizeObserver(informar).observe(document.querySelector('main'));
window.addEventListener('resize',informar);
informar();
