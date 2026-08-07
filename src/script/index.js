import {
    insertNavLinks,
    insertStats,
    insertTestimonialData,
    insertFooter,
} from './utils/startup';
import { createFocusTrap } from 'focus-trap';

insertNavLinks();
insertStats();
insertTestimonialData();
insertFooter();

// for focus trap for sidebar
const sidebarTrap = createFocusTrap('.sidebar');

// functionality of hamburger
const toggleHamburger = () => {
    const headerLinks = document.querySelector('.sidebar');
    headerLinks.classList.toggle('sidebar--none');

    if (headerLinks.classList.contains('sidebar--none')) {
        sidebarTrap.deactivate();
    } else {
        sidebarTrap.activate();
    }
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
