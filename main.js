const { app, BrowserWindow, ipcMain, dialog, Menu, protocol, net } = require('electron');
const path = require('path');
const fs   = require('fs');
const os   = require('os');

const FONT_EXTS = new Set(['.ttf', '.otf', '.woff', '.woff2', '.ttc']);

const SYSTEM_FONT_DIRS = [
  '/System/Library/Fonts',
  '/Library/Fonts',
  path.join(os.homedir(), 'Library', 'Fonts'),
];

function scanFonts(dir, depth = 0) {
  if (depth > 5) return [];
  const results = [];
  try {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        results.push(...scanFonts(full, depth + 1));
      } else if (entry.isFile() && FONT_EXTS.has(path.extname(entry.name).toLowerCase())) {
        results.push({ filename: entry.name, path: full });
      }
    }
  } catch {}
  return results;
}

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 780,
    minWidth: 960,
    minHeight: 600,
    center: true,
    titleBarStyle: 'hidden',
    trafficLightPosition: { x: 14, y: 14 },
    backgroundColor: '#0e0e0f',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.loadFile('index.html');

  // Notify renderer when maximized state changes
  mainWindow.on('maximize',   () => mainWindow.webContents.send('window-maximized', true));
  mainWindow.on('unmaximize', () => mainWindow.webContents.send('window-maximized', false));

  const menu = Menu.buildFromTemplate([
    { role: 'appMenu' },
    {
      label: 'File',
      submenu: [
        {
          label: 'New Project',
          accelerator: 'CmdOrCtrl+N',
          click: () => mainWindow.webContents.send('menu-new'),
        },
        { type: 'separator' },
        {
          label: 'Open Project…',
          accelerator: 'CmdOrCtrl+O',
          click: () => mainWindow.webContents.send('menu-open'),
        },
        {
          label: 'Save Project',
          accelerator: 'CmdOrCtrl+S',
          click: () => mainWindow.webContents.send('menu-save'),
        },
        {
          label: 'Save Project As…',
          accelerator: 'CmdOrCtrl+Shift+S',
          click: () => mainWindow.webContents.send('menu-save-as'),
        },
        { type: 'separator' },
        {
          label: 'Export SVG…',
          accelerator: 'CmdOrCtrl+Shift+E',
          click: () => mainWindow.webContents.send('menu-export'),
        },
        { type: 'separator' },
        { role: 'close' },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { label: 'Undo', click: () => mainWindow.webContents.send('menu-undo') },
        { type: 'separator' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'selectAll' },
      ],
    },
    { role: 'viewMenu' },
    { role: 'windowMenu' },
  ]);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
  protocol.handle('localfont', (request) => {
    const filePath = decodeURIComponent(request.url.slice('localfont://'.length));
    return net.fetch('file://' + filePath);
  });

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// ── IPC handlers ─────────────────────────────────────────

ipcMain.handle('win-close',    () => mainWindow.close());
ipcMain.handle('win-minimize', () => mainWindow.minimize());
ipcMain.handle('win-maximize', () => {
  mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize();
});
ipcMain.handle('win-is-maximized', () => mainWindow.isMaximized());

ipcMain.handle('get-system-fonts', () => {
  const all = [];
  for (const dir of SYSTEM_FONT_DIRS) all.push(...scanFonts(dir));
  return all;
});

ipcMain.handle('show-folder-dialog', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory'],
    title: 'Select Font Library Folder',
    buttonLabel: 'Link Folder',
  });
  if (result.canceled || !result.filePaths.length) return null;
  const folderPath = result.filePaths[0];
  return { folderName: path.basename(folderPath), files: scanFonts(folderPath) };
});

ipcMain.handle('open-project', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    title: 'Open Designr Project',
    buttonLabel: 'Open',
    filters: [{ name: 'Designr Project', extensions: ['designr'] }],
    properties: ['openFile'],
  });
  if (result.canceled || !result.filePaths.length) return null;
  const filePath = result.filePaths[0];
  return { filePath, data: fs.readFileSync(filePath, 'utf8') };
});

ipcMain.handle('save-project', async (event, jsonContent, defaultName, forceDialog) => {
  // forceDialog = true → always show save dialog (Save As)
  const result = await dialog.showSaveDialog(mainWindow, {
    defaultPath: path.join(os.homedir(), 'Desktop', (defaultName || 'My Design System') + '.designr'),
    filters: [{ name: 'Designr Project', extensions: ['designr'] }],
    title: 'Save Designr Project',
    buttonLabel: 'Save',
  });
  if (result.canceled) return null;
  fs.writeFileSync(result.filePath, jsonContent, 'utf8');
  return result.filePath;
});

ipcMain.handle('save-text-file', async (event, content, defaultName, ext, filterName) => {
  const result = await dialog.showSaveDialog(mainWindow, {
    defaultPath: path.join(os.homedir(), 'Desktop', defaultName),
    filters: [{ name: filterName || 'Text File', extensions: [ext || 'txt'] }],
    title: 'Export Tokens',
    buttonLabel: 'Export',
  });
  if (result.canceled) return false;
  fs.writeFileSync(result.filePath, content, 'utf8');
  return true;
});

ipcMain.handle('save-svg', async (event, svgContent, defaultName) => {
  const result = await dialog.showSaveDialog(mainWindow, {
    defaultPath: path.join(os.homedir(), 'Desktop', defaultName),
    filters: [{ name: 'SVG Image', extensions: ['svg'] }],
    title: 'Export Design System',
    buttonLabel: 'Export',
  });
  if (result.canceled) return false;
  fs.writeFileSync(result.filePath, svgContent, 'utf8');
  return true;
});
