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

// insert links into HTML
function insert() {
    let str = '';
    let div = document.querySelector('.header_links');
    links.forEach((l) => {
        str += `<a class="header_links_link" href="${l.path}">${l.name}</a>`;
    });
    str += `
            <a class="header_links_link header_links_link_button links_button" href="Login"">Log in</a>
            <a class="header_links_link header_links_link_button links_button" href="signup"">Sign up</a>
            <button class="header_links_close">&#10006;</button>
            `;
    div.innerHTML = str;
}

insert();
