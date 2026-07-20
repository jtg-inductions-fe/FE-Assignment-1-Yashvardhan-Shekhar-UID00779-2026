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
            <a
                class=" links_button header_links_link"
            >
                Login
            </a>
            <a
                class=" links_button header_links_link"
            >
                Signup
            </a>
            <button class="header_links_close">&#10005;</button>
            `;
    div.innerHTML = str;
}

insert();
