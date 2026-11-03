/* L&A Construction — easy-to-edit site settings.
   Add actual business contact details before publishing. Never use a fake address. */
const LA_SITE = {
  businessEmail: '',  // e.g. 'hello@your-real-domain.com'
  businessPhone: '',  // e.g. '(000) 000-0000'
  serviceArea: ''      // e.g. 'City and surrounding areas'
};

const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.getElementById('primary-nav');
if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') !== 'true';
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    primaryNav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  });
  primaryNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation');
    primaryNav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  }));
}

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

const filterButtons = document.querySelectorAll('.filter-button');
if (filterButtons.length) {
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(b => {
      const selected = b === button;
      b.classList.toggle('selected', selected);
      b.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('.gallery-card').forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  }));
}

const displayEmail = document.getElementById('display-email');
const displayPhone = document.getElementById('display-phone');
const displayLocation = document.getElementById('display-location');
if (displayEmail && LA_SITE.businessEmail) {
  const a = document.createElement('a');
  a.href = `mailto:${LA_SITE.businessEmail}`;
  a.textContent = LA_SITE.businessEmail;
  displayEmail.replaceChildren(a);
}
if (displayPhone && LA_SITE.businessPhone) displayPhone.textContent = LA_SITE.businessPhone;
if (displayLocation && LA_SITE.serviceArea) displayLocation.textContent = LA_SITE.serviceArea;

const form = document.getElementById('inquiry-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const feedback = document.getElementById('form-feedback');
    if (!form.reportValidity()) return;
    if (!LA_SITE.businessEmail) {
      feedback.textContent = 'This is a website preview. Add the real L&A business email in script.js to activate inquiries before publishing.';
      return;
    }
    const data = new FormData(form);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const interest = String(data.get('interest') || '');
    const message = String(data.get('message') || '');
    const subject = `L&A Construction inquiry: ${interest}`;
    const body = `Name: ${name}\nEmail: ${email}\nProject: ${interest}\n\n${message}`;
    const mailto = `mailto:${LA_SITE.businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    feedback.textContent = 'Opening your email application. Review the message and press Send there; the website itself does not send emails.';
    window.location.href = mailto;
  });
}
