import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenCreateFormComponent } from './token-create-form.component';

describe('TokenCreateFormComponent', () => {
  let component: TokenCreateFormComponent;
  let fixture: ComponentFixture<TokenCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
