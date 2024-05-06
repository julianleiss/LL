import windowManager from './windowManager.js';
import Icon from './icon.js';

document.addEventListener('DOMContentLoaded', () => {
    const desktop = document.getElementById('desktop'); // Asegúrate de que el contenedor 'desktop' esté definido en el HTML
    const iconsData = [
        { id: '0001', imagePath: './images/image1.png' },
        { id: '0002', imagePath: './images/image2.png' },
        { id: '0003', imagePath: './images/image3.png' },
        { id: '0004', imagePath: './images/image4.png' },
        { id: '0005', imagePath: './images/image5.png' },
        { id: '0006', imagePath: './images/image6.png' },
        { id: '0007', imagePath: './images/image7.png' },
        { id: '0008', imagePath: './images/image8.png' },
    ];

    iconsData.forEach(iconData => {
        const icon = new Icon(iconData.id, iconData.imagePath);
        const iconElement = icon.createIconElement();
        desktop.appendChild(iconElement);

        // Posicionamiento aleatorio del icono
        iconElement.style.left = `${Math.random() * (window.innerWidth - iconElement.offsetWidth)}px`;
        iconElement.style.top = `${Math.random() * (window.innerHeight - iconElement.offsetHeight)}px`;

        iconElement.addEventListener('click', () => {
            const width = iconData.id === '0001' ? 500 : 400;
            const height = iconData.id === '0001' ? 500 : 600;
            const posX = Math.random() * (window.innerWidth - width);
            const posY = Math.random() * (window.innerHeight - height);
            windowManager.openWindow(iconData.id, `Mundillo ${iconData.id}`, width, height, posX, posY);
        });
    });
});
