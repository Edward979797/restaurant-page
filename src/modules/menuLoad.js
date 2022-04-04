import pageLoad from './pageLoad';

export default function() {
    const items = [
        {
            item: 'Miso Ramen',
            price: '12.95',
            desc: 'Our original miso ramen. Salty and slightly sweet.',
            spicy: false,
        },
        {
            item: 'Spicy Miso Ramen',
            price: '13.95',
            desc: 'Our traditional miso ramen with a spicy kick.',
            spicy: true,
        },
        {
            item: 'White Ramen',
            price: '13.50',
            desc: 'Cloudy and creamy, this white-style ramen is sure to delight you.',
            spicy: false,
        }

    ];


    const content = document.querySelector('#content');

    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = 'Ramen Ya';
    content.appendChild(header);

    const main = document.createElement('div');
    main.classList.add('main');

    const menu = document.createElement('div');
    menu.classList.add('menu');

    items.map(i => {
        const p = document.createElement('p');
        if (i.spicy) {
            p.innerHTML = `${i.item} <strong>$${i.price}</strong> <br/><em>${i.desc}</em> <br/>🔥<br/>`;
        } else {
            p.innerHTML = `${i.item} <strong>$${i.price}</strong> <br/><em>${i.desc}</em><br/>`;
        }

        menu.appendChild(p);
    })

    const btn = document.createElement('button');
    btn.classList.add('to-home-btn');
    btn.textContent = '<- Home';
    btn.addEventListener('click', () => {
        content.innerHTML = '';
        pageLoad();
    })

    menu.appendChild(btn);

    main.appendChild(menu);

    content.appendChild(main);
}