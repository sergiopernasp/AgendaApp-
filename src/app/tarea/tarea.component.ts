import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  @Input() titulo: string = '';
  @Input() fecha: Date = new Date();
  @Input() descripcion: string = '';
  @Input() estado: string = '';
  @Output() tareaBorrada = new EventEmitter<void>();
  @Output() estadoTareaCambiado = new EventEmitter<string>();


  borrarTarea() {
    this.tareaBorrada.emit();
  }
  
  cambiarEstado() {
    this.estado = (this.estado === 'Pendiente') ? 'Realizada' : 'Pendiente';
    this.estadoTareaCambiado.emit(this.estado);
  }
}

