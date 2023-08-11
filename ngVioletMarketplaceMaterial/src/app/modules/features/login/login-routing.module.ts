import { NgModule } from "@angular/core";
import { LoginComponent } from "./views/login/login.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }