// src/app/listado/listado.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado',
  standalone: true,
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  private store = inject(Store<{ votacion: string[] }>);
  elementos$: Observable<string[]> = this.store.select('votacion');

  ngOnInit() {}

  agregar(nombre: string) {
    // Aquí puedes llamar al servicio que agrega y despacha
  }
}
