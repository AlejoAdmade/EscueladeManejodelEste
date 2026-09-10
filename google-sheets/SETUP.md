# Conectar Google Sheets DIRECTO con GitHub Pages

Esta versión **NO usa Google Apps Script**. La web sigue siendo 100% estática y se publica en GitHub Pages.

El navegador lee directamente dos pestañas públicas de Google Sheets en formato CSV.

## 1. Crea un Google Sheet

Crea dos pestañas exactamente con estos nombres:

- `PRECIOS`
- `CONFIGURACION`

Puedes importar los archivos `PRECIOS.csv` y `CONFIGURACION.csv` incluidos en esta carpeta.

## 2. Publica la pestaña PRECIOS como CSV

En Google Sheets:

**Archivo → Compartir → Publicar en la Web**

1. Selecciona la pestaña `PRECIOS`.
2. En formato selecciona **Valores separados por comas (.csv)**.
3. Presiona **Publicar**.
4. Copia la URL generada.

## 3. Publica CONFIGURACION como CSV

Repite el mismo proceso para la pestaña `CONFIGURACION` y copia su URL CSV.

## 4. Conecta la web

Abre `js/config.js` y coloca las URLs:

```js
preciosCsvUrl: "PEGA_AQUI_LA_URL_CSV_DE_PRECIOS",
configuracionCsvUrl: "PEGA_AQUI_LA_URL_CSV_DE_CONFIGURACION",
```

Haz commit/push una sola vez.

A partir de ahí, cuando la escuela cambie un precio o configuración en Google Sheets, la web leerá el nuevo valor directamente al abrir o recargar la página. No hay que editar HTML ni volver a desplegar por cada cambio.

## Qué pueden administrar

### PRECIOS

Columnas:

- `CODIGO`: no cambiar; conecta cada fila con la web.
- `SERVICIO`: nombre de referencia.
- `PRECIO`: precio normal.
- `OFERTA`: precio promocional opcional.
- `MOSTRAR`: `SI` o `NO`.
- `TEXTO`: texto alternativo cuando no haya precio, por ejemplo `Consultar` o `Desde B/. 100`.

### CONFIGURACION

Se puede actualizar:

- WhatsApp
- Teléfono
- Dirección
- Detalle de ubicación
- Horario
- URL de Waze
- Mapa/embed de Waze
- Instagram
- Aviso/promoción superior

## Importante

La información publicada como CSV es pública. Usa estas hojas solamente para datos que también serán públicos en la web. No coloques cédulas, clientes, correos privados, pagos ni otra información sensible.

## Si Google Sheets falla

La página no se rompe. `js/config.js` mantiene valores de respaldo para teléfono, WhatsApp, dirección, Waze e Instagram, y los precios muestran `Consultar` si no pueden cargarse.
