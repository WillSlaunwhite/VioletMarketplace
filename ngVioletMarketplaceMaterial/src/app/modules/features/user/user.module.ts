import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileManagementComponent } from './components/profile-management/profile-management.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UserRoutingModule } from './user-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { TokenModule } from '../../tokens/token.module';
import BigUserCardComponent from '../../ui/user/big-user-display/big-user-card/big-user-card.component';
import { UserEffects } from '../register/state/register.effects';
import { UserBalanceModule } from '../user-balance/user-balance.module';
import { UserPageComponent } from './components/user-page/user-page.component';
import { BigUserListComponent } from '../../ui/user/big-user-display/big-user-list/big-user-list.component';

@NgModule({
  declarations: [
    ProfileManagementComponent,
    UserPageComponent,
    BigUserCardComponent,
    BigUserListComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
    UserRoutingModule,
    TokenModule,
    SharedModule,
    UserBalanceModule,
    EffectsModule.forRoot([UserEffects]),
  ],
  exports: [
    ProfileManagementComponent,
    UserPageComponent,
    BigUserListComponent,
  ]
})
export class UserModule { }
