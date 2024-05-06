// Archivo: ./mundillos/mundillo5.js
export default function setupMundillo5(p) {
    let backgroundImage;
    let soundTrack;
    let texts = [
        "Línea 1", "Línea 2", "Línea 3", "Línea 4", "Línea 5",
        "Línea 6", "Línea 7", "Línea 8", "Línea 9", "Línea 10",
        "Línea 11", "Línea 12", "Línea 13", "Línea 14", "Línea 15",
        "Línea 16", "Línea 17", "Línea 18", "Línea 19", "Línea 20"
    ];
    let currentTextIndex = 0;
    let playPauseButton;
    let isPlaying = true;

    p.preload = function() {
        backgroundImage = p.loadImage('./images/tranquilidad.gif');  // Cambia a la ruta correcta de tu imagen
        soundTrack = p.loadSound('./audio/meditación.mp3');  // Cambia a la ruta correcta del sonido
    };

    p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight);
        soundTrack.loop();

        playPauseButton = p.createButton('Pausar');
        playPauseButton.position(20, 20);
        playPauseButton.mousePressed(togglePlayPause);

        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(24);
        p.fill(255);  // Texto blanco para mejor visibilidad
    };

    function togglePlayPause() {
        if (isPlaying) {
            soundTrack.pause();
            playPauseButton.html('Reproducir');
        } else {
            soundTrack.loop();
            playPauseButton.html('Pausar');
        }
        isPlaying = !isPlaying;
    }

    p.draw = function() {
        p.background(backgroundImage);
        p.text(texts[currentTextIndex], p.width / 2, p.height / 2);

        if (p.frameCount % 120 === 0) {  // Cambia el texto cada 4 segundos (60 fps * 4)
            currentTextIndex = (currentTextIndex + 1) % texts.length;
        }
    };

    p.windowResized = function() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
}
