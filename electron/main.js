const { app, BrowserWindow, BrowserView, ipcMain } = require('electron')
const path = require('path')
const fs = require('fs-extra')
const NODE_ENV = process.env.NODE_ENV
const isDev = NODE_ENV === 'development'

function createWindow() {
  const mainWindow = new BrowserWindow({
    title: '我丢',
    width: 1200,
    height: 800,
    icon: path.resolve(__dirname, '../static/icon.png'),
    frame: true,
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.resolve(__dirname, './preload.js'),
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  })
  require('@electron/remote/main').initialize()
  require('@electron/remote/main').enable(mainWindow.webContents)
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../dist/index.html')}`,
  )

  // 开发工具
  isDev && mainWindow.webContents.openDevTools()

  // 监听窗口关闭
  mainWindow.on('close', (event) => {
    mainWindow.webContents.send('close-window')
    event.preventDefault()
  })

  ipcMain.on('close-window-callback', () => {
    mainWindow.destroy()
  })

  // 监听显示窗口
  ipcMain.on('show-window', () => {
    mainWindow.show()
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    console.warn('activate', BrowserWindow.getAllWindows().length)
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('activate', () => {
  console.warn('activate', 111)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
