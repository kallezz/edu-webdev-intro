const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

menuToggle?.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Close menu when a link is clicked
mainNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
    });
});
