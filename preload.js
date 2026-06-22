const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  isElectron: true,

  // Window controls
  winClose:       () => ipcRenderer.invoke('win-close'),
  winMinimize:    () => ipcRenderer.invoke('win-minimize'),
  winMaximize:    () => ipcRenderer.invoke('win-maximize'),
  winIsMaximized: () => ipcRenderer.invoke('win-is-maximized'),
  onWindowMaximized: (cb) => ipcRenderer.on('window-maximized', (_e, val) => cb(val)),

  // Fonts & dialogs
  getSystemFonts:   ()          => ipcRenderer.invoke('get-system-fonts'),
  showFolderDialog: ()          => ipcRenderer.invoke('show-folder-dialog'),
  saveSVG:          (svg, name) => ipcRenderer.invoke('save-svg', svg, name),
  fontFileUrl: (filePath) =>
    'localfont://' + filePath.split('/').map(s => encodeURIComponent(s)).join('/'),

  // Project save / load
  openProject: ()                        => ipcRenderer.invoke('open-project'),
  openProjectPath: (filePath)            => ipcRenderer.invoke('open-project-path', filePath),
  saveProject: (json, name, forceDialog) => ipcRenderer.invoke('save-project', json, name, forceDialog),
  saveTextFile: (content, name, ext, filterName) => ipcRenderer.invoke('save-text-file', content, name, ext, filterName),

  // Menu
  onMenuNew:    (cb) => ipcRenderer.on('menu-new',    cb),
  onMenuOpen:   (cb) => ipcRenderer.on('menu-open',   cb),
  onMenuSave:   (cb) => ipcRenderer.on('menu-save',   cb),
  onMenuSaveAs: (cb) => ipcRenderer.on('menu-save-as', cb),
  onMenuExport: (cb) => ipcRenderer.on('menu-export', cb),
  onMenuUndo:   (cb) => ipcRenderer.on('menu-undo',   cb),
});
