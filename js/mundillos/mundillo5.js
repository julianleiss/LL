// Archivo: ./mundillos/mundillo5.js
export default function setupMundillo5(p) {
    let backgroundImage;
    let texts = [
        "Quiero que cierres los ojos, y mires adentro", "Tan lleno de agua, que parezca el mar", "Quiero que frenes el tiempo, y mires la lluvia", "Flotando en el aire, buscando un lugar",
        "Vas a poder abrir tu corazón", "Mirarlo todo, quedarte con vos", "Vas a poder abrir tu corazón", "Mirarlo todo, quedarte con vos",
        "Quiero que mezcles colores, que muerdas las flores", "Que mires las cosas, cambiar de lugar", "Quiero que inventes palabras, las muestres abiertas", "Que crezcan de a poco, y empiecen a hablar"
    ];
    let currentTextIndex = 0;
    let nextChangeTime = 0;

    p.preload = function() {
        backgroundImage = p.loadImage('./images/tranquilidad.gif');  // Asegúrate de que la ruta es correcta
    };

    p.setup = function() {
        p.createCanvas(550, 550);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(24);
        p.fill('#FCFC00');  // Texto blanco para mejor visibilidad
        p.stroke('#000000');  // Color del contorno negro
        p.strokeWeight(2);  // Grosor del contorno de 2px
        nextChangeTime = p.millis() + 5000;  // Inicializa el temporizador para el cambio de texto
    };

    p.draw = function() {
        p.background(backgroundImage);  // Muestra la imagen de fondo
        p.text(texts[currentTextIndex], p.width / 2, p.height / 2-20);  // Muestra el texto actual en el centro

        if (p.millis() > nextChangeTime) {
            currentTextIndex = (currentTextIndex + 1) % texts.length;  // Avanza al siguiente índice de texto
            nextChangeTime = p.millis() + 2000;  // Establece el tiempo para el próximo cambio
        }
    };

    p.windowResized = function() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
}