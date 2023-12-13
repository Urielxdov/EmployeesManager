import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  nombreApp:string = "Probando";
  constructor(private router : Router, private usuarioService : UsuarioService) {}

  irInicio() {
    if(this.usuarioService.usuario()) {
      this.router.navigate(['/home'])
    } else {
      this.router.navigate(['/'])
    }
    
  }
}
