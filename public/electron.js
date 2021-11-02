const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const windowKeeperState = require('electron-window-state');

let mainWindow, windowProps;

const createWindow = () => {
  windowProps = windowKeeperState({
    defaultWidth: 768,
    defaultHeight: 500,
  })
  mainWindow = new BrowserWindow({
    width: windowProps.width,
    height: windowProps.height,
    minWidth: windowProps.width,
    minHeight: windowProps.height,
    maxWidth: 1024,
    maxHeight: 768,
    webPreferences: { nodeIntegration: true },
  });
  windowProps.manage(mainWindow);
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
}

app.on('ready', createWindow);
app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit());