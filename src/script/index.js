import {
    insertNavLinks,
    insertStats,
    insertTestimonialData,
    insertFooter,
} from './utils/startup';

// functionality of hamburger
const toggleHamburger = () => {
    const headerLinks = document.querySelector('.sidebar');
    headerLinks.classList.toggle('sidebar--none');

    const headerBurger = document.querySelector('.hamburger');
    headerBurger.classList.toggle('hamburger--none');
};

const hamburgerBtn = document.querySelector('.hamburger');

hamburgerBtn.addEventListener('click', () => {
    toggleHamburger();
    document.querySelector('.sidebar__close-btn').focus();
});

document.addEventListener('click', (e) => {
    if (e.target.matches('.sidebar__close-btn')) {
        toggleHamburger();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (
            !document
                .querySelector('.sidebar')
                .classList.contains('sidebar--none')
        )
            toggleHamburger();

        if (
            !document
                .querySelector('.modal-overlay')
                .classList.contains('hidden')
        )
            document.querySelector('.modal-card__close').click();
    }
});

const footerLinks = document.querySelectorAll('.footer__links__container');
footerLinks.forEach((link) => {
    link.addEventListener('click', () => {
        const icon = link.children[0].children[1].children[0];
        const content = link.children[1];
        icon.style.transform = content.classList.contains('links--hidden')
            ? 'rotate(180deg)'
            : 'rotate(0deg)';
        content.classList.toggle('links--hidden');
    });
});

insertNavLinks();
insertStats();
insertTestimonialData();
insertFooter();
