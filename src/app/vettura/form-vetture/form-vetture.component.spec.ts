import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVettureComponent } from './form-vetture.component';

describe('FormVettureComponent', () => {
  let component: FormVettureComponent;
  let fixture: ComponentFixture<FormVettureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVettureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVettureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
