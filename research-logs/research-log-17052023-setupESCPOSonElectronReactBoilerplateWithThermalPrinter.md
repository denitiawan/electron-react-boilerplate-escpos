[Back to Research Logs](https://github.com/denitiawan/research-electron-react-boilerplate-printthermal/blob/main/research-logs.md)

|Date|Assign|
|--|--|
|17-mei-2023|[Deni Setiawan](https://github.com/denitiawan)|
# Setup EscPos on Electron React Boilerplate with Thermal Printer


### Requirements
```
-- Node ----------------
node version : v16.14.2 
npm version  : 8.5.0

-- Electron ------------
Repository  : https://github.com/electron-react-boilerplate/electron-react-boilerplate
version     : v4.6.0 (Latest)
```

### Install escpo librarries
```
npm i escpos@3.0.0-alpha.6
npm i escpos-usb@3.0.0-alpha.4
npm i usb@1.9.2
```

### remove libs `escpos` `escpos-usb` `usb` on `root/package.json`
```
 "dependencies": {
    "electron-debug": "^3.2.0",
    "electron-log": "^4.4.8",
    "electron-updater": "^5.3.0",    
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.1",
    "react-thermal-printer": "^0.11.0",
    
    "escpos": "^3.0.0-alpha.6", // <-- remove
    "escpos-usb": "^3.0.0-alpha.4", // <-- remove
    "usb": "^1.9.2" // <-- remove
     
  },
```

### write libs `escpos` `escpos-usb` `usb` on `root/release/app/package.json`
```
  "dependencies": {    
    "escpos": "^3.0.0-alpha.6",
    "escpos-usb": "^3.0.0-alpha.4",    
    "usb": "^1.9.2"
  }  
```

#  Code implementation on `main.ts`
### Notes
- Print Text `printer.align('ct').text('By Deni Setiawan');`
- Print Barcode (CODE39) `printer.align('ct').barcode('CODE39', 'CODE39'); `
- Cut Papper `printer.cut();`
- Open Cashdrawer `printer.cashdraw(2);`
- Print QRCode `printer.align("ct").qrimage(qrUrl, function (err) { ...`

### Codes

```
ipcMain.on('ipc-escpos', async () => {
  console.log('IPC ESCPOS STARTING --------');
  try {  
   
    const escpos = require('escpos');   // import lib escpos            
    escpos.USB = require('escpos-usb'); // create usb adapter        
    console.log(escpos.USB.findPrinter());   // for see printer spesification (idVendor & idProduct)
    
    const device = new escpos.USB(4070, 33054); // register idVendor & idProduct printer        
    const printer = new escpos.Printer(device); // initialize printer       
      
    let qrUrl = 'https://github.com/denitiawan'; // url
   
    // templating
    device.open(() => {      
        
        // print text
        printer.align('lt').text('');
        printer.align('ct').text('Test Printing');
        printer.align('ct').text('Electron React Boilerplate');
        printer.align('lt').text('');

        printer.align('ct').text('By Deni Setiawan');
        printer.align('ct').text('NexSOFT');                
        printer.align('lt').text('');

        printer.align('ct').text('Feature Support : ');
        printer.align('ct').text('Printout Text');
        printer.align('ct').text('Printout Barcode (CODE39)');
        printer.align('ct').text('Printout QR Code');
        printer.align('ct').text('Cut Papper');
        printer.align('ct').text('Open Cash Drawer');                
        printer.align('lt').text('');       
        
        // print barcode
        printer.align('ct').barcode('CODE39', 'CODE39'); 
        printer.align('ct').text('');
        
        // print qrcode
        printer.align('ct').text('Scan Me').style('B');
        printer.align("ct").qrimage(qrUrl, function (err) { 
          printer.align('ct').text(qrUrl);  
          printer.align('ct').text('');
          printer.align('ct').text('');
          printer.cut(); 
          printer.close(); 
        });
        
        // print action
        printer.cut(); 
        printer.cashdraw(2); 
        printer.close();     
      });            
     }
     catch (error) {    
      console.log(error);
    }    
});

```

#  Code implementation on renderClass
- PrinterEscPosService.js
```
export const PrinterEscPosService = {
  doPrint() {    
    window.electron.ipcRenderer.sendMessage('ipc-escpos');    
  },
};
```

- PrinterComponent.tsx
```
import { PrinterEscPosService } from './PrinterEscPosService';

export default function PrinterComponent() {
  function doTestPrint() {    
    PrinterEscPosService.doPrint();
  }

  return (
    <div>
      <button type="button" onClick={() => doTestPrint()}>
        Test Printing
      </button>
      <br />      
    </div>
  );
}

```
- App.tsx
```
import './App.css';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import PrinterComponent from './printhermal/PrinterComponent';
function Hello() {
  return (
    <div>      
      <h1>Electron React Boilerplate</h1>
      <h2>v4.6.0 (Latest)</h2>
      <br/>      
      <br/>      
      <PrinterComponent />            
      
  </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}

```


#  Result
- Layout
- ![image](https://github.com/denitiawan/research-electron-react-boilerplate-printthermal/assets/11941308/c3766059-55b3-40fe-ab6c-746a0732bf3a)

- Test Printing `Text` `Barcode` `QrCode` `Cut Papper`
- ![image](https://github.com/denitiawan/research-electron-react-boilerplate-printthermal/assets/11941308/366e1a2b-75ba-4367-9f10-ac891111f37f)

- Automatic open cash drawer 
- ![image](https://github.com/denitiawan/research-electron-react-boilerplate-printthermal/assets/11941308/3d80eb77-30ec-465a-a0ab-95be98bc20bf)



# Notes
### Solving problem  `usb.on` 
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

### Solving problem `printer only work in first times`
```
if your printer is 'Thermal Printer' using 'printer.close();'
if your printer is 'Dot Matrix Printer' using 'printer.flush();'

----------------------------
see the code implementation on below:
- Thermal Printer:
    .....
    printer.cut(); 
    printer.cashdraw(2);
    printer.close();        
        
- Dot Matrix Printer:
    .....
    printer.cut(); 
    printer.cashdraw(2);
    printer.flush();                    
```
###  Example of codes for get idVendor & idProduct Printer for initialize  the printer
```
---- code --------
console.log(escpos.USB.findPrinter());

---- logs --------
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
### VSC TM-801 Printer barcode type support
```
After testing printout barcode on VSC TM-801(nexSOFT) Printer, this printer only support for barcodeType :
- Support     : CODE39
- Not Support : ITF, EAN8, UPC-E
```

### QRCode example code
impelement QrCode command, must end of code, because qrcode command, have implement .cut and .close
```
....
....
printer.align("ct").qrimage('https://www.google.com', function (err) {                          
  printer.cut(); 
  printer.close();
});
```



