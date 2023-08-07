import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter, of, switchMap, take, tap } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { selectCurrentUserId } from 'src/app/modules/user/state/user.selectors';
import { getBalances } from '../../state/user-balance.actions';
import { selectAllBalances } from '../../state/user-balance.selectors';
import { UserCurrencyBalance } from '../../user-balance.models';

@Component({
  selector: 'app-balance-display',
  templateUrl: './balance-display.component.html',
  styleUrls: ['./balance-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BalanceDisplayComponent implements OnInit {
  userId$: Observable<number | null> = of(null);
  balances$: Observable<UserCurrencyBalance[] | null> = of(null);

  constructor(private store: Store, private auth: AuthService) {
    this.userId$ = this.store.select(selectCurrentUserId);
    this.balances$ = this.store.select(selectAllBalances);

    // Dispatch getBalances action if balances are not already loaded
    this.userId$.pipe(
      take(1),
      filter(userId => userId !== null),
      switchMap(userId => {
        return this.balances$.pipe(
          take(1),
          tap(balances => {
            if (balances === null && userId) {
              this.store.dispatch(getBalances({ userId }));
            }
          })
        );
      })
    ).subscribe();
  }


  ngOnInit(): void {
    this.balances$.subscribe(balances => console.log(balances))
  }

}
