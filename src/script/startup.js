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
        path: '/specialdeals',
    },
    {
        name: 'Contact',
        path: '/contact',
    },
];

// insert links into HTML
function insert() {
    let str =
        ' <div class="top"> <button class="header__close-btn">&#10006;</button> ';
    let div = document.querySelector('.header__links');
    links.forEach((l) => {
        str += `<a class="header__link" href="${l.path}">${l.name}</a>`;
    });
    str += ` </div>
            <div class="bottom">
            <a class="header__link header__link--button links__button login-btn" href="Login"">Log in</a>
            <a class="header__link header__link--button links__button" href="signup"">Sign up</a>
            </div>
            `;
    div.innerHTML = str;
}

insert();
