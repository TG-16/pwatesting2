import React, { useEffect, useState } from 'react';
import { getTenants } from '../db/indexedDb';

function TenantList({ reload }) {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getTenants();
        // Sort by date descending (newest first)
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setTenants(sorted);
      } catch (error) {
        console.error('Failed to load tenants:', error);
      }
    };
    load();
  }, [reload]);

  if (tenants.length === 0) return <p>No tenants added yet.</p>;

  return (
    <div className="list">
      {tenants.map(t => (
        <div key={t.id} className="tenant-card">
          <h4>{t.name}</h4>
          <p>Rent: ${t.amount}</p>
          <small>{new Date(t.date).toLocaleDateString()}</small>
        </div>
      ))}
    </div>
  );
}

export default TenantList;
