import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import FetchData from './FetchData';

function App() {
  const [itemsPerPage, setItemsPerPage] = useState(10);

  return (
    <div className="container mt-2">
      <h1>Table </h1>
      <FetchData itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />
    </div>
  );
}

export default App;
