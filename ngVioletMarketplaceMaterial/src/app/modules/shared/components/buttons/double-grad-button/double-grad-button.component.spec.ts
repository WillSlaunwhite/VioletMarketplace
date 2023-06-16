import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleGradButtonComponent } from './double-grad-button.component';

describe('DoubleGradButtonComponent', () => {
  let component: DoubleGradButtonComponent;
  let fixture: ComponentFixture<DoubleGradButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleGradButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleGradButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
