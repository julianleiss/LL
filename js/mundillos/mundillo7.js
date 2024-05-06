// Archivo: ./mundillos/mundillo7.js
export default function setupMundillo7(p) {
    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(240);
    };

    p.mousePressed = function () {
        p.fill(p.random(255), p.random(255), p.random(255), 150);
        p.ellipse(p.mouseX, p.mouseY, 100, 100);
    };

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
}
