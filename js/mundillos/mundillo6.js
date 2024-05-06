// Archivo: ./mundillos/mundillo6.js
export default function setupMundillo6(p) {
    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(255);
    };

    p.draw = function () {
        if (p.mouseIsPressed) {
            p.stroke(0);
            p.strokeWeight(4);
            p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
        }
    };

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
}
