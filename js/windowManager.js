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
}

export default new WindowManager();
