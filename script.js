        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Language Switcher
        const languageButtons = document.querySelectorAll('.language-switcher button');
        
        languageButtons.forEach(button => {
            button.addEventListener('click', () => {
                languageButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                // Here you would typically implement language switching logic
            });
        });
        
        // Cookie Banner
        const cookieBanner = document.querySelector('.cookie-banner');
        const acceptCookiesBtn = document.getElementById('accept-cookies');
        
        if (!localStorage.getItem('cookiesAccepted')) {
            setTimeout(() => {
                cookieBanner.classList.add('show');
            }, 2000);
        }
        
        acceptCookiesBtn.addEventListener('click', () => {
            cookieBanner.classList.remove('show');
            localStorage.setItem('cookiesAccepted', 'true');
        });
        
        // Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal');
        
        function checkReveal() {
            revealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('active');
                }
            });
        }
        
        window.addEventListener('scroll', checkReveal);
        window.addEventListener('load', checkReveal);
        
        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        });
        
        // Form Submission
        const contactForm = document.querySelector('.contact-form form');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            alert('Thank you for your message! We will contact you soon.');
            this.reset();
        });
