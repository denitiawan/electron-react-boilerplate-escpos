



export const escposUtils = {
    doPrint() {    
    
        const escpos = require('escpos');  

        // create usb adapter
        escpos.USB = require('escpos-usb');
        
        // console log printer spesification
        let listPrinter = escpos.USB.findPrinter()
        console.log(listPrinter);
        
        //https://github.com/song940/node-escpos/blob/v3/packages/usb/README.md
        const device = new escpos.USB(4070, 33054);        

        
    },
  };
  