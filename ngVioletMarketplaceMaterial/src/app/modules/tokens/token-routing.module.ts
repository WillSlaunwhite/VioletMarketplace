import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenListComponent } from '../ui/tokens/small-token/token-list/token-list.component';

const routes: Routes = [
  {
    path: 'tokens-list',
    component: TokenListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TokenRoutingModule { }
