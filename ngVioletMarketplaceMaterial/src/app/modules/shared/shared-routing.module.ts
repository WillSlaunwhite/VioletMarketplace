import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/components/home/home.component';
import { slideInAnimation } from 'src/app/animations/animations';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutUsComponent,
    data: { animations: [slideInAnimation] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
