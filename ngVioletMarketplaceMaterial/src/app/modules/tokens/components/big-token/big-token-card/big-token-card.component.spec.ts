import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigTokenCardComponent } from './big-token-card.component';

describe('BigTokenCardComponent', () => {
  let component: BigTokenCardComponent;
  let fixture: ComponentFixture<BigTokenCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigTokenCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigTokenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
