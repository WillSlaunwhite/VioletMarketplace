import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenComponent } from './components/token/token.component';

const routes: Routes = [
  {
    path: 'token',
    component: TokenComponent,
  },
  {
    path: 'token/id/:id',
    component: TokenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TokenRoutingModule { }
