import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrattoClienteComponent } from './contratto-cliente.component';

describe('ContrattoClienteComponent', () => {
  let component: ContrattoClienteComponent;
  let fixture: ComponentFixture<ContrattoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContrattoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContrattoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
