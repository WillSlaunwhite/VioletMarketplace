import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenComponent } from './components/token-detail/token.component';
import { TokenListComponent } from './components/small-token/token-list/token-list.component';

const routes: Routes = [
  {
    path: 'token',
    component: TokenComponent,
  },
  {
    path: 'token/id/:id',
    component: TokenComponent,
  }, {
    path: 'tokens-list',
    component: TokenListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TokenRoutingModule { }
