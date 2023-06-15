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
import { AltRegisterComponent } from 'src/app/modules/user/register/alt-register/alt-register.component';

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

  // this seems to be working for the border but only with one layer + glass
  // and not the borders
  gradientConfigs = {
    redButtonConfig: {
      gradientLayers: [
        'linear-gradient(85.69deg, rgba(71, 29, 144, 0.3) 1.1%, rgba(14, 14, 69, 0.3) 71.94%)',
        'linear-gradient(93.31deg, #833AB4 0%, #FD1D1D 53.39%, #FCB045 94.05%)'
      ],
      borderGradient: 'linear-gradient(to right, #34D1C8 33.56%, #FD241D 78.08%)'
    },
    // ...other button configurations...
  };

  constructor(
    private tokenSvc: TokenService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private appComponent: AppComponent,
    private store: Store,
    private dialog: MatDialog
  ) {
    this.animationData = this.getRouteAnimationData();
  }
  animationData: string;

  @ViewChild('sidenav', { static: true })
  sidenav!: ElementRef;

  ngOnInit(): void {
    // this.store.dispatch(loadTokens());
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

  onAnimationEnd(event: AnimationEvent) {
    if (event.animationName === 'fade') {
      // Animation with name 'fade' has ended, add 'myClass' class to myElement
      this.sidenav.nativeElement.classList.add('fill-forward');
    }
  }

  openRegisterDialog(): void {
    this.dialog.open(AltRegisterComponent);
  }




  getRouteAnimationData() {
    const routeData = this.router.getCurrentNavigation()?.extractedUrl;
    const animationData = routeData ? routeData.toString() : '';
    return animationData;
  }

  // ngAfterViewInit() {
  //   console.log('in after view');

  //   // Add event listener for animationend event
  //   this.sidenav.nativeElement.addEventListener(
  //     'animationend',
  //     this.onAnimationEnd.bind(this)
  //   );
  // }
}
