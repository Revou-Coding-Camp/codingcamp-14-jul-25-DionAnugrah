document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.nav-overlay');
const navItems = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', toggleMenu);
navOverlay.addEventListener('click', toggleMenu);

// Close menu when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', toggleMenu);
});
navOverlay.addEventListener('click', () => {
    toggleMenu();
});

// Animation keyframes
const style = document.createElement('style');
style.innerHTML = `
    @keyframes navItemFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// Tutup menu saat link diklik
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', toggleMenu);
});
// Fungsi toggle menu
function toggleMenu() {
    // Toggle menu
    navLinks.classList.toggle('active');
    navOverlay.classList.toggle('active');
    burger.classList.toggle('toggle');
    
    // Toggle body scroll
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    
    // Animate links
    if (navLinks.classList.contains('active')) {
        navItems.forEach((item, index) => {
            item.style.animation = `navItemFade 0.5s ease forwards ${index * 0.1 + 0.3}s`;
        });
    } else {
        navItems.forEach(item => {
            item.style.animation = '';
        });
    }
}
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
    
    // Sticky Header on Scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(26, 26, 46, 0.95)';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'rgba(26, 26, 46, 0.9)';
            header.style.boxShadow = 'none';
        }
    });
    
// Add animation to elements when they come into view
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.hero-content, .about-content, .projects-container, .contact-container, .project-card, .skill-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });
};

// Panggil fungsi saat load
window.addEventListener('DOMContentLoaded', animateOnScroll);    
    // Set initial state for animation
    document.querySelectorAll('.hero-content, .about-content, .projects-container, .contact-container').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});
