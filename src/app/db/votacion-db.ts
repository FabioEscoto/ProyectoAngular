// src/app/db/votacion-db.ts
import Dexie, { Table } from 'dexie';

export interface Elemento {
  id?: number;
  nombre: string;
}

export class VotacionDB extends Dexie {
  elementos!: Table<Elemento, number>;

  constructor() {
    super('VotacionDatabase');
    this.version(1).stores({
      elementos: '++id,nombre'
    });
  }
}

export const db = new VotacionDB();
