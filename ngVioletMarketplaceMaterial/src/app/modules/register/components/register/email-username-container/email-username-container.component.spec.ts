import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailUsernameContainerComponent } from './email-username-container.component';

describe('EmailUsernameContainerComponent', () => {
  let component: EmailUsernameContainerComponent;
  let fixture: ComponentFixture<EmailUsernameContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailUsernameContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailUsernameContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
