import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './components/user-page/user-page.component';
import { TokenListComponent } from '../tokens/components/token-list/token-list.component';

const routes: Routes = [
  {
    path: 'user/:username',
    component: UserPageComponent,
  },
  {
    path: 'tokens-list',
    component: TokenListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
