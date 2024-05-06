export default function setupMundillo3(p) {
    let input, startButton, startTime, gameActive, wordCount, timer;
    const timeLimit = 60; // Tiempo en segundos
    let words = []; // Almacenar las palabras y sus posiciones aleatorias

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background('#EBE9D8');

        input = p.createInput('');
        input.position(70, 160);
        input.size(250);
        input.style('background-color', 'rgba(235, 233, 216, 0)');
        input.style('border', 'none');
        input.style('border-bottom', '2px solid black');
        input.style('font-size', '40px');
        input.style('text-align', 'center');
        input.hide(); // Ocultar inicialmente

        startButton = p.createButton('INICIAR');
        startButton.position(p.windowWidth/12, p.windowHeight/6);
        startButton.mousePressed(startGame);
        startButton.style('font-size', '40px');
        startButton.style('background-color', '#FCFC00');
        startButton.style('color', '#000000');
        startButton.style('border', '2px solid #000000');
        startButton.style('font-weight', 'bold');
        startButton.style('box-shadow', '10px 10px #000000');

        wordCount = 0;
        gameActive = false;

        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(40); // Tamaño general del texto para otros elementos
    };

    function startGame() {
        startTime = p.millis();
        gameActive = true;
        wordCount = 0;
        input.value('');
        input.show();
        startButton.hide();
    }

    p.draw = function () {
        p.background('#EBE9D8'); // Mantener el fondo actualizado
        if (gameActive) {
            let elapsedTime = (p.millis() - startTime) / 1000;
            timer = timeLimit - elapsedTime;
            if (timer <= 0) {
                timer = 0;
                endGame();
            }
    
            // Configuración de estilo de texto para "RESTANTE"
            p.fill(0); // Color de texto negro
            p.textSize(14); // Tamaño de texto de 14px
            p.textStyle(p.BOLD); // Texto en negrita
            p.text(`RESTANTE: ${timer.toFixed(0)} SEG`, 80, 25);
    
            // Configuración de estilo de texto para "PALABRAS"
            p.text(`PALABRAS: ${wordCount}`, 337, 25); // Uso el mismo estilo para ambos

            // Dibujar palabras guardadas
            words.forEach(word => {
                p.fill('#FCFC00'); // Color del texto
                p.textSize(40); // Tamaño de texto de 40px para las palabras guardadas
                p.text(word.text, word.x, word.y);
            });
        } else if (wordCount > 0) {
            p.fill('#000000'); // Color del texto
            p.textSize(16); // Tamaño de texto de 40px para las palabras guardadas
            p.text(`CONTEO: ${wordCount} PALABRAS`, 180, 40, 25);
        }
    };
    
    function endGame() {
        gameActive = false;
        input.hide();
        startButton.show();
        input.attribute('disabled', 'true');
    }
    
    p.keyPressed = function () {
        if (p.keyCode === p.ENTER && gameActive) {
            if (input.value().trim() !== '') {
                let newWord = {
                    text: input.value(),
                    x: p.random(50, 450), // Coordenada X aleatoria dentro de 400x400px
                    y: p.random(50, 450) // Coordenada Y aleatoria dentro de 400x400px
                };
                words.push(newWord); // Agregar nueva palabra y sus coordenadas
                wordCount++;
                input.value('');
                repositionWords(); // Reubicar todas las palabras
            }
        }
    };

    function repositionWords() {
        words.forEach(word => {
            word.x = p.random(50, 450); // Coordenada X aleatoria dentro de 400x400px
            word.y = p.random(50, 450); // Coordenada Y aleatoria dentro de 400x400px
        });
    }
    
    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        input.position(50, p.windowHeight / 6 + 20);
        startButton.position(input.x + input.width + 10, p.windowHeight / 6 + 20);
    };
}
