import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPadreComponent } from './formulario-padre.component';

describe('FormularioPadreComponent', () => {
  let component: FormularioPadreComponent;
  let fixture: ComponentFixture<FormularioPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPadreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
