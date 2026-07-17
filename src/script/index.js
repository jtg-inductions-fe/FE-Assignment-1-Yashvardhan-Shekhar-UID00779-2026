// functionality of hamburger
let toggleHamburger = () => {
    let headerLinks = document.querySelector('.header_links');
    headerLinks.classList.toggle('header_links--none');

    let headerBurger = document.querySelector('.header_burger');
    headerBurger.classList.toggle('header_burger--none');
};

let closeBtn = document.querySelector('.header_links_close');
closeBtn.addEventListener('click', toggleHamburger);

let hamburgerBtn = document.querySelector('.header_burger');
hamburgerBtn.addEventListener('click', toggleHamburger);
