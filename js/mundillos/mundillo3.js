export default function setupMundillo3(p) {
    let input, startButton, startTime, gameActive, wordCount, timer;
    const timeLimit = 60; // Tiempo en segundos

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background('#EBE9D8'); // Ajustar color de fondo para uniformidad

        // Inicializar campo de entrada y colocarlo correctamente
        input = p.createInput('');
        input.position(50, p.windowHeight / 6);
        input.size(200);
        input.hide(); // Ocultar inicialmente hasta que el juego comience

        // Ajustar la posición del botón respecto al input
        startButton = p.createButton('Start');
        startButton.position(input.x + input.width + 10, p.windowHeight / 6);
        startButton.mousePressed(startGame);

        wordCount = 0;
        gameActive = false;

        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(24);
    };

    function startGame() {
        startTime = p.millis();
        gameActive = true;
        wordCount = 0;
        input.value('');
        input.removeAttribute('disabled');
        input.show(); // Mostrar input cuando el juego empieza
    }

    p.draw = function () {
        p.background('#EBE9D8'); // Mantener el fondo actualizado
        if (gameActive) {
            let elapsedTime = (p.millis() - startTime) / 1000;
            timer = timeLimit - elapsedTime;

            if (timer <= 0) {
                gameActive = false;
                timer = 0;
                input.attribute('disabled', 'true'); // Deshabilitar el input al finalizar
                input.hide(); // Ocultar el input cuando el juego termina
            }

            p.fill(0);
            p.text(`Time left: ${timer.toFixed(1)} seconds`, 150, 30);
            p.text(`Words typed: ${wordCount}`, p.width - 200, 30);
        } else if (wordCount > 0) {
            p.text(`Final count: ${wordCount} words`, p.width / 2, p.height / 2);
        }
    };

    p.keyPressed = function () {
        if (p.keyCode === p.ENTER && gameActive) {
            if (input.value().trim() !== '') {
                wordCount++;
                input.value('');
            }
        }
    };

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        // Recalcular la posición del input y del botón después de redimensionar
        input.position(50, p.windowHeight / 6);
        startButton.position(input.x + input.width + 10, p.windowHeight / 6);
    };
}
