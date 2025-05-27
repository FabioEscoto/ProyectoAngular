// src/app/state/votacion.state.ts
export interface Elemento {
  id: number;
  nombre: string;
  votos: number;
}

export interface VotacionState {
  elementos: Elemento[];
}

export const initialState: VotacionState = {
  elementos: []
};
