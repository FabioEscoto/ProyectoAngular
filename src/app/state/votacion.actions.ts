// src/app/state/votacion.actions.ts
import { createAction, props } from '@ngrx/store';

export const agregarElemento = createAction(
  '[Votacion] Agregar Elemento',
  props<{ nombre: string }>()
);

export const eliminarElemento = createAction(
  '[Votacion] Eliminar Elemento',
  props<{ id: number }>()
);

export const votarFavor = createAction(
  '[Votacion] Voto a Favor',
  props<{ id: number }>()
);

export const votarContra = createAction(
  '[Votacion] Voto en Contra',
  props<{ id: number }>()
);
