// Importando todos los mundillos
import setupMundillo1 from './mundillos/mundillo1.js';
import setupMundillo2 from './mundillos/mundillo2.js';
import setupMundillo3 from './mundillos/mundillo3.js';
import setupMundillo4 from './mundillos/mundillo4.js';
import setupMundillo5 from './mundillos/mundillo5.js';
import setupMundillo6 from './mundillos/mundillo6.js';
import setupMundillo7 from './mundillos/mundillo7.js';
import setupMundillo8 from './mundillos/mundillo8.js';

class Window {
    constructor(mundilloId, title, windowManager) {
        this.mundilloId = mundilloId;
        this.title = title;
        this.windowManager = windowManager;

        // Configuración específica de cada mundillo
        const config = {
            '0001': { width: 500, height: 570, description: "Crear es enchastrarse. Sentite libre de epresarte sin errores." },
            '0002': { width: 550, height: 500, description: "El valor de unir fragmentos para generar nuevos sentidos" },
            '0003': { width: 400, height: 400, description: "Deja que las palabras fluyan libremente. Tenes 60 segundos para escribir todo lo que puedas, sin filtros ni pausas." },
            '0004': { width: 550, height: 550, description: "El azar decide en este espacio. Usá la imagen que te toque como inspiración para crear algo nuevo." },
            '0005': { width: 550, height: 550, description: "Concentra tu atención en el mantra NAM MYOHO RENGE KYO, un espacio para reflexionar y despertar el potencial creativo a través de la repetición y el enfoque." },
            '0006': { width: 500, height: 500, description: "Organizar elementos puede ayudarte a clarificar ideas y encontrar nuevas conexiones." },
            '0007': { width: 500, height: 500, description: "El valor del caos en el proceso creativo. Desarmar y reorganizar es el camino para hallar nuevas formas." },
        };

        const { width, height, description } = config[this.mundilloId];
        this.width = width;
        this.height = height;
        this.description = description;
        this.posX = Math.random() * (window.innerWidth - width);
        this.posY = Math.random() * (window.innerHeight - height);

        this.element = this.createWindowElement();
    }

    createWindowElement() {
        const windowDiv = document.createElement('div');
        windowDiv.className = 'window';
        windowDiv.style.cssText = `left: ${this.posX}px; top: ${this.posY}px; width: ${this.width}px; height: ${this.height}px; position: absolute;`;

        const titleBar = document.createElement('div');
        titleBar.className = 'title-bar';

        const infoButton = document.createElement('button');
        infoButton.textContent = '?';
        infoButton.onclick = () => this.toggleInfo();

        const titleText = document.createElement('span');
        titleText.textContent = this.title;

        const closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.onclick = () => this.windowManager.closeWindow(this);

        titleBar.appendChild(infoButton);
        titleBar.appendChild(titleText);
        titleBar.appendChild(closeButton);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'content';
        contentDiv.style.cssText = `position: absolute; top: 30px; width: 100%; height: calc(100% - 30px);`;

        windowDiv.appendChild(titleBar);
        windowDiv.appendChild(contentDiv);

        this.infoDiv = this.createInfoDiv();
        contentDiv.appendChild(this.infoDiv);

        this.makeDraggable(windowDiv, titleBar);

        setTimeout(() => this.initializeP5(contentDiv), 100);

        document.body.appendChild(windowDiv);
        return windowDiv;
    }

    createInfoDiv() {
        const infoDiv = document.createElement('div');
        infoDiv.className = 'info';
        infoDiv.textContent = this.description;
        infoDiv.style.cssText = `display: none; position: absolute; top: 00; left: 0; width: 100%; height: 100%; background-color: rgba(255, 255, 255, 1); padding: 10px; box-sizing: border-box; font-size: 24px; font-family:'Courier New', Courier, monospace`;
        return infoDiv;
    }

    toggleInfo() {
        this.infoVisible = !this.infoVisible;
        this.infoDiv.style.display = this.infoVisible ? 'block' : 'none';
    }

    makeDraggable(windowElement, titleBar) {
        let startPosX = 0, startPosY = 0, drag = false;
        titleBar.addEventListener('mousedown', (e) => {
            this.windowManager.focusWindow(this);
            startPosX = e.clientX - windowElement.offsetLeft;
            startPosY = e.clientY - windowElement.offsetTop;
            drag = true;
        });

        document.addEventListener('mousemove', (e) => {
            if (drag) {
                windowElement.style.left = `${e.clientX - startPosX}px`;
                windowElement.style.top = `${e.clientY - startPosY}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            drag = false;
        });
    }

    initializeP5(contentDiv) {
        if (this.p5Instance) {
            this.p5Instance.remove();
        }
        switch (this.mundilloId) {
            case '0001': this.p5Instance = new p5(setupMundillo1, contentDiv); break;
            case '0002': this.p5Instance = new p5(setupMundillo2, contentDiv); break;
            case '0003': this.p5Instance = new p5(setupMundillo3, contentDiv); break;
            case '0004': this.p5Instance = new p5(setupMundillo4, contentDiv); break;
            case '0005': this.p5Instance = new p5(setupMundillo5, contentDiv); break;
            case '0006': this.p5Instance = new p5(setupMundillo6, contentDiv); break;
            case '0007': this.p5Instance = new p5(setupMundillo7, contentDiv); break;
            case '0008': this.p5Instance = new p5(setupMundillo8, contentDiv); break;
        }
    }    
}

export default Window;
