import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './components/user-page/user-page.component';
import { TokenListComponent } from '../tokens/components/token-list/token-list.component';
import { LoginComponent } from './components/login/login.component';
import { AltRegisterComponent } from './components/alt-register/alt-register.component';
const routes: Routes = [
  {
    path: 'user/:username',
    component: UserPageComponent,
  },
  {
    path: 'tokens-list',
    component: TokenListComponent,
  },
  {
    path: 'register',
    component: AltRegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
