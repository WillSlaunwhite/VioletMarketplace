import { NgModule } from '@angular/core';
import { SharedModule } from '../../ui/shared/shared.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './views/login/login.component';



@NgModule({
  declarations: [
    LoginComponent,
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
