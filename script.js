// Global floating elements
document.addEventListener('DOMContentLoaded', function() {
    createFloatingElements();
    
    // Page-specific initializations
    if (document.querySelector('.proposal-page')) {
        initProposalPage();
    }
    
    if (document.querySelector('.memories-page')) {
        initMemoriesPage();
    }
});

// Create floating hearts and kisses
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    if (!container) return;
    
    const elements = ['💕', '💗', '💖', '💝', '💋'];
    const numElements = 15;
    
    for (let i = 0; i < numElements; i++) {
        setTimeout(() => {
            createFloatingElement(container, elements);
        }, i * 2000);
    }
    
    // Continue creating elements
    setInterval(() => {
        createFloatingElement(container, elements);
    }, 3000);
}

function createFloatingElement(container, elements) {
    const element = document.createElement('div');
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    const isHeart = randomElement !== '💋';
    
    element.className = isHeart ? 'floating-heart' : 'floating-kiss';
    element.textContent = randomElement;
    element.style.left = Math.random() * 100 + '%';
    element.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
    element.style.animationDuration = (Math.random() * 5 + 8) + 's';
    element.style.animationDelay = Math.random() * 2 + 's';
    
    container.appendChild(element);
    
    setTimeout(() => {
        element.remove();
    }, 15000);
}

// Proposal page logic
function initProposalPage() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const successMessage = document.getElementById('successMessage');
    let noClickCount = 0;
    
    noBtn.addEventListener('click', function() {
        noClickCount++;
        
        // Grow yes button
        yesBtn.classList.add('grow');
        setTimeout(() => yesBtn.classList.remove('grow'), 300);
        
        // Move no button randomly
        const maxMove = 100;
        const randomX = (Math.random() - 0.5) * maxMove;
        const randomY = (Math.random() - 0.5) * maxMove;
        
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        
        // After 4 clicks, hide no button and make yes button final size
        if (noClickCount >= 4) {
            noBtn.classList.add('hidden');
            yesBtn.classList.add('final-size');
        }
    });
    
    yesBtn.addEventListener('click', function() {
        // Create confetti hearts
        createConfetti();
        
        // Hide buttons
        noBtn.style.display = 'none';
        yesBtn.style.display = 'none';
        
        // Show success message
        successMessage.classList.remove('hidden');
        setTimeout(() => {
            successMessage.classList.add('show');
        }, 100);
    });
}

function createConfetti() {
    const hearts = ['💕', '💗', '💖', '💝', '❤️'];
    const numConfetti = 30;
    
    for (let i = 0; i < numConfetti; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'confetti-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '50%';
            heart.style.animationDelay = Math.random() * 0.3 + 's';
            heart.style.animationDuration = (Math.random() * 1 + 2) + 's';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 50);
    }
}

// Memories page scroll animation
function initMemoriesPage() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}
