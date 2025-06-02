import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private logueado = true; // puedes cambiar a false para probar

  estaLogueado(): boolean {
    return this.logueado;
  }
}
