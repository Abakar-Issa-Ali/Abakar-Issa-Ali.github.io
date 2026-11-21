/**
 * Comportements de la page. Les données (liens, projets) sont dans js/data.js.
 */

/* ---------- Menu mobile ---------- */
function initMobileMenu() {
  const burger = document.querySelector('.burger');
  const menu = document.getElementById('nav-menu');

  const setOpen = (open) => {
    burger.classList.toggle('is-open', open);
    menu.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  };

  burger.addEventListener('click', () => setOpen(!menu.classList.contains('is-open')));
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.navbar')) setOpen(false);
  });
}

/* ---------- Lien de navigation actif selon la section visible ---------- */
function initActiveLink() {
  const links = document.querySelectorAll('.nav__link');

  const observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) => {
          links.forEach((link) => {
            link.classList.toggle('is-active', link.hash === `#${entry.target.id}`);
          });
        });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );

  document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
}

/* ---------- Apparition des éléments au défilement ---------- */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) => {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

/* ---------- Liens de contact (email, LinkedIn, CV…) ---------- */
function initSiteLinks() {
  const hrefs = {
    github: SITE.github,
    linkedin: SITE.linkedin,
    cv: SITE.cv,
    email: SITE.email && `mailto:${SITE.email}`,
  };

  // Chaque élément porte data-link="github|linkedin|email|cv".
  // Sans valeur dans SITE, l'élément est retiré de la page.
  document.querySelectorAll('[data-link]').forEach((el) => {
    const href = hrefs[el.dataset.link];
    if (!href) {
      el.remove();
      return;
    }
    el.href = href;
  });

  document.querySelectorAll('[data-text="email"]').forEach((el) => {
    el.textContent = SITE.email;
  });
}

/* ---------- Cartes projets générées depuis PROJECTS ---------- */
function createElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}

function createLinkButton(href, label) {
  const link = createElement('a', 'btn btn--outline', label);
  link.href = href;
  link.target = '_blank';
  link.rel = 'noopener';
  return link;
}

function createProjectCard(project) {
  const card = createElement('article', 'card project-card reveal');

  const figure = createElement('div', 'project-card__image');
  const img = document.createElement('img');
  img.src = project.image;
  img.alt = `Capture du projet ${project.title}`;
  img.loading = 'lazy';
  img.width = 1200;
  img.height = 750;
  figure.append(img);

  const stack = createElement('ul', 'tags');
  project.stack.forEach((tech) => stack.append(createElement('li', 'tag', tech)));

  card.append(
    figure,
    createElement('span', 'project-card__tag', project.tag),
    createElement('h3', 'project-card__title', project.title),
    createElement('p', 'project-card__text', project.description),
    stack
  );

  if (project.demo || project.code) {
    const actions = createElement('div', 'btn-group project-card__actions');
    if (project.demo) actions.append(createLinkButton(project.demo, 'Démo'));
    if (project.code) actions.append(createLinkButton(project.code, 'Code GitHub'));
    card.append(actions);
  }

  return card;
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.append(...PROJECTS.map(createProjectCard));
}

/* ---------- Démarrage ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initSiteLinks();
  initMobileMenu();
  initActiveLink();
  initReveal();
  document.getElementById('year').textContent = new Date().getFullYear();
});
