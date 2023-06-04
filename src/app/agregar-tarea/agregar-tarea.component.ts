import { Component, EventEmitter, Output } from '@angular/core';
import { TareaComponent } from '../tarea/tarea.component';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.css']
})
export class AgregarTareaComponent {
  titulo: string = '';
  fecha: string = '';
  hora: string = '';
  descripcion: string = '';
  estado: string = '';

  @Output() tareaAgregada = new EventEmitter<TareaComponent>();

  agregar() {
    const tarea: TareaComponent = new TareaComponent();
    tarea.titulo = this.titulo;
    tarea.fecha = new Date(this.fecha + ' ' + this.hora);
    tarea.descripcion = this.descripcion;
    tarea.estado = this.estado;

    this.tareaAgregada.emit(tarea);
    this.resetForm();
  }

  resetForm() {
    this.titulo = '';
    this.fecha = '';
    this.hora = '';
    this.descripcion = '';
    this.estado = '';
  }
}
