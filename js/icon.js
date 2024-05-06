class Icon {
    constructor(id, imagePath) {
        this.id = id;
        this.imagePath = imagePath;
    }

    createIconElement() {
        const element = document.createElement('img');
        element.src = this.imagePath;
        element.className = 'icon';
        element.style.position = 'absolute';
        element.style.left = `${Math.random() * (window.innerWidth - 50)}px`; // Posiciona aleatoriamente, asumiendo un ancho de icono de 50px
        element.style.top = `${Math.random() * (window.innerHeight - 50)}px`; // Posiciona aleatoriamente, asumiendo un alto de icono de 50px
        element.dataset.mundilloId = this.id;  // Atributo para identificar el mundillo
        return element;
    }
}

export default Icon;
