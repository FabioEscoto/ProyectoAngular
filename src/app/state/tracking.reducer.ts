import { createReducer, on } from '@ngrx/store';
import { agregarTracking } from './tracking.actions';

export interface TrackingState {
  [tag: string]: number;
}

export const initialState: TrackingState = {};

export const trackingReducer = createReducer(
  initialState,
  on(agregarTracking, (state, { tag }) => ({
    ...state,
    [tag]: (state[tag] || 0) + 1
  }))
);
