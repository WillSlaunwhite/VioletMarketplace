import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from '@angular/cdk/layout';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../../ui/material/material.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../user/state/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../user/state/user.effect';


@NgModule({
  declarations: [
  ],
  imports: [
    MaterialModule,
    CommonModule,
    LayoutModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    AuthRoutingModule,
    FormsModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  exports: [
  ]
})
export class AuthModule { }
