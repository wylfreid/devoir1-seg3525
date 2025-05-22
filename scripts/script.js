// Typed.js pour le titre du hero
/* if (document.getElementById('typed')) {
  new Typed('#typed', {
    strings: [
      'Développeur Full Stack',
      'Créateur d\'expériences web',
      'Passionné par l\'innovation',
      'Bienvenue sur mon portfolio !'
    ],
    typeSpeed: 55,
    backSpeed: 30,
    backDelay: 1200,
    loop: true
  });
} */

// VanillaTilt pour les cards et logos
VanillaTilt.init(document.querySelectorAll('.tilt-3d'), {
  max: 12,
  speed: 400,
  glare: true,
  'max-glare': 0.18
});

// GSAP pour les animations d'apparition
function animateSections() {
  const sections = document.querySelectorAll('.wow-section-fade');
  const reveal = () => {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        sec.classList.add('wow-visible');
        // Animation enfants : timeline, barres, projets
        sec.querySelectorAll('.wow-timeline-item, .wow-bar, .wow-project-card').forEach(el => {
          el.classList.add('wow-visible');
        });
      }
    });
  };
  window.addEventListener('scroll', reveal);
  reveal();
}
animateSections();

// Dark/Light mode
const modeSwitch = document.getElementById('modeSwitch');
if (modeSwitch) {
  modeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('wow-light');
    document.body.classList.toggle('wow-dark');
    const isLight = document.body.classList.contains('wow-light');
    modeSwitch.innerHTML = isLight
      ? '<i class="bi bi-brightness-high"></i>'
      : '<i class="bi bi-moon-stars-fill"></i>';
    modeSwitch.setAttribute('aria-pressed', isLight ? 'true' : 'false');
  });
}

// Ripple sur les boutons
const rippleBtns = document.querySelectorAll('.ripple');
rippleBtns.forEach(btn => {
  btn.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    circle.className = 'ripple-effect';
    circle.style.left = `${e.offsetX}px`;
    circle.style.top = `${e.offsetY}px`;
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});

// Bootstrap tooltips (après DOMContentLoaded)
document.addEventListener('DOMContentLoaded', function() {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

// Confirmation animée du formulaire de contact
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const success = document.getElementById('contactSuccess');
    if (success) {
      success.classList.remove('d-none');
      setTimeout(() => success.classList.add('d-none'), 3000);
    }
    contactForm.reset();
  });
}



// Animation barres compétences
window.addEventListener('scroll', () => {
  document.querySelectorAll('.wow-bar-inner').forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if(rect.top < window.innerHeight && !bar.classList.contains('animated')) {
      bar.classList.add('animated');
      bar.style.width = bar.getAttribute('data-width');
    }
  });
});

// Correction : lancer l'animation des barres au chargement
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.wow-bar-inner').forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if(rect.top < window.innerHeight && !bar.classList.contains('animated')) {
      bar.classList.add('animated');
      bar.style.width = bar.getAttribute('data-width');
    }
  });
});

// tsParticles effet de particules dans le hero
if (window.tsParticles) {
  tsParticles.load("tsparticles", {
    fullScreen: { enable: false },
    background: { color: "none" },
    particles: {
      number: { value: 60, density: { enable: true, area: 800 } },
      color: { value: ["#fff", "#4f8cff"] },
      shape: { type: "circle" },
      opacity: { value: 0.18, random: true },
      size: { value: 3, random: { enable: true, minimumValue: 1 } },
      move: { enable: true, speed: 0.7, direction: "none", random: false, straight: false, outModes: { default: "out" } },
      links: { enable: true, distance: 120, color: "#4f8cff", opacity: 0.12, width: 1 }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 80, duration: 0.4 },
        push: { quantity: 4 }
      }
    },
    detectRetina: true
  });
} 