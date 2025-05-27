import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { VotacionComponent } from './votacion/votacion.component';

export const routes: Routes = [
  { path: '', redirectTo: 'parent', pathMatch: 'full' },
  { path: 'parent', component: ParentComponent },
  { path: 'votacion', component: VotacionComponent }
];


