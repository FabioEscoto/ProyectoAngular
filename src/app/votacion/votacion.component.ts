import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-votacion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './votacion.component.html',
  styleUrls: ['./votacion.component.css']
})
export class VotacionComponent {
  nuevoNombre = '';
  elementos: { nombre: string; votos: number }[] = [];

  agregar() {
    if (this.nuevoNombre.trim()) {
      this.elementos.push({ nombre: this.nuevoNombre, votos: 0 });
      this.nuevoNombre = '';
    }
  }

  votar(index: number) {
    this.elementos[index].votos++;
  }

  votarNegativo(index: number) {
    this.elementos[index].votos--;
  }
}

