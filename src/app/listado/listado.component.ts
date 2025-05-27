import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component'; // ✅ Importa el hijo si lo usas en el template

@Component({
  selector: 'app-listado',
  standalone: true,
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  imports: [CommonModule, ChildComponent] // ✅ importa el hijo si lo usas aquí
})
export class ListadoComponent {
  @HostBinding('class') class = 'd-block mt-4';

  elementos: string[] = ['Angular', 'React', 'Vue'];

  agregarElemento(valor: string) {
    if (valor.trim()) {
      this.elementos.push(valor.trim());
    }
  }

  // ✅ Agrega este método para resolver el error
  manejarEvento(evento: any) {
    console.log('Evento recibido:', evento);
    // Aquí puedes hacer algo con los datos, como agregarlos a `elementos` si lo deseas.
  }
}
