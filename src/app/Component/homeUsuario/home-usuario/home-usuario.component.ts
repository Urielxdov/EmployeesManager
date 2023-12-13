import { Component } from '@angular/core';
import { gastosUsuario } from 'src/app/interface/gastos.interface';
import { usuario } from 'src/app/interface/usuario.interface';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.component.html',
  styleUrls: ['./home-usuario.component.css']
})
export class HomeUsuarioComponent {
  datosUsuario:usuario | null = null;
  
  constructor(private usuarioService : UsuarioService) {
    this.datosUsuario = this.usuarioService.getDatos();
    console.log(this.datosUsuario);
    
  }



}