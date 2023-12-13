import { Component } from '@angular/core';
import { gastosUsuario } from 'src/app/interface/gastos.interface';
import { usuario } from 'src/app/interface/usuario.interface';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-tabla-gastos',
  templateUrl: './tabla-gastos.component.html',
  styleUrls: ['./tabla-gastos.component.css']
})
export class TablaGastosComponent {
  tablaApartados = ["No", "Gasto", "Monto", "Cantidad", "Total"];
  gastosUsuario : gastosUsuario[] | null = null;
  datosUsuario : usuario | null = null;


  constructor(private usuarioService : UsuarioService) {
    this.datosUsuario = this.usuarioService.getDatos();
    console.log(this.datosUsuario);
    this.gastosUsuario = [
      {gasto:"Gasolina", monto:300, cantidad:3},
      {gasto:"libretas", monto:20, cantidad:30}
    ]
  }

  totalGastos(): number {
    let cantidadFinal:number | undefined = this.gastosUsuario?.reduce((suma, item) => suma+(item.cantidad*item.monto), 0);
    return cantidadFinal ? cantidadFinal : 0;
  }

  nuevoGasto():void {
    this.datosGasto = true;
  }

  agregarGasto(gasto : gastosUsuario):void {
    this.datosGasto = false;
    this.gastosUsuario?.push(gasto)
  }
  

  datosGasto : boolean = false;
}
