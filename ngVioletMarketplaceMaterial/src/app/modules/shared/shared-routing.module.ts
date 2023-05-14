import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/components/home/home.component';
import { slideInAnimation } from 'src/app/animations/animations';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animations: [slideInAnimation] },
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animations: [slideInAnimation] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
