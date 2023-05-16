import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { ProfileManagementComponent } from './components/profile-management/profile-management.component';
import { RegisterComponent } from './components/register/register.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { MaterialModule } from '../material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    ProfileManagementComponent,
    RegisterComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    MaterialModule,
    AngularSvgIconModule.forRoot(),
    AngularSvgIconPreloaderModule.forRoot({
      configUrl: './assets/json/icons.json',
    }),
    FontAwesomeModule,
    UserRoutingModule
  ],
  exports: [
    ProfileManagementComponent,
    UserPageComponent
  ]
})
export class UserModule { }
