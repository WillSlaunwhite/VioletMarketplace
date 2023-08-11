import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SharedModule } from '../shared/shared.module';
import { CreateTokenComponent } from './components/create-token/create-token.component';
import { TokenEffects } from './state/tokens.effects';
import { reducer } from './state/tokens.reducer';
import { TokenRoutingModule } from './token-routing.module';

@NgModule({
  declarations: [
    CreateTokenComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TokenRoutingModule,
    StoreModule.forFeature('token', reducer),
    EffectsModule.forFeature([TokenEffects])
  ],
  exports: [
    CreateTokenComponent,
  ]
})
export class TokenModule { }
