import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../../ui/shared/shared.module';
import { AuthEffects } from '../user/state/user.effect';
import { reducer } from '../user/state/user.reducer';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
  ],
  exports: [
  ]
})
export class AuthModule { }
