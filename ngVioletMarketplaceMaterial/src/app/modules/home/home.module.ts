import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TokenModule } from '../tokens/token.module';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';
import { RegisterModule } from '../register/register.module';
import { LoginModule } from '../login/login.module';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TokenModule,
    SharedModule,
    UserModule,
    RegisterModule,
    LoginModule,
    SearchModule,
  ]
})
export class HomeModule { }
