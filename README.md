# Escuela de Manejo Panamá Este — V4 modular

## Estructura pública
- `/` Página principal resumida
- `/servicios/certificacion-licencias/` Para quienes ya saben conducir
- `/servicios/curso-completo/` Para quienes no saben conducir
- `/servicios/ampliaciones/` Ampliaciones
- `/servicios/servicios-adicionales/` Alcoholemia, regatas, piratería y exceso de velocidad

Ya no existen páginas individuales por cada licencia.

## Precios desde Google Sheets
1. Crea un Google Sheet.
2. Importa `google-sheets/PRECIOS.csv` en una pestaña llamada `PRECIOS`.
3. Importa `google-sheets/CONFIGURACION.csv` en una pestaña llamada `CONFIGURACION`.
4. En Extensiones > Apps Script pega `google-sheets/Code.gs`.
5. Cambia `SHEET_ID` por el ID de la hoja.
6. Implementa como Aplicación web: ejecutar como tú y acceso `Cualquier usuario`.
7. Copia la URL que termina en `/exec`.
8. Pégala en `js/config.js` en `googleSheetsApi`.

Desde ese momento el cliente puede cambiar PRECIO, OFERTA, MOSTRAR, teléfono, WhatsApp y aviso desde Sheets sin editar GitHub.

Si la API no responde, la web no se rompe: muestra `Consultar`.
