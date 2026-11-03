/* L&A Construction contact — Lea Sanciuc is the point of contact.
   These details appear in her publicly listed real estate contact information. */
const LA_SITE = {
  businessEmail: 'leahsanciuc@yahoo.com',
  businessPhone: '(210) 294-3913',
  serviceArea: ''
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
if (displayPhone && LA_SITE.businessPhone) {
  const a = document.createElement('a');
  a.href = 'tel:' + LA_SITE.businessPhone.replace(/[^+\d]/g, '');
  a.textContent = LA_SITE.businessPhone;
  displayPhone.replaceChildren(a);
}
if (displayLocation && LA_SITE.serviceArea) displayLocation.textContent = LA_SITE.serviceArea;

const form = document.getElementById('inquiry-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const feedback = document.getElementById('form-feedback');
    if (!form.reportValidity()) return;
    if (!LA_SITE.businessEmail) {
      feedback.textContent = 'A contact email has not been configured. Please use the phone number listed above.';
      return;
    }
    const data = new FormData(form);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const interest = String(data.get('interest') || '');
    const message = String(data.get('message') || '');
    const subject = `L&A Construction property inquiry: ${interest}`;
    const body = `Name: ${name}\nEmail: ${email}\nInquiry type: ${interest}\n\n${message}`;
    const mailto = `mailto:${LA_SITE.businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    feedback.textContent = 'Opening your email application with a message addressed to Lea Sanciuc. Review the message and press Send in your email app.';
    window.location.href = mailto;
  });
}
