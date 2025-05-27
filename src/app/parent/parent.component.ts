import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  datosRecibidos: any;

  recibirDatos(evento: any) {
    this.datosRecibidos = evento;
    console.log('Datos recibidos del hijo:', this.datosRecibidos);
  }
}


