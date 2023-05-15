import { PrinterEscPosSmallService } from './PrinterEscPosSmallService';

export default function PrinterComponent() {
  function printer_deni() {    
    PrinterEscPosSmallService.doPrint();
  }
  function printer_nexSOFT() {    
  }

  return (
    <div>
      <button type="button" onClick={() => printer_deni()}>
        Test Print - Deni
      </button>
      <br />
      <br />
      <button type="button" onClick={() => printer_nexSOFT()}>
        Test Print - nexSOFT
      </button>
    </div>
  );
}
