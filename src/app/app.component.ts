import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component'; // <--- Importa esto

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterModule,      // <--- Necesario para router-outlet
    ListadoComponent   // <--- Necesario para <app-listado>
  ]
})
export class AppComponent {
  title = 'mi-proyecto-angular';
}




