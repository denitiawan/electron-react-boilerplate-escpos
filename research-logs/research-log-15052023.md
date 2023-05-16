[Back to Research Logs](https://github.com/denitiawan/research-electron-react-boilerplate-printthermal/blob/main/research-logs.md)

# 15-mei-2023 - Trial & error NODE-ESCPOS  2.4.11
## librarry NODE-ESCPOS  2.4.11

### npm install 
```
npm i escpos@2.4.11
npm i escpos-usb
npm install serialport
```

### code implementation on `main.ts`
```
     ipcMain.on('ipc-escpos', async () => {
       console.log('IPC ESCPOS STARTING');
       // --------------------
       try {
             const escpos = require('escpos');
             const device = new escpos.USB();
             const printer = new escpos.Printer(device);
             device.open(() => {
               printer.align('lt').text('test');

               printer.cut();
               printer.cashdraw(2);
               printer.close();
               printer.flush();

             });
          }
          catch (error) {    
           console.log(error);
         }
     });
```

### code implatementation on render class
calling ipc-escpos name, for executing the printing function
```
export const PrinterEscPosSmallService = {
  doPrint() {
    window.electron.ipcRenderer.sendMessage('ipc-escpos');    
  },
};
```

### log error when executing the printing function (ESCPOS 2.4.11)
```
IPC ESCPOS STARTING
TypeError: usb.on is not a function
    at new USB (C:\Users\Deni Setiawan\Data\github\denitiawan\research-electron-react-boilerplate-printthermal\node_modules\escpos\adapter\usb.js:52:7)
    at IpcMainImpl.<anonymous> (C:\Users\Deni Setiawan\Data\github\denitiawan\research-electron-react-boilerplate-printthermal\src\main\main.ts:36:24)
    at IpcMainImpl.emit (node:events:513:28)
    at IpcMainImpl.emit (node:domain:489:12)
    at EventEmitter.<anonymous> (node:electron/js2c/browser_init:2:80713)
    at EventEmitter.emit (node:events:513:28)
    at EventEmitter.emit (node:domain:489:12)
--------------------------    
IPC ESCPOS STARTING
Error: Cannot find module 'serialport'
Require stack:
- C:\Users\Deni Setiawan\Data\github\denitiawan\research-electron-react-boilerplate-printthermal\node_modules\escpos\adapter\serial.js
- C:\Users\Deni Setiawan\Data\github\denitiawan\research-electron-react-boilerplate-printthermal\node_modules\escpos\index.js
- C:\Users\Deni Setiawan\Data\github\denitiawan\research-electron-react-boilerplate-printthermal\src\main\main.ts
- C:\Users\Deni Setiawan\Data\github\denitiawan\research-electron-react-boilerplate-printthermal\node_modules\electron\dist\resources\default_app.asar\main.js
----------------------------
IPC ESCPOS STARTING
Error: Can not find printer
    at new USB (C:\Users\Deni Setiawan\Data\github\denitiawan\research-electron-react-boilerplate-printthermal\node_modules\escpos-usb\index.js:50:11)
    at IpcMainImpl.<anonymous> (C:\Users\Deni Setiawan\Data\github\denitiawan\research-electron-react-boilerplate-printthermal\src\main\main.ts:37:21)
    at IpcMainImpl.emit (node:events:513:28)
    at IpcMainImpl.emit (node:domain:489:12)
    at EventEmitter.<anonymous> (node:electron/js2c/browser_init:2:80713)
    at EventEmitter.emit (node:events:513:28)
    at EventEmitter.emit (node:domain:489:12)
[20808:0515/163518.053:ERROR:gpu_init.cc(523)] Passthrough is not supported, GL is disabled, ANGLE is 

```
- USB is not found on escpos variable
- Cannot find module 'serialport'
- Can not find printer


