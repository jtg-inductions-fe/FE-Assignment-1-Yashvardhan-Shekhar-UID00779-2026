let links = [
    {
        name: 'Home',
        path: '/home',
    },
    {
        name: 'Discover',
        path: '/discover',
    },
    {
        name: 'Special Deals',
        path: '/specialDeals',
    },
    {
        name: 'Contact',
        path: '/contact',
    },
];

<<<<<<< HEAD
// insert nav links into HTML page dynamically
=======
let stats = [
    {
        data: '500+',
        name: 'Holiday Packages',
    },
    {
        data: 100,
        name: 'Luxury Hotels',
    },
    {
        data: 7,
        name: 'Premium Airlines',
    },
    {
        data: '2k+',
        name: 'Happy Customer',
    },
];

// insert links into HTML
>>>>>>> c188f8e ([YS_A1_03]: Made travel point dynamic)
function insert() {
    let str =
<<<<<<< HEAD
        ' <div class="header__link__top"> <button type="button" class="header__close-btn"> <svg class="header__close-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/></svg> </button> ';
=======
        ' <div class="header__link__top"> <button type="button" class="header__close-btn"> <svg class="header__close-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/></svg> </button> ';
>>>>>>> c739d77 ([YS_A1_03]: Fixed PR review of travel point section)
    let div = document.querySelector('.header__links');
    links.forEach((l) => {
        str += `<a class="header__link text-nav-link" href="${l.path}">${l.name}</a>`;
    });
    str += ` </div>
            <div class="header__link__bottom">
            <button class="links__button button header__button--login" type="button">Log in</button>
            <button class="links__button button header__button--signup" type="button">Sign up</button>
            </div>
            `;
    div.innerHTML = str;

    // inserting hading and description
    let heading = document.querySelector('.heading');
    heading.innerHTML = `Travel <span>top destination</span> of the world`;
    let description = document.querySelector('.description');
    description.innerHTML = `We always make our customer happy by providing <br /> as many choices as possible`;

    let travelPoint = document.querySelector('.travel-point__right__cards');
    str = '';

    stats.forEach((s) => {
        str += `<div class="travel-point__right__cards__card">
                        <div class="travel-point__right__cards__card__data">
                            ${s.data}
                        </div>
                        <div class="travel-point__right__cards__card__text">
                             ${s.name}
                        </div>
                    </div>`;
    });
    travelPoint.innerHTML = str;
}
// insert data into the HTML page
insert();
