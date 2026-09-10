const SHEET_ID = 'PEGA_AQUI_EL_ID_DE_TU_GOOGLE_SHEET';

function doGet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const precios = leerTabla_(ss.getSheetByName('PRECIOS'));
  const config = leerTabla_(ss.getSheetByName('CONFIGURACION'));
  const precioObj = {};
  precios.forEach(r => precioObj[String(r.CODIGO || '').trim()] = {
    precio: r.PRECIO,
    oferta: r.OFERTA,
    mostrar: r.MOSTRAR || 'SI',
    texto: r.TEXTO || ''
  });
  const configObj = {};
  config.forEach(r => configObj[String(r.CLAVE || '').trim().toLowerCase()] = r.VALOR);
  return ContentService.createTextOutput(JSON.stringify({precios:precioObj, configuracion:configObj}))
    .setMimeType(ContentService.MimeType.JSON);
}
function leerTabla_(sh){
  if(!sh) return [];
  const v=sh.getDataRange().getDisplayValues(); if(v.length<2)return [];
  const h=v.shift().map(x=>x.trim().toUpperCase());
  return v.filter(r=>r.some(Boolean)).map(r=>Object.fromEntries(h.map((k,i)=>[k,r[i]])));
}
