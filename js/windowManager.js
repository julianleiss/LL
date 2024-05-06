import Window from './window.js';

class WindowManager {
    constructor() {
        this.windows = [];
    }

    openWindow(mundilloId, title) {
        const newWindow = new Window(mundilloId, title, this);
        document.body.appendChild(newWindow.element);
        this.windows.push(newWindow);
    }

    closeWindow(windowToClose) {
        const index = this.windows.indexOf(windowToClose);
        if (index > -1) {
            this.windows.splice(index, 1);
        }
        windowToClose.element.remove();
    }

    focusWindow(windowToFocus) {
        this.windows.forEach(window => {
            window.element.style.zIndex = '1'; // Lower the z-index for all windows
        });
        windowToFocus.element.style.zIndex = '10'; // Raise the z-index for the focused window
    }
    makeDraggable(windowElement, titleBar) {
        let startPosX = 0, startPosY = 0, drag = false;
        titleBar.addEventListener('mousedown', (e) => {
            if (e.target === titleBar) { // Asegura que solo se aplique al arrastrar la barra de título
                this.windowManager.focusWindow(this);
                startPosX = e.clientX - windowElement.offsetLeft;
                startPosY = e.clientY - windowElement.offsetTop;
                drag = true;
            }
        });
    
        document.addEventListener('mousemove', (e) => {
            if (drag) {
                windowElement.style.left = `${e.clientX - startPosX}px`;
                windowElement.style.top = `${e.clientY - startPosY}px`;
            }
        });
    
        document.addEventListener('mouseup', () => {
            drag = false;
        });
    }
}


export default new WindowManager();
