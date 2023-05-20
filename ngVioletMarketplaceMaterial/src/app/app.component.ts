import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  Router,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { loadTokens, loadUserTokens } from './modules/tokens/state/tokens.actions';
import { AuthService } from './modules/auth/services/auth.service';
import { loginSuccess } from './modules/auth/state/auth.actions';
import { selectCurrentUser } from './modules/auth/state/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('starfield') starfield!: ElementRef<HTMLCanvasElement>;

  // * create background
  ngAfterViewInit() {
    const canvas = this.starfield.nativeElement;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;
    // Function to draw a star
    function drawStar(x: any, y: any, brightness: any) {
      ctx!.fillStyle = `rgba(255, 255, 255, ${brightness})`;
      if (Math.floor(Math.random() * 10) % 3 == 0) {
        ctx!.fillRect(x, y, 2, 2);
      }
      else {
        ctx!.fillRect(x, y, 1, 1);
      }
    }

    // Function to generate a random number
    function random(max: any) {
      return Math.floor(Math.random() * max);
    }

    // Draw 200 stars
    for (let i = 0; i < 1000; i++) {
      drawStar(random(canvas.width), random(canvas.height), Math.random());
    }
  }

  title = 'ngVioletMarketplaceMaterial';
  animationData: string = '';

  constructor(private router: Router, private store: Store, private authService: AuthService) { }

  ngOnInit() {
    // * check for valid jwt
    const jwt = this.authService.getValidJwt();
    if (jwt !== null) {
      const username = this.authService.getLoggedInUsername();
      if (username) {
        this.store.dispatch(loadUserTokens({ username }));
        // this.store.dispatch(loginSuccess({ user : selectCurrentUser}))
        // TODO Finish dispatching user in app.component
        // this.store.dispatch(loginSuccess({ user:
      }
    }
  }
}
