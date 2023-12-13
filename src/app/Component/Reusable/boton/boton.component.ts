import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent {
  @Input() contenidoBoton: string = '';
  @Input() colorFondo: string = '';
  @Input() evento: Function | undefined;

  ejecutarEvento(event: Event) {
    if (this.evento && typeof this.evento === 'function') {
      this.evento(event);
    }
  }
}
