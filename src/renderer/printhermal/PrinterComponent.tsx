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
