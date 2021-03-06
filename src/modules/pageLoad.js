import menuLoad from './menuLoad';

export default function() {
    const content = document.querySelector('#content');

    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = 'Ramen Ya';
    content.appendChild(header);

    const main = document.createElement('div');
    main.classList.add('main');

    const desc = document.createElement('div');
    desc.classList.add('desc-box');

    const p = document.createElement('p');
    p.textContent = "Ramen Ya is the world's best ramen shop. Serving all your ramen needs since 2011.";

    const img = document.createElement('img');
    img.src = '../ramen.jpg';

    const btn = document.createElement('button');
    btn.classList.add('to-menu-btn');
    btn.textContent = 'Menu ->';
    btn.addEventListener('click', () => {
        content.innerHTML = '';
        menuLoad();
    });

    desc.appendChild(p);
    desc.appendChild(img);
    desc.appendChild(btn);

    main.appendChild(desc);

    content.appendChild(main);
}