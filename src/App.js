import React, { useState } from 'react';
import TenantForm from './components/TenantForm';
import TenantList from './components/TenantList';
import './App.css';

function App() {
  const [reload, setReload] = useState(false);

  return (
    <div className="app">
      <h2>Rent Manager</h2>
      <TenantForm onAdd={() => setReload(!reload)} />
      <TenantList reload={reload} />
    </div>
  );
}

export default App;
