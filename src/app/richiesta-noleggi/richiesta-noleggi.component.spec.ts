import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichiestaNoleggiComponent } from './richiesta-noleggi.component';

describe('RichiestaNoleggiComponent', () => {
  let component: RichiestaNoleggiComponent;
  let fixture: ComponentFixture<RichiestaNoleggiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RichiestaNoleggiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RichiestaNoleggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
