import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiziOffertiComponent } from './servizi-offerti.component';

describe('ServiziOffertiComponent', () => {
  let component: ServiziOffertiComponent;
  let fixture: ComponentFixture<ServiziOffertiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiziOffertiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiziOffertiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
