// js/mundillos/mundillo8.js
export default function setupMundillo(targetDiv) {
    let sketch = function(p) {
        let x, y, xspeed, yspeed;

        p.setup = function() {
            p.createCanvas(400, 400);
            x = p.width / 2;
            y = p.height / 2;
            xspeed = 3;
            yspeed = 3;
        };

        p.draw = function() {
            p.background(220);
            x += xspeed;
            y += yspeed;
            if (x > p.width - 25 || x < 25) {
                xspeed *= -1;
            }
            if (y > p.height - 25 || y < 25) {
                yspeed *= -1;
            }
            p.fill(0, 102, 153);
            p.ellipse(x, y, 50, 50);
        };
    };

    new p5(sketch, targetDiv);
}
