import { openDB } from 'idb';

const DB_NAME = 'rent-manager';
const STORE_NAME = 'tenants';

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};

export const addTenant = async (tenant) => {
  const db = await initDB();
  await db.add(STORE_NAME, tenant);
};

export const getTenants = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};
