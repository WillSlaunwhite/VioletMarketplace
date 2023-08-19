import { NgModule } from '@angular/core';
import { SearchFeatureModule } from '../../features/search/search-feature.module';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NewNavComponent } from './new-nav/new-nav.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidenavComponent,
    NewNavComponent,
  ],
  imports: [
    SharedModule,
    SearchFeatureModule,
  ],
  exports: [
    NavbarComponent,
    NewNavComponent,
    SidenavComponent,
  ]
})
export class NavigationModule { }
