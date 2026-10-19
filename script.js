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
