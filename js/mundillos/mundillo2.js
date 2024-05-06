export default function setupMundillo2(p) {
    const column1Phrases = [
        "TE IMAGINAS QUE", "¿PUEDES VER QUE", "IMAGINA QUE", "¿Y SI", "PENSA QUE",
        "SOÑÁ QUE", "VISUALIZA QUE", "CÓMO SERÍA SI", "CONTEMPLA QUE", "FLASHEÁ CON QUE",
        "CONSIDERA QUE", "¿SERÍA POSIBLE QUE", "CUESTIONA SI"
    ];
    const column2Phrases = [
        "PUDIERAS CAMBIAR", "ENCONTRARAS", "TUVIERAS", "DESCUBRIERAS", "NECESITARAS",
        "PUDIERAS VER", "SINTIERAS", "OLVIDARAS", "RECORDARAS", "COMPARTIERAS",
        "VOLVIERAS A VIVIR", "TRANSFORMARAS", "ESCUCHARAS", "HABLARAS", "CRUZARAS",
        "EVITARAS", "DIBUJARAS", "ESCRIBIERAS", "ESCONDIERAS", "REVELARAS"
    ];
    const column3Phrases = [
        "UN UNIVERSO PARALELO\nEN TU ARMARIO.", 
        "UNA PUERTA A OTRA\nDIMENSIÓN BAJO TU CAMA.", 
        "UN VIEJO AMOR EN\nCADA ESQUINA.",
        "TUS SUEÑOS MÁS LOCOS\nEN EL ESPEJO.", 
        "EL FUTURO EN\nLAS LÍNEAS DE TU MANO.", 
        "UNA NUEVO COLOR\nPARA EL CIELO.",
        "PALABRAS QUE CURAN.", 
        "QUE LOS ÁRBOLES\nTE SUSURRAN SECRETOS.", 
        "QUE TUS PENSAMIENTOS\nAPARECEN EN BURBUJAS\nSOBRE TU CABEZA.",
        "UN LIBRO QUE NARRA\nTU VIDA.", 
        "QUE LOS ALIMENTOS\nTE CUENTAN HISTORIAS.", 
        "UN ESPEJO QUE MUESTRA\nTU VERDADERO YO.",
        "ESTRELLAS QUE CANTAN\nEN LA NOCHE.", 
        "UN BOSQUE DONDE LOS\nÁRBOLES DANZAN AL ANOCHECER.", 
        "NUBES QUE DIBUJAN\nTUS RECUERDOS EN EL CIELO.",
        "LLUVIA QUE CAE\nCON AROMA A TUS\nDÍAS FAVORITOS."
    ];
    
    let possibleColors = ['#0000FF', '#00FF00', '#FA00FF', '#FCFC00', '#FF0000'];
    let selectedButtons = { col1: null, col2: null, col3: null };
    let scrollOffsets = { col1: 0, col2: 0, col3: 0 };
    let isHovered = { col1: false, col2: false, col3: false };
    const buttonWidth = 184;
    const buttonHeight = 120; // Altura existente para las columnas 1 y 2
    const buttonHeightCol3 = 150; // Nueva altura más grande para la columna 3
    const totalHeight = 20 * buttonHeight;
    const startX = 0;

    p.setup = function () {
        p.createCanvas(550, 500);
    };

    p.draw = function () {
        p.background('#EBE9D8');
        drawColumn(column1Phrases, startX, 'col1', scrollOffsets.col1, isHovered.col1);
        drawColumn(column2Phrases, startX + buttonWidth, 'col2', scrollOffsets.col2, isHovered.col2);
        drawColumn(column3Phrases, startX + 2 * buttonWidth, 'col3', scrollOffsets.col3, isHovered.col3);
        updateScroll();
    };

    function drawColumn(column, x, colId, offset, hovered) {
        let buttonHeightToUse = colId === 'col3' ? buttonHeightCol3 : buttonHeight; // Usa la altura mayor para la columna 3
        for (let i = 0; i < column.length; i++) {
            let idx = (i + Math.floor(offset / buttonHeightToUse)) % column.length;
            let text = column[idx];
            let y = (i * buttonHeightToUse) - (offset % buttonHeightToUse);
            let isActive = selectedButtons[colId] === text;
            p.fill(isActive ? p.random(possibleColors) : '#EBE9D8');
            p.stroke(0);
            p.rect(x, y, buttonWidth, buttonHeightToUse);
            p.fill(0);
            p.textAlign(p.CENTER, p.CENTER);
            p.text(text, x + buttonWidth / 2, y + buttonHeightToUse / 2);
        }
    }

    function updateScroll() {
        if (!isHovered.col1) scrollOffsets.col1 = (scrollOffsets.col1 + 0.5) % totalHeight;
        if (!isHovered.col2) scrollOffsets.col2 = (scrollOffsets.col2 + 0.75) % totalHeight;
        if (!isHovered.col3) scrollOffsets.col3 = (scrollOffsets.col3 + 1) % totalHeight;
    }

    p.mouseMoved = function () {
        isHovered.col1 = p.mouseX > startX && p.mouseX < startX + buttonWidth;
        isHovered.col2 = p.mouseX > startX + buttonWidth && p.mouseX < startX + 2 * buttonWidth;
        isHovered.col3 = p.mouseX > startX + 2 * buttonWidth && p.mouseX < startX + 3 * buttonWidth;
    };

    p.mousePressed = function () {
        if (p.mouseX > startX && p.mouseX < startX + 3 * buttonWidth && p.mouseY > 0 && p.mouseY < p.height) {
            if (isHovered.col1) toggleColumn('col1');
            if (isHovered.col2) toggleColumn('col2');
            if (isHovered.col3) toggleColumn('col3');
        }
    };

    function toggleColumn(colId) {
        isHovered[colId] = !isHovered[colId];
    }
}