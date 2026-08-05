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
    // button or icon
    if (e.target.matches('.sidebar__close-btn') || e.target.matches('path')) {
        toggleHamburger();
    }
});

document.addEventListener('keydown', (e) => {
    if (
        e.key === 'Escape' &&
        !document.querySelector('.sidebar').classList.contains('sidebar--none')
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

// window.addEventListener('scroll', function () {
//     const totalHeight =
//         document.documentElement.scrollHeight - window.innerHeight;
//     const currentScroll = window.scrollY;
//     const scrollPercent = (currentScroll / totalHeight) * 100;

//     if (scrollPercent >= 10) {
//         document.querySelector('body > div > header').style.backgroundColor =
//             'white';
//     } else {
//         document.querySelector('body > div > header').style.backgroundColor =
//             'rgba(0, 0, 0, 0);';
//     }
// });
