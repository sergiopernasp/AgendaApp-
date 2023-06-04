import { Component, Input } from '@angular/core';
import { TareaComponent } from '../tarea/tarea.component';

@Component({
  selector: 'app-tareas-por-estado',
  templateUrl: './tareas-por-estado.component.html',
  styleUrls: ['./tareas-por-estado.component.css']
})
export class TareasPorEstadoComponent {
  @Input() listaTareas: TareaComponent[] = [];
  mostrarPendientes: boolean = false;

  ngOnInit() {
    this.ordenarTareasPorFecha();
  }

  ordenarTareasPorFecha() {
    this.listaTareas.sort((a, b) => {
      const fechaA = new Date(a.fecha).getTime();
      const fechaB = new Date(b.fecha).getTime();
      return fechaA - fechaB;
    });
  }

  borrarTarea(tarea: TareaComponent) {
    const index = this.listaTareas.indexOf(tarea);
    this.listaTareas.splice(index, 1);
    this.actualizarAlmacenamientoLocal();
  }

  actualizarAlmacenamientoLocal() {
    localStorage.setItem('listaTareas', JSON.stringify(this.listaTareas));
  }

  cambiarEstadoTarea(estado: string, tarea: TareaComponent) {
    tarea.estado = estado;
    this.actualizarAlmacenamientoLocal();
  }
}
