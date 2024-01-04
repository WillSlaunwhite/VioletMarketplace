import { NgModule } from '@angular/core';
import { SharedModule } from '../../ui/shared/shared.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './views/login/login.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from '../user/state/user.effect';
import { reducer } from '../user/state/user.reducer';



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
