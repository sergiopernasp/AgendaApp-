import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasPorFechaComponent } from './tareas-por-fecha.component';

describe('TareasPorFechaComponent', () => {
  let component: TareasPorFechaComponent;
  let fixture: ComponentFixture<TareasPorFechaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareasPorFechaComponent]
    });
    fixture = TestBed.createComponent(TareasPorFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
