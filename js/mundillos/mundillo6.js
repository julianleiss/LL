// Archivo: ./mundillos/mundilloOrdenarColores.js
export default function setupMundillo6(p) {
    let colors = [];
    let dragging = null; // Bloque que estamos arrastrando
    let offsetX, offsetY; // Para ajustar la posición del arrastre

    // Colores específicos en formato hexadecimal
    let colorPalette = ['#FCFC00', '#00FF00', '#0000FF', '#FA00FF'];

    p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight);
        generateColors();
    };

    p.draw = function() {
        p.background('#EBE9D8');
        for (let colorBlock of colors) {
            p.fill(colorBlock.color);
            p.rect(colorBlock.x, colorBlock.y, 100, 100);
        }
    };

    p.mousePressed = function() {
        for (let colorBlock of colors) {
            if (p.mouseX >= colorBlock.x && p.mouseX <= colorBlock.x + 100 &&
                p.mouseY >= colorBlock.y && p.mouseY <= colorBlock.y + 100) {
                dragging = colorBlock;
                offsetX = p.mouseX - colorBlock.x;
                offsetY = p.mouseY - colorBlock.y;
                return;
            }
        }
    };

    p.mouseDragged = function() {
        if (dragging) {
            dragging.x = p.mouseX - offsetX;
            dragging.y = p.mouseY - offsetY;
        }
    };

    p.mouseReleased = function() {
        dragging = null;
    };

    function generateColors() {
        for (let i = 0; i < 10; i++) {
            let color = p.random(colorPalette); // Selecciona un color aleatorio de la paleta
            let x = p.random(p.width - 100);
            let y = p.random(p.height - 100);
            colors.push({ color, x, y });
        }
    }
}
