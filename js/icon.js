// icons.js
class Icon {
    constructor(id, imagePath) {
        this.id = id;
        this.imagePath = imagePath;
        this.width = 450;  // Ancho del icono
        this.height = 400; // Altura del icono
        this.speedX = Math.random() * 10 - 5; // Velocidad en el eje X
        this.speedY = Math.random() * 10 - 5; // Velocidad en el eje Y
        this.element = this.createIconElement();
        this.addDraggable(); // Agrega la funcionalidad de arrastrar al icono
        this.updatePosition(); // Llama a la función para mover el icono
    }

    createIconElement() {
        const element = document.createElement('img');
        element.src = this.imagePath;
        element.className = 'icon';
        element.style.position = 'absolute';
        element.style.width = '400px'; // Ancho fijo
        element.style.height = 'auto'; // Altura ajustada automáticamente
        element.dataset.mundilloId = this.id;
        return element;
    }
    

    addDraggable() {
        let offsetX, offsetY, isDragging = false;

        const startDragging = (e) => {
            e.preventDefault();
            isDragging = true;
            offsetX = e.clientX - this.element.offsetLeft;
            offsetY = e.clientY - this.element.offsetTop;
        };

        const dragIcon = (e) => {
            if (isDragging) {
                this.element.style.left = e.clientX - offsetX + 'px';
                this.element.style.top = e.clientY - offsetY + 'px';
            }
        };

        const stopDragging = () => {
            isDragging = false;
        };

        this.element.addEventListener('mousedown', startDragging);
        document.addEventListener('mousemove', dragIcon);
        document.addEventListener('mouseup', stopDragging);
    }

    updatePosition() {
        const updateInterval = 30; // Intervalo de actualización en milisegundos
        setInterval(() => {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            // Calcular las nuevas posiciones
            let newX = this.element.offsetLeft + this.speedX;
            let newY = this.element.offsetTop + this.speedY;

            // Si el icono alcanza el borde izquierdo o derecho, invertir la velocidad en X
            if (newX <= 0 || newX >= screenWidth - this.width) {
                this.speedX *= -1;
                newX = Math.min(Math.max(newX, 0), screenWidth - this.width); // Mantener el icono dentro de los límites horizontales
            }

            // Si el icono alcanza el borde superior o inferior, invertir la velocidad en Y
            if (newY <= 0 || newY >= screenHeight - this.height) {
                this.speedY *= -1;
                newY = Math.min(Math.max(newY, 0), screenHeight - this.height); // Mantener el icono dentro de los límites verticales
            }

            // Actualizar la posición del icono
            this.element.style.left = newX + 'px';
            this.element.style.top = newY + 'px';
        }, updateInterval);
    }
}

export default Icon;

