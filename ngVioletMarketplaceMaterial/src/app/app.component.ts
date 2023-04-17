import { Component } from '@angular/core';
import {
  ChildrenOutletContexts,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs';
import { slideInAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'ngVioletMarketplaceMaterial';
  animationData: string = '';

  constructor(private router: Router) {}

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
