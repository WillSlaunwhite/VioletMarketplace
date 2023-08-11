import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import Token from 'src/app/models/token';
import { AuthService } from 'src/app/modules/features/auth/services/auth.service';

@Component({
  selector: 'app-big-token-list',
  templateUrl: './big-token-list.component.html',
  styleUrls: ['./big-token-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigTokenListComponent implements OnInit {
  @Input()
  tokens$: Observable<Token[] | null> = of(null);

  tokensLoaded: boolean = false;
  velocity: any;

  constructor(private store: Store, private auth: AuthService) { }

  ngOnInit(): void {
  }

  mouseleaveScroll(): void {
    this.velocity *= .45; // rapid deceleration factor
  }

  scrollFarLeft(tokensContainer: HTMLElement): void {
    tokensContainer.scrollLeft -= 50; // adjust this value as needed
  }

  scrollFarRight(tokensContainer: HTMLElement): void {
    tokensContainer.scrollLeft += 50; // adjust this value as needed
  }

}
