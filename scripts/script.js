



const books = [
    {
        id: 'book1',
        title: 'Гарри Поттер и Кубок Огня',
        description: 'Гарри Поттеру предстоит соревноваться в Турнире Трёх Волшебников',
        image: '../img/book1.webp',
        url:'https://drive.google.com/file/d/1n6_SE5Ivv0UQ6iLR8L4_-4mBtNUSg1Th/view?usp=drive_link',
    },
    {
        id: 'book2',
        title: 'Гарри Поттер и Философский Камень',
        description: 'Гарри Поттеру предстоит познакомиться с миром волшебства и столкнуться с темными силами.',
        image: '../img/book2.webp',
        url:'https://drive.google.com/file/d/1DXfsGTRQwNyXqRQ2Isao66Pdm4a8W2aL/view?usp=drive_link',
    },{
        id: 'book3',
        title: 'Гарри Поттер и Орден феникса',
        description: 'Гарри Поттеру предстоит сражаться с силами Темного Лорда и вступить в Орден Феникса.',
        image: '../img/book3.webp',
        url:'https://drive.google.com/file/d/1LLldAuz1TkiQ-ORHGzNKGrOmrh5sxNcy/view?usp=drive_link'
    },
    {
        id: 'book4',
        title: 'Гарри Поттер и Принц Полукровка',
        description: 'Гарри Поттеру предстоит сражаться с темными силами, вступить в борьбу с темным лордом Волан-де-Мортом.',
        image: '../img/book4.webp',
        url:'https://drive.google.com/file/d/1udNTUOOvpAxWgMR_XWRQnF4ThiBXEn_z/view?usp=drive_link'
    },
    {
        id: 'book5',
        title: 'Гарри Поттер и Дары Смерти',
        description: 'Гарри Поттеру и его друзьям предстоит сражаться против Волан-де-Морта и его смертельных приверженцев.',
        image: '../img/book5.webp',
        url:'https://drive.google.com/file/d/1aCrbJLEJaCjMts5wFDxSqALDIiemPFl2/view?usp=drive_link',
    },
    {
        id: 'book6',
        title: 'Гарри Поттер и узник Азбакана',
        description: '«Узник Азкабана» предлагает захватывающий сюжет, полный поворотов и неожиданных открытий.',
        image: '../img/book6.webp',
        url:'https://drive.google.com/file/d/1ntTLD1TRz7BCtcSmzPCjoueKLjnVol70/view?usp=drive_link'
    },
    {
        id: 'book7',
        title: 'Гарри Поттер: История волшебства',
        description: 'История волшебства" раскрывает тайны, загадки и факты о жизни Гарри и его друзей.',
        image: '../img/garry_books.jpg',
        url:'https://drive.google.com/file/d/1LLldAuz1TkiQ-ORHGzNKGrOmrh5sxNcy/view?usp=drive_link'
    },
];



const bookCardTemplate = document.createElement('div');
bookCardTemplate.className = 'bookCard';
bookCardTemplate.innerHTML = `
    <img src='' alt='' class='bookImage' />
    <h2 class='bookTitle'></h2>
    <p></p>
    <button class='addToCartBtn' >Отложить</button><br/>
    <a  href='' class='linkBooks'>Читать онлайн</a>
`;

books.forEach(book => {
    const bookCard = bookCardTemplate.cloneNode(true);
    const image = bookCard.querySelector('.bookImage');
    const title = bookCard.querySelector('.bookTitle');
    const description = bookCard.querySelector('p');
    const addToCartBtn = bookCard.querySelector('.addToCartBtn');
    const linkBooks = bookCard.querySelector('.linkBooks');
    image.src = book.image;
    image.alt = book.title;
    title.textContent = book.title;
    description.textContent = book.description;
    addToCartBtn.textContent = 'Отложить';
    linkBooks.href =book.url;
    

    addToCartBtn.addEventListener('click', () => {
        addToCart(book);
    });

    bookGrid.appendChild(bookCard);
});












