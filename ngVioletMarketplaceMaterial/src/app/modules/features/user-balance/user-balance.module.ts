import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceDisplayComponent } from './components/balance-display/balance-display.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { UserBalanceEffects } from './state/user-balance.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../../user/state/user.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BalanceDisplayComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('user-balance', reducer),
    EffectsModule.forFeature([UserBalanceEffects])
  ],
  exports: [
    BalanceDisplayComponent
  ]
})
export class UserBalanceModule { }
