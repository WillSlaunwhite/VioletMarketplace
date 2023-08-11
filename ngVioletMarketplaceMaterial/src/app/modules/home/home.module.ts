import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { SearchModule } from '../search/search.module';
import { UserBalanceModule } from '../features/user-balance/user-balance.module';
import { TokenDisplayModule } from '../ui/tokens/token-display.module';

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
    SearchModule
  ]
})
export class HomeModule { }
