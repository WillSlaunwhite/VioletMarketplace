import {
  AnimationTriggerMetadata,
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import Token from 'src/app/models/token';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tokens: Token[] = [];
  token: Token | null = new Token();
  descriptionShowing: boolean = false;
  move = false;
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
        this.tokens.forEach((token) => {
          if (token.name === 'Pulp Fiction') {
            this.token = token;
          }
        });
      },
      error: (failed) => {
        console.error('homeComponent.getTokens(): Error getting Token List');
        console.log(failed);
      },
    });
  }

  toggleMove() {
    this.move = !this.move;
  }

  get stateName() {
    return this.move ? 'move' : 'stay';
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
