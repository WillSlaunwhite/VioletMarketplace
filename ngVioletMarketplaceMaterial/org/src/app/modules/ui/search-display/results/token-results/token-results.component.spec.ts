import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenResultsComponent } from './token-results.component';

describe('TokenResultsComponent', () => {
  let component: TokenResultsComponent;
  let fixture: ComponentFixture<TokenResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
