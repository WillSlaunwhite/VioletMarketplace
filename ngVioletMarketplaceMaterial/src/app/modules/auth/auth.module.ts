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

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    LayoutModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    FontAwesomeModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
  ]
})
export class AuthModule { }
