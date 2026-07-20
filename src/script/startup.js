const links = [
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

const stats = [
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

// insert nav links into HTML
function insertNavLinks() {
    const div = document.querySelector('.header__links');

    let str = ` <div class="header__link__top"> 
                    <button type="button" class="header__close-btn"> 
                        <svg class="header__close-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/></svg> 
                    </button> `;

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
    let heading = document.querySelector('.hero_left-section_heading');
    heading.innerHTML = `Travel <span>top destination</span> of the world`;
    let description = document.querySelector('.hero_left-section_description');
    description.innerHTML = `we always make our customer happy by providing <br /> as many choices as possible`;

    // inserting images
    let img = document.querySelector('.image-1');
    img.src = `assets/images/Rectangle 1.png`;
    img = document.querySelector('.image-2');
    img.src = `assets/images/Rectangle 2.png`;
    img = document.querySelector('.image-3');
    img.src = `assets/images/Rectangle 3.png`;
}

<<<<<<< HEAD
// inserting travel point card stats
function insertStats() {
    const travelPoint = document.querySelector('.travel-point__right__cards');
    let str = '';

    stats.forEach((s) => {
        str += `<div class="card">
                    <div class="card__data text-stat-number">
                    ${s.data}
                    </div>
                    <div class="card__text text-stat-label">
                    ${s.name}
                    </div>
                </div>`;
    });
    travelPoint.innerHTML = str;
}

insertNavLinks();
insertStats();
=======
// setTimeout(insert, 1000);
insert();
>>>>>>> 2b5dfbd ([YS_A1_02]: completed hero section with pixel perfect)
