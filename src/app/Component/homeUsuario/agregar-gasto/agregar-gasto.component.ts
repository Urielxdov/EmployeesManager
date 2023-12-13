import { Component, EventEmitter, Output } from '@angular/core';
import { gastosUsuario } from 'src/app/interface/gastos.interface';

@Component({
  selector: 'app-agregar-gasto',
  templateUrl: './agregar-gasto.component.html',
  styleUrls: ['./agregar-gasto.component.css']
})
export class AgregarGastoComponent {

  @Output() registrarGasto = new EventEmitter<gastosUsuario>();

  gasto: string = '';
  monto: number = 0;
  cantidad: number = 0;

  constructor() {
    this.registrarGasto = new EventEmitter<gastosUsuario>();
  }

  ejecutarEvento(evento: Event) {
    console.log(this.registrarGasto)

    evento.preventDefault();

    const nuevoGasto: gastosUsuario = {
      gasto: this.gasto,
      monto: this.monto,
      cantidad: this.cantidad
    }

    this.registrarGasto.emit(nuevoGasto);
  }
}
