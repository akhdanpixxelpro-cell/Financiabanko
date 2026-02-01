document.addEventListener('DOMContentLoaded', () => {
    console.log('Finance App Loaded');

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // If you want only one open at a time:
            faqItems.forEach(faq => {
                if (faq !== item) faq.classList.remove('active');
            });

            item.classList.toggle('active');
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Toggle icon between bars and times (close)
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.1)';
            navbar.style.padding = '15px 0';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '20px 0';
        }
    });
    // Dynamic TOC Logic
    const tocList = document.querySelector('.toc-list');
    const articleBody = document.querySelector('.article-body');
    const tocToggle = document.querySelector('.toc-toggle');

    if (tocList && articleBody) {
        // Clear existing static items if any (optional, but good for safety)
        tocList.innerHTML = '';

        const headers = articleBody.querySelectorAll('h2, h3');
        headers.forEach((header, index) => {
            // Generate ID if missing
            if (!header.id) {
                header.id = `section-${index}`;
            }

            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${header.id}`;
            a.textContent = header.textContent;

            // Indent H3
            if (header.tagName.toLowerCase() === 'h3') {
                li.style.marginLeft = '20px';
            }

            li.appendChild(a);
            tocList.appendChild(li);
        });

        // Toggle Functionality
        if (tocToggle) {
            tocToggle.addEventListener('click', () => {
                tocList.classList.toggle('active');
                const icon = tocToggle.querySelector('i');
                if (tocList.classList.contains('active')) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                } else {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            });
        }
    }

    // Scroll to Top & WhatsApp Logic
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Contact Form to WhatsApp
    const contactForm = document.getElementById('contactFormWA');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // WhatsApp Phone Number (International Format without +)
            const phoneNumber = '6281234567890'; // Replace with your actual number

            // Format the message
            const text = `Hello, Financia!%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

            // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

            // Redirect
            window.open(whatsappUrl, '_blank');
        });
    }

});
