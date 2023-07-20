import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedRoutingModule } from './modules/shared/shared-routing.module';
import { UserRoutingModule } from './modules/user/user-routing.module';
import { HomeRoutingModule } from './modules/home/home-routing.module';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';
import { TokenRoutingModule } from './modules/tokens/token-routing.module';
import { SearchRoutingModule } from './modules/search/search-routing.module';

const routes: Routes = [
  { path: 'results', loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule) },
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    // AuthRoutingModule,
    // HomeRoutingModule,
    // SharedRoutingModule,
    // TokenRoutingModule,
    // UserRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
