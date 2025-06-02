import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { agregarElemento } from '../state/votacion.actions';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElementosService {
  private http = inject(HttpClient);
  private store = inject(Store);

  private apiUrl = 'http://localhost:3000/elementos';

  obtenerElementos() {
    return this.http.get<string[]>(this.apiUrl);
  }

  agregarElemento(nombre: string) {
    return this.http.post(this.apiUrl, { nombre }).pipe(
      tap(() => {
        // 👇 Despachar Action a NgRx si el POST fue exitoso
        this.store.dispatch(agregarElemento({ nombre }));
      })
    );
  }
}
