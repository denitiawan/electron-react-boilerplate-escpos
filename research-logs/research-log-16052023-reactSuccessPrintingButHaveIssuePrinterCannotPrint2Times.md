[Back to Research Logs](https://github.com/denitiawan/research-electron-react-boilerplate-printthermal/blob/main/research-logs.md)

# 16-mei-2023 - React success printing but have issue the printer cannot print 2 times

### Librarry
```
npm i escpos@3.0.0-alpha.4
npm i escpos-usb@3.0.0-alpha.4
npm i usb@1.9.2
```

## Solving issue : usb.on
```
    /**
     * solving issue usb.on : 
     * - npm install usb@1.9.2
     * - https://github.com/song940/node-escpos/issues/376
     */

    /**
     * registration idVendor & idProduct printer
     * - https://github.com/song940/node-escpos/blob/v3/packages/usb/README.md
     */
```

##  Code implementation on `main.ts`
```
ipcMain.on('ipc-escpos', async () => {
  console.log('IPC ESCPOS STARTING --------');
  // --------------------
  try {               

    const escpos = require('escpos');   // import lib escpos    
    escpos.USB = require('escpos-usb'); // create usb adapter    
    let listPrinter = escpos.USB.findPrinter() // console log printer spesification
    console.log(listPrinter);

    const device = new escpos.USB(4070, 33054); // register idVendor & idProduct Printer
    const printer = new escpos.Printer(device); // printer
    device.open(() => {
        printer.align('lt').text('');
        printer.align('lt').text('16-05-2023 15:13');        
        printer.align('lt').text('Test Printing From React');
        printer.align('lt').text('By Deni Setiawan');
        printer.align('lt').text('NexSOFT');
        printer.align('lt').text('');
  
        printer.cut(); // cutting papper function
        printer.cashdraw(2); // open cashdrawer function
        printer.close(); // close printer
        printer.flush(); // flush printer
  
      });   

     }
     catch (error) {    
      console.log(error);
    }
});

```

### Console logs
```
IPC ESCPOS STARTING --------
[
  Device {
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
    portNumbers: [ 2 ],
    _configDescriptor: {
      bLength: 9,
      bDescriptorType: 2,
      wTotalLength: 32,
      bNumInterfaces: 1,
      bConfigurationValue: 1,
      iConfiguration: 0,
      bmAttributes: 160,
      bMaxPower: 50,
      extra: <Buffer >,
      interfaces: [Array]
    }
  }
]
```
### Success
- success for import lib escpos
- success for creating USB adapter
- success for console.log list of printer (connected to windows OS)
- success for register idVendor & idProduct printer to `escpos` librarry 
- success for printout 

![image](https://github.com/denitiawan/research-electron-react-boilerplate-printthermal/assets/11941308/28fd4512-3827-4b37-b428-2d6fb2136fe5)


### Issues
- Issue printer cannot printout 2 times
```
I must unplug and pluged the printer, and then I hit again printing function from react,  and printer can work again!
```


