import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { slideInAnimation } from 'src/app/animations/animations';
import { AboutUsComponent } from '../about-us/about-us.component';

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
