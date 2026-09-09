# Escuela de Manejo Panamá Este — Demo Web Premium

Sitio estático listo para GitHub Pages o Cloudflare Pages.

## Antes de publicar

1. Abre `js/data.js`.
2. Cambia `whatsapp` por el número real (solo números, incluyendo 507).
3. Confirma `address`, `mapQuery` y `hours`.
4. Reemplaza testimonios demostrativos por reseñas reales.
5. Si quieres fotos propias, cambia las URLs de Unsplash en `index.html` y `css/styles.css` por archivos locales dentro de `images/`.

## Estructura

- `index.html` — estructura de la página.
- `css/styles.css` — diseño responsive y animaciones.
- `js/data.js` — datos que cambian con frecuencia.
- `js/app.js` — interacciones, WhatsApp, FAQ, menú y animaciones.
- `images/favicon.svg` — favicon provisional.

## Deploy en GitHub Pages

Sube el contenido de esta carpeta al repositorio y habilita Pages desde la rama principal.

## Deploy en Cloudflare Pages

Conecta el repositorio y usa el directorio raíz como salida. No requiere comando de build.

## Nota

Los datos públicos encontrados para ubicación/horario deben confirmarse con la escuela antes del lanzamiento final. El número de WhatsApp actual es intencionalmente un placeholder y muestra un aviso mientras no sea reemplazado.
