// Archivo: ./mundillos/mundillo6.js
export default function setupMundillo6(p) {
    let palabras = ["enchastre", "futuro", "ciudad", "noche", "musica"];
    let palabrasObj = [];
    let dragging = null; // Objeto que está siendo arrastrado
    let inputUsuario;
    let botonEnviar;
    let textoFinal = '';
    let tutorialVisible = true;

    class Palabra {
        constructor(palabra, x, y) {
            this.palabra = palabra;
            this.x = x;
            this.y = y;
            this.draggable = false;
        }

        display() {
            p.fill(0);
            if (this.draggable) {
                p.stroke(150); // Resaltar si es arrastrable
            } else {
                p.stroke(0);
            }
            p.text(this.palabra, this.x, this.y);
        }

        checkMouse() {
            if (p.mouseX >= this.x && p.mouseX <= this.x + p.textWidth(this.palabra) &&
                p.mouseY >= this.y - 10 && p.mouseY <= this.y + 10) {
                this.draggable = true;
                if (p.mouseIsPressed && !dragging) {
                    dragging = this;
                }
            } else {
                this.draggable = false;
            }
        }

        move(x, y) {
            this.x = x;
            this.y = y;
        }
    }

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(255);
        p.textSize(16);

        inputUsuario = p.createInput();
        inputUsuario.position(50, p.windowHeight - 40);
        
        botonEnviar = p.createButton('Agregar línea');
        botonEnviar.position(inputUsuario.x + inputUsuario.width, p.windowHeight - 40);
        botonEnviar.mousePressed(agregarLinea);

        palabras.forEach((palabra, index) => {
            palabrasObj.push(new Palabra(palabra, 50, 80 + index * 20));
        });

        let botonGuardar = p.createButton('Guardar Poema');
        botonGuardar.position(50, p.windowHeight - 80);
        botonGuardar.mousePressed(guardarPoema);

        let botonTutorial = p.createButton('Mostrar/Ocultar Ayuda');
        botonTutorial.position(160, p.windowHeight - 80);
        botonTutorial.mousePressed(() => tutorialVisible = !tutorialVisible);
    };

    p.draw = function () {
        if (p.mouseIsPressed && !inputUsuario.elt.matches(':focus')) {
            p.stroke(0);
            p.strokeWeight(4);
            p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
        }

        if (tutorialVisible) {
            mostrarTutorial();
        }

        palabrasObj.forEach(palabra => {
            palabra.display();
            palabra.checkMouse();
        });

        if (dragging && !p.mouseIsPressed) {
            agregarLineaDesdeDrag();
            dragging = null;
        }
    };

    function agregarLineaDesdeDrag() {
        textoFinal += dragging.palabra + ' ';
        mostrarTextoUsuario();
    }

    function agregarLinea() {
        let linea = inputUsuario.value();
        textoFinal += linea + ' ';
        inputUsuario.value('');
        mostrarTextoUsuario();
        p.fill(0, 255, 0);
        p.text("¡Palabra añadida!", 50, p.windowHeight - 60);
        setTimeout(() => p.background(255), 2000);
    }

    function guardarPoema() {
        p.saveCanvas('miPoema', 'jpg');
    }

    function mostrarTextoUsuario() {
        p.fill(0);
        p.text("Tu poema:", 50, 200);
        p.text(textoFinal, 50, 230);
    }

    function mostrarTutorial() {
        p.fill(255, 255, 0);
        p.text("Arrastra las palabras hacia el área de texto o escribe y presiona 'Agregar línea'.", 50, p.windowHeight - 120);
    }

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        inputUsuario.position(50, p.windowHeight - 40);
        botonEnviar.position(inputUsuario.x + inputUsuario.width, p.windowHeight - 40);
    };
}
