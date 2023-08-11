import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { slideInTop } from 'src/app/animations/animations';
import { AppComponent } from 'src/app/app.component';
import Token from 'src/app/models/token';
import { RegisterComponent } from 'src/app/modules/features/register/views/register/register.component';
import { TokenService } from 'src/app/modules/features/tokens/services/token.service';
import { getAllTokens } from 'src/app/modules/features/tokens/state/tokens.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideInTop],
})
export class HomeComponent implements OnInit {
  tokens: Token[] = [];
  tokens$: Observable<Token[] | null> = of(null);
  token: Token | null = new Token();
  descriptionShowing: boolean = false;
  // animationData: string;

  constructor(
    private tokenSvc: TokenService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private appComponent: AppComponent,
    private store: Store,
    private dialog: MatDialog
  ) {
    // this.animationData = this.getRouteAnimationData();
  }

  ngOnInit(): void {
    this.tokens$ = this.store.select(getAllTokens);
  }

  getTokens(): void {
    this.tokenSvc.index().subscribe({
      next: (tokenList) => {
        this.tokens = tokenList;
      },
      error: (failed) => {
        console.error('homeComponent.getTokens(): Error getting Token List');
        console.log(failed);
      },
    });
  }


  openRegisterDialog(): void {
    this.dialog.open(RegisterComponent, {
      data: {
        optionalFieldsStrings: ['display name', 'biography', 'profile picture', 'wallet url'],
        selectedTabIndex: 0
      }
    });
  }

  getRouteAnimationData() {
    const routeData = this.router.getCurrentNavigation()?.extractedUrl;
    const animationData = routeData ? routeData.toString() : '';
    return animationData;
  }

  // onAnimationEnd(event: AnimationEvent) {
  //   if (event.animationName === 'fade') {
  //     // Animation with name 'fade' has ended, add 'myClass' class to myElement
  //     this.sidenav.nativeElement.classList.add('fill-forward');
  //   }
  // }

  // ngAfterViewInit() {
  //   console.log('in after view');

  //   // Add event listener for animationend event
  //   this.sidenav.nativeElement.addEventListener(
  //     'animationend',
  //     this.onAnimationEnd.bind(this)
  //   );
  // }
}
