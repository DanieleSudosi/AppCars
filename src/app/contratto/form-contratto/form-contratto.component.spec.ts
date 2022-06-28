import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContrattoComponent } from './form-contratto.component';

describe('FormContrattoComponent', () => {
  let component: FormContrattoComponent;
  let fixture: ComponentFixture<FormContrattoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContrattoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContrattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
