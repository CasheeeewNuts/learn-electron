"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
electron_1.app.whenReady().then(function () {
    createWindow();
});
function createWindow() {
    var window = new electron_1.BrowserWindow({
        width: 1200,
        height: 1200
    });
    window.loadFile("bin/assets/index.html");
}
