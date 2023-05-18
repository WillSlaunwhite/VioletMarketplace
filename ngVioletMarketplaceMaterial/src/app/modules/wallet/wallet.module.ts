import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletSummaryComponent } from './wallet-summary/wallet-summary.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';



@NgModule({
  declarations: [
    WalletSummaryComponent,
    TransactionHistoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WalletModule { }
