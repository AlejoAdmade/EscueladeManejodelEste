const DATA = window.SITE_DATA;

const icons = {
  steering: `<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="18"/><circle cx="24" cy="24" r="5"/><path d="M8 20h32M24 29v13M19 27l-8 9M29 27l8 9"/></svg>`,
  shield: `<svg viewBox="0 0 48 48"><path d="M24 5 40 11v11c0 10-6.7 17.6-16 21-9.3-3.4-16-11-16-21V11l16-6Z"/><path d="m17 24 5 5 10-11"/></svg>`,
  license: `<svg viewBox="0 0 48 48"><rect x="5" y="10" width="38" height="28" rx="5"/><circle cx="16" cy="23" r="5"/><path d="M10 33c1-4 3-6 6-6s5 2 6 6M28 20h9M28 26h9M28 32h6"/></svg>`,
  arrow: `<svg viewBox="0 0 48 48"><path d="M7 36 20 23l8 8 13-19"/><path d="M31 12h10v10"/></svg>`
};

function renderCourses() {
  const grid = document.getElementById('courseGrid');
  grid.innerHTML = DATA.courses.map((course, i) => `
    <article class="course-card reveal" style="--delay:${i * 80}ms">
      <div class="course-icon">${icons[course.icon]}</div>
      <span class="course-tag">${course.tag}</span>
      <h3>${course.title}</h3>
      <p>${course.text}</p>
      <ul>${course.bullets.map(b => `<li><span>✓</span>${b}</li>`).join('')}</ul>
      <a href="#" class="course-link js-whatsapp" data-message="${course.message}">Solicitar información <span>→</span></a>
    </article>
  `).join('');
}

function renderFaqs() {
  const list = document.getElementById('faqList');
  list.innerHTML = DATA.faqs.map((item, i) => `
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
    link.addEventListener('click', e => {
      e.preventDefault();
      const message = link.dataset.message || 'Hola, quiero información sobre los cursos de manejo.';
      openWhatsApp(message);
    });
  });
}

function openWhatsApp(message) {
  if (!DATA.whatsapp) return;
  window.open(`https://wa.me/${DATA.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
}

function setupContactForm() {
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const interest = document.getElementById('interest').value;
    const message = document.getElementById('message').value.trim();
    const text = `Hola, soy ${name}. Me interesa: ${interest}.${phone ? ` Mi teléfono es ${phone}.` : ''}${message ? `\n\n${message}` : ''}`;
    openWhatsApp(text);
  });
}

function setupMenu() {
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');
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
    header.classList.toggle('scrolled', window.scrollY > 20);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function setupProcessDemo() {
  const steps = document.querySelectorAll('.process-step');
  const title = document.getElementById('phoneStepTitle');
  const text = document.getElementById('phoneStepText');
  const progress = document.getElementById('phoneProgress');
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
  const instagramBtn = document.getElementById('instagramBtn');
  if (instagramBtn) instagramBtn.href = DATA.instagram;
  const footerInstagram = document.getElementById('footerInstagram');
  if (footerInstagram) footerInstagram.href = DATA.instagram;
  const addressText = document.getElementById('addressText');
  if (addressText) addressText.textContent = DATA.address;
  const mapAddress = document.getElementById('mapAddress');
  if (mapAddress) mapAddress.textContent = `${DATA.address} · ${DATA.addressDetail}`;
  const whatsappText = document.getElementById('whatsappText');
  if (whatsappText) whatsappText.textContent = DATA.phoneDisplay;
  const telephoneText = document.getElementById('telephoneText');
  if (telephoneText) telephoneText.textContent = DATA.telephone;
  const mapFrame = document.getElementById('mapFrame');
  if (mapFrame) mapFrame.src = DATA.wazeEmbed;
  const mapsLink = document.getElementById('mapsLink');
  if (mapsLink) mapsLink.href = DATA.wazeLink;
  const footerWaze = document.getElementById('footerWaze');
  if (footerWaze) footerWaze.href = DATA.wazeLink;
  document.getElementById('year').textContent = new Date().getFullYear();
}

renderCourses();
renderFaqs();
applySiteData();
bindWhatsapp();
setupContactForm();
setupMenu();
setupScrollEffects();
setupProcessDemo();
