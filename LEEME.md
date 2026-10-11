# Demo del grupo 1 — Diseño Web Responsivo y Bootstrap

La idea de esta demo es explicar los conceptos mientras observamos cómo se aplican en una página real. El tema de muestra es **Ruta Tica**, un sitio ilustrativo de paseos y naturaleza. Los textos y fotografías se pueden reemplazar.

## Abrir la demo

1. Extraer el ZIP en una carpeta.
2. Abrir esa carpeta en Visual Studio Code.
3. Abrir `index.html` con **Live Server**. También se puede usar cualquier servidor HTTP local.
4. Desde la portada, entrar a la comparación de pantallas y a los ejemplos completos.

Alternativa si ya tenés Python instalado: abrir una terminal en la carpeta extraída, ejecutar `python -m http.server 8000` (en Windows también puede ser `py -m http.server 8000`) y visitar `http://localhost:8000`.

**Abrí el proyecto mediante HTTP para usar todas las interacciones.** Bootstrap 5.3.8 se carga con un script clásico, pero nuestro archivo del catálogo importa el módulo de validación del formulario. El navegador puede bloquear esa importación al abrir con `file://`. El ejemplo `ejemplo-css.html` no utiliza JavaScript y se puede abrir directamente.

El framework y las imágenes están incluidos de forma local. No hace falta descargar paquetes ni conectarse a un CDN durante la exposición. Los enlaces a la documentación sí requieren conexión.

## Qué contiene

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | Portada, conceptos, comparación de pantallas, versiones y referencias. |
| `ejemplo-css.html` | Sitio completo realizado únicamente con HTML y CSS. |
| `ejemplo-bootstrap.html` | Sitio con Bootstrap, componentes y formulario. |
| `laboratorio-bootstrap.html` | Demostración del grid y 24 utilidades. |
| `assets/css/` | Estilos de cada página. |
| `assets/js/ejemplo-bootstrap.js` | Catálogo, filtro, paginación y conexión del formulario. |
| `assets/js/validacion.js` | Reglas de validación explicadas y separadas. |
| `assets/img/` | Fotos de muestra y variantes para srcset. |
| `assets/vendor/` | Bootstrap 5.3.8: CSS, bundle de JavaScript con Popper y licencia. |
| `GUIA_DEMO.md` | Guion sugerido y ubicación de cada concepto. |

## Versión de Bootstrap

Esta entrega usa **Bootstrap 5.3.8** en todos los ejemplos, según la versión definida para la exposición a finales de septiembre. Tanto el CSS como el JavaScript del framework están fijados a esa versión.

La sección Versiones explica las generaciones 1, 2, 3, 4 y 5, el avance de las ramas 5.0, 5.1, 5.2 y 5.3, y las correcciones de 5.3.8. También compara Bootstrap 4 con Bootstrap 5.

En esta demo usamos:

- `col-12 col-md-6 col-lg-4` para una, dos y tres tarjetas por fila.
- `data-bs-toggle="dropdown"` para el menú de filtros.
- `data-bs-toggle="modal"` para los detalles de un paseo.
- `navbar-expand-md` y Collapse para la navegación móvil.
- `btn btn-success`, `text-white`, `form-select` y `form-check-input`.
- `bootstrap.Modal` y `bootstrap.Collapse` para cerrar los componentes al navegar.

Bootstrap 5 no depende de jQuery. La demo conserva los archivos del framework de forma local; las interacciones funcionan con el bundle incluido.

## Reemplazar las fotografías

Los nombres se conservan para facilitar el cambio:

| Tema | Archivos |
| --- | --- |
| Playa | `playa-400.jpg`, `playa-800.jpg`, `playa-1400.jpg` |
| Bosque | `bosque-400.jpg`, `bosque-800.jpg`, `bosque-1400.jpg` |
| Montaña | `montana-400.jpg`, `montana-800.jpg`, `montana-1400.jpg` |

La opción más sencilla es reemplazar cada fotografía conservando el nombre. Los números representan el ancho del archivo en píxeles. Si cambian esos anchos o el formato, también deben actualizarse las rutas y los descriptores `400w`, `800w` y `1400w` en `srcset`.

La portada del ejemplo CSS cambia de imagen con `picture`: bosque en móvil y costa desde 768 px. Esto se hace a propósito para demostrar dirección de arte. Ajustá el texto alternativo cuando cambies las fotos.

## Cambiar el contenido

- Los conceptos están en `index.html`.
- Los textos del sitio sin framework están en `ejemplo-css.html`.
- Los textos de la página Bootstrap están en `ejemplo-bootstrap.html`.
- El arreglo `destinos` en `assets/js/ejemplo-bootstrap.js` contiene los seis paseos que se muestran con filtros y paginación.
- El formulario muestra una solicitud local: no guarda ni envía información.

## Comprobación antes de exponer

1. Abrir las dos páginas en 390, 820 y 1440 píxeles CSS.
2. Observar una, dos y tres tarjetas por fila.
3. Cambiar container/container-fluid y las combinaciones del grid.
4. Activar las utilidades y restablecer el ejemplo.
5. Recorrer el carrusel, abrir el menú móvil, cambiar pestañas y filtrar/paginar el catálogo.
6. Abrir un detalle, elegir el ambiente y cerrar la ventana.
7. Probar el formulario vacío, con correo incompleto, con fecha pasada y con datos completos.

El tiempo máximo indicado en la consigna es de 30 minutos para la teoría y 60 para la demo. Esta carpeta corresponde a la demo y su documentación. La práctica guiada para la clase debe tener un sitio diferente al ejemplo de Ruta Tica.

## Fuentes

W3Schools es la referencia principal, con enlaces junto a cada concepto y en la sección Referencias de `index.html`. La documentación y el blog oficial de Bootstrap complementan la historia, la migración de 4 a 5 y las correcciones de 5.3.8.

- [W3Schools: diseño web responsivo](https://www.w3schools.com/css/css_rwd_intro.asp).
- [W3Schools: introducción e inclusión de Bootstrap 5](https://www.w3schools.com/bootstrap5/bootstrap_get_started.php).
- [W3Schools: grid de Bootstrap 5](https://www.w3schools.com/bootstrap5/bootstrap_grid_system.php).
- [Bootstrap: documentación oficial de la rama 5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/).
- [Bootstrap: lanzamiento de 5.3.8](https://blog.getbootstrap.com/2025/08/25/bootstrap-5-3-8/).

Los créditos de las fotografías están en `assets/img/CREDITOS.md`. Bootstrap se entrega bajo su licencia MIT.
