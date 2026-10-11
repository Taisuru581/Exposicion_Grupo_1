/* Interacciones del laboratorio; el ejemplo CSS sigue siendo una página sin JavaScript. */
const frame = document.getElementById('demoFrame');
const escenario = document.getElementById('screenStage');
const contorno = document.getElementById('screenSize');
const selectorAncho = document.getElementById('ancho');
let ejemplo = 'css';
const paginas = { css: 'ejemplo-css.html', bootstrap: 'ejemplo-bootstrap.html' };

function breakpoint(ancho) {
  if (ancho >= 1400) return 'xxl';
  if (ancho >= 1200) return 'xl';
  if (ancho >= 992) return 'lg';
  if (ancho >= 768) return 'md';
  if (ancho >= 576) return 'sm';
  return 'xs';
}
function ajustarPantalla() {
  const ancho = Number(selectorAncho.value);
  const disponible = Math.max(180, escenario.clientWidth - 32);
  const escala = Math.min(1, disponible / ancho);
  frame.style.width = ancho + 'px';
  frame.style.height = '900px';
  frame.style.transform = `scale(${escala})`;
  contorno.style.width = ancho * escala + 'px';
  contorno.style.height = 900 * escala + 'px';
  document.getElementById('anchoValor').value = ancho + ' px';
  const nivel = ejemplo === 'css' ? (ancho >= 1024 ? 'breakpoint 1024' : ancho >= 768 ? 'breakpoint 768' : 'estilos base') : breakpoint(ancho);
  const columnas = ancho >= (ejemplo === 'css' ? 1024 : 992) ? 3 : ancho >= 768 ? 2 : 1;
  document.getElementById('vistaEstado').textContent = `${ancho} px CSS · ${ejemplo === 'css' ? 'CSS propio' : 'Bootstrap 5.3.8'} · ${nivel} · ${columnas} columna(s) en el catálogo`;
  document.querySelectorAll('[data-width]').forEach(b => b.setAttribute('aria-pressed', String(Number(b.dataset.width) === ancho)));
}
selectorAncho.addEventListener('input', ajustarPantalla);
document.querySelectorAll('[data-width]').forEach(b => b.addEventListener('click', () => { selectorAncho.value = b.dataset.width; ajustarPantalla(); }));
document.querySelectorAll('[data-demo]').forEach(b => b.addEventListener('click', () => {
  ejemplo = b.dataset.demo;
  frame.src = paginas[ejemplo];
  document.getElementById('abrirDemo').href = paginas[ejemplo];
  document.querySelectorAll('[data-demo]').forEach(btn => btn.setAttribute('aria-pressed', String(btn === b)));
  ajustarPantalla();
}));
new ResizeObserver(ajustarPantalla).observe(escenario);
ajustarPantalla();

// El laboratorio de Bootstrap informa su altura para evitar scrolls anidados.
const lab = document.getElementById('bootstrapLab');
window.addEventListener('message', e => {
  if (e.source !== lab.contentWindow || e.origin !== location.origin || e.data?.tipo !== 'altura-lab') return;
  const altura = Number(e.data.altura);
  if (Number.isFinite(altura)) lab.style.height = Math.min(2600, Math.max(700, altura)) + 'px';
});

