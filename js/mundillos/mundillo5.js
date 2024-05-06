// Archivo: ./mundillos/mundillo5.js
export default function setupMundillo5(p) {
    let img1, img2, currentImg;

    p.preload = function () {
        img1 = p.loadImage('https://example.com/image1.jpg');
        img2 = p.loadImage('https://example.com/image2.jpg');
    };

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        currentImg = img1;
    };

    p.draw = function () {
        p.background(240);
        p.image(currentImg, 0, 0, p.width, p.height);
    };

    p.mousePressed = function () {
        currentImg = currentImg === img1 ? img2 : img1;
    };

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
}
