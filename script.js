document.getElementById('menu-btn').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.style.transform = 'translateY(0)';  // Opens the menu from top
    document.getElementById('menu-overlay').classList.remove('hidden');
});

document.getElementById('close-menu').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.style.transform = 'translateY(-100%)';  // Closes the menu to top
    document.getElementById('menu-overlay').classList.add('hidden');
});