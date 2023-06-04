import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DocumentacionComponent } from './documentacion/documentacion.component';
import { TareasPorFechaComponent } from './tareas-por-fecha/tareas-por-fecha.component';
import { TareasPorEstadoComponent } from './tareas-por-estado/tareas-por-estado.component';
import { TareaComponent } from './tarea/tarea.component';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DocumentacionComponent,
    TareasPorFechaComponent,
    TareasPorEstadoComponent,
    TareaComponent,
    AgregarTareaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
