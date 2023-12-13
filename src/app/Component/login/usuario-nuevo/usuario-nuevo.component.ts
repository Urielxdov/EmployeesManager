import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { usuario } from 'src/app/interface/usuario.interface';
import { usuarioRegistrado } from 'src/app/interface/usuarioRegistrado.interfcae';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrls: ['./usuario-nuevo.component.css']
})
export class UsuarioNuevoComponent {
  correoUsuario: string = '';
  password: string = '';

  constructor(private usuarioService: UsuarioService) {
    this.registrarUsuarioNuevo = this.registrarUsuarioNuevo.bind(this);
  }

  registrarUsuarioNuevo(event: Event) {
    event.preventDefault();
    const usuario: usuarioRegistrado = {
      correo: this.correoUsuario,
      password: this.password
    };

    this.usuarioService.solicitarUsuario(usuario).subscribe(
      (response: usuario) => {
        console.log('Usuario registrado con éxito:', response);
        // Aquí puedes realizar acciones adicionales después de registrar el usuario
      },
      (error: HttpErrorResponse) => {
        console.error('Error al registrar el usuario:', error);
        // Aquí puedes manejar el error de la solicitud
      }
    );
  }
}
