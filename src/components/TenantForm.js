import React, { useState } from 'react';
import { addTenant } from '../db/indexedDb';

function TenantForm({ onAdd }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !amount) return alert('Please fill all fields.');

    const tenant = {
      id: Date.now(),
      name,
      amount: parseFloat(amount),
      date: new Date().toISOString(),
    };

    try {
      await addTenant(tenant);
      setName('');
      setAmount('');
      onAdd();
    } catch (error) {
      alert('Failed to add tenant: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tenant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rent Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Tenant</button>
    </form>
  );
}

export default TenantForm;
