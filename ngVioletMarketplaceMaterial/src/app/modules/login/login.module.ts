import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SocialMediaContainerComponent } from './components/social-media-container/social-media-container.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { UserModule } from '../user/user.module';



@NgModule({
  declarations: [
    LoginComponent,
    SocialMediaContainerComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    UserModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
