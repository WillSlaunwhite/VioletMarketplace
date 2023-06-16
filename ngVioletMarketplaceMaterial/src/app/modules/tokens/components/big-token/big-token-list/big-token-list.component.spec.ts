import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigTokenListComponent } from './big-token-list.component';

describe('BigTokenListComponent', () => {
  let component: BigTokenListComponent;
  let fixture: ComponentFixture<BigTokenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigTokenListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigTokenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
