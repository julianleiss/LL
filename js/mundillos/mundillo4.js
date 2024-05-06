// Archivo: ./mundillos/mundillo4.js
export default function setupMundillo4(p) {
    let imgs = [];
    let currentImgIndex;
    const backgroundImageURL = 'https://d2w9rnfcy7mm78.cloudfront.net/9916409/original_f1cc315f520a6572be9b0e2baebf51c8.gif?1608103952?bc=0';
    let backgroundImage;
    const imagesURLs = [
        'https://d2w9rnfcy7mm78.cloudfront.net/9916398/original_75dd7be417a20ff0a9d65174fd199dd8.gif?1608103901?bc=0',
        'https://d2w9rnfcy7mm78.cloudfront.net/9916388/original_17ea2c3af34e1ff95bda5a7cc7f0eb16.gif?1608103864?bc=0',
        'https://d2w9rnfcy7mm78.cloudfront.net/9916366/original_414e13c5cb87d9abbae4f7d7214f50ef.gif?1608103811?bc=0',
        'https://d2w9rnfcy7mm78.cloudfront.net/9916360/original_0c29ec6f3be69b9fcb9778c4cad80633.gif?1608103794?bc=0',
        'https://d2w9rnfcy7mm78.cloudfront.net/20419550/original_dc83bc75052ad10a724603604ac2c0e9.gif?1676569569?bc=0',
        'https://d2w9rnfcy7mm78.cloudfront.net/10177477/original_1367f597cfec4eff85b23f206bce9eab.gif?1610282819?bc=0',
        'https://d2w9rnfcy7mm78.cloudfront.net/14555236/original_dedfa1bc88017185597bd663b8576871.gif?1641248240?bc=0',
        'https://d2w9rnfcy7mm78.cloudfront.net/9916273/original_37bda3a62c5cf80e9462215664d83f38.gif?1608103497?bc=0',
        'https://d2w9rnfcy7mm78.cloudfront.net/9812667/original_ffb97524021850d82afca194d88c7e91.gif?1607405066?bc=0'
    ];

    p.preload = function () {
        backgroundImage = p.loadImage(backgroundImageURL);
        imgs = imagesURLs.map(url => p.loadImage(url));
        currentImgIndex = p.floor(p.random(imgs.length));
    };

    p.setup = function () {
        p.createCanvas(550, 550);
        p.imageMode(p.CENTER);
    };

    p.draw = function () {
        // Fondo general
        p.background(255);
        p.image(backgroundImage, p.width / 2, p.height / 2, p.width, p.height);
        p.image(imgs[currentImgIndex], p.width / 2, p.height / 2, 400, 400);
    };

    p.mousePressed = function () {
        if (p.mouseX > p.width / 2 - 150 && p.mouseX < p.width / 2 + 150 &&
            p.mouseY > p.height / 2 - 150 && p.mouseY < p.height / 2 + 150) {
            currentImgIndex = p.floor(p.random(imgs.length));
        }
    };

    p.mouseMoved = function () {
        if (p.mouseX > p.width / 2 - 150 && p.mouseX < p.width / 2 + 150 &&
            p.mouseY > p.height / 2 - 150 && p.mouseY < p.height / 2 + 150) {
            p.scale(1.1);  // Escala la imagen para el efecto hover
            p.cursor(p.HAND);
        } else {
            p.scale(1.0);
            p.cursor(p.ARROW);
        }
    };

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
}