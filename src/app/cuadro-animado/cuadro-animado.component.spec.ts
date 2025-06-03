import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroAnimadoComponent } from './cuadro-animado.component';

describe('CuadroAnimadoComponent', () => {
  let component: CuadroAnimadoComponent;
  let fixture: ComponentFixture<CuadroAnimadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuadroAnimadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadroAnimadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
