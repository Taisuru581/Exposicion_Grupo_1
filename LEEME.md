# Ruta Tica — Diseño Web Responsivo y Bootstrap

Ejemplo sencillo para ISW-512. Se mantiene el contenido del grupo y se elimina el JavaScript propio. El único archivo JavaScript es `assets/vendor/bootstrap.bundle.min.js`, necesario para los componentes de Bootstrap.

## Abrir
1. Abrir la carpeta en Visual Studio Code.
2. Abrir `index.html` con Live Server.
3. Entrar al ejemplo HTML/CSS, al ejemplo Bootstrap o al laboratorio.
4. Cambiar una clase, guardar y observar el resultado.

Las imágenes y Bootstrap están incluidos. No hay paquetes que instalar. Los ejemplos también pueden abrirse directamente en un navegador; Live Server facilita ver los cambios.

## Archivos
- `index.html`: conceptos, referencias y enlaces a los ejemplos.
- `ejemplo-css.html`: ejemplo sólo con HTML y CSS, sin Bootstrap ni JavaScript.
- `ejemplo-bootstrap.html`: tres destinos, seis componentes y formulario.
- `destinos-pagina-2.html`: otros tres destinos y enlaces de paginación.
- `practica-completada.html`: página final de la demostración del formulario.
- `laboratorio-bootstrap.html`: cuadrícula, contenedores y 24 utilidades escritas en HTML.
- `assets/css/`: estilos del grupo.
- `assets/img/`: fotografías y créditos originales.
- `assets/vendor/`: Bootstrap 5.3.8 y licencia original.
- `GUIA_DEMO.md`: pasos para exponer.
- `CAMBIOS_PARA_PRACTICAR.md`: líneas y modificaciones pequeñas.

## Qué se simplificó
Las tarjetas y las ventanas se escriben en HTML. El menú enlaza las tarjetas en lugar de filtrarlas. La paginación abre dos archivos HTML. El laboratorio se modifica desde el editor. No hay funciones, módulos ni eventos programados por el grupo.

El carrusel, el menú desplegable, las ventanas, la navegación móvil y las pestañas usan los atributos `data-bs-*` y el archivo original de Bootstrap. La paginación usa enlaces normales.

## Formulario
El navegador valida `required`, `minlength` y `type="email"`. Las ayudas son texto visible. No se comprueba que un correo exista ni que la fecha sea futura.

Usar datos inventados. Los campos personales no tienen `name`, por lo que no se incluyen en la dirección al continuar. Sólo el horario de muestra se incluye en la URL para conservar la agrupación de los botones de opción. No hay base de datos, reserva ni envío de correo. La página final es estática y no calcula un resumen de la solicitud.

## Alcance de la entrega
Se conservó Bootstrap 5.3.8 para no cambiar los archivos del grupo. El enunciado exige la última versión: confirmar con el profesor la versión aceptada antes de entregar.

Esta carpeta contiene la demostración. El grupo todavía debe completar o confirmar la presentación con los integrantes, las referencias, la autoevaluación y la práctica guiada para estudiantes con un sitio diferente, guía y código base. No se afirma que esos entregables estén completos.
