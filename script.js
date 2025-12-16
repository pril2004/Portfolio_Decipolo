// script.js
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Typed !== 'undefined') {
    new Typed('.multiple-text', {
      strings: ['Aspiring App Developer', 'Aspiring Web Developer', 'Aspiring UI/UX Designer'],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1200,
      loop: true
    });
  } else {
    console.error('Typed.js not found on DOMContentLoaded.');
  }
});