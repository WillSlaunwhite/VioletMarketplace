import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './components/user-page/user-page.component';
import { LoginComponent } from './components/login/login.component';
import { AltRegisterComponent } from '../register/components/alt-register/alt-register.component';

const routes: Routes = [
  {
    path: 'user/:username',
    component: UserPageComponent,
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
