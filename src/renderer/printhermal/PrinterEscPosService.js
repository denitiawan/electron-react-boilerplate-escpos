

export const PrinterEscPosService = {
  doPrint() {    
    window.electron.ipcRenderer.sendMessage('ipc-escpos');    
  },
};
