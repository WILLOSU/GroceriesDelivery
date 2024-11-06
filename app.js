document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const headerActions = document.querySelector('.header-actions');

    function toggleMenu() {
        mainNav.classList.toggle('active');
        headerActions.classList.toggle('active');
    }

    menuToggle.addEventListener('click', toggleMenu);

    // Fechar o menu ao clicar em um item
    const menuItems = document.querySelectorAll('.main-nav a, .header-actions a, .header-actions button');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 1024) {
                toggleMenu();
            }
        });
    });
});