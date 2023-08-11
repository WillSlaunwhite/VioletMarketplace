import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TokenModule } from '../tokens/token.module';
import { SharedModule } from '../shared/shared.module';
import { SearchModule } from '../search/search.module';
import { UserBalanceModule } from '../features/user-balance/user-balance.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TokenModule,
    SharedModule,
    UserBalanceModule,
    SearchModule
  ]
})
export class HomeModule { }
