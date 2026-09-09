const DATA = window.SITE_DATA;
let detailLang = localStorage.getItem('pempe_lang') || 'es';
if(!['es','en'].includes(detailLang)) detailLang='es';

function openDetailWA(message){window.open(`https://wa.me/${DATA.whatsapp}?text=${encodeURIComponent(message)}`,'_blank','noopener');}
function bindDetailWA(){document.querySelectorAll('.js-whatsapp').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const es=a.dataset.messageEs||a.dataset.message||'Hola, quiero información.';const en=a.dataset.messageEn||'Hello, I would like more information.';openDetailWA(detailLang==='es'?es:en);}));}
function applyDetailLanguage(lang){
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-es][data-en]').forEach(el=>{
    const value=el.dataset[lang];
    if(el.dataset.attr){el.setAttribute(el.dataset.attr,value);}else{el.innerHTML=value;}
  });
  document.querySelectorAll('.lang-switch').forEach(btn=>{btn.innerHTML=`<span>${lang.toUpperCase()}</span><b>${lang==='es'?'EN':'ES'}</b>`;btn.setAttribute('aria-label',lang==='es'?'Switch to English':'Cambiar a español');});
}
function setupDetailLanguage(){
  applyDetailLanguage(detailLang);
  document.querySelectorAll('.lang-switch').forEach(btn=>btn.addEventListener('click',()=>{detailLang=detailLang==='es'?'en':'es';localStorage.setItem('pempe_lang',detailLang);applyDetailLanguage(detailLang);}));
}
function setupDetailShare(){
  document.querySelectorAll('.js-share').forEach(btn=>btn.addEventListener('click',async()=>{const payload={title:document.title,url:location.href};if(navigator.share){try{await navigator.share(payload);}catch(e){}}else{await navigator.clipboard?.writeText(location.href);btn.textContent=detailLang==='es'?'✓ Enlace copiado':'✓ Link copied';setTimeout(()=>btn.textContent=detailLang==='es'?'Compartir':'Share',1400);}}));
  document.querySelectorAll('.js-copy').forEach(btn=>btn.addEventListener('click',async()=>{await navigator.clipboard?.writeText(location.href);const old=btn.textContent;btn.textContent=detailLang==='es'?'✓ Copiado':'✓ Copied';setTimeout(()=>btn.textContent=old,1400);}));
}
function fillDetailData(){
  document.querySelectorAll('.js-instagram').forEach(a=>a.href=DATA.instagram);
  document.querySelectorAll('.js-waze').forEach(a=>a.href=DATA.wazeLink);
  document.querySelectorAll('.js-year').forEach(el=>el.textContent=new Date().getFullYear());
}
setupDetailLanguage();bindDetailWA();setupDetailShare();fillDetailData();
