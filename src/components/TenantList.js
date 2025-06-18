import React, { useEffect, useState } from 'react';
import { getTenants } from '../db/indexedDb';

function TenantList({ reload }) {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getTenants();
      setTenants(data.reverse());
    };
    load();
  }, [reload]);

  return (
    <div className="list">
      {tenants.map(t => (
        <div key={t.id} className="tenant-card">
          <h4>{t.name}</h4>
          <p>Rent: ${t.amount}</p>
          <small>{t.date}</small>
        </div>
      ))}
    </div>
  );
}

export default TenantList;
