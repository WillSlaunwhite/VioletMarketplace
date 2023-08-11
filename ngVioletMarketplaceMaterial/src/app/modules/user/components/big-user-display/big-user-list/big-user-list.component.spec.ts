import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigUserListComponent } from './big-user-list.component';

describe('BigUserListComponent', () => {
  let component: BigUserListComponent;
  let fixture: ComponentFixture<BigUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
