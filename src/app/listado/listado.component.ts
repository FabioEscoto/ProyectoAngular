import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ IMPORTANTE

@Component({
  selector: 'app-listado',
  standalone: true, // ✅ Si estás usando standalone, importa módulos manualmente
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  imports: [CommonModule] // ✅ Importa CommonModule aquí
})
export class ListadoComponent {
  @HostBinding('class') class = 'd-block mt-4';

  elementos: string[] = ['Angular', 'React', 'Vue'];

  agregarElemento(valor: string) {
    if (valor.trim()) {
      this.elementos.push(valor.trim());
    }
  }
}
