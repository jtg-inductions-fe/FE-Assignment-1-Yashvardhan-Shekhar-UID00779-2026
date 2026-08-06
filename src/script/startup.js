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
    const div = document.querySelector('.sidebar');

    let str = ` <div class="sidebar__link-container"> 
                    <button type="button" class="sidebar__close-btn" aria-label="Close sidebar"> 
                        <svg class="sidebar__close-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/></svg> 
                    </button> `;

    links.forEach((l) => {
        str += `<a class="sidebar__link text-nav-link" href="${l.path}">${l.name}</a>`;
    });

    str += ` </div>
            <div class="link__bottom">
                <button class="links__button button button--primary" type="button">Log in</button>
                <button class="links__button button button--secondary" type="button">Sign up</button>
            </div>
            `;
    div.innerHTML = str;
}

// inserting travel point card stats
function insertStats() {
    const travelPoint = document.querySelector('.cards-container');
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
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="rgb(255, 212, 59)" d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z"/></svg>`.repeat(
                Math.min(5, data.rating),
            ) +
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="rgb(255, 212, 59)" d="M320.1 32C329.1 32 337.4 37.1 341.5 45.1L415 189.3L574.9 214.7C583.8 216.1 591.2 222.4 594 231C596.8 239.6 594.5 249 588.2 255.4L473.7 369.9L499 529.8C500.4 538.7 496.7 547.7 489.4 553C482.1 558.3 472.4 559.1 464.4 555L320.1 481.6L175.8 555C167.8 559.1 158.1 558.3 150.8 553C143.5 547.7 139.8 538.8 141.2 529.8L166.4 369.9L52 255.4C45.6 249 43.4 239.6 46.2 231C49 222.4 56.3 216.1 65.3 214.7L225.2 189.3L298.8 45.1C302.9 37.1 311.2 32 320.2 32zM320.1 108.8L262.3 222C258.8 228.8 252.3 233.6 244.7 234.8L119.2 254.8L209 344.7C214.4 350.1 216.9 357.8 215.7 365.4L195.9 490.9L309.2 433.3C316 429.8 324.1 429.8 331 433.3L444.3 490.9L424.5 365.4C423.3 357.8 425.8 350.1 431.2 344.7L521 254.8L395.5 234.8C387.9 233.6 381.4 228.8 377.9 222L320.1 108.8z"/></svg>`.repeat(
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
            str += ` <div class="footer__links__container" > <div class="links__heading"> <h6 class="text-subheading">${el} </h6> <button> <img src="assets/icons/arrow-circle.svg" alt="arrow-down" /> </button> </div> <div class="links__content links--hidden">`;
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
                str += ` <span> <a href="${footer[el][val]}" class="text-footer-link" > ${val} </a> </span>`;
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
