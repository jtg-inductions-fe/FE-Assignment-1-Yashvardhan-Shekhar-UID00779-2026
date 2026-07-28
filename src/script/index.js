// functionality of hamburger
let toggleHamburger = () => {
    let headerLinks = document.querySelector('.header__links');
    headerLinks.classList.toggle('header__links--none');

    let headerBurger = document.querySelector('.header__burger');
    headerBurger.classList.toggle('header__burger--none');
};

let closeBtn = document.querySelector('.header__links');
let hamburgerBtn = document.querySelector('.header__burger');

hamburgerBtn.addEventListener('click', toggleHamburger);

closeBtn.addEventListener('click', (e) => {
    // button or icon
    if (e.target.matches('.header__close-btn') || e.target.matches('path')) {
        toggleHamburger();
    }
});
