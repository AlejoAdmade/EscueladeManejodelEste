# Escuela de Manejo Panamá Este — V4.2

Versión modular de la web con:

- Página principal visual mejorada.
- 4 módulos de servicios.
- URLs limpias sin `.html`.
- Sección de ubicación con mapa de Waze.
- Botón directo para abrir la ruta en Waze.
- Google Sheets conectado **directamente por CSV**, sin Google Apps Script.
- Precios dinámicos, ofertas, teléfonos, WhatsApp, dirección, horario, Waze, Instagram y avisos administrables desde Sheets.

## Módulos

- `servicios/certificacion-licencias/`
- `servicios/curso-completo/`
- `servicios/ampliaciones/`
- `servicios/servicios-adicionales/`

## Google Sheets

Consulta `google-sheets/SETUP.md`.

La web sigue alojándose completamente en GitHub Pages. Google Sheets solo funciona como fuente pública de datos para que la escuela pueda cambiar precios/configuración sin tocar el código.

La web funciona aunque todavía no hayas conectado Google Sheets. En ese caso usa los valores de respaldo de `js/config.js` y muestra `Consultar` en los precios.
