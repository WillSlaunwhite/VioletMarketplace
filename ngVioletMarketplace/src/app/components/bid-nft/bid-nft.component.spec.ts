import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidNFTComponent } from './bid-nft.component';

describe('BidNFTComponent', () => {
  let component: BidNFTComponent;
  let fixture: ComponentFixture<BidNFTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidNFTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidNFTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
