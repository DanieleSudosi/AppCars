import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoVetturaComponent } from './parco-vettura.component';

describe('ParcoVetturaComponent', () => {
  let component: ParcoVetturaComponent;
  let fixture: ComponentFixture<ParcoVetturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcoVetturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcoVetturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
