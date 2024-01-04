import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../../ui/shared/shared.module';
import { UserBalanceModule } from '../../features/user-balance/user-balance.module';
import { TokenDisplayModule } from '../../ui/tokens/token-display.module';
import { SearchDisplayModule } from '../../ui/search-display/search-display.module';
import { SearchFeatureModule } from '../../features/search/search-feature.module';
import { NavigationModule } from '../../ui/navigation/navigation.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TokenDisplayModule,
    SharedModule,
    UserBalanceModule,
    SearchDisplayModule,
    SearchFeatureModule,
    NavigationModule,
  ],
})
export class HomeModule { }
