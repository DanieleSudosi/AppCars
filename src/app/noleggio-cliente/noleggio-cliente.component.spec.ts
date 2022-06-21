import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoleggioClienteComponent } from './noleggio-cliente.component';

describe('NoleggioClienteComponent', () => {
  let component: NoleggioClienteComponent;
  let fixture: ComponentFixture<NoleggioClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoleggioClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoleggioClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
