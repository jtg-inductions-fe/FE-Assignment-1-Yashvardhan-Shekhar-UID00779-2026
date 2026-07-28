// functionality of hamburger it toggles the visibility of nav links in mobile and tablet

let toggleHamburger = () => {
    let headerLinks = document.querySelector('.header__links');
    headerLinks.classList.toggle('header__links--none');

    let headerBurger = document.querySelector('.header__burger');
    headerBurger.classList.toggle('header__burger--none');
};

let hamburgerBtn = document.querySelector('.header__burger');

hamburgerBtn.addEventListener('click', () => {
    toggleHamburger();
    document.querySelector('.header__close-btn').focus();
});

<<<<<<< HEAD
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
=======
closeBtn.addEventListener('click', (e) => {
    // button or icon
    if (e.target.matches('.header__close-btn') || e.target.matches('path')) {
>>>>>>> c739d77 ([YS_A1_03]: Fixed PR review of travel point section)
        toggleHamburger();
    }
});
