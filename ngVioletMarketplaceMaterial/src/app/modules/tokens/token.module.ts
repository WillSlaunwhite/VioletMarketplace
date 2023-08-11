import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TokenComponent } from './components/token-detail/token.component';
import { CreateTokenComponent } from './components/create-token/create-token.component';
import { TokenCardButtonComponent } from './components/small-token/token-card-button/token-card-button.component';
import { TokenCardComponent } from './components/small-token/token-card/token-card.component';
import { TokenRoutingModule } from './token-routing.module';
import { MaterialModule } from '../material/material.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/tokens.reducer';
import { TokenListComponent } from './components/small-token/token-list/token-list.component';
import { EffectsModule } from '@ngrx/effects';
import { TokenEffects } from './state/tokens.effects';
import { BigTokenListComponent } from './components/big-token/big-token-list/big-token-list.component';
import { BigTokenCardComponent } from './components/big-token/big-token-card/big-token-card.component';
import { BigTokenCardButtonComponent } from './components/big-token/big-token-card-button/big-token-card-button.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TokenComponent,
    CreateTokenComponent,
    TokenCardComponent,
    TokenCardButtonComponent,
    TokenListComponent,
    BigTokenListComponent,
    BigTokenCardComponent,
    BigTokenCardButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    SharedModule,
    TokenRoutingModule,
    StoreModule.forFeature('token', reducer),
    EffectsModule.forFeature([TokenEffects])
  ],
  exports: [
    TokenComponent,
    CreateTokenComponent,
    TokenCardComponent,
    TokenCardButtonComponent,
    TokenListComponent,
    BigTokenListComponent
  ]
})
export class TokenModule { }
