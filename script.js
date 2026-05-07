/* ====================================================
   CVC GROUP — site js
   ==================================================== */

(() => {
  'use strict';

  /* ---------- nav scroll state ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 32);

    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    document.getElementById('scrollBar').style.width = pct + '%';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });

  /* ---------- reveal-on-scroll ---------- */
  const revealEls = document.querySelectorAll('.rv');
  revealEls.forEach(el => {
    const d = el.getAttribute('data-rv-delay');
    if (d) el.style.setProperty('--rv-delay', d + 'ms');
  });

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);

          // trigger counters when their parent reveals
          const counter = entry.target.querySelector('.count');
          if (counter) animateCount(counter);
          // also handle when .rv IS the counter container
          if (entry.target.classList.contains('count')) animateCount(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-in'));
  }

  /* ---------- count-up ---------- */
  function animateCount(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = '1';
    const target = parseInt(el.dataset.target, 10) || 0;
    const dur = 1600;
    const start = performance.now();
    function tick(now) {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased);
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---------- custom cursor ---------- */
  const cursor = document.getElementById('cursor');
  const dot = document.getElementById('cursorDot');
  if (cursor && dot && window.matchMedia('(hover:hover)').matches && window.innerWidth >= 1024) {
    let mx = window.innerWidth/2, my = window.innerHeight/2;
    let cx = mx, cy = my;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    function loop() {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    }
    loop();
    const hoverables = 'a, button, .project, .sector-item, [data-cursor]';
    document.querySelectorAll(hoverables).forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
    });
  }

  /* ---------- smooth-scroll for nav anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const top = target.getBoundingClientRect().top + window.scrollY - 60;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

})();
