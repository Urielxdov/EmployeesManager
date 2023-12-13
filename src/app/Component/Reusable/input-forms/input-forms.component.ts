import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-forms',
  templateUrl: './input-forms.component.html',
  styleUrls: ['./input-forms.component.css']
})
export class InputFormsComponent {
  @Input() imagenSvg: string = '';
  @Input() placeholder: string = '';
  @Input() valor:string | number = '';
}
