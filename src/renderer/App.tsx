import './App.css';

import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';

import PrinterComponent from './printhermal/PrinterComponent';

function Hello() {
  return (
     <div>
      <div className="Hello">
        <PrinterComponent />
      </div>
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
