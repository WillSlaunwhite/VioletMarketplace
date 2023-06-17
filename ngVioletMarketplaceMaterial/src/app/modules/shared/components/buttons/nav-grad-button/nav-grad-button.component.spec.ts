import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGradButtonComponent } from './nav-grad-button.component';

describe('NavGradButtonComponent', () => {
  let component: NavGradButtonComponent;
  let fixture: ComponentFixture<NavGradButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavGradButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavGradButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
