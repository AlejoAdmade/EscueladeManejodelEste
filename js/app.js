const cfg = window.SITE_CONFIG || {};
let remote = window.FALLBACK_DATA || { precios: {}, configuracion: {} };

const money = value => {
  const n = Number(String(value ?? '').replace(',', '.'));
  return Number.isFinite(n) ? `B/. ${n.toFixed(2)}` : 'Consultar';
};

const cleanPhone = value => String(value || '').replace(/[^0-9]/g, '');

function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];

    if (quoted) {
      if (ch === '"' && next === '"') {
        field += '"';
        i++;
      } else if (ch === '"') {
        quoted = false;
      } else {
        field += ch;
      }
    } else if (ch === '"') {
      quoted = true;
    } else if (ch === ',') {
      row.push(field);
      field = '';
    } else if (ch === '\n') {
      row.push(field.replace(/\r$/, ''));
      rows.push(row);
      row = [];
      field = '';
    } else {
      field += ch;
    }
  }

  if (field.length || row.length) {
    row.push(field.replace(/\r$/, ''));
    rows.push(row);
  }

  if (!rows.length) return [];
  const headers = rows.shift().map(h => String(h).trim().toLowerCase());
  return rows
    .filter(r => r.some(cell => String(cell).trim() !== ''))
    .map(r => Object.fromEntries(headers.map((h, i) => [h, String(r[i] ?? '').trim()])));
}

async function fetchCSV(url) {
  if (!url) return null;
  const separator = url.includes('?') ? '&' : '?';
  const response = await fetch(`${url}${separator}_=${Date.now()}`, { cache: 'no-store' });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return parseCSV(await response.text());
}

async function loadRemote() {
  const next = {
    precios: { ...(remote.precios || {}) },
    configuracion: { ...(remote.configuracion || {}) }
  };

  try {
    const [priceRows, configRows] = await Promise.all([
      fetchCSV(cfg.preciosCsvUrl),
      fetchCSV(cfg.configuracionCsvUrl)
    ]);

    if (priceRows) {
      next.precios = {};
      priceRows.forEach(item => {
        const code = String(item.codigo || '').trim();
        if (!code) return;
        next.precios[code] = {
          servicio: item.servicio || '',
          precio: item.precio || '',
          oferta: item.oferta || '',
          mostrar: item.mostrar || 'SI',
          texto: item.texto || ''
        };
      });
    }

    if (configRows) {
      configRows.forEach(item => {
        const key = String(item.clave || '').trim();
        if (key) next.configuracion[key] = item.valor || '';
      });
    }

    remote = next;
  } catch (error) {
    console.warn('Google Sheets no disponible. Se usarán los valores de respaldo.', error);
  }

  renderRemote();
}

function renderRemote() {
  const prices = remote.precios || {};

  document.querySelectorAll('[data-price]').forEach(el => {
    const item = prices[el.dataset.price];
    const box = el.closest('[data-price-box]');

    const hidePrice = () => {
      el.classList.remove('sale');
      el.innerHTML = '';
      el.hidden = true;
      if (box) box.hidden = true;
    };

    const showPrice = () => {
      el.hidden = false;
      if (box) box.hidden = false;
    };

    // Si no existe un precio válido, no mostramos un texto de respaldo.
    if (!item || String(item.mostrar || 'SI').trim().toUpperCase() === 'NO') {
      hidePrice();
      return;
    }

    const sale = Number(String(item.oferta || '').replace(',', '.'));
    const regular = Number(String(item.precio || '').replace(',', '.'));
    const hasSale = Number.isFinite(sale) && sale > 0;
    const hasRegular = Number.isFinite(regular) && regular > 0;

    if (!hasSale && !hasRegular) {
      hidePrice();
      return;
    }

    showPrice();
    el.classList.remove('sale');

    if (hasSale) {
      const regularText = hasRegular ? `<small>${money(regular)}</small>` : '';
      el.innerHTML = `${regularText}${money(sale)}`;
      el.classList.add('sale');
    } else {
      el.textContent = money(regular);
    }
  });

  const c = remote.configuracion || {};
  const phone = c.telefono || cfg.phone || '396-7687';
  const whatsapp = cleanPhone(c.whatsapp || cfg.whatsapp || '50766267154');
  const whatsappDisplay = c.whatsapp_display || cfg.whatsappDisplay || '6626-7154';
  const address = c.direccion || cfg.address || '';
  const addressDetail = c.direccion_detalle || cfg.addressDetail || address;
  const hours = c.horario || cfg.hours || 'Consultar disponibilidad';
  const wazeLink = c.waze_link || cfg.wazeLink || '#';
  const wazeEmbed = c.waze_embed || cfg.wazeEmbed || '';
  const instagram = c.instagram || cfg.instagram || '#';

  document.querySelectorAll('[data-phone]').forEach(el => el.textContent = phone);
  document.querySelectorAll('[data-wa-display]').forEach(el => el.textContent = whatsappDisplay);
  document.querySelectorAll('[data-address]').forEach(el => el.textContent = address);
  document.querySelectorAll('[data-address-detail]').forEach(el => el.textContent = addressDetail);
  document.querySelectorAll('[data-hours]').forEach(el => el.textContent = hours);
  document.querySelectorAll('[data-waze]').forEach(el => el.href = wazeLink);
  document.querySelectorAll('[data-waze-embed]').forEach(el => {
    if (wazeEmbed && el.getAttribute('src') !== wazeEmbed) el.setAttribute('src', wazeEmbed);
  });
  document.querySelectorAll('[data-instagram]').forEach(el => el.href = instagram);

  document.querySelectorAll('[data-wa]').forEach(el => {
    const msg = el.dataset.msg || 'Hola, deseo información sobre sus servicios.';
    el.href = `https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`;
    el.target = '_blank';
    el.rel = 'noopener';
  });

  const notice = document.querySelector('[data-aviso]');
  if (notice) {
    const active = String(c.aviso_activo || '').trim().toUpperCase() === 'SI';
    const text = String(c.aviso_texto || '').trim();
    notice.hidden = !(active && text);

    if (active && text) {
      const safe = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      notice.innerHTML = `
        <div class="global-notice-marquee" role="status" aria-label="${safe}">
          <div class="global-notice-track">
            <span>✦ ${safe} ✦</span>
            <span aria-hidden="true">✦ ${safe} ✦</span>
            <span aria-hidden="true">✦ ${safe} ✦</span>
          </div>
        </div>`;
    } else {
      notice.innerHTML = '';
    }
  }
}

document.addEventListener('DOMContentLoaded', loadRemote);
