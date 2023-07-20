import { ComponentFixture, TestBed } from '@angular/core/testing';

import BigUserCardComponent from './big-user-card.component';

describe('BigUserCardComponent', () => {
  let component: BigUserCardComponent;
  let fixture: ComponentFixture<BigUserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BigUserCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
