function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("active");
  }

    document.addEventListener("DOMContentLoaded", function () {
        const textElement = document.getElementById("typed-text");
        const words = ["Web Developer", "Mern Developer"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
    
        function typeEffect() {
            const currentWord = words[wordIndex];
    
            if (isDeleting) {
                charIndex--;
            } else {
                charIndex++;
            }
    
            textElement.textContent = currentWord.substring(0, charIndex);
    
            let typingSpeed = isDeleting ? 50 : 100;
    
            if (!isDeleting && charIndex === currentWord.length) {
                typingSpeed = 1000; 
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length; 
                typingSpeed = 500;
            }
    
            setTimeout(typeEffect, typingSpeed);
        }
    
        typeEffect();
    });

    window.addEventListener("load", function() {
        document.querySelector(".loader-container").style.display = "none"; // Hide loader
        document.querySelector(".main-con").style.display = "block"; // Show content
    });
    