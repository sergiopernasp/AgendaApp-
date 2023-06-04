import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasPorEstadoComponent } from './tareas-por-estado.component';

describe('TareasPorEstadoComponent', () => {
  let component: TareasPorEstadoComponent;
  let fixture: ComponentFixture<TareasPorEstadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareasPorEstadoComponent]
    });
    fixture = TestBed.createComponent(TareasPorEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
