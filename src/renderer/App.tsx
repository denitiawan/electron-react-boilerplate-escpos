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
