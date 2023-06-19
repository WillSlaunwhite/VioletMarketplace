import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredFormComponent } from './required-form.component';

describe('RequiredFormComponent', () => {
  let component: RequiredFormComponent;
  let fixture: ComponentFixture<RequiredFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequiredFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
