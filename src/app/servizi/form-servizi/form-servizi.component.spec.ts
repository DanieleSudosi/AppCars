import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormServiziComponent } from './form-servizi.component';

describe('FormServiziComponent', () => {
  let component: FormServiziComponent;
  let fixture: ComponentFixture<FormServiziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormServiziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormServiziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
