// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { API_BASE_URL } from './app/app-config.token';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: API_BASE_URL, useValue: 'http://localhost:3000/api' }
  ]
});



