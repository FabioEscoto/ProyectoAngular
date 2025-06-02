// src/app/state/votacion.actions.ts
import { createAction, props } from '@ngrx/store';

export const agregarElemento = createAction(
  '[Votación] Agregar Elemento',
  props<{ nombre: string }>()
);
