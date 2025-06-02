// src/app/state/votacion.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { agregarElemento } from './votacion.actions';

export const estadoInicial: string[] = [];

export const votacionReducer = createReducer(
  estadoInicial,
  on(agregarElemento, (state, { nombre }) => [...state, nombre])
);
