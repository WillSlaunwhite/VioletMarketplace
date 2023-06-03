import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from '@angular/cdk/layout';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth.effect';
import { AltRegisterComponent } from './components/alt-register/alt-register.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AltRegisterComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    LayoutModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    FontAwesomeModule,
    AuthRoutingModule,
    FormsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    AltRegisterComponent
  ]
})
export class AuthModule { }
