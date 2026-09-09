# Escuela de Manejo Panamá Este — Paquete Completo

Sitio estático listo para GitHub Pages o Cloudflare Pages. No requiere build, npm ni backend.

## Incluido

- Página principal responsive.
- Switch Español / Inglés con preferencia guardada en el navegador.
- WhatsApp directo y formulario que prepara el mensaje.
- Waze embebido y enlace de navegación.
- Integración con Instagram.
- Botones de compartir con Web Share API, copiar enlace y compartir por WhatsApp.
- Sección de videos/Reels preparada para archivos MP4 propios.
- Páginas individuales por servicio.
- SEO técnico: title, description, canonical, Open Graph, Twitter Cards, JSON-LD, robots.txt y sitemap.xml.
- Favicon, navegación móvil, animaciones y diseño responsive.

## Videos / Reels

Carga los videos dentro de:

`assets/videos/`

con estos nombres exactos:

- `reel-01.mp4`
- `reel-02.mp4`
- `reel-03.mp4`
- `reel-04.mp4`

Mientras no existan, la web muestra automáticamente un placeholder “Video próximamente”.

Recomendación para GitHub Pages: MP4 H.264, 9:16, 720x1280 o 1080x1920, y preferiblemente menos de 15 MB por archivo.

## Páginas individuales

- `pages/primera-licencia.html`
- `pages/certificacion-licencias.html`
- `pages/ampliaciones.html`
- `pages/recuperacion-licencia.html`

Cada una tiene su propio title, description, canonical, Open Graph y Schema.org Service.

## SEO — importante antes de publicar en dominio final

El proyecto está configurado provisionalmente para:

`https://alejoadmade.github.io/EscueladeManejodelEste/`

Si cambias el dominio o nombre del repositorio, reemplaza esa URL en:

1. `index.html`
2. las páginas dentro de `pages/`
3. `js/data.js` (`siteUrl`)
4. `robots.txt`
5. `sitemap.xml`

Después del deploy final, puedes registrar el sitio en Google Search Console y enviar `sitemap.xml` para facilitar la indexación.

## Redes sociales

Instagram está configurado en `js/data.js`. Los campos Facebook, TikTok y YouTube quedaron preparados pero vacíos para no inventar cuentas.

## Datos principales

En `js/data.js` puedes cambiar:

- WhatsApp
- teléfono
- Instagram
- ubicación
- Waze
- cursos
- FAQ
- textos de los videos

## Deploy

### GitHub Pages
Sube el contenido completo a la raíz del repositorio y activa Pages desde la rama principal.

### Cloudflare Pages
Conecta el repositorio. Para un sitio estático no necesitas comando de build; usa la raíz del proyecto como directorio de salida.


## Páginas individuales por tipo de licencia (V3)
Se incluyen páginas SEO independientes para A, C, D, E1, E2, E3, F, G, H e I dentro de `pages/`. La home enlaza directamente a cada una y `sitemap.xml` ya las incluye.
