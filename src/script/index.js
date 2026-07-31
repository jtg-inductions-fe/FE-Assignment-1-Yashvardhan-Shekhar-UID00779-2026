// functionality of hamburger
const toggleHamburger = () => {
    const headerLinks = document.querySelector('.header__links');
    headerLinks.classList.toggle('header__links--none');

    const headerBurger = document.querySelector('.header__burger');
    headerBurger.classList.toggle('header__burger--none');
};

const hamburgerBtn = document.querySelector('.header__burger');

hamburgerBtn.addEventListener('click', () => {
    toggleHamburger();
    document.querySelector('.header__close-btn').focus();
});

document.addEventListener('click', (e) => {
    // button or icon
    if (e.target.matches('.header__close-btn') || e.target.matches('path')) {
        toggleHamburger();
    }
});

document.addEventListener('keydown', (e) => {
    if (
        e.key === 'Escape' &&
        !document
            .querySelector('.header__links')
            .classList.contains('header__links--none')
    ) {
        toggleHamburger();
    }
});

const footerLinks = document.querySelectorAll('.footer__links__container');
footerLinks.forEach((link) => {
    link.addEventListener('click', () => {
        const icon = link.children[0].children[1].children[0];
        const content = link.children[1];
        icon.style.transform = content.classList.contains('invisible')
            ? 'rotate(180deg)'
            : 'rotate(0deg)';
        content.classList.toggle('invisible');
    });
});
