import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNoleggiatoreComponent } from './navbar-noleggiatore.component';

describe('NavbarNoleggiattoreComponent', () => {
  let component: NavbarNoleggiatoreComponent;
  let fixture: ComponentFixture<NavbarNoleggiatoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarNoleggiatoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarNoleggiatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
