import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenCardButtonComponent } from './token-card-button.component';

describe('TokenCardButtonComponent', () => {
  let component: TokenCardButtonComponent;
  let fixture: ComponentFixture<TokenCardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenCardButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenCardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
