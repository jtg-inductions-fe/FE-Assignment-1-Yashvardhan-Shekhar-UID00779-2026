let links = [
    {
        name: 'home',
        path: '/home',
    },
    {
        name: 'Discover',
        path: '/Discover',
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

function insert() {
    let str = '';
    let div = document.querySelector('.header_links');
    links.forEach((l) => {
        str += `<a class="header_links_link" href="${l.path}">${l.name}</a>`;
    });
    str += `
            <button
                class="header_buttons_button links_button header_buttons_signup"
                type="button"
            >
                Login
            </button>
            <button
                class="header_buttons_button links_button header_buttons_login"
                type="button"
            >
                Signup
            </button>
            <button class="header_links_close">x</button>
            `;
    div.innerHTML = str;
}

insert();
