import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  ChildrenOutletContexts,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('starfield') starfield!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    const canvas = this.starfield.nativeElement;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;
    // Function to draw a star
    function drawStar(x: any, y: any, brightness: any) {
      ctx!.fillStyle = `rgba(255, 255, 255, ${brightness})`;
      ctx!.fillRect(x, y, 1, 1);
    }

    // Function to generate a random number
    function random(max: any) {
      return Math.floor(Math.random() * max);
    }

    // Draw 200 stars
    for (let i = 0; i < 750; i++) {
      drawStar(random(canvas.width), random(canvas.height), Math.random());
    }
  }

  title = 'ngVioletMarketplaceMaterial';
  animationData: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const animationData = this.getRouteAnimationData(this.router);
        this.animationData = animationData;
      });
  }

  getRouteAnimationData(router: Router) {
    const routeData = router.getCurrentNavigation()?.extractedUrl;
    const animationData = routeData ? routeData.toString() : '';

    return animationData;
  }
}
