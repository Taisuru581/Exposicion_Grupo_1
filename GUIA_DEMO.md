# Guía sencilla para la exposición

## 1. Fundamentos — primer integrante
Abrir `ejemplo-css.html` y su hoja `assets/css/ejemplo-css.css`.
1. Mostrar la metaetiqueta viewport.
2. Explicar que el estilo inicial corresponde a móvil.
3. Mostrar las media queries de 768 y 1024 píxeles.
4. Comparar las tarjetas en 390, 820 y 1440 píxeles usando las herramientas del navegador.
5. Explicar las doce columnas, el tamaño del texto con clamp y las imágenes con picture y srcset.
Este ejemplo no carga Bootstrap ni JavaScript.

## 2. Bootstrap y utilidades — segundo integrante
1. Explicar introducción y versiones con las secciones de `index.html`.
2. Mostrar la inclusión local del CSS y comparar con el ejemplo de CDN.
3. Abrir `laboratorio-bootstrap.html`: comparar container con container-fluid.
4. Mostrar row y col-12 col-md-6 col-lg-4.
5. Cambiar col-lg-4 por col-lg-6, guardar y observar dos bloques por fila en pantalla grande.
6. Explicar al menos 15 de las 24 utilidades. Cada una tiene un ejemplo visible y su HTML dentro de “Ver HTML”.
7. Quitar d-none del ejemplo correspondiente para revelar su texto.
Las modificaciones se hacen en Visual Studio Code. El laboratorio no utiliza JavaScript.

## 3. Componentes y formularios — Erick
Abrir `ejemplo-bootstrap.html`.
1. Navbar: reducir a 390 píxeles, abrir y cerrar el botón del menú. Al elegir un enlace se navega a la sección; cerrar el menú con su botón.
2. Carousel: usar anterior, siguiente y los indicadores. Mostrar active, data-bs-target y data-bs-slide.
3. Dropdown: abrir “Ir a un ambiente” y elegir Playa. Es un enlace, no un filtro.
4. Modal: abrir “Ver detalle”. Mostrar el id de la ventana y el data-bs-target del botón. Cerrar con el botón o Escape.
5. Tabs: alternar los tres consejos y mostrar los paneles correspondientes.
6. Pagination: abrir 2 y regresar con 1. Son dos archivos HTML, no una lista generada por código.
7. Controls: señalar texto, correo, lista, fecha, rango, radio, comentarios y casilla. El rango no actualiza un contador.
8. Validación: intentar continuar vacío, luego con un nombre de una letra o correo sin arroba. Corregir usando datos inventados.
9. UX: explicar etiquetas, ayudas visibles, campos obligatorios y avisos del navegador.
10. Al continuar, se abre una página estática. No se crea una reserva ni se guarda información personal.

Sólo se carga el archivo JavaScript original de Bootstrap. No es necesario explicar funciones propias, porque se eliminaron.

## Pruebas antes de exponer
- Probar cada componente y los enlaces 1 y 2.
- Revisar los ejemplos a 390, 820 y 1440 píxeles.
- Probar el formulario vacío, con datos incorrectos y con datos completos.
- Confirmar que las imágenes y los estilos se cargan sin Internet.

## Entregables del profesor
La teoría tiene un máximo de 30 minutos y la demostración de 60 minutos para todo el grupo. La práctica para estudiantes se resuelve en casa y debe ser un sitio distinto con guía, código base y recursos. También se requiere autoevaluación y presentación con integrantes. Revisar estos pendientes antes de entregar.
