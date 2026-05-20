/* ═══════════════════════════════════════════
   AF STEEL FURNITURE — Main Script
   ═══════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────
   Sample product data (loads from localStorage or falls back)
   ───────────────────────────────────────── */
const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: 'Titan Industrial Dining Table',
    slug: 'titan-industrial-dining-table',
    category: 'Steel Tables',
    price: 11500,
    priceLabel: null,
    description: 'A striking statement dining table featuring a heavy-duty H-beam steel base and a beautifully treated timber top. Built to serve as the structural centerpiece of modern dining rooms and open-plan spaces.',
    dimensions: 'H: 76 cm × W: 220 cm × D: 100 cm',
    material: 'Structural H-beam steel and solid hardwood',
    finish: 'Brushed charcoal powder coat with clear lacquer',
    weight: '120 kg',
    customizable: true,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80&fit=crop',
    ],
  },
  {
    id: 2,
    name: 'AF Apex Steel Wardrobe',
    slug: 'af-apex-steel-wardrobe',
    category: 'Steel Wardrobes',
    price: 8900,
    priceLabel: null,
    description: 'A commanding full-height wardrobe fabricated from 2mm cold-rolled steel. Features integrated hanging rails, dynamic adjustable shelving, and an ultra-durable industrial powder-coat finish.',
    dimensions: 'H: 220 cm × W: 120 cm × D: 60 cm',
    material: 'Cold-rolled steel, 2mm gauge',
    finish: 'Brushed graphite powder coat',
    weight: '98 kg',
    customizable: true,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80&fit=crop',
    ],
  },
  {
    id: 3,
    name: 'Linear Steel Wall Planter',
    slug: 'linear-steel-wall-planter',
    category: 'Accessories',
    price: 1250,
    priceLabel: null,
    description: 'A minimalist wall-mounted planter crafted from precision-bent steel plate. Designed to add clean-lined greenery to indoor or outdoor accent walls. Includes a hidden bracket system for seamless floating installation.',
    dimensions: 'H: 15 cm × W: 80 cm × D: 15 cm',
    material: 'Cold-rolled steel, 1.6mm gauge',
    finish: 'Rust-proof exterior matte black powder coat',
    weight: '6.5 kg',
    customizable: true,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80&fit=crop',
    ],
  },
  {
    id: 4,
    name: 'AF Minimalist Coat Rack',
    slug: 'af-minimalist-coat-rack',
    category: 'Accessories',
    price: 950,
    priceLabel: null,
    description: 'A sleek, functional wall entryway coat rack featuring 8 heavy-duty steel hooks. Perfectly welded to a sturdy backplate. An elegant organizational accessory for hallways, offices, and bedrooms.',
    dimensions: 'H: 8 cm × W: 90 cm × D: 6 cm',
    material: 'Solid steel flat bar and rods',
    finish: 'Fine textured black powder coat',
    weight: '3.2 kg',
    customizable: false,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1503602642458-232111445657?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80&fit=crop',
    ],
  },
  {
    id: 5,
    name: 'AF Steel Floating Shelves (Set of 3)',
    slug: 'af-steel-floating-shelves',
    category: 'Accessories',
    price: 2400,
    priceLabel: null,
    description: 'Ultra-thin, structural steel floating shelves built from 3mm sheet metal. Able to hold substantial weight while maintaining a feather-light, floating aesthetic. Perfect for books, accessories, and kitchen display.',
    dimensions: 'H: 5 cm × W: 60 cm × D: 20 cm (per shelf)',
    material: 'High-strength structural steel sheet',
    finish: 'Matte white powder coat',
    weight: '4.5 kg per shelf',
    customizable: true,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80&fit=crop',
    ],
  },
  {
    id: 6,
    name: 'Forge Heavy-Duty Workbench',
    slug: 'forge-heavy-duty-workbench',
    category: 'Custom Workbenches',
    price: null,
    priceLabel: 'Contact for pricing',
    description: 'An uncompromising, engineer-grade workbench with a reinforced 3mm steel plate surface, lower tool tray, and integrated vice mount options. Built to withstand extreme abuse in professional workshops.',
    dimensions: 'H: 90 cm × W: 180 cm × D: 80 cm',
    material: 'Heavy-gauge steel tubing and sheet plate',
    finish: 'Industrial Hammertone grey',
    weight: '85 kg',
    customizable: true,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fit=crop',
    ],
  },
  {
    id: 7,
    name: 'Meridian Office Cabinet',
    slug: 'meridian-office-cabinet',
    category: 'Storage Cabinets',
    price: 4900,
    priceLabel: null,
    description: 'A modern double-door steel filing and storage cabinet with flush handles and secure locks. Ideal for storing sensitive papers or heavy items in style.',
    dimensions: 'H: 140 cm × W: 80 cm × D: 45 cm',
    material: 'Cold-rolled steel, 1.2mm gauge',
    finish: 'Textured graphite powder coat',
    weight: '45 kg',
    customizable: false,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80&fit=crop',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80&fit=crop',
    ],
  }
];

// Dynamically load products from localStorage if it exists, otherwise write defaults
const PRODUCTS = JSON.parse(localStorage.getItem('sc_products') || 'null') || [...DEFAULT_PRODUCTS];

// If localStorage didn't have products, save default products to localStorage to initialize
if (!localStorage.getItem('sc_products')) {
  localStorage.setItem('sc_products', JSON.stringify(PRODUCTS));
}

// Attach products globally so the admin panel can access it
window.PRODUCTS = PRODUCTS;

const CATEGORIES = ['All', ...new Set(PRODUCTS.map(p => p.category))];

const FAQS = [
  { q: 'What is your lead time?', a: 'Standard lead time is 4–6 weeks from order confirmation. Custom designs or large-scale orders might take slightly longer.' },
  { q: 'Can products be custom-sized?', a: 'Absolutely. We make custom steel furniture and steel accessories to any shape, dimension, or steel thickness you require.' },
  { q: 'What finishes are available?', a: 'We offer heavy-duty powder coating in any RAL colour, brushed metal, galvanized finishes for outdoor rust resistance, and raw mill steel finishes protected with clear-coat lacquer.' },
  { q: 'Do you deliver nationwide?', a: 'Yes. We provide secure nationwide delivery across South Africa from our workshop in Cape Town.' },
  { q: 'How do I place an order?', a: "Simply click the 'Order on WhatsApp' button on any product page, or contact us directly via our WhatsApp icon. We will immediately assist with custom quotes and sizing." },
];

/* ─────────────────────────────────────────
   Utilities
   ───────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const fmt = n => 'R ' + Number(n).toLocaleString('en-ZA');

/* ─────────────────────────────────────────
   Navbar scroll effect
   ───────────────────────────────────────── */
function initNavbar() {
  const navbar = $('#navbar');
  if (!navbar) return;
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger toggle
  const hamburger = $('#hamburger');
  const mobileMenu = $('#mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
      mobileMenu.setAttribute('aria-hidden', !open);
    });
    // Close on link click
    $$('.mobile-link', mobileMenu).forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* ─────────────────────────────────────────
   Scroll-triggered fade-in animations
   ───────────────────────────────────────── */
function initFadeIns() {
  const els = $$('.fade-in');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '-60px 0px' });
  els.forEach(el => io.observe(el));
}

/* ─────────────────────────────────────────
   Footer year
   ───────────────────────────────────────── */
function initYear() {
  const el = $('#year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ─────────────────────────────────────────
   FAQ accordion
   ───────────────────────────────────────── */
function initFAQ() {
  const list = $('#faq-list');
  if (!list) return;

  list.innerHTML = ''; // Clear previous content

  FAQS.forEach((faq, i) => {
    const item = document.createElement('div');
    item.className = 'faq-item';
    item.innerHTML = `
      <button class="faq-btn" aria-expanded="false" aria-controls="faq-body-${i}" id="faq-btn-${i}" data-testid="faq-item-${i}">
        <span class="faq-q">${faq.q}</span>
        <span class="faq-icon" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </span>
      </button>
      <div class="faq-body" id="faq-body-${i}" role="region" aria-labelledby="faq-btn-${i}">
        <p class="faq-a">${faq.a}</p>
      </div>
    `;
    list.appendChild(item);

    const btn = item.querySelector('.faq-btn');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      $$('.faq-item').forEach(fi => {
        fi.classList.remove('open');
        fi.querySelector('.faq-btn').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ─────────────────────────────────────────
   Home — Featured Products grid
   ───────────────────────────────────────── */
function initHomeProducts() {
  const grid = $('.product-grid');
  if (!grid) return;

  grid.innerHTML = ''; // Clear previous contents

  const featured = PRODUCTS.filter(p => p.featured).slice(0, 6);

  if (!featured.length) {
    for (let i = 0; i < 3; i++) {
      grid.innerHTML += `
        <div class="product-card">
          <div class="product-img-wrap skeleton"></div>
          <div class="product-info" style="display:block;padding:1.25rem 1.5rem">
            <div class="skeleton" style="height:10px;width:33%;margin-bottom:8px"></div>
            <div class="skeleton" style="height:14px;width:60%"></div>
          </div>
        </div>`;
    }
    return;
  }

  featured.forEach((product, i) => {
    const card = document.createElement('a');
    card.href = `product-detail.html?id=${product.id}`;
    card.className = 'product-card fade-in';
    card.style.setProperty('--delay', `${i * 0.08}s`);
    card.setAttribute('data-testid', `product-card-${product.id}`);

    const imgHTML = product.images[0]
      ? `<img src="${product.images[0]}" alt="${product.name}" loading="lazy" />`
      : `<div class="no-img-placeholder">No image</div>`;

    const priceHTML = product.price != null
      ? `<span class="product-price">${fmt(product.price)}</span>`
      : `<span class="product-price-label">${product.priceLabel || 'On request'}</span>`;

    card.innerHTML = `
      <div class="product-img-wrap">
        ${imgHTML}
        <div class="product-img-overlay"></div>
      </div>
      <div class="product-info">
        <div>
          ${product.category ? `<p class="product-category">${product.category}</p>` : ''}
          <h3 class="product-name">${product.name}</h3>
        </div>
        ${priceHTML}
      </div>`;
    grid.appendChild(card);
  });

  initFadeIns();
}

/* ─────────────────────────────────────────
   Products page — full catalogue
   ───────────────────────────────────────── */
function initProductsPage() {
  const grid = $('#products-grid');
  const filtersEl = $('#filters');
  const searchInput = $('#search-input');
  if (!grid) return;

  let activeCategory = 'All';
  let searchQuery = '';

  // Build filter buttons
  if (filtersEl) {
    filtersEl.innerHTML = ''; // Clear old filters
    CATEGORIES.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn' + (cat === 'All' ? ' active' : '');
      btn.textContent = cat;
      btn.addEventListener('click', () => {
        activeCategory = cat;
        $$('.filter-btn', filtersEl).forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderCatalogue();
      });
      filtersEl.appendChild(btn);
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      searchQuery = searchInput.value.toLowerCase().trim();
      renderCatalogue();
    });
  }

  function renderCatalogue() {
    grid.innerHTML = '';
    const filtered = PRODUCTS.filter(p => {
      const catMatch = activeCategory === 'All' || p.category === activeCategory;
      const searchMatch = !searchQuery
        || p.name.toLowerCase().includes(searchQuery)
        || p.category.toLowerCase().includes(searchQuery)
        || (p.description && p.description.toLowerCase().includes(searchQuery));
      return catMatch && searchMatch;
    });

    if (!filtered.length) {
      grid.innerHTML = `<div class="no-results">No products found. Try a different search or category.</div>`;
      return;
    }

    filtered.forEach((product, i) => {
      const card = document.createElement('a');
      card.href = `product-detail.html?id=${product.id}`;
      card.className = 'product-card fade-in';
      card.style.setProperty('--delay', `${(i % 3) * 0.08}s`);

      const imgHTML = product.images[0]
        ? `<img src="${product.images[0]}" alt="${product.name}" loading="lazy" />`
        : `<div class="no-img-placeholder">No image</div>`;

      const priceHTML = product.price != null
        ? `<span class="product-price">${fmt(product.price)}</span>`
        : `<span class="product-price-label">${product.priceLabel || 'On request'}</span>`;

      card.innerHTML = `
        <div class="product-img-wrap">
          ${imgHTML}
          <div class="product-img-overlay"></div>
        </div>
        <div class="product-info">
          <div>
            ${product.category ? `<p class="product-category">${product.category}</p>` : ''}
            <h3 class="product-name">${product.name}</h3>
          </div>
          ${priceHTML}
        </div>`;
      grid.appendChild(card);
    });

    initFadeIns();
  }

  renderCatalogue();
}

/* ─────────────────────────────────────────
   Product detail page
   ───────────────────────────────────────── */
function initDetailPage() {
  const wrap = $('#detail-wrap');
  if (!wrap) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    wrap.innerHTML = `
      <div class="container" style="padding-top:8rem;padding-bottom:4rem;text-align:center;">
        <p style="color:var(--muted-fg);font-size:.875rem;">Product not found.</p>
        <a href="products.html" class="btn btn-outline" style="margin-top:1.5rem;display:inline-flex;">← Back to Products</a>
      </div>`;
    return;
  }

  // Update page title
  document.title = `${product.name} — AF Steel Furniture`;

  let activeImg = 0;

  function buildDetail() {
    const thumbsHTML = product.images.map((src, i) => `
      <div class="gallery-thumb ${i === 0 ? 'active' : ''}" data-idx="${i}" role="button" tabindex="0" aria-label="View image ${i + 1}">
        <img src="${src}" alt="${product.name} image ${i + 1}" loading="lazy" />
      </div>`).join('');

    const specsHTML = [
      product.dimensions && { label: 'Dimensions', val: product.dimensions },
      product.material   && { label: 'Material',   val: product.material },
      product.finish     && { label: 'Finish',      val: product.finish },
      product.weight     && { label: 'Weight',      val: product.weight },
    ].filter(Boolean).map(s => `
      <div class="spec-item">
        <p class="spec-label">${s.label}</p>
        <p class="spec-val">${s.val}</p>
      </div>`).join('');

    const priceHTML = product.price != null
      ? `<p class="detail-price">${fmt(product.price)}</p>`
      : `<p class="detail-price-label">${product.priceLabel || 'Contact for pricing'}</p>`;

    const waMsg = encodeURIComponent(`Hi! I'm interested in the ${product.name}${product.dimensions ? ' (' + product.dimensions + ')' : ''}. Could you give me more details?`);

    wrap.innerHTML = `
      <div class="container">
        <a href="products.html" class="back-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 5 5 12 12 19"/></svg>
          All Products
        </a>
        <div class="detail-grid">
          <!-- Gallery -->
          <div>
            <div class="gallery-main" id="gallery-main" role="button" aria-label="Enlarge image">
              <img src="${product.images[0]}" alt="${product.name}" id="gallery-main-img" />
            </div>
            ${product.images.length > 1 ? `<div class="gallery-thumbs" id="gallery-thumbs">${thumbsHTML}</div>` : ''}
          </div>

          <!-- Info -->
          <div class="detail-info fade-in">
            ${product.category ? `<p class="eyebrow detail-category">${product.category}</p>` : ''}
            <h1 class="detail-name">${product.name}</h1>
            ${priceHTML}
            ${product.customizable ? `<div class="customizable-badge">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
              Custom sizing available
            </div>` : ''}
            <p class="detail-desc">${product.description}</p>
            ${specsHTML ? `<div class="specs-grid">${specsHTML}</div>` : ''}
            <div class="detail-actions">
              <a href="https://wa.me/27123456789?text=${waMsg}" target="_blank" rel="noopener noreferrer" class="btn btn-order" id="order-whatsapp">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Order on WhatsApp
              </a>
              <a href="https://wa.me/27123456789" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Get a Quote</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox -->
      <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image lightbox">
        <button class="lightbox-close" id="lightbox-close" aria-label="Close lightbox">&times;</button>
        <img class="lightbox-img" id="lightbox-img" src="" alt="${product.name}" />
      </div>`;

    // Gallery interaction
    const mainImg = $('#gallery-main-img');
    const lightbox = $('#lightbox');
    const lightboxImg = $('#lightbox-img');

    function setActiveImg(idx) {
      activeImg = idx;
      if (mainImg) mainImg.src = product.images[idx];
      $$('.gallery-thumb').forEach((t, i) => t.classList.toggle('active', i === idx));
      if (lightboxImg) lightboxImg.src = product.images[idx];
    }

    $$('.gallery-thumb').forEach(thumb => {
      const handler = () => setActiveImg(parseInt(thumb.dataset.idx, 10));
      thumb.addEventListener('click', handler);
      thumb.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') handler(); });
    });

    // Lightbox open
    const galleryMain = $('#gallery-main');
    if (galleryMain && lightbox) {
      galleryMain.addEventListener('click', () => {
        lightboxImg.src = product.images[activeImg];
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    }
    // Lightbox close
    const closeBtn = $('#lightbox-close');
    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (lightbox) {
      lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
    }

    initFadeIns();
  }

  buildDetail();
}

/* ─────────────────────────────────────────
   Boot
   ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initFadeIns();
  initYear();
  initFAQ();
  initHomeProducts();
  initProductsPage();
  initDetailPage();
});
