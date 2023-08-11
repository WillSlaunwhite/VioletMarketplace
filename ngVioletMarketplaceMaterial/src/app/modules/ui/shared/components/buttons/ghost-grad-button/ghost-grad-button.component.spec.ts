import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostGradButtonComponent } from './ghost-grad-button.component';

describe('GhostGradButtonComponent', () => {
  let component: GhostGradButtonComponent;
  let fixture: ComponentFixture<GhostGradButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostGradButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostGradButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
