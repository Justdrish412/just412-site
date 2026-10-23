document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobileLayout = window.matchMedia('(max-width: 760px)');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('span').textContent = '+';
  navigation.classList.remove('is-open');
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.querySelector('span').textContent = isOpen ? '−' : '+';
  navigation.classList.toggle('is-open', isOpen);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});

mobileLayout.addEventListener('change', () => closeMenu());

const heroVideo = document.querySelector('[data-hero-video]');
const videoToggle = document.querySelector('[data-video-toggle]');

if (heroVideo && videoToggle && heroVideo.dataset.videoSrc) {
  const hero = heroVideo.closest('.hero');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const bounds = hero.getBoundingClientRect();
  let inView = bounds.bottom > 0 && bounds.top < window.innerHeight;
  let wantsPlayback = !reducedMotion.matches && !navigator.connection?.saveData;
  let failed = false;

  heroVideo.muted = true;
  heroVideo.autoplay = false;
  hero.classList.add('has-video-source');
  videoToggle.hidden = false;

  function updateVideoToggle() {
    videoToggle.textContent = heroVideo.paused ? 'Play video' : 'Pause video';
  }

  function syncVideoPlayback() {
    if (failed) return;
    if (!wantsPlayback || !inView || document.hidden) {
      heroVideo.pause();
      return;
    }
    if (!heroVideo.getAttribute('src')) {
      heroVideo.src = heroVideo.dataset.videoSrc;
    }
    const playback = heroVideo.play();
    if (playback) playback.catch(updateVideoToggle);
  }

  heroVideo.addEventListener('playing', () => {
    heroVideo.classList.add('is-playing');
    updateVideoToggle();
  });
  heroVideo.addEventListener('pause', updateVideoToggle);
  heroVideo.addEventListener('error', () => {
    failed = true;
    heroVideo.classList.remove('is-playing');
    videoToggle.hidden = true;
    hero.classList.remove('has-video-source');
  });
  videoToggle.addEventListener('click', () => {
    wantsPlayback = heroVideo.paused;
    syncVideoPlayback();
  });
  reducedMotion.addEventListener('change', () => {
    wantsPlayback = false;
    heroVideo.pause();
    heroVideo.classList.remove('is-playing');
  });
  document.addEventListener('visibilitychange', syncVideoPlayback);
  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncVideoPlayback();
    }, { threshold: 0.05 });
    videoObserver.observe(hero);
  } else {
    syncVideoPlayback();
  }
}

const filterGroup = document.querySelector('.collection-filters');
if (filterGroup) {
  const filterButtons = Array.from(filterGroup.querySelectorAll('[data-filter]'));
  const productCards = Array.from(document.querySelectorAll('.product-card'));
  const filterStatus = document.querySelector('#filter-status');
  filterGroup.hidden = false;

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.dataset.filter;
      let visibleCount = 0;
      productCards.forEach((card) => {
        card.hidden = category !== 'all' && card.dataset.category !== category;
        if (!card.hidden) visibleCount += 1;
      });
      filterButtons.forEach((item) => {
        item.setAttribute('aria-pressed', String(item === button));
      });
      filterStatus.textContent = `${visibleCount} collection item${visibleCount === 1 ? '' : 's'} shown.`;
    });
  });
}

document.querySelector('#year').textContent = String(new Date().getFullYear());
