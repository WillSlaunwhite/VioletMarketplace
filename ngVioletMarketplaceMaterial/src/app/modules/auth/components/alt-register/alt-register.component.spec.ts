import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltRegisterComponent } from './alt-register.component';

describe('AltRegisterComponent', () => {
  let component: AltRegisterComponent;
  let fixture: ComponentFixture<AltRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
