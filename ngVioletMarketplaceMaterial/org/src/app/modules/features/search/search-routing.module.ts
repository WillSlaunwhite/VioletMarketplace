import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsResolver } from './search-results.resolver';
import { ResultsComponent } from '../../ui/search-display/results/results.component';

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
