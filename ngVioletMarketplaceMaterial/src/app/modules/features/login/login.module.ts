import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SocialMediaContainerComponent } from './components/social-media-container/social-media-container.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../ui/shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    SocialMediaContainerComponent,
    LoginFormComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
