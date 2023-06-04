import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Output() componenteSeleccionado = new EventEmitter<string>();

  mostrarComponente(nombreComponente: string) {
    // emit sirve para lanzar el evento
    this.componenteSeleccionado.emit(nombreComponente);
  }
}
