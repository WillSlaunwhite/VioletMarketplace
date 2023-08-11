import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SharedRoutingModule } from './modules/ui/shared/shared-routing.module';
import { HomeRoutingModule } from './modules/home/home-routing.module';
import { AuthRoutingModule } from './modules/features/auth/auth-routing.module';
import { TokenRoutingModule } from './modules/tokens/token-routing.module';
import { SearchRoutingModule } from './modules/search/search-routing.module';
import { LoginRoutingModule } from './modules/features/login/login-routing.module';

const routes: Routes = [
  { path: 'results', loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule) },
  { path: 'login', loadChildren: () => import('./modules/features/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./modules/features/register/register.module').then(m => m.RegisterModule) },
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules } ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
