
const escpos = require('escpos');
export const PrinterEscPosSmallService = {
  doPrint() {
    window.electron.ipcRenderer.sendMessage('ipc-escpos');    
  },
};