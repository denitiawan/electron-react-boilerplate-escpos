[Back to Home](https://github.com/denitiawan/electron-react-boilerplate-printthermal/blob/main/README.md)

# 12-mei-2023
##  librarry NODE-ESCPOS  3.0.0-alpha.6
- name : NODE-ESCPOS 
- versi terakhir : 3.0.0-alpha.6
- last update/publish : 3 years ago
- link repo : https://github.com/song940/node-escpos#readme
- link issue : https://github.com/song940/node-escpos/issues

### kendala NODE-ESCPOS  :
- NODE-ESCPOS yang biasa digunakan pada electron lama, sudah 3 tahun tidak diupdate oleh pemiliknya/contributornya, kemungkinan lib sudah tidak cocok atau masih belum ketemu cara pakainya pada react-boilerplate ini.
- function yang ada pada librarry NODE-ESCPOS oleh main.ts / ipcMain gagal di panggil dan tidak ditemukan atau gagal di execute

### implementasi NODE-ESCPOS  :
- pada class main.ts buat function ipcMain.on('ipc-escpos')  , yang dimana nantinya class dan fungsi ini akan menjalankan perintah printhermal
- pada render class buat fungsi yang akan menuliskan kode , window.electron.ipcRenderer.sendMessage('ipc-escpos'); , dimana render class ini akan memerintahkan ipcMain untuk menjalankan fungsinya   

### spec project electron :
- node.js versi 16.4.2
- npm versi 8.5.2
- electron-react-boilerplate latest (mei 2023) https://github.com/electron-react-boilerplate/electron-react-boilerplate


# 15-mei-2023
## librarry NODE-ESCPOS  2.4.11

### install escpos 2.4.11
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
USB is not found on escpos variable


