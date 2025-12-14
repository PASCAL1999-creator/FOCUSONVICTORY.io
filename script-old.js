// ==========================================
// VIKFIT - FOCUS ON VICTORY
// JavaScript Functionality
// ==========================================

// === MOBILE MENU TOGGLE ===
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = mobileMenuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(7px, 7px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// === SMOOTH SCROLLING ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// === NAVBAR SCROLL EFFECT ===
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.7)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    }
    
    lastScroll = currentScroll;
});

// === ACTIVE NAV LINK ON SCROLL ===
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// === SCROLL ANIMATIONS ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.service-card, .program-card, .testimonial-card, .credential-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// === CONTACT FORM HANDLING ===
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        program: document.getElementById('program').value,
        message: document.getElementById('message').value
    };
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
        showFormMessage('Vul alle verplichte velden in.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showFormMessage('Voer een geldig e-mailadres in.', 'error');
        return;
    }
    
    // Simulate form submission (replace with actual API call)
    try {
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Verzenden...';
        submitButton.disabled = true;
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Success
        showFormMessage('Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.', 'success');
        contactForm.reset();
        
        // Reset button
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
        
        // Log form data (for demonstration)
        console.log('Form submitted:', formData);
        
    } catch (error) {
        showFormMessage('Er is iets misgegaan. Probeer het later opnieuw.', 'error');
        
        // Reset button
        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.textContent = 'Verstuur Bericht';
        submitButton.disabled = false;
    }
});

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// === NUMBER COUNTER ANIMATION ===
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60 FPS
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Animate experience badge number when visible
const experienceBadge = document.querySelector('.badge-number');
if (experienceBadge) {
    const badgeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetNumber = parseInt(entry.target.textContent);
                animateCounter(entry.target, targetNumber);
                badgeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    badgeObserver.observe(experienceBadge);
}

// === PROGRAM CARDS HOVER EFFECT ===
const programCards = document.querySelectorAll('.program-card');
programCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        programCards.forEach(otherCard => {
            if (otherCard !== card && !otherCard.classList.contains('popular')) {
                otherCard.style.opacity = '0.7';
            }
        });
    });
    
    card.addEventListener('mouseleave', function() {
        programCards.forEach(otherCard => {
            otherCard.style.opacity = '1';
        });
    });
});

// === LAZY LOADING IMAGES ===
const images = document.querySelectorAll('img[src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';
            
            img.onload = () => {
                img.style.opacity = '1';
            };
            
            // If image is already loaded
            if (img.complete) {
                img.style.opacity = '1';
            }
            
            imageObserver.unobserve(img);
        }
    });
}, { threshold: 0.1 });

images.forEach(img => imageObserver.observe(img));

// === PARALLAX EFFECT ON HERO ===
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// === SERVICE CARDS STAGGER ANIMATION ===
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// === TESTIMONIAL CARD RATING ANIMATION ===
const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach(card => {
    const stars = card.querySelector('.stars');
    if (stars) {
        const starText = stars.textContent;
        stars.textContent = '';
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate stars appearing one by one
                    [...starText].forEach((star, i) => {
                        setTimeout(() => {
                            stars.textContent += star;
                        }, i * 100);
                    });
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        cardObserver.observe(card);
    }
});

// === THEME TOGGLE ===
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    root.classList.add('light-mode');
}

themeToggle.addEventListener('click', () => {
    root.classList.toggle('light-mode');
    
    // Save preference
    const theme = root.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    
    // Add animation effect
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg)';
    }, 400);
});

// === CONSOLE LOG (REMOVE IN PRODUCTION) ===
console.log('%c🔥 VIKFIT - Focus on Victory', 'font-size: 20px; font-weight: bold; color: #ff6b35;');
console.log('%cWebsite loaded successfully!', 'color: #10b981;');

// === PREVENT FORM RESUBMISSION ===
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// === KEYBOARD ACCESSIBILITY ===
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// === PAGE LOAD ANIMATION ===
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});