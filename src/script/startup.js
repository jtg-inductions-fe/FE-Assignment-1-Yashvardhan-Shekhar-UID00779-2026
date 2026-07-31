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

const testimonialsData = [
    {
        name: 'Paul Greyrat',
        image: 'assets/images/avatar.png',
        tag: 'Travel',
        comment: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.`,
        rating: 4,
    },
    {
        name: 'Zenith Marchrol',
        image: 'assets/images/avatar.png',
        tag: 'Travel',
        comment: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.`,
        rating: 2,
    },
    {
        name: 'Ojha Gehi',
        image: 'assets/images/avatar.png',
        tag: 'Enthusiast',
        comment: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.`,
        rating: 4,
    },
    {
        name: 'Amon Greyrat',
        image: 'assets/images/avatar.png',
        tag: 'Enthusiast',
        comment: `Contrary to popular belief, Lorem Ipsum is not simply random text.`,
        rating: 1,
    },
    {
        name: 'Earl Hall',
        image: 'assets/images/avatar.png',
        tag: 'Enthusiast',
        comment: `Contrary to popular belief, It has roots in a piece of classical Latin literature from 45 BC.`,
        rating: 5,
    },
];

const footer = {
    Company: {
        About: '/about',
        Career: '/career',
        Mobile: '/mobile',
    },
    'Contact Us': {
        'Why Trevlog': '/reason',
        'Partner with us': '/becomePartner',
        "FAQ's": '/faq',
        Blog: 'blog',
    },
    'Meet Us': {
        '+00 95322 67648': 'tel:+9532283732',
        'info@travlog.com': 'mailto:info@travlog.com',
        '205. R Street, New York BD893244':
            'https://www.google.com/maps/search/205.+R+Street,+New+York+BD893244',
    },
};

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
}

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

// inserting cards data into the carousel
function insertTestimonialData() {
    function insertOne(data) {
        const splideCards = document.querySelector('.splide__list');
        const card = document.createElement('li');

        splideCards.appendChild(card);

        let str = `<li class="splide__slide">
                        <img src="${data.image}" alt="avatar" />
                        <h5 class="name text-testimonial-name">
                            <span>${data.name}</span> / ${data.tag}
                        </h5>
                        <div class="rating text-rating-stars">`;

        str +=
            `<i class="fa-solid fa-star" style="color: rgb(255, 212, 59)" ></i>`.repeat(
                Math.min(5, data.rating),
            ) +
            `<i class="fa-solid fa-star" style="color: rgba(255, 200, 0, 0.209)" ></i>`.repeat(
                5 - Math.min(5, data.rating),
            );

        str += `</div>
                    <p class="text-body-carousel">
                        ${data.comment}
                    </p>
                </li>`;

        card.outerHTML = str;
    }

    testimonialsData.forEach((d) => insertOne(d));
}

// insert footer data links
function insertFooter() {
    let max = 0;
    let str = '';
    Object.keys(footer).forEach((el) => {
        if (Object.values(footer[el]).length > 0) {
            max = Math.max(Object.values(footer[el]).length, max);
            str += ` <div class="footer__links__container" > <div class="links__heading"> <h6 class="text-subheading">${el} </h6> <button> <img src="assets/icons/arrow-circle.svg" alt="arrow-down" /> </button> </div> <div class="links__content invisible">`;
            Object.keys(footer[el]).forEach((val) => {
                str += ` <a href="${footer[el][val]}" class="text-footer-link" > ${val} </a>`;
            });
            str += '</div> </div>';
        }
    });

    let ftr = document.querySelector('.footer__right--accordion');
    let column = 0;
    ftr.innerHTML = str;

    ftr = document.querySelector('.footer__right--grid');
    str = '';

    Object.keys(footer).forEach((el) => {
        if (Object.values(footer[el]).length > 0) {
            str += `<h6 class="text-subheading">${el}</h6>`;
            let total = 0;
            column++;
            Object.keys(footer[el]).forEach((val) => {
                str += ` <a href="${footer[el][val]}" class="text-footer-link" > ${val} </a>`;
                total++;
            });
            str += `<div></div>`.repeat(max - total);
        }
    });

    ftr.innerHTML = str;
    ftr.style.gridTemplateColumns = `repeat(${column},1fr)`;
    ftr.style.gridTemplateRows = `repeat(${max + 1},1fr)`;
}

insertNavLinks();
insertStats();
insertTestimonialData();
insertFooter();
