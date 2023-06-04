import { Component, Input } from '@angular/core';
import { TareaComponent } from '../tarea/tarea.component';

@Component({
  selector: 'app-tareas-por-fecha',
  templateUrl: './tareas-por-fecha.component.html',
  styleUrls: ['./tareas-por-fecha.component.css']
})
export class TareasPorFechaComponent {
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

  alternarMostrarPendientes() {
    this.mostrarPendientes = !this.mostrarPendientes;
  }
}


