// src/app/app.routes.ts (o donde tengas tus rutas)
import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { VotacionComponent } from './votacion/votacion.component';
import { ProtegidoComponent } from './protegido/protegido.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'parent', pathMatch: 'full' },
  { path: 'parent', component: ParentComponent },
  { path: 'votacion', component: VotacionComponent },

  // ✅ Ruta protegida con canActivate
  {
    path: 'protegido',
    component: ProtegidoComponent,
    canActivate: [AuthGuard]
  }
];


