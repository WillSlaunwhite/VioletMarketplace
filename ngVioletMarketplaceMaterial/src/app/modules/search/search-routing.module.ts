import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './components/results/results.component';
import { SearchResultsResolver } from './search-results.resolver';

const routes: Routes = [
  {
    path: '',
    component: ResultsComponent,
    resolve: { searchResults: SearchResultsResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
