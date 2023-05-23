

export const PrinterEscPosService = {
  doTestPrinter80() {    
    window.electron.ipcRenderer.sendMessage('ipc-escpos-printer-80');    
  },
  doTestPrinter58() {    
    window.electron.ipcRenderer.sendMessage('ipc-escpos-printer-58');    
  },
};
