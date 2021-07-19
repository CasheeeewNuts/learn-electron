import {app, BrowserWindow} from "electron"


app.whenReady().then(() => {
    createWindow()
})

function createWindow() {
    const window = new BrowserWindow({
        width: 1200,
        height: 1200
    })

    window.loadFile("../index.html")
}