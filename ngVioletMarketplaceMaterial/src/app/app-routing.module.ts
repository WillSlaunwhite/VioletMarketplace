import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './modules/shared/components/about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
