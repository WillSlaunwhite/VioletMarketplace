import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import Token from 'src/app/models/token';

@Component({
  selector: 'app-token-results',
  templateUrl: './token-results.component.html',
  styleUrls: ['./token-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TokenResultsComponent implements OnInit {
  @Input()
  tokens$: Observable<Token[] | null> = of(null);

  constructor() { }

  ngOnInit(): void {
  }

}
