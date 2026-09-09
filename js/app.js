document.body.classList.add("js-ready");
const DATA = window.SITE_DATA;
let currentLang = localStorage.getItem('pempe_lang') || 'es';
if (!['es','en'].includes(currentLang)) currentLang = 'es';

const icons = {
  steering: `<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="18"/><circle cx="24" cy="24" r="5"/><path d="M8 20h32M24 29v13M19 27l-8 9M29 27l8 9"/></svg>`,
  shield: `<svg viewBox="0 0 48 48"><path d="M24 5 40 11v11c0 10-6.7 17.6-16 21-9.3-3.4-16-11-16-21V11l16-6Z"/><path d="m17 24 5 5 10-11"/></svg>`,
  license: `<svg viewBox="0 0 48 48"><rect x="5" y="10" width="38" height="28" rx="5"/><circle cx="16" cy="23" r="5"/><path d="M10 33c1-4 3-6 6-6s5 2 6 6M28 20h9M28 26h9M28 32h6"/></svg>`,
  arrow: `<svg viewBox="0 0 48 48"><path d="M7 36 20 23l8 8 13-19"/><path d="M31 12h10v10"/></svg>`
};

function renderCourses() {
  const grid = document.getElementById('courseGrid');
  if (!grid) return;
  const items = DATA.courses[currentLang];
  grid.innerHTML = items.map((course, i) => `
    <article class="course-card reveal visible" style="--delay:${i * 80}ms">
      <div class="course-icon">${icons[course.icon]}</div>
      <span class="course-tag">${course.tag}</span>
      <h3>${course.title}</h3>
      <p>${course.text}</p>
      <div class="course-actions">
        <a href="${course.page}" class="course-detail-link course-detail-button">${currentLang === 'es' ? 'Ver detalles' : 'View details'} <span>→</span></a>
      </div>
    </article>
  `).join('');
  bindWhatsapp();
}

function renderFaqs() {
  const list = document.getElementById('faqList');
  if (!list) return;
  list.innerHTML = DATA.faqs[currentLang].map((item, i) => `
    <article class="faq-item ${i === 0 ? 'open' : ''}">
      <button class="faq-question" type="button" aria-expanded="${i === 0}">
        <span>${item.q}</span><b>+</b>
      </button>
      <div class="faq-answer"><p>${item.a}</p></div>
    </article>
  `).join('');
  list.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const willOpen = !item.classList.contains('open');
      list.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (willOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function bindWhatsapp() {
  document.querySelectorAll('.js-whatsapp').forEach(link => {
    if (link.dataset.waBound === '1') return;
    link.dataset.waBound = '1';
    link.addEventListener('click', e => {
      e.preventDefault();
      let message = link.dataset.message || (currentLang === 'es' ? 'Hola, quiero información sobre los cursos de manejo.' : 'Hello, I would like information about your driving school services.');
      if (currentLang === 'en' && !link.dataset.messageEn && /^Hola[, ]/i.test(message)) {
        const context = (link.closest('article')?.querySelector('h3')?.textContent || link.textContent || 'this service').trim();
        message = `Hello, I would like more information about: ${context}.`;
      }
      openWhatsApp(message);
    });
  });
}

function openWhatsApp(message) {
  if (!DATA.whatsapp) return;
  window.open(`https://wa.me/${DATA.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
}

function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const interest = document.getElementById('interest').value;
    const message = document.getElementById('message').value.trim();
    const text = currentLang === 'es'
      ? `Hola, soy ${name}. Me interesa: ${interest}.${phone ? ` Mi teléfono es ${phone}.` : ''}${message ? `\n\n${message}` : ''}`
      : `Hello, my name is ${name}. I am interested in: ${interest}.${phone ? ` My phone number is ${phone}.` : ''}${message ? `\n\n${message}` : ''}`;
    openWhatsApp(text);
  });
}

function setupMenu() {
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open'); btn.classList.remove('open'); btn.setAttribute('aria-expanded','false'); document.body.classList.remove('menu-open');
  }));
}

function setupScrollEffects() {
  const header = document.getElementById('siteHeader');
  const progress = document.getElementById('progressBar');
  const onScroll = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 20);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function setupProcessDemo() {
  const steps = document.querySelectorAll('.process-step');
  const title = document.getElementById('phoneStepTitle');
  const text = document.getElementById('phoneStepText');
  const progress = document.getElementById('phoneProgress');
  if (!steps.length || !title || !text || !progress) return;
  const update = step => {
    steps.forEach(s => s.classList.toggle('active', s === step));
    title.textContent = step.querySelector('h3').textContent;
    text.textContent = step.querySelector('p').textContent;
    progress.style.width = `${Number(step.dataset.step) * 25}%`;
  };
  steps.forEach(s => s.addEventListener('mouseenter', () => update(s)));
  steps.forEach(s => s.addEventListener('click', () => update(s)));
  update(steps[0]);
}

function applySiteData() {
  ['instagramBtn','aboutInstagram','footerInstagram','socialInstagram'].forEach(id => { const el=document.getElementById(id); if(el) el.href=DATA.instagram; });
  const addressText = document.getElementById('addressText'); if (addressText) addressText.textContent = DATA.address;
  const mapAddress = document.getElementById('mapAddress'); if (mapAddress) mapAddress.textContent = `${DATA.address} · ${DATA.addressDetail}`;
  const whatsappText = document.getElementById('whatsappText'); if (whatsappText) whatsappText.textContent = DATA.phoneDisplay;
  const telephoneText = document.getElementById('telephoneText'); if (telephoneText) telephoneText.textContent = DATA.telephone;
  const mapFrame = document.getElementById('mapFrame'); if (mapFrame) mapFrame.src = DATA.wazeEmbed;
  ['mapsLink','footerWaze'].forEach(id=>{const el=document.getElementById(id);if(el)el.href=DATA.wazeLink;});
  const year = document.getElementById('year'); if(year) year.textContent = new Date().getFullYear();
}

function renderVideos() {
  const grid = document.getElementById('videoGrid');
  if (!grid) return;
  grid.innerHTML = DATA.videos.map((v,i)=>`
    <article class="reel-card">
      <div class="reel-media">
        <video playsinline controls preload="metadata" poster="${v.poster}" aria-label="${v[currentLang]}">
          <source src="${v.file}" type="video/mp4">
        </video>
        <div class="video-missing" hidden><span>▶</span><strong>${currentLang==='es'?'Video próximamente':'Video coming soon'}</strong><small>${v.file.split('/').pop()}</small></div>
      </div>
      <div class="reel-meta"><span>0${i+1}</span><strong>${v[currentLang]}</strong></div>
    </article>`).join('');
  grid.querySelectorAll('video').forEach(video=>{
    const fail=()=>{video.hidden=true; const missing=video.parentElement.querySelector('.video-missing'); if(missing) missing.hidden=false;};
    video.addEventListener('error',fail,{once:true});
    const source=video.querySelector('source'); if(source) source.addEventListener('error',fail,{once:true});
  });
}

function setupSocialSharing(){
  const shareBtn=document.getElementById('shareBtn');
  const copyBtn=document.getElementById('copyBtn');
  const waShare=document.getElementById('waShareBtn');
  const toast=document.getElementById('copyToast');
  if(shareBtn) shareBtn.addEventListener('click',async()=>{
    const payload={title:document.title,text:currentLang==='es'?'Conoce Escuela de Manejo Panamá Este':'Discover Escuela de Manejo Panamá Este',url:location.href};
    if(navigator.share){try{await navigator.share(payload);}catch(e){}}else{navigator.clipboard?.writeText(location.href); showToast();}
  });
  if(copyBtn) copyBtn.addEventListener('click',()=>{navigator.clipboard?.writeText(location.href); showToast();});
  if(waShare) waShare.addEventListener('click',()=>window.open(`https://wa.me/?text=${encodeURIComponent(document.title+' '+location.href)}`,'_blank','noopener'));
  function showToast(){if(!toast)return;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800);}
}

function translateStaticText(targetLang){
  const map=DATA.textMap;
  const inverse=Object.fromEntries(Object.entries(map).map(([es,en])=>[en,es]));
  const dict=targetLang==='en'?map:inverse;
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(node){
    if(!node.parentElement || ['SCRIPT','STYLE'].includes(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
    return node.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;
  }});
  const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node=>{
    const raw=node.nodeValue; const trimmed=raw.trim();
    if(dict[trimmed]) node.nodeValue=raw.replace(trimmed,dict[trimmed]);
  });
  const placeholders={
    es:{name:'Tu nombre',message:'Ej. Tengo licencia C y quiero saber qué necesito para ampliar a E2...'},
    en:{name:'Your name',message:'E.g. I have a C license and want to know what I need to upgrade to E2...'}
  };
  const n=document.getElementById('name'); if(n)n.placeholder=placeholders[targetLang].name;
  const m=document.getElementById('message'); if(m)m.placeholder=placeholders[targetLang].message;
  document.documentElement.lang=targetLang;
}

function updateMetaLanguage(){
  const desc=document.querySelector('meta[name="description"]');
  if(currentLang==='en'){
    document.title='Driving School Panama East | Courses & Licenses';
    if(desc) desc.content='Driving School Panama East. Theory and practical courses, first license, upgrades, certifications and road guidance.';
  }else{
    document.title='Escuela de Manejo Panamá Este | Cursos y Licencias';
    if(desc) desc.content='Escuela de Manejo Panamá Este. Cursos teóricos y prácticos, primera licencia, ampliaciones, certificaciones y orientación vial en Panamá Este.';
  }
}

function setupLanguage(){
  document.querySelectorAll('.lang-switch').forEach(btn=>btn.addEventListener('click',()=>{
    const next=currentLang==='es'?'en':'es';
    translateStaticText(next);
    currentLang=next;
    localStorage.setItem('pempe_lang',currentLang);
    updateLanguageButtons();
    renderCourses(); renderFaqs(); renderVideos(); updateMetaLanguage();
  }));
  if(currentLang==='en') translateStaticText('en');
  updateLanguageButtons(); updateMetaLanguage();
}
function updateLanguageButtons(){document.querySelectorAll('.lang-switch').forEach(btn=>{btn.innerHTML=`<span>${currentLang.toUpperCase()}</span><b>${currentLang==='es'?'EN':'ES'}</b>`;btn.setAttribute('aria-label',currentLang==='es'?'Switch to English':'Cambiar a español');});}

function setupDetailsLinks(){
  document.querySelectorAll('[data-detail-page]').forEach(el=>{el.href=el.dataset.detailPage;});
}

renderCourses();
renderFaqs();
applySiteData();
bindWhatsapp();
setupContactForm();
setupMenu();
setupScrollEffects();
setupProcessDemo();
renderVideos();
setupSocialSharing();
setupLanguage();
setupDetailsLinks();
