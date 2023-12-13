import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { usuarioRegistrado } from '../interface/usuarioRegistrado.interfcae';
import { usuarioNuevo } from '../interface/usuarioNuevo.interface';
import { usuario } from '../interface/usuario.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private api = 'http://localhost:3000/api/';
  public usuarioRegistrado: usuario | null = null;

  constructor(private http: HttpClient) {
    this.usuarioRegistrado = {
      nombre : "uri",
      apellido : "Galvan",
      correo : "si"
    }
  }

  solicitarUsuario(usuario: usuarioRegistrado): Observable<usuario> {
    const direccion = `${this.api}registrado`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<usuario>(direccion, usuario, { headers })
      .pipe(
        tap((response: usuario) => this.usuarioRegistrado = response)
      );
  }

  registrarUsuario(usuario: usuarioNuevo): Observable<usuario> {
    const direccion = `${this.api}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<usuario>(direccion, usuario, { headers })
      .pipe(
        tap((response: usuario) => this.usuarioRegistrado = response)
      );
  }

  getDatos(): usuario | null {
    if(this.usuarioRegistrado) {
      return this.usuarioRegistrado;
    }
    return null;
  }

  usuario():boolean {
    return this.usuarioRegistrado!=null;
  }
}
