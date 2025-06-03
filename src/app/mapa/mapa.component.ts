import { Component } from '@angular/core';
import { NgxMapboxGLModule, MapboxPopup } from 'ngx-mapbox-gl';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [CommonModule, NgxMapboxGLModule],
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {
  lat = -34.6037;
  lng = -58.3816;

  mostrarMensaje(): string {
    return '¡Hiciste clic en el marcador!';
  }
}

