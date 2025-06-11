export default function mobileMenu() {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', (event) => {
        event.preventDefault();

        const menuOptions = mobileMenu.getElementsByTagName('a')

        if (mobileMenu?.classList.contains('hidden')) {
            openMenu(mobileMenu);
            handleOptions(mobileMenu, menuOptions);

        } else {
            closeMenu(mobileMenu);
        }
    });
}

function openMenu(menu) {
    menu.classList.add('flex');
    menu.classList.remove('hidden');
}

function closeMenu(menu) {
    menu.classList.add('hidden');
    menu.classList.remove('flex');
}

function handleOptions(menu, options) {
    for (const option in options) {
        if (option === 'item') return;

        options[option].addEventListener('click', event => {
            closeMenu(menu);
        });
    }
}

mobileMenu();