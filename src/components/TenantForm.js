import React, { useState } from 'react';
import { addTenant } from '../db/indexedDb';

function TenantForm({ onAdd }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !amount) return;

    const tenant = { name, amount, date: new Date().toLocaleDateString() };
    await addTenant(tenant);
    onAdd();
    setName('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Tenant Name" />
      <input value={amount} onChange={e => setAmount(e.target.value)} placeholder="Rent Amount" type="number" />
      <button type="submit">Add Tenant</button>
    </form>
  );
}

export default TenantForm;
