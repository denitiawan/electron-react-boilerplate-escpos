// const printer = require('electron-print');

// const { PosPrinter } = require('electron-pos-printer');
// const path = require('path');

const escpos = require('escpos');
export const PrinterEscPosSmallService = {
  doPrint() {
    const device = new escpos.USB();
    const options = { encoding: 'GB18030' /* default */ };
    const printer = new escpos.Printer(device, options);

    device.open(function (error) {
      printer
        .font('a')
        .align('ct')
        .style('bu')
        .size(1, 1)
        .text('The quick brown fox jumps over the lazy dog')
        .text('敏捷的棕色狐狸跳过懒狗')
        .barcode('1234567', 'EAN8')
        .table(['One', 'Two', 'Three'])
        .tableCustom(
          [
            { text: 'Left', align: 'LEFT', width: 0.33, style: 'B' },
            { text: 'Center', align: 'CENTER', width: 0.33 },
            { text: 'Right', align: 'RIGHT', width: 0.33 },
          ],
          { encoding: 'cp857', size: [1, 1] } // Optional
        )
        .qrimage('https://github.com/song940/node-escpos', function (err) {
          this.cut();
          this.close();
        });
    });
  },

  // doPrintNexPosOldVersion() {
  //   const device = new escpos.USB();
  //   const printer = new escpos.Printer(device);
  //   device.open(() => {
  //     printer.align('ct').style('B').text('Test');
  //     printer.cut();
  //     printer.cashdraw(2);
  //     printer.close();
  //     printer.flush();
  //   });
  // },
};
