const { app, BrowserWindow } = require("electron")

const createWindow = () => {
    const window = new BrowserWindow({
        height: 600,
        width: 800
    })
    window.loadFile("./public/index.html")
}

app.whenReady()
.then(() => {
    //aplicação iniciada
    createWindow()
})
.catch((erro) => {
    //falhou ao iniciar
    console.log(erro.message)
})