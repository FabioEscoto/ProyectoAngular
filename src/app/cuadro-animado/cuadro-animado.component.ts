import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-cuadro-animado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cuadro-animado.component.html',
  styleUrls: ['./cuadro-animado.component.css'],
  animations: [
    trigger('cambiarColor', [
      state('rojo', style({ backgroundColor: 'red' })),
      state('verde', style({ backgroundColor: 'green' })),
      transition('rojo <=> verde', [animate('500ms ease-in-out')])
    ])
  ]
})
export class CuadroAnimadoComponent {
  color = 'rojo';

  toggleColor() {
    this.color = this.color === 'rojo' ? 'verde' : 'rojo';
  }
}

