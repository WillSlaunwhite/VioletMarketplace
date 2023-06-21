import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTabContainerComponent } from './register-tab-container.component';

describe('RegisterTabContainerComponent', () => {
  let component: RegisterTabContainerComponent;
  let fixture: ComponentFixture<RegisterTabContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTabContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
