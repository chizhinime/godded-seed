// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        document.querySelector('.nav-links').classList.remove('active');
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 992 && 
        !e.target.closest('.nav-container') && 
        navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to elements as they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.hero-content, .about-content, .speaker-card, .register-content').forEach(el => {
        observer.observe(el);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const maxLength = 120; // characters before truncating
    const readMoreTexts = document.querySelectorAll(".readmore-text");

    readMoreTexts.forEach(textEl => {
        let fullText = textEl.innerHTML.trim();

        if (fullText.length > maxLength) {
            let shortText = fullText.substring(0, maxLength);
            let remainingText = fullText.substring(maxLength);

            textEl.innerHTML = `
                ${shortText}<span class="dots">...</span>
                <span class="more-text" style="display:none;">${remainingText}</span>
                <button class="read-more-btn">Read more</button>
            `;
        }
    });

    document.body.addEventListener("click", function(e) {
        if (e.target.classList.contains("read-more-btn")) {
            let btn = e.target;
            let dots = btn.parentElement.querySelector(".dots");
            let moreText = btn.parentElement.querySelector(".more-text");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                moreText.style.display = "none";
                btn.textContent = "Read more";
            } else {
                dots.style.display = "none";
                moreText.style.display = "inline";
                btn.textContent = "Read less";
            }
        }
    });
});
