import { createFeatureSelector } from '@ngrx/store';
import { TrackingState } from './tracking.reducer';

export const selectTracking = createFeatureSelector<TrackingState>('tracking');
