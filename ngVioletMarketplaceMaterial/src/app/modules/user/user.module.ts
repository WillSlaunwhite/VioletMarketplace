import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileManagementComponent } from './components/profile-management/profile-management.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { MaterialModule } from '../material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { UserRoutingModule } from './user-routing.module';
import { TokenModule } from '../tokens/token.module';
import { SharedModule } from '../shared/shared.module';
import { AltRegisterComponent } from './register/alt-register/alt-register.component';
import { LoginComponent } from './components/login/login.component';
import { InfoContainerComponent } from './register/info-container/info-container.component';
import { RegisterTabComponent } from './register/register-tab/register-tab.component';

@NgModule({
  declarations: [
    ProfileManagementComponent,
    UserPageComponent,
    AltRegisterComponent,
    LoginComponent,
    InfoContainerComponent,
    RegisterTabComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    MaterialModule,
    FontAwesomeModule,
    UserRoutingModule,
    TokenModule,
    SharedModule,
  ],
  exports: [
    ProfileManagementComponent,
    UserPageComponent,
    AltRegisterComponent,
    RegisterTabComponent
  ]
})
export class UserModule { }
