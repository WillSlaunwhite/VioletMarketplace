import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { userBalanceReducer } from './state/user-balance.reducer';
import { BalanceDisplayComponent } from './components/balance-display/balance-display.component';
import { UserBalanceEffects } from './state/user-balance.effects';



@NgModule({
  declarations: [
    BalanceDisplayComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('user-balance', userBalanceReducer),
    EffectsModule.forFeature([UserBalanceEffects])
  ],
  exports: [
    BalanceDisplayComponent
  ]
})
export class UserBalanceModule { }
