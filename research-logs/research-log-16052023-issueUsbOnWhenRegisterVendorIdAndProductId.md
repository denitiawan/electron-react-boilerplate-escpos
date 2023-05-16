[Back to Research Logs](https://github.com/denitiawan/research-electron-react-boilerplate-printthermal/blob/main/research-logs.md)

# 16-mei-2023 - Issue usb.on when register idVendor and idProduct Printer

### Librarry
```
npm i escpos@2.4.11
npm i escpos-usb
```

##  code implementation on `main.ts`
```
    // import escpos
    const escpos = require('escpos');  

    // create usb adapter
    escpos.USB = require('escpos-usb');
    
    // console log printer spesification
    let listPrinter = escpos.USB.findPrinter()
    console.log(listPrinter);

    //https://github.com/song940/node-escpos/blob/v3/packages/usb/README.md
    // register idVendor & idProduct printer
    const device = new escpos.USB(4070, 33054);
```
### logs
```
IPC ESCPOS STARTING --------
[
  {
    busNumber: 1,
    deviceAddress: 1,
    deviceDescriptor: {
      bLength: 18,
      bDescriptorType: 1,
      bcdUSB: 512,
      bDeviceClass: 0,
      bDeviceSubClass: 0,
      bDeviceProtocol: 0,
      bMaxPacketSize0: 64,
      idVendor: 4070,
      idProduct: 33054,
      bcdDevice: 256,
      iManufacturer: 0,
      iProduct: 2,
      iSerialNumber: 0,
      bNumConfigurations: 1
    },
    portNumbers: [ 2 ]
  }
]
TypeError: usb.on is not a function
    at new USB (C:\Users\Deni Setiawan\Data\github\denitiawan\research-electron-react-boilerplate-printthermal\node_modules\escpos-usb\index.js:52:7)
    at IpcMainImpl.<anonymous> (C:\Users\Deni Setiawan\Data\github\denitiawan\research-electron-react-boilerplate-printthermal\src\main\main.ts:47:20)
    at IpcMainImpl.emit (node:events:513:28)
    at IpcMainImpl.emit (node:domain:489:12)
    at EventEmitter.<anonymous> (node:electron/js2c/browser_init:2:80713)
    at EventEmitter.emit (node:events:513:28)
    at EventEmitter.emit (node:domain:489:12)
```
### issue analyst (by logs)
- success for import lib escpos
- success for creating USB adapter
- success for console.log list of printer (connected to windows OS)
- failed for register idVendor & idProduct printer to `escpos` librarry 
```
....
TypeError: usb.on is not a function
    at new USB (C:\Users\Deni Setiawan\Data\github\denitiawan\research-electron-react-boilerplate-printthermal\node_modules\escpos-usb\index.js:52:7)
    ....
```
