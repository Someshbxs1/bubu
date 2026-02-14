document.addEventListener('DOMContentLoaded', function() {

    createFloatingElements();

    if (document.querySelector('.proposal-page')) {
        initProposalPage();
    }

});

/* Floating Hearts */
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    if (!container) return;

    const elements = ['💕','💗','💖','💝','💋'];

    setInterval(() => {
        const el = document.createElement('div');
        el.textContent = elements[Math.floor(Math.random() * elements.length)];
        el.style.position = 'absolute';
        el.style.left = Math.random() * 100 + '%';
        el.style.top = '-50px';
        el.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        el.style.opacity = 0.4;
        el.style.transition = 'transform 10s linear';

        container.appendChild(el);

        setTimeout(() => {
            el.style.transform = 'translateY(110vh) rotate(360deg)';
        }, 50);

        setTimeout(() => el.remove(), 10000);

    }, 2000);
}

/* Proposal Page */
function initProposalPage() {

    const yesBtn = document.getElementById('yesBtn');
    const overlay = document.getElementById('successOverlay');

    yesBtn.addEventListener('click', function() {

        // Blur background
        document.body.classList.add('blur');

        // Show overlay
        overlay.classList.add('active');

        // Redirect after 3.5 seconds
        setTimeout(() => {
            window.location.href = "gallery.html";
        }, 3500);

    });
}
