import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NFTInfoComponent } from './nft-info.component';

describe('NFTInfoComponent', () => {
  let component: NFTInfoComponent;
  let fixture: ComponentFixture<NFTInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NFTInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NFTInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
