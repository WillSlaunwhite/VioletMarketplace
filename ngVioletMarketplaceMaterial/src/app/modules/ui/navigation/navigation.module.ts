import { NgModule } from '@angular/core';
import { SearchFeatureModule } from '../../features/search/search-feature.module';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidenavComponent,
  ],
  imports: [
    SharedModule,
    SearchFeatureModule,
  ],
  exports: [
    NavbarComponent,
    SidenavComponent,
  ]
})
export class NavigationModule { }
