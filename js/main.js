//main.js
import windowManager from './windowManager.js';
import Icon from './icon.js';

document.addEventListener('DOMContentLoaded', () => {
    const iconsData = [
        { id: '0002', imagePath: './images/image2.png', type: 'COMBINACION' },
        { id: '0001', imagePath: './images/image1b.png', type: 'ENCHASTRE' },
        { id: '0003', imagePath: './images/image3.png', type: 'BRAINSTORMING' },
        { id: '0004', imagePath: './images/image4.png', type: 'DADOS' },
        { id: '0004', imagePath: './images/image4b.png', type: 'DADOS' },
        { id: '0005', imagePath: './images/image5.png', type: 'NAM MYOHO RENGE KYO' },
        { id: '0005', imagePath: './images/image5b.png', type: 'NAM MYOHO RENGE KYO' },
        { id: '0006', imagePath: './images/image6.png', type: 'ORDEN' },
        { id: '0007', imagePath: './images/image7.png', type: 'CAOS' },
        { id: '0007', imagePath: './images/image7.png', type: 'CAOS' },
        { id: '0004', imagePath: './images/image4b.png', type: 'DADOS' },
        { id: '0001', imagePath: './images/image1.png', type: 'ENCHASTRE' },
        { id: '0002', imagePath: './images/image2b.png', type: 'COMBINACION' },
        { id: '0003', imagePath: './images/image3b.png', type: 'BRAINSTORMING' },

    ];

    iconsData.forEach(iconData => {
        const icon = new Icon(iconData.id, iconData.imagePath);
        document.body.appendChild(icon.element);

        // Posicionamiento aleatorio del icono
        icon.element.style.left = `${Math.random() * (window.innerWidth - icon.width)}px`;
        icon.element.style.top = `${Math.random() * (window.innerHeight - icon.height)}px`;

        icon.element.addEventListener('click', () => {
            const posX = Math.random() * (window.innerWidth - (iconData.type === "Mundillo1" ? 500 : 400));
            const posY = Math.random() * (window.innerHeight - (iconData.type === "Mundillo" ? 500 : 600));
            windowManager.openWindow(iconData.id, iconData.type, posX, posY);
        });
    });
});