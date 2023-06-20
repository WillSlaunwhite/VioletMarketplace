import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalFieldsContainerComponent } from './optional-fields-container.component';

describe('OptionalFieldsContainerComponent', () => {
  let component: OptionalFieldsContainerComponent;
  let fixture: ComponentFixture<OptionalFieldsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionalFieldsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalFieldsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
