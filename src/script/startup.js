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
    str += '<button class="header_links_close">X</button>';
    div.innerHTML = str;
}

insert();
