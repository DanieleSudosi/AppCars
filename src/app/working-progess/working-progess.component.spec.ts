import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingProgessComponent } from './working-progess.component';

describe('WorkingProgessComponent', () => {
  let component: WorkingProgessComponent;
  let fixture: ComponentFixture<WorkingProgessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingProgessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingProgessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
