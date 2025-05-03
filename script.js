document.getElementById('menu-btn').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.style.transform = 'translateX(0)';  // Opens the menu
    document.getElementById('menu-overlay').classList.remove('hidden');
});

document.getElementById('close-menu').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.style.transform = 'translateX(-157%)';  // Closes the menu
    document.getElementById('menu-overlay').classList.add('hidden');
});