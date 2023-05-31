import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigTokenCardButtonComponent } from './big-token-card-button.component';

describe('BigTokenCardButtonComponent', () => {
  let component: BigTokenCardButtonComponent;
  let fixture: ComponentFixture<BigTokenCardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigTokenCardButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigTokenCardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
