import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { slideInTop } from 'src/app/animations/animations';
import { AppComponent } from 'src/app/app.component';
import Token from 'src/app/models/token';
import { TokenService } from 'src/app/modules/tokens/services/token.service';
import { loadTokens } from 'src/app/modules/tokens/state/tokens.actions';
import { getAllTokens } from 'src/app/modules/tokens/state/tokens.selectors';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MatDialog } from '@angular/material/dialog';
import { AltRegisterComponent } from 'src/app/modules/register/components/alt-register/alt-register.component';
import { RegisterComponent } from 'src/app/modules/register/components/register/register.component';

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
