// Ejemplo de archivo: js/mundillos/0001.js
export default function setupMundillo(targetDiv) {
  let sketch = function(p) {
      p.setup = function() {
          p.createCanvas(300, 200);
          p.background(0);
      };

      p.draw = function() {
          p.fill(255, p.mouseX, p.mouseY);
          p.ellipse(p.width / 2, p.height / 2, 50, 50);
      };
  };

  new p5(sketch, targetDiv);
}
