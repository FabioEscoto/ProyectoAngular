import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    // otros providers
    provideAnimations()
  ]
};

import { provideStore } from '@ngrx/store';
import { trackingReducer } from './state/tracking.reducer';
import { votacionReducer } from './state/votacion.reducer';

provideStore({
  votacion: votacionReducer,
  tracking: trackingReducer
});

