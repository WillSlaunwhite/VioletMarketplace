import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { slideInTop } from 'src/app/animations/animations';
import { AppComponent } from 'src/app/app.component';
import Token from 'src/app/models/token';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { TokenService } from 'src/app/modules/tokens/services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideInTop],
})
export class HomeComponent implements OnInit {
  tokens: Token[] = [];
  token: Token | null = new Token();
  descriptionShowing: boolean = false;
  constructor(
    private tokenSvc: TokenService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private appComponent: AppComponent
  ) {
    this.animationData = this.getRouteAnimationData();
  }
  animationData: string;

  @ViewChild('sidenav', { static: true })
  sidenav!: ElementRef;

  ngOnInit(): void {
    this.getTokens();
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
