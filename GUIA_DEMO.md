# Guion de la demostración — Grupo 1

El objetivo es explicar qué cambia y mostrar el resultado. Los ejemplos breves de cada concepto permiten relacionar la explicación con el sitio real. Podemos seguir el mismo orden de la repartición del grupo.

## Ruta sugerida

| Responsable | Tiempo orientativo | Qué mostrar |
| --- | --- | --- |
| Integrante 1 | 18 minutos | Sitio HTML/CSS: viewport, mobile-first, media queries, grid, tipografía e imágenes. |
| Integrante 2 | 18 minutos | Versiones, inclusión local/CDN, containers, columnas, breakpoints y utilidades. |
| Integrante 3 | 18 minutos | Los seis componentes, controles del formulario, validación y UX. |
| Grupo | 6 minutos | Transiciones, preguntas y margen para repetir una demostración. |

Los tiempos suman el máximo de 60 minutos indicado en la consigna. Para la teoría, el grupo tiene hasta 30 minutos aparte.

## 1. Fundamentos en el ejemplo HTML y CSS

Abrir `ejemplo-css.html` en la comparación de pantallas.

1. **RWD e importancia:** observar que el contenido sigue siendo legible al cambiar el espacio. Mantener la misma página y alternar entre móvil, tablet y desktop.
2. **Viewport:** ubicar la metaetiqueta en `head`. Explicar `width=device-width` e `initial-scale=1`.
3. **Mobile-first:** abrir `assets/css/ejemplo-css.css`. La regla inicial de `.portada` tiene una columna. Las distribuciones amplias aparecen después, dentro de media queries.
4. **Principios de maquetación:** mostrar `box-sizing`, `.contenedor`, el límite de 1120 px, el ancho del 92%, `gap` y `flex-wrap`.
5. **Breakpoints:** cambiar entre 767/768 px y 1023/1024 px para observar el momento del cambio. Son puntos elegidos para este contenido; no identifican una marca de teléfono.
6. **Grid de 12:** mostrar `repeat(12, minmax(0, 1fr))`. En móvil las tarjetas ocupan 12; en tablet 6; en desktop 4. Explicar 6 + 6 y 4 + 4 + 4.
7. **Tipografía:** observar el título mientras se mueve el selector. Ubicar `clamp()` y explicar mínimo, tamaño preferido y máximo. Relacionar `rem`, `vw` y el límite de lectura `65ch`.
8. **Imágenes:** mostrar `max-width:100%` y `height:auto`; observar el cambio de foto de la portada en móvil. Ubicar `picture`, `source`, `srcset` y `sizes`. Los archivos de varias resoluciones existen dentro de la carpeta img.

La página de este ejemplo no carga Bootstrap ni JavaScript. La interfaz del laboratorio utiliza JavaScript para cambiar el marco, pero la adaptación del sitio de ejemplo funciona únicamente con sus reglas CSS.

## 2. Construcción con Bootstrap

1. **Introducción:** abrir `ejemplo-bootstrap.html`. Relacionar la estructura del sitio con el ejemplo anterior: el framework aporta una base reutilizable.
2. **Versiones:** revisar las tarjetas de cada generación y la tabla de Bootstrap 4 frente a Bootstrap 5 en la portada. Explicar qué cambió entre generaciones y qué representa 5.3.8. Mostrar la versión en la barra del ejemplo y en el encabezado del CSS del proveedor.
3. **Inclusión:** mostrar el `link` local, el CSS propio que se carga después y el bundle clásico de Bootstrap 5.3.8. Nuestro módulo adicional conecta el catálogo y el formulario. Comparar con el fragmento CDN de la sección Implementación.
4. **Estructura del proyecto:** explicar qué guardamos en css, js, img y vendor. Para el ejemplo basta un navegador moderno y un servidor HTTP local.
5. **Containers:** en el laboratorio, cambiar `container` por `container-fluid`. Explicar ancho máximo frente a ancho fluido.
6. **Rows y columns:** abrir el código de la combinación. La fila agrupa los bloques y cada columna define su proporción. `g-3` separa los bloques.
7. **Breakpoints:** relacionar `col-12`, `col-md-6` y `col-lg-4` con el ancho. Mostrar que md comienza en 768 px y lg en 992 px. El ejemplo CSS tiene su segundo breakpoint en 1024 px; ambos sitios responden a sus propias reglas.
8. **Utilidades:** usar los controles del laboratorio y explicar al menos 15. Una secuencia útil es p-3, px-4, py-2, m-0, mb-3, mt-4, gap-3, d-flex, d-block, d-none, flex-column, flex-wrap, justify-content-between, align-items-center, text-center, fw-bold, bg-success y text-white. Hay 24 disponibles.
9. **img-fluid:** ubicarla en las fotografías del ejemplo Bootstrap; relacionarla con la regla de imagen fluida vista en CSS.

Los controles del laboratorio producen cambios reales de clases. El HTML generado debajo del ejemplo permite explicar qué se agregó o reemplazó.

## 3. Componentes y formularios

Abrir `ejemplo-bootstrap.html` en una pestaña completa para demostrar los controles con comodidad.

1. **Navbar:** reducir el ancho, abrir el menú móvil, elegir un enlace y observar que el menú se cierra al navegar. Ubicar `navbar`, `navbar-expand-md` y Collapse.
2. **Carousel:** usar anterior, siguiente y los indicadores. Ubicar el id `paisajes`, la clase `active`, `data-bs-target` y `data-bs-slide`.
3. **Dropdown:** elegir un ambiente en Filtrar destinos. Bootstrap abre el menú; nuestro código selecciona el contenido del catálogo.
4. **Pagination:** volver a Todos y pasar de la página 1 a la 2. Mostrar que cambian las tarjetas y los estados de anterior/siguiente. La apariencia es de Bootstrap y la lógica de datos es nuestra.
5. **Modal:** abrir Ver detalle en una tarjeta, cerrar con el botón o Escape y luego volver a abrir para elegir el ambiente. Mostrar la relación entre el botón y `#detalleDestino`.
6. **Tabs:** cambiar entre Qué llevar, Cómo organizarse y Cuidar el lugar. Ubicar los botones y los paneles correspondientes.
7. **Controls:** recorrer nombre, correo, select, fecha, range, radio, textarea y checkbox. Explicar por qué se usa cada control.
8. **Validación:** enviar vacío; escribir un nombre demasiado corto; usar un correo incompleto; comprobar la restricción de fecha. Corregir los datos y observar que el formulario conserva los valores.
9. **UX:** señalar etiquetas, ayudas, campos obligatorios, foco en el primer error y mensajes asociados. Mostrar una solicitud válida y explicar que es una simulación local.

En `assets/js/ejemplo-bootstrap.js`, las funciones están comentadas: primero catálogo, luego paginación, detalle, navegación y formulario. Las reglas del formulario están separadas en `assets/js/validacion.js`.

## Mapa de cobertura de la consigna

| Tema | Dónde se demuestra |
| --- | --- |
| RWD, importancia y mobile-first | Fundamentos y comparación de pantallas. |
| Principios de maquetación | CSS propio, contenedor, grid, Flexbox y espaciado. |
| Viewport | head de todas las páginas. |
| Media queries y breakpoints | CSS del ejemplo y tabla de Bootstrap 5. |
| Grid de 12 columnas | Sitio CSS y laboratorio Bootstrap. |
| Tipografía fluida | clamp() en los títulos. |
| img-fluid, picture y srcset | Imágenes de ambos ejemplos. |
| Qué es Bootstrap, ventajas y usos | Introducción y aplicación en Ruta Tica. |
| Evolución y diferencias de versión | Tarjetas históricas, evolución de la rama 5 y tabla de Bootstrap 4 frente a 5. |
| CDN, local y estructura | Implementación y archivos entregados. |
| Containers, rows y columns | Laboratorio interactivo y sitio Bootstrap. |
| Al menos 15 utilidades | 24 controles con descripciones y HTML actualizado. |
| Carousel, dropdown, modal, navbar, tabs, pagination | Sitio Bootstrap completo. |
| Controls, validación y UX | Formulario de solicitud de muestra. |
| Ejemplo solo HTML/CSS | ejemplo-css.html y su hoja de estilos. |
| Ejemplo con la versión definida para la exposición | ejemplo-bootstrap.html, Bootstrap 5.3.8. |
| Desktop, tablet y móvil | Selector de 1440, 820 y 390 px y apertura de ambos sitios. |

## Una aclaración de la consigna

La práctica guiada se entrega para que la clase la resuelva en casa. El PDF pide una solución distinta a la demo; por eso, cuando se prepare esa práctica, deberá usarse otro sitio y entregarse su guía y código base. Esta demo ya tiene documentación y código completo para la exposición.

## Referencias durante la demostración

Cada concepto y componente incluye enlaces de W3Schools. La sección Versiones añade documentación histórica y anuncios oficiales de Bootstrap; la sección Implementación enlaza el tutorial y la inclusión oficial de la rama 5.3. Los enlaces permiten ampliar la explicación sin depender del visor de archivos que se retiró de la demo.
