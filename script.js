// Mobile Navbar Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

if (menuBtn && mobileMenu && closeMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.style.transform = 'translateX(0)';
    menuBtn.setAttribute('aria-expanded', 'true');
  });
  closeMenu.addEventListener('click', () => {
    mobileMenu.style.transform = 'translateX(100%)';
    menuBtn.setAttribute('aria-expanded', 'false');
  });
  // Close menu on link click
  document.querySelectorAll('.nav-link-mobile').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.style.transform = 'translateX(100%)';
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Contact Form Validation
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    // Name
    const name = form.name.value.trim();
    const nameError = document.getElementById('error-name');
    if (!name) {
      nameError.textContent = 'Name is required.';
      valid = false;
    } else {
      nameError.textContent = '';
    }

    // Email
    const email = form.email.value.trim();
    const emailError = document.getElementById('error-email');
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!email) {
      emailError.textContent = 'Email is required.';
      valid = false;
    } else if (!emailPattern.test(email)) {
      emailError.textContent = 'Enter a valid email address.';
      valid = false;
    } else {
      emailError.textContent = '';
    }

    // Subject
    const subject = form.subject.value.trim();
    const subjectError = document.getElementById('error-subject');
    if (!subject) {
      subjectError.textContent = 'Subject is required.';
      valid = false;
    } else {
      subjectError.textContent = '';
    }

    // Message
    const message = form.message.value.trim();
    const messageError = document.getElementById('error-message');
    if (!message) {
      messageError.textContent = 'Message is required.';
      valid = false;
    } else {
      messageError.textContent = '';
    }

    if (valid) {
      // Simulate form submission
      form.reset();
      alert('Thank you for contacting us! We will get back to you soon.');
    }
  });
}

// Scroll-triggered Animations
function animateOnScroll() {
  const animated = document.querySelectorAll('.animate-fade-in, .animate-fade-in-left, .animate-fade-in-right');
  const triggerBottom = window.innerHeight * 0.92;
  animated.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.style.opacity = 1;
      el.style.transform = 'none';
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);

// Lazy Loading Images (native for modern browsers)
document.querySelectorAll('img').forEach(img => {
  img.setAttribute('loading', 'lazy');
});

// Accessibility: Close mobile menu with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && mobileMenu && mobileMenu.style.transform === 'translateX(0)') {
    mobileMenu.style.transform = 'translateX(100%)';
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});

// Update the FOUC prevention code
document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('loaded');
  
  // Prevent page reload when clicking home on index.html
  document.querySelectorAll('a[href="index.html"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const currentPath = window.location.pathname;
      if (currentPath.endsWith('index.html') || currentPath.endsWith('/')) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
});