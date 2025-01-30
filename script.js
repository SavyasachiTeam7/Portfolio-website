// Resume Download Functionality
document.getElementById("resumeDownloadBtn").addEventListener("click", function() {
    // Assuming the resume file is named 'Myresume.pdf' and placed in the root directory or accessible path
    const resumeURL = "Myresume.pdf";
    const link = document.createElement("a");
    link.href = resumeURL;
    link.download = "Myresume.pdf"; // Ensure the file name is set correctly
    link.click();
});

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60,  // Adjust for fixed navbar height
            behavior: "smooth"
        });
    });
});

// Scroll to Top Button (optional)
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerText = "↑";
scrollToTopBtn.classList.add("scroll-to-top-btn");
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Show/Hide Scroll to Top Button
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Animate Skills Progress Bars (optional, make it more interactive)
const skillBoxes = document.querySelectorAll('.skill-box');
window.addEventListener('scroll', () => {
    skillBoxes.forEach(skill => {
        const rect = skill.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            const progress = skill.querySelector('.progress-bar');
            if (progress && !progress.classList.contains('animated')) {
                progress.style.width = progress.getAttribute('data-progress') + '%';
                progress.classList.add('animated');
            }
        }
    });
});

// Optional: Add animations for when elements come into view (e.g., fade-in, slide-in, etc.)
const elementsToAnimate = document.querySelectorAll('.fade-in, .slide-in');
window.addEventListener('scroll', () => {
    elementsToAnimate.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('in-view');
        }
    });
});

// Contact Form Validation (Optional)
const contactForm = document.querySelector('.contact-section form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const name = contactForm.querySelector('input[name="name"]');
        const email = contactForm.querySelector('input[name="email"]');
        const message = contactForm.querySelector('textarea[name="message"]');

        if (!name.value || !email.value || !message.value) {
            e.preventDefault();
            alert("Please fill in all fields.");
        }
    });
}
