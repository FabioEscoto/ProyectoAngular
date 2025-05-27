// src/app/state/votacion.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { agregarElemento, eliminarElemento, votarFavor, votarContra } from './votacion.actions';
import { VotacionState, initialState } from './votacion.state';

let idCounter = 1;

export const votacionReducer = createReducer(
  initialState,
  on(agregarElemento, (state, { nombre }) => ({
    ...state,
    elementos: [...state.elementos, { id: idCounter++, nombre, votos: 0 }]
  })),
  on(eliminarElemento, (state, { id }) => ({
    ...state,
    elementos: state.elementos.filter(e => e.id !== id)
  })),
  on(votarFavor, (state, { id }) => ({
    ...state,
    elementos: state.elementos.map(e =>
      e.id === id ? { ...e, votos: e.votos + 1 } : e
    )
  })),
  on(votarContra, (state, { id }) => ({
    ...state,
    elementos: state.elementos.map(e =>
      e.id === id ? { ...e, votos: e.votos - 1 } : e
    )
  }))
);
