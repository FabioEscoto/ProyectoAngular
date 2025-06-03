import { createAction, props } from '@ngrx/store';

export const agregarTracking = createAction(
  '[Tracking] Agregar Tag',
  props<{ tag: string }>()
);
