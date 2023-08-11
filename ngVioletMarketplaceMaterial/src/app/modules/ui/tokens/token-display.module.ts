import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenCardComponent } from './small-token/token-card/token-card.component';
import { TokenCardButtonComponent } from './small-token/token-card-button/token-card-button.component';
import { TokenListComponent } from './small-token/token-list/token-list.component';
import { BigTokenCardButtonComponent } from './big-token/big-token-card-button/big-token-card-button.component';
import { BigTokenCardComponent } from './big-token/big-token-card/big-token-card.component';
import { BigTokenListComponent } from './big-token/big-token-list/big-token-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TokenCardComponent,
    TokenCardButtonComponent,
    TokenListComponent,
    BigTokenListComponent,
    BigTokenCardComponent,
    BigTokenCardButtonComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    TokenListComponent,
    BigTokenListComponent,
    TokenCardComponent,
    BigTokenCardComponent,
  ]
})
export class TokenDisplayModule { }
