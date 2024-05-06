//main.js
import windowManager from './windowManager.js';
import Icon from './icon.js';

document.addEventListener('DOMContentLoaded', () => {
    const iconsData = [
        { id: '0001', imagePath: './images/image1.png', type: 'Mundillo1' },
        { id: '0002', imagePath: './images/image2.png', type: 'Mundillo2' },
        { id: '0001', imagePath: './images/image1b.png', type: 'Mundillo1' },
        { id: '0002', imagePath: './images/image2b.png', type: 'Mundillo2' },
        { id: '0003', imagePath: './images/image3.png', type: 'Mundillo3' },
        { id: '0004', imagePath: './images/image4.png', type: 'Mundillo4' },
        { id: '0003', imagePath: './images/image3b.png', type: 'Mundillo3' },
        { id: '0004', imagePath: './images/image4b.png', type: 'Mundillo4' },
        { id: '0005', imagePath: './images/image5.png', type: 'Mundillo5' },
        { id: '0005', imagePath: './images/image5b.png', type: 'Mundillo5' },
        { id: '0006', imagePath: './images/image6.png', type: 'Mundillo6' },
        { id: '0007', imagePath: './images/image7.png', type: 'Mundillo7' },
        { id: '0007', imagePath: './images/image7.png', type: 'Mundillo7' },
        { id: '0008', imagePath: './images/image8.png', type: 'Mundillo8' },
        { id: '0001', imagePath: './images/image1.png', type: 'Mundillo1' }
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
