// Archivo: ./mundillos/mundilloGrillaCaotica.js
export default function setupMundilloGrillaCaotica(p) {
    let grid = [];
    const cols = 30;
    const rows = 30;
    const cellSize = 30;  // Ajusta este tamaño según el espacio disponible

    class Cell {
        constructor(x, y) {
            this.originalX = x;
            this.originalY = y;
            this.x = x;
            this.y = y;
            this.distorted = false;
        }

        display() {
            p.stroke(0); // Contorno negro para más contraste
            p.fill('#00FF00'); // Cuadrados de color verde
            p.rect(this.x, this.y, cellSize, cellSize);
        }

        distort() {
            if (!this.distorted) {
                this.x += p.random(-cellSize, 200); // Aumento del rango de distorsión
                this.y += p.random(-cellSize, 200); // Aumento del rango de distorsión
                this.distorted = true;
            }
        }

        reset() {
            if (this.distorted) {
                this.x += (this.originalX - this.x) * 0.01; // Gradual reset
                this.y += (this.originalY - this.y) * 0.01; // Gradual reset
                if (p.abs(this.x - this.originalX) < 1 && p.abs(this.y - this.originalY) < 1) {
                    this.x = this.originalX;
                    this.y = this.originalY;
                    this.distorted = false;
                }
            }
        }
    }

    p.setup = function() {
        p.createCanvas(600, 600);
        p.background('#EBE9D8'); // Fondo de color beige
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                grid.push(new Cell(i * cellSize, j * cellSize));
            }
        }
    };

    p.draw = function() {
        p.background('#EBE9D8'); // Mantener el fondo actualizado
        grid.forEach(cell => {
            cell.reset();
            cell.display();
        });
    };

    p.mouseMoved = function() {
        grid.forEach(cell => {
            if (p.dist(p.mouseX, p.mouseY, cell.x, cell.y) < 50) {  // Reacciona dentro de 50 pixels
                cell.distort();
            }
        });
    };
}
