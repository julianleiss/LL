export default function setupMundillo1(p) {
    let currentTool = 'crayon';
    let currentColor = '#000000';
    let strokeSize = 5;
    const tools = {
        '🖍️': 'crayon',
        '🖌': 'brush',
        '🎁': 'surprise',
        '✂️': 'eraser',
        '💣': 'clear'
    };
    const colors = ['#FCFC00', '#0000FF', '#FA00FF', '#00FF00', '#000000'];
    const drawingArea = { x: 80, y: 20, width: 400, height: 486 };

    p.setup = function () {
        p.createCanvas(500, 550);
        p.background('#EBE9D8');
        createUI();
        setupDrawingArea();
    };

    function createUI() {
        let y = 30;  // Margen superior ajustado a 20px
        for (const [emoji, tool] of Object.entries(tools)) {
            const button = p.createButton(emoji);
            button.position(20, y);
            button.mousePressed(() => {
                currentTool = tool;
                if (tool === 'clear') {
                    p.clear();
                    p.background(255);
                    drawDrawingArea();
                }
                strokeSize = tool === 'crayon' ? 5 : tool === 'brush' ? 30 : strokeSize;
            });
            button.style('width', '40px');
            button.style('height', '40px');
            button.style('background-color', 'white');
            button.style('border', '2px solid black');
            button.style('box-shadow', '5px 5px 5px rgba(0,0,0,0.5)');
            y += 50;
        }

        colors.forEach((color, i) => {
            const button = p.createButton('');
            button.position(20, y + i * 50);
            button.style('background-color', color);
            button.style('width', '40px');
            button.style('height', '40px');
            button.style('border', '2px solid black');
            button.style('box-shadow', '5px 5px 5px rgba(0,0,0,0.5)');
            button.mousePressed(() => currentColor = color);
        });
    }

    function setupDrawingArea() {
        p.fill(255);
        p.stroke(0);
        p.strokeWeight(2);
        p.rect(drawingArea.x, drawingArea.y, drawingArea.width, drawingArea.height);
    }

    function drawDrawingArea() {
        p.noFill();
        p.stroke(0);
        p.strokeWeight(2);
        p.rect(drawingArea.x, drawingArea.y, drawingArea.width, drawingArea.height);
    }

    p.draw = function () {
        if (p.mouseIsPressed) {
            if (currentTool === 'crayon' || currentTool === 'brush' || currentTool === 'eraser') {
                let drawX = p.mouseX;
                let drawY = p.mouseY;
                if (drawX > drawingArea.x && drawX < drawingArea.x + drawingArea.width && drawY > drawingArea.y && drawY < drawingArea.y + drawingArea.height) {
                    p.stroke(currentColor);
                    p.strokeWeight(currentTool === 'crayon' ? 5 : currentTool === 'brush' ? 30 : 1);
                    p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
                }
            }
        }
    };

    p.mouseDragged = function () {
        if (currentTool !== 'clear' && p.mouseX > drawingArea.x && p.mouseX < drawingArea.x + drawingArea.width &&
            p.mouseY > drawingArea.y && p.mouseY < drawingArea.y + drawingArea.height) {
            if (currentTool === 'crayon' || currentTool === 'brush') {
                p.stroke(currentColor);
                p.strokeWeight(strokeSize);
                p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
            } else if (currentTool === 'surprise') {
                drawRandomShape();
            } else if (currentTool === 'eraser') {
                p.stroke(255);
                p.strokeWeight(30);
                p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
            }
        }
    };

    function drawRandomShape() {
        const size = p.random(10, 50);
        const shapeType = p.floor(p.random(3));
        p.fill(currentColor);
        p.noStroke();
        switch(shapeType) {
            case 0: p.ellipse(p.mouseX, p.mouseY, size, size); break;
            case 1: p.rect(p.mouseX, p.mouseY, size, size); break;
            case 2: p.triangle(p.mouseX - size, p.mouseY + size, p.mouseX, p.mouseY - size, p.mouseX + size, p.mouseY + size); break;
        }
    }

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
}
