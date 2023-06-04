import { Component } from '@angular/core';
import { TareaComponent } from './tarea/tarea.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listaTareas';
  componenteActual: string = 'app-documentacion';
  listaTareas: TareaComponent[] = [];

  mostrarComponente(nombreComponente: string) {
    this.componenteActual = nombreComponente;
  }

  agregarTarea(tarea: TareaComponent) {
    this.listaTareas.push(tarea);
    this.guardarListaTareas();
  }  

  guardarListaTareas() {
    localStorage.setItem('listaTareas', JSON.stringify(this.listaTareas));
  }

  obtenerListaTareas() {
    const listaTareasGuardada = localStorage.getItem('listaTareas');
    if (listaTareasGuardada) {
      this.listaTareas = JSON.parse(listaTareasGuardada);
    }
  }

  ngOnInit() {
    const tareasGuardadas = localStorage.getItem('listaTareas');
    if (tareasGuardadas) {
      this.listaTareas = JSON.parse(tareasGuardadas);
    }
  }
  
}

