// src/app/services/votacion.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { agregarElemento } from '../state/votacion.actions';
import { db, Elemento } from '../db/votacion-db';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VotacionService {
  private apiUrl = 'http://localhost:3000/elementos'; // URL de tu API Express

  constructor(private http: HttpClient, private store: Store) {}

  agregarElemento(nombre: string) {
    const nuevoElemento: Elemento = { nombre };

    // Enviar al backend
    this.http.post<Elemento>(this.apiUrl, nuevoElemento).pipe(
      catchError(error => {
        console.error('Error al agregar al API', error);
        return of(null); // Devuelve null si falla
      })
    ).subscribe(async (respuesta) => {
      if (respuesta) {
        // ✅ 1. Notificar a Redux
        this.store.dispatch(agregarElemento({ nombre: respuesta.nombre }));

        // ✅ 2. Guardar localmente en Dexie
        await db.elementos.add({ nombre: respuesta.nombre });
        console.log('Guardado en API y Dexie:', respuesta.nombre);
      }
    });
  }

  // Opcional: cargar desde Dexie local
  async cargarLocal(): Promise<Elemento[]> {
    return await db.elementos.toArray();
  }
}
