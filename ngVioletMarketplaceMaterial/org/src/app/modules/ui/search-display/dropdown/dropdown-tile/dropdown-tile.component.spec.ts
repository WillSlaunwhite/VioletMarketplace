import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownTileComponent } from './dropdown-tile.component';

describe('DropdownTileComponent', () => {
  let component: DropdownTileComponent;
  let fixture: ComponentFixture<DropdownTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
