import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TokenModule } from '../tokens/token.module';
import { SharedModule } from '../shared/shared.module';
import { DoubleGradButtonComponent } from '../shared/components/double-grad-button/double-grad-button.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TokenModule,
    SharedModule,
  ]
})
export class HomeModule { }
