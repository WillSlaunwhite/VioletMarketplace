import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import Token from 'src/app/models/token';
import User from 'src/app/models/user';
import { selectTokens, selectUsers } from '../../state/search.selectors';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, AfterViewInit {
  users$: Observable<User[] | []> = of([]);
  tokens$: Observable<Token[] | []> = of([]);

  constructor(private store: Store) {
  }

  // * need to fix logic for loading results
  ngOnInit(): void {
    this.tokens$ = this.store.select(selectTokens);
    this.tokens$.subscribe(tokens => console.log('Tokens in ResultsComponent:', tokens));
    this.users$ = this.store.select(selectUsers);
  }

  ngAfterViewInit(): void {
    this.users$.subscribe(results => console.log(results));
    this.tokens$.subscribe(results => console.log(results));
  }

}
