[Back to Research Logs](https://github.com/denitiawan/research-electron-react-boilerplate-printthermal/blob/main/research-logs.md)

# 15-mei-2023 - Print Printer Spesification

### Librarry
```
npm i escpos@2.4.11
npm i escpos-usb
npm install serialport
```

## 1. Printer VSC TM 801 (nexSOFT)
```
// import lib escpos
const escpos = require('escpos');  

// create usb adapter
escpos.USB = require('escpos-usb');
    
// console log printer spesification
console.log(escpos.USB.findPrinter());
```
### Console log
```
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
```

## 2. Printer C58BT (Deni)
```
// import lib escpos
const escpos = require('escpos');  

// create usb adapter
escpos.USB = require('escpos-usb');
    
// console log printer spesification
console.log(escpos.USB.findPrinter());
```
### Console log
```
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
      idVendor: 2501,
      idProduct: 22750,
      bcdDevice: 256,
      iManufacturer: 1,
      iProduct: 2,
      iSerialNumber: 0,
      bNumConfigurations: 1
    },
    portNumbers: [ 2 ]
  }
]
```

