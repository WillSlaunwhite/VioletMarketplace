import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TokenComponent } from './components/token/token.component';
import { CreateTokenComponent } from './components/create-token/create-token.component';
import { TokenCardButtonComponent } from './components/token-card-button/token-card-button.component';
import { TokenCardComponent } from './components/token-card/token-card.component';
import { TokenRoutingModule } from './token-routing.module';
import { MaterialModule } from '../material/material.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/tokens.reducer';

@NgModule({
  declarations: [
    TokenComponent,
    CreateTokenComponent,
    TokenCardComponent,
    TokenCardButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    TokenRoutingModule,
    MaterialModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('token', reducer)
  ],
  exports: [
    TokenComponent,
    CreateTokenComponent,
    TokenCardComponent,
    TokenCardButtonComponent
  ]
})
export class TokenModule { }
